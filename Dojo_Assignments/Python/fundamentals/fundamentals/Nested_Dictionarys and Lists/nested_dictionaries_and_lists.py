x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ 
    {'x': 10, 'y': 20} ]

x= [ [5,2,3], [15,8,9] ]
print(x)

students[0]= {'first_name':  'Michael', 'last_name' : 'Bryant'}
print(students)

sports_directory['soccer'][0]='Andres'
print(sports_directory['soccer'])

z[0]["y"]=30
print(z)
# Part 2
students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

def iterateDictionary(some_list):
    for i in some_list:
        print(i)

iterateDictionary(students) 

#part 3
def iterateDictionary2(key_name, some_list):
    for i in some_list:
        print(i[key_name])

iterateDictionary2('first_name',students) 
iterateDictionary2('last_name', students) 

#part 4
dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def printInfo(dojo):
    print(len(dojo['locations']), "LOCATIONS")
    for i in dojo['locations']:
        print(i)
    print(len(dojo['instructors']), "INSTRUCTORS")
    for j in dojo["instructors"]:
            print(j)

printInfo(dojo)

