package com.timlarramore.dojosandninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.timlarramore.dojosandninjas.models.Dojo;
import com.timlarramore.dojosandninjas.models.Ninja;
import com.timlarramore.dojosandninjas.repositories.DojoRepository;
import com.timlarramore.dojosandninjas.repositories.NinjaRepository;


@Service
public class MainService {
	
	@Autowired
	private NinjaRepository ninjaRepo;
	
	@Autowired
	private DojoRepository dojoRepo;
	
	//find all ninjas
	public List<Ninja> allNinjas(){
		return ninjaRepo.findAll();
	}
	// create ninjas
	public Ninja createNinja(Ninja ninja) {
		return ninjaRepo.save(ninja);
	}
	public Dojo createDojo(Dojo dojo) {
		return dojoRepo.save(dojo);
	}
	public List<Dojo> allDojos(){
		return dojoRepo.findAll();
	}
	public Dojo findDojo(Long id) {
		Optional<Dojo> optionalDojo = dojoRepo.findById(id);
		if(optionalDojo.isPresent()) {
			return optionalDojo.get();
		} else {
			return null;
		}
	}
	
	
}
