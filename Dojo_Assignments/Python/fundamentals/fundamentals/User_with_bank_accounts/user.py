class User: 
    def __init__(self, first_name, last_name, age,email,):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_rewards = 0
        self.accounts = {
            "checking": BankAccount(int_rate=0.02, balance=0),
            "savings": BankAccount(int_rate=0.03, balance=0)
        }
        



    def display_info(self):
        print("=======================")
        print( self.first_name)
        print( self.last_name)
        print( self.age)
        print( self.email)
        print( self.is_rewards_member)
        print( self.gold_card_rewards)
        return self

    def enroll(self):
        self.is_rewards_member=True
        self.gold_card_rewards=200
        return self

    def spend_points(self,amount):
        self.gold_card_rewards -= amount
        return self
    
    def transfer_money(self, amount,type, other_user):
        self.balance-=amount
        other_user.accounts[type]+=amount

class BankAccount:
    balance=0
    int_rate=0.001
    all_BankAccount=[]

    def __init__(self, int_rate, balance): 
        self.int_rate= int_rate
        self.balance= balance
        BankAccount.all_BankAccount.append(self)

    def deposit(self, amount):
        self.balance= self.balance + amount
        return self

    def withdraw(self, amount,):
        if amount <= self.balance:
            self.balance=self.balance - amount
        else:
            print("Insufficient funds: Charging a $5 fee")
            self.balance-=5
        return self
    
    def display_account_info(self):
        print("=======================")
        print( self.int_rate)
        print( self.balance)
        return self

    def yield_interest(self):
        self.balance= self.balance*self.int_rate + self.balance
        return self

    def transfer_money(self, amount,type, payee):
        self.balance-=amount
        payee.accounts[type].balance +=amount


    def __repr__(self):
        return f"The account info is Balance:{self.balance}"

    @classmethod
    def all_balances(cls):
        print("=======================")
        print( cls.int_rate)
        print( cls.balance)



my_user= User("Timothy", "Larramore", "tlarram@codingdojo.com", 35)
my_user2=User("Laura", "Larramore", "llarram@codingdojo.com", 35)
my_user3=User("Aryanna", "Larramore", "alarram@codingdojo.com", 9)
# my_user.display_info().enroll().spend_points(50).display_info()
# my_user2.enroll().display_info().spend_points(80).display_info()
# my_user3.display_info()

my_user.accounts["savings"].deposit(200).withdraw(50).display_account_info()
print(my_user.accounts)

my_user.accounts["savings"].transfer_money(50,'savings',my_user2)
print(my_user.accounts)