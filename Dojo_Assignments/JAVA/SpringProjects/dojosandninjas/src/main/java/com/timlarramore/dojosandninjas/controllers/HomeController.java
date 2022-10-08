package com.timlarramore.dojosandninjas.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.timlarramore.dojosandninjas.models.Dojo;
import com.timlarramore.dojosandninjas.models.Ninja;
import com.timlarramore.dojosandninjas.services.MainService;


@Controller
public class HomeController {
	@Autowired
	private MainService mainService;
	
	@GetMapping("/dojo/new")
	public String createDojo(Model model) {
		model.addAttribute("newDojo", new Dojo());
		return "dojoForm.jsp";
	}
	
	@PostMapping("/dojo/new")
	public String proccessDojo(@Valid @ModelAttribute("newDojo") Dojo dojo, BindingResult result) {
		if(result.hasErrors()) {
			return "dojoForm.jsp";
		} else {
			mainService.createDojo(dojo);
			return "redirect:/dojo/new";
		}
	}
	
	@GetMapping("/ninjas/new")
	public String createNinja(Model model) {
		model.addAttribute("ninja", new Ninja());
		model.addAttribute("dojoList", mainService.allDojos());
		return "ninjaForm.jsp";
	}
	
	@PostMapping("/ninjas/new")
	public String proccessNinja(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result) {
		if(result.hasErrors()) {
			return "ninjaForm.jsp";
		} else {
			mainService.createNinja(ninja);
			return "redirect:/ninjas/new";
		}
	}
	
	@GetMapping("/dojos/{id}")
	public String getDojoById(@PathVariable("id")Long id, Model model) {
		Dojo dojo = mainService.findDojo(id);
		model.addAttribute("dojo", dojo);
		model.addAttribute("ninjaList", mainService.allNinjas());
		return "dashboard.jsp";
	}
	
}
