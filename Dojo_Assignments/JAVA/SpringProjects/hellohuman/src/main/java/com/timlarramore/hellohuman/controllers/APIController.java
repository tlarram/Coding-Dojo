package com.timlarramore.hellohuman.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class APIController {
@RequestMapping("/")
public String home() {
	return "Hello Human";
}
@RequestMapping("/search")
public String search(@RequestParam(value="firstname", required=false) String name, 
					@RequestParam(value="lastname", required=false) String lastname) {
	
	if(lastname != null) {
		return "Hello " + name + " " + lastname;
	} else {
	return "Hello " + name;
}

}
}
