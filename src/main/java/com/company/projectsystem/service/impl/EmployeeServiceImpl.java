package com.company.projectsystem.service.impl;

import com.company.projectsystem.entity.Employee;
import com.company.projectsystem.exceptions.CustomException;
import com.company.projectsystem.service.EmployeeService;
import org.springframework.stereotype.Service;

import static com.company.projectsystem.constants.AppConstants.*;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Override
    public void validateEmployee(Employee employee) {
        if (employee.getFullName().isBlank()) {
            throw new CustomException(EMPTY_EMPLOYEE_FULLNAME_EXCEPTION_MESSAGE);
        }
        if (!employee.getFullName().matches("[а-яА-Яa-zA-Z\\s]+")) {
            throw new CustomException(UNCORRECT_EMPLOYEE_FULLNAME_EXCEPTION_MESSAGE);
        }
    }
}