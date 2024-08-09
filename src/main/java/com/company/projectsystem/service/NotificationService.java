package com.company.projectsystem.service;

import org.springframework.stereotype.Service;

@Service
public class NotificationService {

    public static void sendProjectCreatedNotification(String projectName) {
        // Bildirim gönderme işlemleri (örneğin e-posta veya SMS)
        System.out.println("Notification: Project created - " + projectName);
    }

    public static void sendProjectDeletedNotification(String projectName) {
        // Bildirim gönderme işlemleri (örneğin e-posta veya SMS)
        System.out.println("Notification: Project deleted - " + projectName);
    }


    public static void sendProjectUpdatedNotification(String projectName){
        System.out.println("Notification: Project updated - " + projectName);

    }

    public static void sendEmployeeCreatedNotification(String employeeName) {
        // Bildirim gönderme işlemleri (örneğin e-posta veya SMS)
        System.out.println("Notification: Employee created - " + employeeName);
    }

    public static void sendEmployeeDeletedNotification(String employeeName) {
        // Bildirim gönderme işlemleri (örneğin e-posta veya SMS)
        System.out.println("Notification: Employee deleted - " + employeeName);
    }
}