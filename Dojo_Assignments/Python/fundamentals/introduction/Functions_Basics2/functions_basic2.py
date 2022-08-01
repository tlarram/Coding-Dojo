#countdown
def countdown(num):
    output= []
    for i in range(num,-1,-1):
        output.append(i)
    return output

print(countdown(5))

#print and return
list= [3,4]
def print_and_return(list):
    print(list[0])
    return list[1]

print(print_and_return(list))

#first Plus Length
my_list= [1,2,3,4,5]
def first_plus_length(list):
    return list[0] + len(list)

print(first_plus_length(my_list))

# Values greater than second
list= [5,2,3,2,1,4]
def values_greater_than_second(list):
    if len(list) < 2:
        return False
    output=[]
    for i in range(0,len(list)):
        if list[i] > list[1]:
            output.append(list[i])
    print(len(output))
    return(output)

print(values_greater_than_second(list))
print(values_greater_than_second([3]))

#This Length, That Value
def this_length_that_value(size,value):
    output = []
    for i in range(0,size):
        output.append(value)
    return output 

print(this_length_that_value(3,9))
print(this_length_that_value(8,8))