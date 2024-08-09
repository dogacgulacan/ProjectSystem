package com.company.projectsystem.service;

import com.company.projectsystem.entity.Employee;

public interface EmployeeService {
    /**
     * Проверяет сотрудника. Валидирует ФИО.
     *
     * @param employee сотрудник
     */
    void validateEmployee(Employee employee);
}
