package com.timlarramore.counter.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {
	
	@GetMapping("/server")
	public String home(HttpSession session) {
		if(session.getAttribute("count") == null) {
			session.setAttribute("count", 0);	
		} else {
			Integer tempCount = (Integer) session.getAttribute("count");
			session.setAttribute("count", tempCount+1);
		}
		return "server.jsp";
	}
	
	@GetMapping("/server/count")
	public String count() {
		return "counter.jsp";
	}

	@GetMapping("/plustwo")
	public String homeplus2(HttpSession session) {
		if(session.getAttribute("count") == null) {
			session.setAttribute("count", 0);	
		} else {
			Integer tempCount = (Integer) session.getAttribute("count");
			session.setAttribute("count", tempCount+2);
		}
		return "server.jsp";
	}
		
	@RequestMapping(value = "/reset", method = RequestMethod.GET)
	public String redirect(HttpSession session) {
	 	session.setAttribute("count", 0);
	 	return "server.jsp";
	   }
	}

