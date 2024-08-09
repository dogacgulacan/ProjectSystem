package com.company.projectsystem.project;
import com.company.projectsystem.entity.Project;

import com.company.projectsystem.entity.Employee;
import com.company.projectsystem.test_support.AuthenticatedAsAdmin;
import io.jmix.core.DataManager;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


@SpringBootTest
@ExtendWith(AuthenticatedAsAdmin.class)
public class ProjectTest {

    @Autowired
    DataManager dataManager;

    private Project project;

    @BeforeEach
    public void setUp() {
        project = new Project();
        project.setId(UUID.randomUUID());
        project.setName("Test Project");
        project.setDescription("This is a test project.");
    }

    @Test
    public void testGetId() {
        UUID id = UUID.randomUUID();
        project.setId(id);
        assertEquals(id, project.getId());
    }

    @Test
    public void testGetName() {
        project.setName("New Project Name");
        assertEquals("New Project Name", project.getName());
    }

    @Test
    public void testGetDescription() {
        project.setDescription("New Project Description");
        assertEquals("New Project Description", project.getDescription());
    }

    @Test
    public void testGetEmployeeCount() {
        assertEquals(0, project.getEmployeeCount());

        List<Employee> employees = new ArrayList<>();
        employees.add(new Employee()); //
        project.setEmployees(employees);

        assertEquals(1, project.getEmployeeCount());
    }

    @Test
    public void testAddAndRemoveEmployee() {
        Employee employee = new Employee();
        List<Employee> employees = new ArrayList<>();
        project.setEmployees(employees);

        project.getEmployees().add(employee);
        assertTrue(project.getEmployees().contains(employee));

        project.getEmployees().remove(employee);
        assertFalse(project.getEmployees().contains(employee));
    }

    @Test
    public void testToString() {
        assertEquals("Project{name='Test Project'}", project.toString());
    }
}