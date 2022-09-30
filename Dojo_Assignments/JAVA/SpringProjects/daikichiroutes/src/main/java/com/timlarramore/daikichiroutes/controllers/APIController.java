package com.timlarramore.daikichiroutes.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class APIController {
	@RequestMapping("/daikichi")
	public String index() {
		return "Welcome!";
	}
@RequestMapping(value="/daikichi/today", method=RequestMethod.GET)
public String daikichitoday() {
	return "Today you will find luck in all your endevors";
}

@GetMapping("/daikichi/tomorrow")
public String daikichitomorrow() {
	return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
}
}
