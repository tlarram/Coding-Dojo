package com.timlarramore.languages.controllers;

import java.util.List;

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
import org.springframework.web.bind.annotation.RequestMapping;

import com.timlarramore.languages.models.Language;
import com.timlarramore.languages.services.LanguageService;

@Controller
public class LanguageController {
	
	@Autowired
	LanguageService languageService;
	
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@GetMapping("/languages")
	public String languageForm (@ModelAttribute("language")Language language, Model model) {
		List<Language> languages= languageService.allLanguages();
		model.addAttribute("languages", languages);
		return "index.jsp";
	}
	@PostMapping("/languages")
	public String process(@Valid @ModelAttribute("language") Language language, BindingResult result, Model model) {
		if(result.hasErrors()) {
			List<Language> languages= languageService.allLanguages();
			model.addAttribute("languages", languages);
			return "index.jsp";
	} else {
		languageService.createLanguage(language);
		return "redirect:/languages";
	}
	}
	
	// ----------EDIT--------------
	// 1. Show Form
	@GetMapping("/languages/edit/{id}")
	public String showEditForm(@PathVariable("id") Long id, Model model) {
		Language foundLanguage = languageService.findLanguage(id);
		model.addAttribute("language", foundLanguage);
		return "editForm.jsp";
		
	}
	// 2. process form
	@PutMapping("/languages/edit/{id}")
	public String processEdit(@Valid @ModelAttribute("language") Language language, BindingResult result) {
		if (result.hasErrors()) {
			return "editForm.jsp";
		} else {
			languageService.updateLanguage(language);
			return "redirect:/languages";
		}
	}
	// ----------DELETE--------------
	@DeleteMapping("/languages/delete/{id}")
	public String processDelete(@PathVariable("id")Long id, Model model) {
		languageService.deleteLanguage(id);
		return "redirect:/languages";
	}
	@GetMapping("/languages/{id}")
	public String show(@PathVariable("id")Long id, Model model) {
		Language language = languageService.findLanguage(id);
		model.addAttribute("language", language);
		return "show.jsp";
	}
}

