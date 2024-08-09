package com.company.projectsystem.entity;

import io.jmix.core.entity.annotation.JmixGeneratedValue;
import io.jmix.core.metamodel.annotation.InstanceName;
import io.jmix.core.metamodel.annotation.JmixEntity;
import io.jmix.core.metamodel.annotation.JmixProperty;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import com.company.projectsystem.service.NotificationService;
import com.company.projectsystem.listener.ProjectLogListener;

@Getter
@Setter
@JmixEntity
@Entity(name = "Project")
@Table(name = "projects")
@EntityListeners(ProjectLogListener.class)
public class Project {
    @JmixGeneratedValue
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @InstanceName
    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }

    @ManyToMany
    @JoinTable(name = "PROJECT_EMPLOYEE",
            joinColumns = @JoinColumn(name = "project_id"),
            inverseJoinColumns = @JoinColumn(name = "employee_id"))
    private List<Employee> employees = new ArrayList<>();

    @Transient
    private Integer employeeCount;

    @JmixProperty
    public Integer getEmployeeCount() {
        return employees != null ? employees.size() : 0;
    }
    public void setEmployeeCount(Integer employeeCount) {
        this.employeeCount = employeeCount;
    }

    @PostPersist
    public void afterInsert() {
        // Project oluşturulduktan sonra yapılacak işlemler
        System.out.println("After inserting project: " + this.name);
        // Bildirim gönderme işlemi
        NotificationService.sendProjectCreatedNotification(this.name);
    }

    @PostRemove
    public void afterDelete() {
        // Project silindikten sonra yapılacak işlemler
        System.out.println("After deleting project: " + this.name);
        // Bildirim gönderme işlemi
        NotificationService.sendProjectDeletedNotification(this.name);
    }

    @Override
    public String toString() {
        return "Project{" +
                "name='" + name + '\'' +
                '}';
    }
}