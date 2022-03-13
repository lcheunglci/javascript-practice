sayHi();

let mixin = {
    madeIn() {
        console.log('This car was made in year 2022');
    }
}

let carMixin = {
    __proto__: mixin,
    madeIn() {
        super.madeIn();
    }

}

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine; 
        this.color = color;
    }

    carStat() {
        return `This car has ${this.doors} doors, a ${this.engine} engine and is the color ${this.color}`;
    }

    static totalDoors(car1, car2) {
        const doors1 = car1.doors;
        const doors2 = car2.doors;

        return doors1 + doors2;
    }
}


class SUV extends Car {
    constructor(doors, engine, color, brand, carStats) {
        super(doors, engine, color, carStats);
        this.brand = brand;
        this.wheel = 4;
        this.ac = true;

        // assign mixin
        Object.assign(this, carMixin);
    }

    myBrand() {
        return console.log(`This SUV is a ${this.brand}`);
    }
}

const cx5 = new Car(4, 'V6', 'grey');
const civic = new Car(4, 'V4', 'blue');
const crv = new SUV(4, 'V4', 'blue', 'honda');


console.log(cx5);
console.log(cx5.carStat());
console.log(civic);
console.log(civic.carStat());
console.log(crv);
console.log(crv.myBrand());
console.log(crv.madeIn());

console.log(Car.totalDoors(cx5, civic));


// hoisted
function sayHi() {
    return console.log('Hello this function can be called anywhere!');
}