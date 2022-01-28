// Business Logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.calculatePrice = function () {
  const basePrice = 10;
  let addToppings = 0;
  let sizeChoice = 0;


  this.toppings.forEach(function (topping) {
    if (topping === 'mushrooms' || topping === 'black olives' || topping === 'jalapenos' || topping === 'onions' || topping === 'garlic') {
      addToppings += 2;
    } else if (topping === 'sausage' || topping === 'bacon' || topping === 'pepperoni' || topping === 'anchovies') {
      addToppings += 3;
    }
  });

  if (this.size === 'medium') {
    sizeChoice += 3;
  } else if (this.size === 'large') {
    sizeChoice += 5;
  }
  console.log(addToppings);
  return basePrice + addToppings + sizeChoice;
}
