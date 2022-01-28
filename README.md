# Pizza Parlor

#### By _**Justin Dechow**_

#### _A website that allows a user to select toppings and size to order a pizza_

## Technologies Used

* _CSS_
* _HTML_
* _Markdown_
* _jquery_
* _javascript_

## Description

_This webpage will allow a user to select a pizzas' attributes (size, toppings) and display what they ordered and the total cost based on the selected attributes._

## Setup/Installation Requirements

* _Clone the Programming Language Suggester GitHub [repository](https://github.com/jdechow5/pizza-parlor) by running the following code in your terminal_
`$ git clone https://github.com/jdechow5/pizza-parlor.git`
* _Open index.html in your preferred browser_

* _Or you can click [here](https://jdechow5.github.io/pizza-parlor/) to visit the page on gh-pages._




## Known Bugs

* _No known issues_

## Tests
```
Describe: Pizza(size, ["toping1", "topping2"])

Test: "It should create Pizza object with properties: toppings and size"
Code: const pizza = new Pizza("medium", ["sausage", "mushroom"])
Expected Output: Pizza{size: "medium", toppings:["sausage", "mushroom"]}

Describe: Pizza.prototype.calculatePrice()

Test: "After defining a base price it should calculate additional cost based on selected size/toppings"
Code: const pizza = new Pizza("medium",["sausage", "mushroom"]);
Expected Output: (pizza.calculatePrice()).toEqual(15);
```
## License

_Contact Justin Dechow at justin.dechow@gmail.com with any issues or concerns about this code_

Copyright (c) _2022_ _Justin Dechow_