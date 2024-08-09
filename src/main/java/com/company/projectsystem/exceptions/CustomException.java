package com.company.projectsystem.exceptions;

/**
 * Исключение для отображения пользователю.
 */
public class CustomException extends RuntimeException{

    public CustomException(String message) {
        super(message);
    }
}
