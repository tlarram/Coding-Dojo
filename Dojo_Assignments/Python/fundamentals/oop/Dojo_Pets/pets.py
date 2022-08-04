from ninja import Ninja

class Pet:
    def __init__(self, name, type, tricks, noise):
        self.name= name
        self.type= type
        self.tricks= tricks
        self.health= 100
        self.energy= 50
        self.noise = noise

    def sleep(self):
        self.energy += 25
        return self

    def eat(self):
        self.energy += 5
        self.health += 10
        return self

    def play(self):
        self.health += 5
        return self

    # def noise(self):
    #     print(self.noise)
        

    def __repr__(self):
            display = f"Pet: {self.name}, Type: {self.type}, Tricks: {self.tricks}, Noise: {self.noise}"
            return display




pebbles= Pet("Pebbles", "Dog", ['fetch','chase'], 'Woof')
the_treats= ["pupperoni", "bacon strips"]
the_petfood= ["tacos, fish sticks, popcorn"]
timothy= Ninja("Timothy", "Larramore", the_treats,the_petfood, pebbles)

timothy.feed
print(timothy.feed())
timothy.walk
print(timothy.walk())
# timothy.bathe()
# print(timothy.bathe())