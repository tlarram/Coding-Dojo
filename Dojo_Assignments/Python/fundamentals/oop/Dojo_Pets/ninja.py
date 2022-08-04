class Ninja:
    def __init__(self, first_name, last_name, treats, pet_food, pet):
        self.first_name= first_name
        self.last_name= last_name
        self.treats= treats
        self.pet_food=pet_food
        self.pet= pet

    def __repr__(self):
            display = f"Name: {self.first_name}, Last Name: {self.last_name}, Treats: {self.treats}, Pet Food: {self.pet_food}, Pet {self.pet}"
            return display
    def walk(self):
        self.pet.play()
        return self

    def feed(self):
        self.pet.eat()
        return self

    # def bathe(self):
    #     self.pet.noise()