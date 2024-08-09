package com.company.projectsystem.listener;

import com.company.projectsystem.entity.Employee;
import com.company.projectsystem.entity.Project;
import com.company.projectsystem.service.ProjectService;
import com.company.projectsystem.service.NotificationService;
import io.jmix.core.DataManager;
import io.jmix.core.Id;
import io.jmix.core.event.EntitySavingEvent;
import io.jmix.core.event.EntityChangedEvent;
import io.jmix.core.event.EntityChangedEvent.Type;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import org.springframework.transaction.event.TransactionalEventListener;

import java.util.concurrent.atomic.AtomicBoolean;

@Component
@RequiredArgsConstructor
public class ProjectEventListener {

    private static final Logger log = LoggerFactory.getLogger(ProjectEventListener.class);

    @Autowired
    private ProjectService projectService;

    @Autowired
    private DataManager dataManager;

    private final AtomicBoolean processing = new AtomicBoolean(false);

    @EventListener
    public void onProjectSaving(EntitySavingEvent<Project> event) {
        if (processing.get()) {
            return;
        }

        processing.set(true);

        try {
            projectService.validateProject(event.getEntity());
        } finally {
            processing.set(false);
        }
    }

    @EventListener
    public void onProjectChangedBeforeCommit(EntityChangedEvent<Project> event) {
        if (processing.get()) {
            return;
        }

        processing.set(true);

        try {
            if (event.getType() == Type.DELETED) {
                return; // Silme olayında işlem yapma
            }

            // Veritabanından projeyi yükleyin
            Project project = dataManager.load(event.getEntityId()).one();

            // Employee sayısını güncelleyin
            projectService.updateEmployeeCount(project);
        } finally {
            processing.set(false);
        }
    }

    @TransactionalEventListener
    public void onProjectChangedAfterCommit(EntityChangedEvent<Project> event) {
        if (processing.get()) {
            return;
        }
        processing.set(true);

        try {
            if (event.getType() == Type.DELETED) {
                // Silme olayında işlem yapma (isteğe bağlı olarak)
                log.info("Project with ID {} has been deleted.", event.getEntityId());
                return;
            }
            Project project = dataManager.load(event.getEntityId()).one();

            // Proje değişiklikleri sonrası bazı işlemler yapmak
            projectService.performPostCommitActions(project);
        }catch (Exception e) {
            log.error("Error handling Project changes after commit", e);
        }

    }
}




