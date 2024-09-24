# Coffee Shop - Decorator and Facade Design Pattern

This project illustrates the use of the **Decorator** and **Facade** design patterns in a coffee ordering system. Users can select different coffee types and customize their orders with various extras.

## Table of Contents
1. [Design Patterns Used](#design-patterns-used)
2. [Features](#features)
3. [How the System Works](#how-the-system-works)
4. [Code Structure](#code-structure)
5. [UI Integration](#ui-integration)
6. [Example Usage](#example-usage)

## Design Patterns Used

### 1. **Decorator Pattern**
The **Decorator** pattern allows for the dynamic addition of functionality to objects without modifying their structure. In this project, it is used to add extras (like milk, sugar, and whipped cream) to coffee orders.

- **Component (Coffee)**: An abstract class that defines the base methods for coffee objects, such as `getCost()` and `getDescription()`.
  
- **Concrete Components**: 
  - **`Espresso`**: A concrete coffee type with a specific cost and description.
  - **`Cappuccino`**: Another concrete coffee type with its own cost and description.

- **Decorator Class**:
  - **`CoffeeDecorator`**: An abstract class that wraps a `Coffee` object and delegates calls to it. It overrides `getCost()` and `getDescription()` to add additional behavior.

- **Concrete Decorators**:
  - **`MilkDecorator`**: Adds the cost and description of milk to the coffee.
  - **`SugarDecorator`**: Adds the cost and description of sugar to the coffee.
  - **`WhippedCreamDecorator`**: Adds the cost and description of whipped cream to the coffee.

**Why Decorator?**
- The Decorator pattern provides flexibility in adding new functionalities (like extras) at runtime, allowing for easy customization without changing existing code.

### 2. **Facade Pattern**
The **Facade** pattern provides a simplified interface to a complex subsystem. In this project, the `CoffeeShopFacade` class serves as a façade for the coffee ordering process.

- **`CoffeeShopFacade`**: This class encapsulates the coffee ordering logic, allowing users to place an order by specifying the coffee type and extras. It handles the creation of coffee objects and applies the decorators for any selected extras.

**Why Facade?**
- The Facade pattern simplifies interactions with the underlying system, making it easier for users to order coffee without needing to understand the complexities of how coffees and decorators work.

## Features

- **Coffee Selection**: Users can choose between different coffee types (Espresso, Cappuccino).
- **Customization**: Users can add extras like Milk, Sugar, and Whipped Cream to their coffee.
- **Dynamic Order Summary**: The system displays the total cost and description of the order after the user clicks the order button.

## How the System Works

1. **User Selection**:
   - Users select a coffee type from a dropdown menu and check any desired extras (Milk, Sugar, Whipped Cream).

2. **Order Processing**:
   - When the order button is clicked, the `CoffeeShopFacade` processes the order by creating the specified coffee and dynamically adding any selected extras using the Decorator pattern.

3. **Order Display**:
   - The order description and total cost are displayed on the webpage. If an invalid coffee type is selected, an error message is shown.

## Code Structure

### Classes
- **`Coffee` (Abstract Component)**: The base class for all coffee types.
- **Concrete Coffee Classes**:
  - **`Espresso`**: Implements the coffee base class with specific cost and description.
  - **`Cappuccino`**: Implements the coffee base class with specific cost and description.
  
- **`CoffeeDecorator` (Decorator Class)**: Abstract class that adds additional behavior to `Coffee` objects.
- **Concrete Decorators**:
  - **`MilkDecorator`**: Adds cost and description for milk.
  - **`SugarDecorator`**: Adds cost and description for sugar.
  - **`WhippedCreamDecorator`**: Adds cost and description for whipped cream.

- **`CoffeeShopFacade`**: Simplifies the coffee ordering process and manages the creation of coffee and decorators.

## UI Integration

The project uses vanilla JavaScript to handle user interactions:

- **Form Elements**: 
  - Dropdown for selecting the coffee type and checkboxes for selecting extras.
  
- **Order Display**:
  - When the order is processed, the coffee description and total cost are shown on the webpage.

## Example Usage

1. **Select a Coffee**: 
   - Choose a type of coffee from the dropdown (Espresso or Cappuccino).
   
2. **Customize Your Order**: 
   - Check any extras you want to add (Milk, Sugar, Whipped Cream).
   
3. **Place Your Order**: 
   - Click the "Order" button to see your order summary with the total cost and description.

## Conclusion

This project effectively demonstrates the use of both the **Decorator** and **Facade** design patterns. Users can easily customize their coffee orders while maintaining a clean and straightforward interface for ordering.


## Snapshots 

![image](https://github.com/user-attachments/assets/f37912b1-3da7-4ce9-9dbb-6545aa052b25)

![image](https://github.com/user-attachments/assets/edb730d3-a68c-4667-9198-4a539f4ed040)

![image](https://github.com/user-attachments/assets/ac720ab4-12d5-4b20-9ccc-a68ac0ebf755)


