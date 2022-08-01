#basic
for i in range(151):
    print(i)

#Multiples of Five
for i in range(5,1001,5):
    print(i)
#Counting, the Dojo Way
for i in range(1,101):
    if i%10 ==0:
        print("Coding Dojo")
    elif i%5 ==0:
        print("Coding")
    else:
        print(i)
#Whoa. That Sucker's Hugh
num=0
for i in range(1, 500001):
    if(i%2 ==1):
        num= num + i
print(num)

#Countdown by Fours
num= 2022
for i in range(0,2022,4):
    if i>0:
        num= num-4
        print(num)
#Flexible Counter
lowNum=2
highNum=9
mult=3
for i in range(lowNum,highNum+1):
    if i%mult==0:
        print(i)