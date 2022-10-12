package com.timlarramore.projectmanager.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.timlarramore.projectmanager.models.Project;
import com.timlarramore.projectmanager.models.User;
import com.timlarramore.projectmanager.repositories.ProjectRepositiry;



@Service
public class ProjectService {
	@Autowired
	private ProjectRepositiry projectRepo;

	//find all projects
		public List<Project> allProjects(){
			return projectRepo.findAll();
		}
		//find 1 project
		public Project findProject(Long id) {
			Optional<Project> optionalProject= projectRepo.findById(id);
			if(optionalProject.isPresent()) {
				return optionalProject.get();
			} else {
				return null;
			}
		}
		// create projects
		public Project createProject(Project project) {
			return projectRepo.save(project);
		}
		
		//update
		public Project updateProject(Project project) {
			return projectRepo.save(project);
		}
		
		//delete
		public void deleteProject (long id) {
			Optional<Project> optionalProject= projectRepo.findById(id);
			if(optionalProject.isPresent()) {
				projectRepo.deleteById(id);
			}
		}
		public List<Project> getAssignedUsers(User user){
			return projectRepo.findAllByUsers(user);
		}
		
		public List<Project> getUnassignedUsers(User user){
			return projectRepo.findByUsersNotContains(user);
		}
		public Project findById(Long id) {
			Optional<Project> optionalProject = projectRepo.findById(id);
			if(optionalProject.isPresent()) {
				return optionalProject.get();
			}else {
				return null;
			}
		}
		
		public void join(Project project, User user) {
	        project.getUsers().add(user);
	        projectRepo.save(project);
	    }
	    public void leave(Project project, User user) {
	        project.getUsers().remove(user);
	        projectRepo.save(project);
	    }
	    public void addLead(Project project, User lead) {
	        project.getUsers().add(lead);
	        projectRepo.save(project);
	    }
		
		
		

}
