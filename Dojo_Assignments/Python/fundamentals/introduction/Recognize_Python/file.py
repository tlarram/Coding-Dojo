num1 = 42 #variable declaration
num2 = 2.3 #variable declaration
boolean = True # data type primative boolean
string = 'Hello World' # data type primative string
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] # data type composite list
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} # data type composite dictionary
fruit = ('blueberry', 'strawberry', 'banana') # data type composite tuple
print(type(fruit)) #type tuple access value
print(pizza_toppings[1]) # data type composite list access value
pizza_toppings.append('Mushrooms') # data type composite list add value
print(person['name']) # dictionary access value
person['name'] = 'George'  # dictionary change value
person['eye_color'] = 'blue' #dictionary add key
print(fruit[2]) # tuple access value

# conditional if else statement
if num1 > 45: 
    print("It's greater")
else:
    print("It's lower")

# conditional elif statement
if len(string) < 5:
    print("It's a short word!")
elif len(string) > 15:
    print("It's a long word!")
else:
    print("Just right!")

#conditional for loop
for x in range(5):
    print(x)
for x in range(2,5):
    print(x)
for x in range(2,10,3):
    print(x)
x = 0
#conditional while loop
while(x < 5):
    print(x)
    x += 1


pizza_toppings.pop() # data type composite list remove value
pizza_toppings.pop(1) # data type composite list remove value at index

print(person) # dictionary access value
person.pop('eye_color') # dictionary remove key
print(person) # dictionary access value

#conditional for loop
for topping in pizza_toppings: #start
    if topping == 'Pepperoni': #if conditional
        continue #continue
    print('After 1st if statement') #access value
    if topping == 'Olives': #if conditional
        break #break

#function
def print_hello_ten_times(): #parameter
    for num in range(10): 
        print('Hello') 

print_hello_ten_times() #argument

#function
def print_hello_x_times(x): #parameter
    for num in range(x):
        print('Hello')

print_hello_x_times(4) #argument

def print_hello_x_or_ten_times(x = 10): #parameter
    for num in range(x):
        print('Hello')

print_hello_x_or_ten_times() #argument
print_hello_x_or_ten_times(4) #argument


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)