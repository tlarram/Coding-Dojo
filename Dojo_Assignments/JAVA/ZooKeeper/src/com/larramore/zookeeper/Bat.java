package com.larramore.zookeeper;

public class Bat extends Mammal{

	public Bat() {
		super(300);
		
	}
	public void fly() {
		setEnergyLevel(getEnergyLevel()-50);
		System.out.println("Flap, Flap, WOOOSH");
		
	}
	public void eatHumans() {
		
		setEnergyLevel(getEnergyLevel() +25);
	}
	public void attackTowns() {
		System.out.println("Crackle, Clackle, smoulder, high pitched wailing");
		setEnergyLevel(getEnergyLevel()-100);
	}
}
