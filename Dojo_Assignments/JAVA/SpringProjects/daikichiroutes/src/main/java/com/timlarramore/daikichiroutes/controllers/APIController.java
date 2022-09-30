package com.timlarramore.daikichiroutes.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

@RequestMapping("/daikichi/travel/{location}")
public String locationPath(@PathVariable("location")String location) {
	return "Congratulations! You will soon travel to "+ location +"!";
}
@RequestMapping("/daikichi/lotto/{number}")
public String lotoPath(@PathVariable("number") Integer number) {
	if(number %2== 0){
		return "You will take a grand journey in the near future, but be weary of tempting offers";
	} else {
		return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends.";
	}
}
}
