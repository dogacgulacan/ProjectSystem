package com.company.projectsystem.exceptions;

import com.vaadin.flow.component.notification.Notification;
import io.jmix.flowui.Notifications;
import io.jmix.flowui.exception.AbstractUiExceptionHandler;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class ExceptionHandler extends AbstractUiExceptionHandler {
    private final Notifications notifications;

    public ExceptionHandler(Notifications notifications) {
        super(CustomException.class.getName());
        this.notifications = notifications;
    }

    @Override
    protected void doHandle(String className, String message, Throwable throwable) {
        notifications.create(throwable.getMessage())
                .withType(Notifications.Type.WARNING)
                .withPosition(Notification.Position.TOP_END)
                .withDuration(2500)
                .show();
    }

}