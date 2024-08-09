package com.company.projectsystem.entity;

import com.company.projectsystem.listener.EmployeeLogListener;
import com.company.projectsystem.service.NotificationService;
import io.jmix.core.entity.annotation.JmixGeneratedValue;
import io.jmix.core.entity.annotation.OnDelete;
import io.jmix.core.metamodel.annotation.InstanceName;
import io.jmix.core.metamodel.annotation.JmixEntity;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * Сущность сотрудника.
 */
@Getter
@Setter
@JmixEntity
@Entity(name = "Employee")
@Table(name = "employees")
@EntityListeners(EmployeeLogListener.class)
public class Employee {
    @JmixGeneratedValue
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @InstanceName
    @Column(nullable = false)
    private String fullName;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public void setProjects(List<Project> projects) {
        this.projects = projects;
    }

    @ManyToMany(mappedBy = "employees")
    private List<Project> projects = new ArrayList<>();

    @PostPersist
    public void afterInsert() {
        // Employee oluşturulduktan sonra yapılacak işlemler
        System.out.println("After inserting employee: " + this.fullName);
        // Bildirim gönderme işlemi
        NotificationService.sendEmployeeCreatedNotification(this.fullName);
    }

    @PostRemove
    public void afterDelete() {
        // Employee silindikten sonra yapılacak işlemler
        System.out.println("After deleting employee: " + this.fullName);
        // Bildirim gönderme işlemi
        NotificationService.sendEmployeeDeletedNotification(this.fullName);
    }
    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", fullName='" + fullName + '\'' +
                ", projects=" + projects +
                '}';
    }
}
