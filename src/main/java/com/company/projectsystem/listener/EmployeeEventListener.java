package com.company.projectsystem.listener;


import com.company.projectsystem.entity.Employee;
import com.company.projectsystem.entity.Project;
import com.company.projectsystem.service.EmployeeService;
import com.company.projectsystem.service.NotificationService;
import io.jmix.core.event.EntityChangedEvent;
import io.jmix.core.event.EntitySavingEvent;
import lombok.RequiredArgsConstructor;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class EmployeeEventListener {
    private final EmployeeService employeeService;


    @EventListener
    public void onEmployeeSaving(EntitySavingEvent<Employee> event) {
        if (event.isNewEntity()) {
            employeeService.validateEmployee(event.getEntity());
        }
    }

}