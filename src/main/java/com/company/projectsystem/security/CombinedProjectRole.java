package com.company.projectsystem.security;

import io.jmix.security.role.annotation.ResourceRole;

@ResourceRole(name = "CombinedProjectRole", code = CombinedProjectRole.CODE)
public interface CombinedProjectRole extends ProjectManagerRole,UiMinimalRole {
    String CODE = "combined-project-role";
}