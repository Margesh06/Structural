"use strict";
// Coffee interface (base for both decorators and main coffee types)
class Coffee {
}
// Concrete coffee classes
class Espresso extends Coffee {
    getCost() {
        return 50;
    }
    getDescription() {
        return "Espresso";
    }
}
class Cappuccino extends Coffee {
    getCost() {
        return 70;
    }
    getDescription() {
        return "Cappuccino";
    }
}
// Decorator class to add extra functionality (milk, sugar, etc.)
class CoffeeDecorator extends Coffee {
    constructor(coffee) {
        super();
        this.decoratedCoffee = coffee;
    }
    getCost() {
        return this.decoratedCoffee.getCost();
    }
    getDescription() {
        return this.decoratedCoffee.getDescription();
    }
}
// Adding milk as an extra
class MilkDecorator extends CoffeeDecorator {
    getCost() {
        return this.decoratedCoffee.getCost() + 10;
    }
    getDescription() {
        return this.decoratedCoffee.getDescription() + ", Milk";
    }
}
// Adding sugar as an extra
class SugarDecorator extends CoffeeDecorator {
    getCost() {
        return this.decoratedCoffee.getCost() + 5;
    }
    getDescription() {
        return this.decoratedCoffee.getDescription() + ", Sugar";
    }
}
// Adding whipped cream as an extra
class WhippedCreamDecorator extends CoffeeDecorator {
    getCost() {
        return this.decoratedCoffee.getCost() + 20;
    }
    getDescription() {
        return this.decoratedCoffee.getDescription() + ", Whipped Cream";
    }
}
// Facade to simplify coffee ordering and payment process
class CoffeeShopFacade {
    orderCoffee(type, extras) {
        let coffee;
        if (type === "Espresso") {
            coffee = new Espresso();
        }
        else if (type === "Cappuccino") {
            coffee = new Cappuccino();
        }
        else {
            throw new Error("Unknown coffee type"); // Handle invalid coffee types
        }
        // Add extras dynamically using the Decorator pattern
        extras.forEach(extra => {
            if (extra === "Milk") {
                coffee = new MilkDecorator(coffee);
            }
            else if (extra === "Sugar") {
                coffee = new SugarDecorator(coffee);
            }
            else if (extra === "Whipped Cream") {
                coffee = new WhippedCreamDecorator(coffee);
            }
        });
        return coffee;
    }
}
// UI interaction
const coffeeTypeSelect = document.getElementById("coffeeType");
const milkCheckbox = document.getElementById("milk");
const sugarCheckbox = document.getElementById("sugar");
const whippedCreamCheckbox = document.getElementById("whippedCream");
const orderButton = document.getElementById("orderButton");
const orderDescriptionElem = document.getElementById("orderDescription");
const orderCostElem = document.getElementById("orderCost");
orderButton.addEventListener("click", () => {
    const coffeeType = coffeeTypeSelect.value;
    const extras = [];
    if (milkCheckbox.checked)
        extras.push("Milk");
    if (sugarCheckbox.checked)
        extras.push("Sugar");
    if (whippedCreamCheckbox.checked)
        extras.push("Whipped Cream");
    const coffeeShop = new CoffeeShopFacade();
    try {
        const coffee = coffeeShop.orderCoffee(coffeeType, extras);
        orderDescriptionElem.textContent = `Your Order: ${coffee.getDescription()}`;
        orderCostElem.textContent = `Total Cost: $${coffee.getCost()}`;
    }
    catch (error) {
        orderDescriptionElem.textContent = `Error: ${error.message}`;
        orderCostElem.textContent = "";
    }
});
