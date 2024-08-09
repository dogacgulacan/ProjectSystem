package com.company.projectsystem.listener;
import com.company.projectsystem.entity.Project;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import jakarta.persistence.*;


public class ProjectLogListener {

    private static Log log = LogFactory.getLog(ProjectLogListener.class);

    // Project entity lifecycle methods
    @PrePersist
    @PreUpdate
    @PreRemove
    private void beforeAnyUpdate(Project project) {
        if (project.getId() == null) {
            log.info("[PROJECT AUDIT] Proje eklenmek üzere");
        } else {
            log.info("[PROJECT AUDIT] Proje güncellenmek/silinmek üzere: " + project.getId());
        }
    }

    @PostPersist
    @PostUpdate
    @PostRemove
    private void afterAnyUpdate(Project project) {
        log.info("[PROJECT AUDIT] Ekleme/güncelleme/silme işlemi tamamlandı: " + project.getId());
    }

    @PostLoad
    private void afterLoad(Project project) {
        log.info("[PROJECT AUDIT] Veritabanından proje yüklendi: " + project.getId());
    }


}