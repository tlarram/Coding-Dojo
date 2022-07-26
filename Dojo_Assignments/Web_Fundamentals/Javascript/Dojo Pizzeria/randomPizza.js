var toppings= [
    "pepperoni",
    "cheese",
    "sausage",
    "bacon",
    "ham",
    "jalepanos",
    "red onion",
];

var crust= [
    "hand tossed",
    "flatbread",
    "stuffed",
    "thin and crispy",
    "deep dish",
];

var cheese= [
    "mozerella",
    "feta",
    "chedder",
    "gouda",
];

var sauce= [
    "traditional",
    "spicy",
    "bbq",
    "zesty",
];


var randomPizza= [
toppings[Math.floor(Math.random()*toppings.length)],
crust[Math.floor(Math.random()*crust.length)],
cheese[Math.floor(Math.random()*cheese.length)],
sauce[Math.floor(Math.random()*sauce.length)]
]
console.log (randomPizza);
