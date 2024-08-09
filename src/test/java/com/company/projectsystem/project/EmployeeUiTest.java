package com.company.projectsystem.project;

import com.company.projectsystem.ProjectSystemApplication;
import com.company.projectsystem.entity.Employee;
import com.company.projectsystem.view.employee.EmployeeDetailView;
import com.company.projectsystem.view.employee.EmployeeListView;
import io.jmix.core.DataManager;
import io.jmix.flowui.ViewNavigators;
import io.jmix.flowui.component.grid.DataGrid;
import io.jmix.flowui.component.textfield.TypedTextField;
import io.jmix.flowui.data.grid.DataGridItems;
import io.jmix.flowui.kit.component.button.JmixButton;
import io.jmix.flowui.testassist.FlowuiTestAssistConfiguration;
import io.jmix.flowui.testassist.UiTest;
import io.jmix.flowui.testassist.UiTestUtils;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@UiTest
@SpringBootTest(classes = {ProjectSystemApplication.class, FlowuiTestAssistConfiguration.class})
public class EmployeeUiTest {

    @Autowired
    DataManager dataManager;

    @Autowired
    ViewNavigators viewNavigators;

    @Test
    void test_createEmployee(){
        viewNavigators.view(EmployeeListView.class).navigate();
        EmployeeListView employeeListView = UiTestUtils.getCurrentView();

        JmixButton createBtn = UiTestUtils.getComponent(employeeListView, "createBtn");
        createBtn.click();

        EmployeeDetailView employeeDetailView = UiTestUtils.getCurrentView();
        TypedTextField<String> fullNameField = UiTestUtils.getComponent(employeeDetailView, "fullNameField");
        String fullName = "Ali" ;
        fullNameField.setValue(fullName);

        // Click "OK"
        JmixButton commitAndCloseBtn = UiTestUtils.getComponent(employeeDetailView, "saveAndCloseBtn");
        commitAndCloseBtn.click();

        employeeListView = UiTestUtils.getCurrentView();
        DataGrid<Employee> employeesDataGrid =UiTestUtils.getComponent(employeeListView, "employeesDataGrid");
        DataGridItems<Employee> employeeDataGridItems = employeesDataGrid.getItems();
        Assertions.assertNotNull(employeeDataGridItems);

        employeeDataGridItems.getItems().stream()
                .filter(e -> e.getFullName().equals(fullName))
                .findFirst()
                .orElseThrow();
    }

    @AfterEach
    void tearDown() {
        dataManager.load(Employee.class)
                .query("e.fullName = ?1", "Test Employee")
                .list()
                .forEach(e -> dataManager.remove(e));
    }
}
