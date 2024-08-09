package com.company.projectsystem.listener;
import com.company.projectsystem.entity.Employee;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import jakarta.persistence.*;

public class EmployeeLogListener {
    private static Log log = LogFactory.getLog(EmployeeLogListener.class);

    // Employee entity lifecycle methods
    @PrePersist
    @PreUpdate
    @PreRemove
    private void beforeAnyUpdate(Employee employee){
        if(employee.getId()==null){
            log.info("[EMPLOYEE AUDIT] Employee eklenmek üzere");
        }else{
            log.info("[EMPLOYEE AUDIT] Employee güncellenmek/silinmek üzere: "+employee.getId());
        }
    }

    @PostPersist
    @PostUpdate
    @PostRemove
    private void afterAnyUpdate(Employee employee){
        log.info("[EMPLOYEE AUDIT] Ekleme/güncelleme/silme işlemi tamamlandı: "+employee.getId());
    }

    @PostLoad
    private void afterLoad(Employee employee){
        log.info("[EMPLOYEE AUDIT] Veritabanından employee yüklendi: "+employee.getId());
    }

}