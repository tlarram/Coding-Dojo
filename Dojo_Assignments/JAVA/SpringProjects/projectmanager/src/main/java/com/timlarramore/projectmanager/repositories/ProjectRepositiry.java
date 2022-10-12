package com.timlarramore.projectmanager.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.timlarramore.projectmanager.models.Project;
import com.timlarramore.projectmanager.models.User;


public interface ProjectRepositiry extends CrudRepository<Project, Long>{
	List<Project> findAll();
	Project findByIdIs(Long id);
	List<Project> findAllByUsers(User user);
	List<Project> findByUsersNotContains(User user);
}
