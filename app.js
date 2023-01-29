function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType; // assign crustType to pizza.crustType
    pizza.sauceType = sauceType; // assign sauceType to pizza.sauceType
    pizza.cheeses = cheeses; // assign cheeses to pizza.cheeses
    pizza.toppings = toppings; // assign toppings to pizza.toppings
    return pizza; // return pizza object
}

var deepDish = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(deepDish); // logs deep dish pizza object

var handTossed = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(handTossed); // logs hand tossed pizza object

var thinCrust = pizzaOven("thin crust", "pesto", ["gouda", "cheddar"], ["arugula", "tomatoes"]);
console.log(thinCrust); // logs thin crust pizza object

var glutenFree = pizzaOven("gluten free", "barbecue", ["goat cheese"], ["chicken", "pineapple"]);
console.log(glutenFree); // logs gluten free pizza object

function randomPizza() {
    var crustTypes = ["deep dish", "hand tossed", "thin crust", "gluten free"];
    var sauceTypes = ["traditional", "marinara", "pesto", "barbecue"];
    var cheeses = ["mozzarella", "feta", "gouda", "cheddar", "goat cheese"];
    var toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "arugula", "tomatoes", "chicken", "pineapple"];

    var randomCrust = crustTypes[Math.floor(Math.random() * crustTypes.length)]; // randomly select crust type
    var randomSauce = sauceTypes[Math.floor(Math.random() * sauceTypes.length)]; // randomly select sauce type
    var randomCheeses = [cheeses[Math.floor(Math.random() * cheeses.length)]]; // randomly select cheese
    var randomToppings = [toppings[Math.floor(Math.random() * toppings.length)], toppings[Math.floor(Math.random() * toppings.length)]]; // randomly select two toppings

    return pizzaOven(randomCrust, randomSauce, randomCheeses, randomToppings); // return new pizza object with randomly selected crust, sauce, cheese, and toppings
}

console.log(randomPizza()); // logs a random pizza object