package com.timlarramore.omikujiform.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {
@RequestMapping("/omikuji")
public String home() {
	return "viewform.jsp";
}	
@RequestMapping(value="/submit", method=RequestMethod.POST) 
public String submit(HttpSession session,
		 @RequestParam(value="years") Integer years,
		 @RequestParam(value="city") String city,
		 @RequestParam(value="person") String person,
		 @RequestParam(value="hobby") String hobby,
		 @RequestParam(value="living") String living,
		 @RequestParam(value="kindness") String kindness) {
			session.setAttribute("years", years);
			session.setAttribute("city", city);
			session.setAttribute("person", person);
			session.setAttribute("hobby", hobby);
			session.setAttribute("living", living);
			session.setAttribute("kindness", kindness);
			
			return "redirect:/display";
}
@RequestMapping("/display")
public String display(HttpSession session) {
	Integer years = (Integer) session.getAttribute("years");
	String city= (String) session.getAttribute("city");
	String person = (String) session.getAttribute("person");
	String hobby = (String) session.getAttribute("hobby");
	String living =(String) session.getAttribute("living");
	String kindness = (String) session.getAttribute("kindness");
	
	session.setAttribute("years", years);
	session.setAttribute("city", city);
	session.setAttribute("person", person);
	session.setAttribute("hobby", hobby);
	session.setAttribute("living", living);
	session.setAttribute("kindness", kindness);
	
	return "displayform.jsp";
}

}
