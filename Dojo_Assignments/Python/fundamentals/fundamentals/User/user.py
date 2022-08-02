class User: 
    def __init__(self, first_name, last_name, age,email,):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_rewards = 0
        return self


    def display_info(self):
        print("=======================")
        print( self.first_name)
        print( self.last_name)
        print( self.age)
        print( self.email)
        print( self.is_rewards_member)
        print( self.gold_card_rewards)

    def enroll(self):
        self.is_rewards_member=True
        self.gold_card_rewards=200

    def spend_points(self,amount):
        self.gold_card_rewards -= amount
        

my_user= User("Timothy", "Larramore", "tlarram@codingdojo.com", 35)
my_user2=User("Laura", "Larramore", "llarram@codingdojo.com", 35)
my_user3=User("Aryanna", "Larramore", "alarram@codingdojo.com", 9)
my_user.display_info().enroll().spend_points(50).display_info()
my_user2.enroll().display_info().spend_points(80).display_info()
my_user3.display_info()