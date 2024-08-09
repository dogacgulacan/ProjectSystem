package com.company.projectsystem.security;

import com.company.projectsystem.entity.Employee;
import com.company.projectsystem.entity.Project;
import com.company.projectsystem.entity.User;
import io.jmix.security.model.EntityAttributePolicyAction;
import io.jmix.security.model.EntityPolicyAction;
import io.jmix.security.role.annotation.EntityAttributePolicy;
import io.jmix.security.role.annotation.EntityPolicy;
import io.jmix.security.role.annotation.ResourceRole;
import io.jmix.securityflowui.role.annotation.MenuPolicy;
import io.jmix.securityflowui.role.annotation.ViewPolicy;

@ResourceRole(name = "ProjectManagerRole", code = ProjectManagerRole.CODE)
public interface ProjectManagerRole {
    String CODE = "project-manager-role";

    @EntityAttributePolicy(entityClass = User.class, attributes = {"firstName", "lastName"}, action = EntityAttributePolicyAction.MODIFY)
    @EntityAttributePolicy(entityClass = User.class, attributes = {"id", "version", "username", "password", "email", "active", "timeZoneId"}, action = EntityAttributePolicyAction.VIEW)
    @EntityPolicy(entityClass = User.class, actions = {EntityPolicyAction.READ, EntityPolicyAction.UPDATE})
    void user();

    @EntityAttributePolicy(entityClass = Project.class, attributes = "*", action = EntityAttributePolicyAction.MODIFY)
    @EntityPolicy(entityClass = Project.class, actions = EntityPolicyAction.ALL)
    void project();

    @MenuPolicy(menuIds = {"User.list", "Project.list", "Employee.list"})
    @ViewPolicy(viewIds = {"User.list", "Project.list", "Employee.list", "Project.detail", "Employee.detail", "User.detail"})
    void screens();

    @EntityAttributePolicy(entityClass = Employee.class, attributes = "*", action = EntityAttributePolicyAction.VIEW)
    @EntityPolicy(entityClass = Employee.class, actions = EntityPolicyAction.READ)
    void employee();
}