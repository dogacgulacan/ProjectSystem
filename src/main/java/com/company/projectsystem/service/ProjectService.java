package com.company.projectsystem.service;

import com.company.projectsystem.entity.Project;


public interface ProjectService {
    /**
     * Валидирует проект: Проверяет на существование и корректность имени.
     *
     * @param project проект
     */
    void validateProject(Project project);
    void updateEmployeeCount(Project project);
    void performPostCommitActions(Project project);
}