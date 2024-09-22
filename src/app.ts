// Coffee interface (base for both decorators and main coffee types)
abstract class Coffee {
    abstract getCost(): number;
    abstract getDescription(): string;
  }
  
  // Concrete coffee classes
  class Espresso extends Coffee {
    getCost(): number {
      return 50;
    }
  
    getDescription(): string {
      return "Espresso";
    }
  }
  
  class Cappuccino extends Coffee {
    getCost(): number {
      return 70;
    }
  
    getDescription(): string {
      return "Cappuccino";
    }
  }
  
  // Decorator class to add extra functionality (milk, sugar, etc.)
  abstract class CoffeeDecorator extends Coffee {
    protected decoratedCoffee: Coffee;
  
    constructor(coffee: Coffee) {
      super();
      this.decoratedCoffee = coffee;
    }
  
    getCost(): number {
      return this.decoratedCoffee.getCost();
    }
  
    getDescription(): string {
      return this.decoratedCoffee.getDescription();
    }
  }
  
  // Adding milk as an extra
  class MilkDecorator extends CoffeeDecorator {
    getCost(): number {
      return this.decoratedCoffee.getCost() + 10;
    }
  
    getDescription(): string {
      return this.decoratedCoffee.getDescription() + ", Milk";
    }
  }
  
  // Adding sugar as an extra
  class SugarDecorator extends CoffeeDecorator {
    getCost(): number {
      return this.decoratedCoffee.getCost() + 5;
    }
  
    getDescription(): string {
      return this.decoratedCoffee.getDescription() + ", Sugar";
    }
  }
  
  // Adding whipped cream as an extra
  class WhippedCreamDecorator extends CoffeeDecorator {
    getCost(): number {
      return this.decoratedCoffee.getCost() + 20;
    }
  
    getDescription(): string {
      return this.decoratedCoffee.getDescription() + ", Whipped Cream";
    }
  }
  
  // Facade to simplify coffee ordering and payment process
  class CoffeeShopFacade {
    orderCoffee(type: string, extras: string[]): Coffee {
      let coffee: Coffee;
  
      if (type === "Espresso") {
        coffee = new Espresso();
      } else if (type === "Cappuccino") {
        coffee = new Cappuccino();
      } else {
        throw new Error("Unknown coffee type"); // Handle invalid coffee types
      }
  
      // Add extras dynamically using the Decorator pattern
      extras.forEach(extra => {
        if (extra === "Milk") {
          coffee = new MilkDecorator(coffee);
        } else if (extra === "Sugar") {
          coffee = new SugarDecorator(coffee);
        } else if (extra === "Whipped Cream") {
          coffee = new WhippedCreamDecorator(coffee);
        }
      });
  
      return coffee;
    }
  }
  
  // UI interaction
  const coffeeTypeSelect = document.getElementById("coffeeType") as HTMLSelectElement;
  const milkCheckbox = document.getElementById("milk") as HTMLInputElement;
  const sugarCheckbox = document.getElementById("sugar") as HTMLInputElement;
  const whippedCreamCheckbox = document.getElementById("whippedCream") as HTMLInputElement;
  const orderButton = document.getElementById("orderButton") as HTMLButtonElement;
  const orderDescriptionElem = document.getElementById("orderDescription") as HTMLElement;
  const orderCostElem = document.getElementById("orderCost") as HTMLElement;
  
  orderButton.addEventListener("click", () => {
    const coffeeType = coffeeTypeSelect.value;
    const extras: string[] = [];
  
    if (milkCheckbox.checked) extras.push("Milk");
    if (sugarCheckbox.checked) extras.push("Sugar");
    if (whippedCreamCheckbox.checked) extras.push("Whipped Cream");
  
    const coffeeShop = new CoffeeShopFacade();
    try {
      const coffee = coffeeShop.orderCoffee(coffeeType, extras);
  
      orderDescriptionElem.textContent = `Your Order: ${coffee.getDescription()}`;
      orderCostElem.textContent = `Total Cost: $${coffee.getCost()}`;
    } catch (error) {
      orderDescriptionElem.textContent = `Error: ${(error as Error).message}`;
      orderCostElem.textContent = "";
    }
  });
  