package com.timlarramore.projectmanager.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.timlarramore.projectmanager.models.Task;
import com.timlarramore.projectmanager.repositories.TaskRepository;

@Service
public class TaskService {
private final TaskRepository taskRepo;
	
	public TaskService(TaskRepository taskRepo) {
		this.taskRepo = taskRepo;
	}
	public List<Task> projectTasks(Long projectId){
		return taskRepo.findByProjectIdIs(projectId);
	}
	
	public Task addTask(Task task) {
		return taskRepo.save(task);
	}
	
	public void deleteTask(Task task) {
		taskRepo.delete(task);
	}
}
