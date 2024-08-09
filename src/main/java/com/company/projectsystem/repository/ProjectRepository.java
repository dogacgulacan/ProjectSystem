package com.company.projectsystem.repository;

import com.company.projectsystem.entity.Project;
import io.jmix.core.repository.JmixDataRepository;


import java.util.UUID;


public interface ProjectRepository extends JmixDataRepository<Project, UUID> {

    boolean existsByNameIgnoreCaseAndIdNot(String strip, UUID id);
}
