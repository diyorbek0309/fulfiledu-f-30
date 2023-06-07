class Vehicle {
  constructor(model) {
    console.log(model);
  }

  showColor(color) {
    console.log(color);
  }
}

class Car extends Vehicle {
  constructor(model, color) {
    super(model);
    this.model = model;
    this.color = color;
  }

  static age(age) {
    // console.log(this.model);
    // console.log(this.color);
    console.log(age, " yoshda");
  }
}

const nexia = new Car("Nexia", "white");
// const gentra = new Car("Gentra", "black");
// nexia.age(12);
// Car.age(12);
// nexia.showColor("White");
