package com.company.projectsystem.config;

import com.company.projectsystem.view.project.ProjectDetailView;
import io.jmix.flowui.UiComponents;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ProjectConfig {

    @Bean
    public ProjectDetailView projectDetailView(UiComponents uiComponents) {
        return new ProjectDetailView(uiComponents);
    }
}
