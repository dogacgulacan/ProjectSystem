package com.company.projectsystem.view.project;

import com.company.projectsystem.entity.Project;

import com.company.projectsystem.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;

@Route(value = "projects", layout = MainView.class)
@ViewController("Project.list")
@ViewDescriptor("project-list-view.xml")
@LookupComponent("projectsDataGrid")
@DialogMode(width = "64em")
public class ProjectListView extends StandardListView<Project> {
}