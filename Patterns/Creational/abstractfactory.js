class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class CarFactory {
  createCar(type) {
    switch (type) {
      case 'civic':
        return new Car(4, 'V6', 'grey');
      case 'honda':
        return new Car(4, 'V8', 'red');
      default:
        return null;
    }
  }
}

class SuvFactory {
  createCar(type) {
    switch (type) {
      case 'cx5':
        return new Car(4, 'V6', 'grey');
      case 'sante fe':
        return new Car(4, 'V8', 'red');
      default:
        return null;
    }
  }
}

const myCarFactory = new CarFactory();
const mySuvFactory = new SuvFactory();

const autoManufacturer = (type, model) => {
  switch (type) {
    case 'car':
      return myCarFactory.createCar(model);
    case 'suv':
      return mySuvFactory.createCar(model);
  }
};

const cx5 = autoManufacturer('suv', 'cx5');
console.log(cx5);
