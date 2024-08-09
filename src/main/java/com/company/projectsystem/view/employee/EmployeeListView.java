package com.company.projectsystem.view.employee;

import com.company.projectsystem.entity.Employee;

import com.company.projectsystem.view.main.MainView;

import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.data.renderer.ComponentRenderer;
import com.vaadin.flow.data.renderer.Renderer;
import com.vaadin.flow.router.Route;
import io.jmix.flowui.UiComponents;
import io.jmix.flowui.view.*;
import lombok.RequiredArgsConstructor;



@Route(value = "employees", layout = MainView.class)
@ViewController("Employee.list")
@ViewDescriptor("employee-list-view.xml")
@LookupComponent("employeesDataGrid")
@DialogMode(width = "64em")
public class EmployeeListView extends StandardListView<Employee> {

}