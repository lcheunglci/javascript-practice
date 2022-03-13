sayHi();

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

const cx5 = new Car(4, 'V6', 'grey');
const civic = new Car(4, 'V4', 'blue');


console.log(cx5);
console.log(cx5.carStat());
console.log(civic);
console.log(civic.carStat());
console.log(Car.totalDoors(cx5, civic));


// hoisted
function sayHi() {
    return console.log('Hello this function can be called anywhere!');
}