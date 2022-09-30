package com.larramore.zookeeper;

public class Gorilla extends Mammal{

	public Gorilla() {
		super();
	}
	
	public void throwSomething() {
		setEnergyLevel(getEnergyLevel()-5);
		System.out.println("Gorilla has thrown something");
		
	}
	public void eatBananas() {
		System.out.println("Gorilla happy, banana good.");
		setEnergyLevel(getEnergyLevel()+10);
	}
	public void climb() {
		System.out.println("Gorilla has climbed big tree, so strong");
		setEnergyLevel(getEnergyLevel()-10);
	}

		

}
