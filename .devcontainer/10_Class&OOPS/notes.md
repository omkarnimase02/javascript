# Javascript And Classes

## javaScript -> it is a protoTyoe based lang, no class present

### oops -> its is a programing paradims

### Objects ->  
 - collection of properties & method/ function
 - ex toLowerCase()
 - promises


 ###why use oops in js 
 - improved code organization, modularity, maintainability, and reusability. 


 ## Parts of OOps

 ## Object Literals

 - Constrctor function -> create new instance every time
 - ProtoTyoes
 - Classes
 - Instance(new this)


 ## Pillars

 - Abstraction -> to hide the internal details
 - Encapsulation -|> wrap up the data & the member Function
 - Inheritance -> parent - child relation
 - PolyMorphism -> many form

### Abstarction

- hiding the complex implementation details of an object and exposing only the essential features or functionalities to the outside world. This helps in reducing complexity, improving understandability, and promoting code reusability.

- Real-life use: Closures are commonly used for implementing private variables and methods in JavaScript objects, providing abstraction by hiding internal state and exposing only the necessary interfaces.

```
function Counter() {
    let count = 0;

    this.increment = function() {
        count++;
    };

    this.getCount = function() {
        return count;
    };
}

let counter = new Counter();
counter.increment();
console.log(counter.getCount()); // Output: 1


```

 ### Encapsulation

- Encapsulation refers to the bundling of data and methods that operate on the data into a single unit or class. This helps in hiding the internal state of an object and only exposing the necessary functionality

- Real-life use: Encapsulation helps in building modular and maintainable code. For example, in a banking application, the implementation details of transactions can be encapsulated within a Transaction class, hiding the internal complexities from the outside world.

``` 

// Encapsulation in JavaScript using Constructor Function
function Car(make, model) {
    this.make = make;
    this.model = model;

    this.displayInfo = function() {
        console.log(`Make: ${this.make}, Model: ${this.model}`);
    };
}

let myCar = new Car("Toyota", "Camry");
myCar.displayInfo(); // Output: Make: Toyota, Model: Camry

```

### Inheritance

- Inheritance allows objects to inherit properties and methods from other objects, promoting code reuse and establishing hierarchical relationships between objects.

- eal-life use: Inheritance is useful for modeling real-world relationships. For instance, in a vehicle management system, you can have a base class Vehicle and derived classes like Car, Truck, etc., inheriting properties and methods from Vehicle.

```
// Inheritance in JavaScript using Prototype Chain
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(`${this.name} barks.`);
};

let myDog = new Dog("Buddy", "Golden Retriever");
myDog.speak(); // Output: Buddy makes a sound.
myDog.bark(); // Output: Buddy barks.


```

### PolyMorphism

- Polymorphism allows objects to be treated as instances of their parent class, enabling code to work with objects of multiple types through a uniform interface.

- Real-life use: Polymorphism is helpful in scenarios where you want to perform similar actions on different types of objects. For example, in a drawing application, you can have various shapes like circles, squares, etc., and all shapes can be drawn using a common draw() method.

```
// Polymorphism in JavaScript using Prototype Chain
function Shape() {}

Shape.prototype.draw = function() {
    console.log("Drawing a shape.");
};

function Circle() {}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
    console.log("Drawing a circle.");
};

function Square() {}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.draw = function() {
    console.log("Drawing a square.");
};

let shapes = [new Circle(), new Square()];
shapes.forEach(shape => shape.draw());

```
