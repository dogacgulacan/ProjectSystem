package com.company.projectsystem.view.project;

import com.company.projectsystem.entity.Employee;
import com.company.projectsystem.entity.Project;
import com.company.projectsystem.view.main.MainView;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.data.renderer.ComponentRenderer;
import com.vaadin.flow.data.renderer.Renderer;
import com.vaadin.flow.router.Route;
import io.jmix.flowui.UiComponents;
import io.jmix.flowui.view.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Route(value = "projects/:id", layout = MainView.class)
@ViewController("Project.detail")
@ViewDescriptor("project-detail-view.xml")
@EditedEntityContainer("projectDc")
@RequiredArgsConstructor
@Component
public class ProjectDetailView extends StandardDetailView<Project> {
    private final UiComponents uiComponents;

    @Supply(to = "employeesDataGrid.participates", subject = "renderer")
    public Renderer<Employee> employeesDataGridParticipatesRenderer() {
        return new ComponentRenderer<>(employee -> {
            Checkbox checkbox = uiComponents.create(Checkbox.class);
            checkbox.setValue(getEditedEntity().getEmployees().contains(employee));
            checkbox.addValueChangeListener(e -> {
                if (Boolean.TRUE.equals(e.getValue())) {
                    getEditedEntity().getEmployees().add(employee);
                } else {
                    getEditedEntity().getEmployees().remove(employee);
                }
            });
            return checkbox;
        });
    }
}
