package com.company.projectsystem.constants;

/**
 * App constants: exceptions...
 */
public final class AppConstants {
    public static final String EMPTY_EMPLOYEE_FULLNAME_EXCEPTION_MESSAGE = "Неверное ФИО сотрудника: не может быть пустым";
    public static final String UNCORRECT_EMPLOYEE_FULLNAME_EXCEPTION_MESSAGE = "Неверное ФИО сотрудника: должно состоять только из латиницы или кириллицы";
    public static final String EMPTY_PROJECT_NAME_EXCEPTION_MESSAGE = "Неверное название проекта: не может быть пустым";
    public static final String PROJECT_ALREADY_EXISTS_EXCEPTION_MESSAGE = "Проект с именем '%s' уже существует";

    private AppConstants() {
        throw new UnsupportedOperationException("Это служебный класс, и его экземпляр не может быть создан.");
    }
}
