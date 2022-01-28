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
    } if (topping === 'sausage' || topping === 'bacon' || topping === 'pepperoni' || topping === 'anchovies') {
      addToppings += 3;
    }
  });

  if (this.size === 'medium') {
    sizeChoice += 3;
  } if (this.size === 'large') {
    sizeChoice += 5;
  }
  return basePrice + addToppings + sizeChoice;
}

// User Interface Logic

$(document).ready(function () {
  $("#pizza-form").submit(function (event) {
    event.preventDefault();

    const toppings = $("input[name=toppings]:checked").map(function () {
      return $(this).val();
    }).get();
    const size = $("input[name=size]:checked").val();
    const pizza = new Pizza(size, toppings);

    $('#price').html(`${pizza.calculatePrice()}.00`)
    $("#results").show();
  })
})