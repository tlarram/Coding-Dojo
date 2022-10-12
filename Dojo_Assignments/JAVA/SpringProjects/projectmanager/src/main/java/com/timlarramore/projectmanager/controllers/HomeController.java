package com.timlarramore.projectmanager.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;


import com.timlarramore.projectmanager.models.Project;
import com.timlarramore.projectmanager.models.Task;
import com.timlarramore.projectmanager.models.User;
import com.timlarramore.projectmanager.services.ProjectService;
import com.timlarramore.projectmanager.services.TaskService;
import com.timlarramore.projectmanager.services.UserService;

@Controller
public class HomeController {
	@Autowired
	ProjectService projectServ;
	@Autowired
	UserService userServ;
	@Autowired
	TaskService taskServ;
	
	@GetMapping("/projects")
    public String dashboard(HttpSession session,Model model) {
		
		if(session.getAttribute("userId")==null) {
			return "redirect:/logout";
		}
		
		Long userId = (Long) session.getAttribute("userId");
		model.addAttribute("user", userServ.findById(userId));
		model.addAttribute("unassignedProjects", projectServ.getUnassignedUsers(userServ.findById(userId)));
		model.addAttribute("assignedProjects", projectServ.getAssignedUsers(userServ.findById(userId)));
//		List<Project> projects= projectServ.allProjects();
//		model.addAttribute("projects", projects);
    	return "dashboard.jsp";
	}
	@PutMapping("/projects/join/{id}")
	public String joinTeam(@PathVariable("id") Long id, HttpSession session) {
		
		if(session.getAttribute("userId") == null) {
			return "redirect:/logout";
		}
		Long userId = (Long) session.getAttribute("userId");
		Project project = projectServ.findById(id);
		User user = userServ.findById(userId);
		user.getProjects().add(project);
		projectServ.join(project, user);
		return "redirect:/projects";
	}
	
	@PutMapping("/projects/leave/{id}")
	public String leaveTeam(@PathVariable("id") Long id, HttpSession session, Model model) {
		
		if(session.getAttribute("userId") == null) {
			return "redirect:/logout";
		}
		Long userId = (Long) session.getAttribute("userId");
		Project project = projectServ.findById(id);
		User user = userServ.findById(userId);
		user.getProjects().add(project);
		projectServ.leave(project, user);
		return "redirect:/projects";
	}
	@GetMapping("projects/new")
	public String viewForm (HttpSession session, Model model) {
		if(session.getAttribute("userId")==null) {
			return "redirect:/logout";
	}
		List<Project> projects= projectServ.allProjects();
		model.addAttribute("projects", projects);
		model.addAttribute("project", new Project());
		return "projectForm.jsp";
}
	
	@PostMapping("/projects/new")
	public String processForm (@Valid @ModelAttribute("project")Project project, BindingResult result, Model model) {
		
		if(result.hasErrors()) {
			List<Project> projects= projectServ.allProjects();
			model.addAttribute("projects", projects);
			return "projectForm.jsp";
		} else {
			projectServ.createProject(project);
			return "redirect:/projects";
		}
		
	}
	@GetMapping("/projects/{id}")
	public String getProjectById(@PathVariable("id")Long id,Model model, HttpSession session) {
		if(session.getAttribute("userId")==null) {
			return "redirect:/logout";
		}
		Project project = projectServ.findProject(id);
		model.addAttribute("project", project);
		return "oneProject.jsp";
	}
	
	@GetMapping("/projects/edit/{id}")
	public String showEditForm(@PathVariable("id")Long id, Model model, HttpSession session) {
		if(session.getAttribute("userId")==null) {
			return "redirect:/logout";
		}
		Project project= projectServ.findProject(id);
		model.addAttribute("project", project);
		if (project.getLead().getId().equals((Long) session.getAttribute("userId")))  {
			return "editForm.jsp";
		} else
		return "redirect:/projects";
	}
	
	
	
//	@GetMapping("/projects/edit/{id}")
//	public String showEditForm(@PathVariable("id")Long id, Model model, HttpSession session) {
//		if(session.getAttribute("userId")==null) {
//			return "redirect:/logout";
//		} else {
//			Project project= projectServ.findProject(id);
//			model.addAttribute("project", project);
//			return "editForm.jsp";
//		}
//	}
	
		
	@PutMapping("/projects/edit/{id}")
	public String processEditForm
	(@Valid @ModelAttribute("project") Project project,BindingResult result) {
		if (result.hasErrors()) {
			return "editForm.jsp";
		} else {
		projectServ.updateProject(project);
		return "redirect:/projects";	
	}
	}
	@DeleteMapping("projects/delete/{id}")
	public String processDelete(@PathVariable("id") Long id) {
		for(Task delete:taskServ.projectTasks(id)) {
			taskServ.deleteTask(delete);
		}
		projectServ.deleteProject(id);
		return "redirect:/projects";
	}
	
	@GetMapping("/projects/{projectId}/tasks")
	public String viewTasks(@ModelAttribute("task") Task task, @PathVariable("projectId")Long id, HttpSession session, Model model ) {
		if(session.getAttribute("userId") == null) {
			return "redirect:/logout";
		}
		Project project = projectServ.findProject(id);
		model.addAttribute("project", project);
		model.addAttribute("tasks", taskServ.projectTasks(id));
		return "tasks.jsp";
	}
	
	@PostMapping("/projects/{projectId}/tasks")
	public String newTask(@Valid @ModelAttribute("task") Task task, BindingResult result, @PathVariable("projectId")Long id, HttpSession session, Model model ) {
		if(session.getAttribute("userId") == null) {
			return "redirect:/logout";
		}
		Long userId = (Long) session.getAttribute("userId");
		
		Project project = projectServ.findProject(id);
		
		if(result.hasErrors()) {
			model.addAttribute("project", project);
			model.addAttribute("task", taskServ.projectTasks(id));
			return "tasks.jsp";
		}else {

			task.setProject(project);
			task.setCreator(userServ.findById(userId));
			taskServ.addTask(task);
			return "redirect:/projects/{projectId}/tasks";
		}
	}
}

