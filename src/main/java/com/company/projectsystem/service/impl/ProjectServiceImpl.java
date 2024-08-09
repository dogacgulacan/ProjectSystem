package com.company.projectsystem.service.impl;

import com.company.projectsystem.entity.Project;
import com.company.projectsystem.exceptions.CustomException;
import com.company.projectsystem.repository.ProjectRepository;
import com.company.projectsystem.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.company.projectsystem.service.NotificationService;

import static com.company.projectsystem.constants.AppConstants.*;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {
    @Autowired
    private final ProjectRepository projectRepository;

    @Override
    public void validateProject(Project project) {
        project.setName(project.getName().strip());
        if (project.getName().isBlank()) {
            throw new CustomException(EMPTY_PROJECT_NAME_EXCEPTION_MESSAGE);
        }
        if (projectRepository.existsByNameIgnoreCaseAndIdNot(project.getName().strip(), project.getId())) {
            throw new CustomException(String.format(PROJECT_ALREADY_EXISTS_EXCEPTION_MESSAGE, project.getName()));
        }
    }

    @Override
    public void updateEmployeeCount(Project project) {
        int employeeCount = project.getEmployees().size();
        project.setEmployeeCount(employeeCount);
        projectRepository.save(project);
    }
    @Override
    public void performPostCommitActions(Project project) {
        // Burada commit sonrası yapılacak işlemleri tanımlayın
        System.out.println("Post-commit actions for project: " + project.getName());
        // Örneğin, bir bildirim göndermek
        NotificationService.sendProjectUpdatedNotification(project.getName());
    }



}