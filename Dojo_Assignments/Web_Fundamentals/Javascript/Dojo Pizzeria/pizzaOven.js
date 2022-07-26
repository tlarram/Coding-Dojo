function pizzaOven(crustType, sauceType,cheese,toppings) {
    var pizza={};
    pizza.crust= crustType;
    pizza.sauce=sauceType;
    pizza.cheese=cheese;
    pizza.toppings=toppings;
    return pizza;
}

var p1= pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni,sausage"])
console.log(p1)

var p2= pizzaOven("hand tossed", "marinara", ["mozzarella, feta"], ["mushrooms","olives", "onions"])
console.log(p2)

var p3= pizzaOven("thin and crispy","bbq", ["colby jack"],["chicken", "pineapple", "bacon","red onion"])
console.log(p3)

var p4= pizzaOven("stuffed crust", "traditional", ["mozzarella"],["pepperonia","sausage","jalepanos"])
console.log(p4)
