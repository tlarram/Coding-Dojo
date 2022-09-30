package com.larramore.zookeeper;

public class MammalTest {

	public static void main(String[] args) {
		Gorilla newGorilla = new Gorilla();
		newGorilla.throwSomething();
		newGorilla.throwSomething();
		newGorilla.throwSomething();
		newGorilla.eatBananas();
		newGorilla.eatBananas();
		newGorilla.climb();
		
		Bat Dracula = new Bat();
		System.out.println(Dracula.getEnergyLevel());
		Dracula.fly();
		System.out.println(Dracula.getEnergyLevel());
		Dracula.attackTowns();
		Dracula.attackTowns();
		Dracula.attackTowns();
		Dracula.eatHumans();
		Dracula.eatHumans();
		Dracula.fly();
		System.out.println(Dracula.getEnergyLevel());
	}

}
