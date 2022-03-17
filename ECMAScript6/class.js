// Class

class Vehicle {
    constructor(description, wheels) {
        this.description = description;
        this.wheels = wheels;
    }

    describeYourself() {
        console.log(`I am a ${this.description}
        with ${this.wheels} wheels.`
        );
    }
}

const coolSkiVan = new Vehicle('cool ski van', 4);
console.log(coolSkiVan);
coolSkiVan.describeYourself();

// Inheritance 
class SemiTruck extends Vehicle {
    constructor() {
        super('semi truck', 18);
    }
}

let groceryStoreSemi = new SemiTruck();
groceryStoreSemi.describeYourself();