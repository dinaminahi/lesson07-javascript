let teslaX = {};
teslaX.make = 'Tesla';
teslaX.model = 'X';
teslaX.price = 90000;
console.log(teslaX.price);

teslaX.beep = beep;

teslaX.beep();

let volkswagenAtlas = {
    make: 'Volkswagen',
    model: 'Atlas',
    price: 35000,
    beep: beep
};

volkswagenAtlas.beep();

function beep() {
    console.log(this.make + ' ' + this.model + ' beep-beep!')
}

function Car(make, model, price){
    this.make = make;
    this.model = model;
    this.price = price;
    this.beep = beep;
}

Car.prototype.beep = beep;

let audiQ8 = new Car('Audi', 'Q8', 70000);
audiQ8.beep();

class SuperCar  {
    constructor(make, model, price){
    this.make = make;
    this.model = model;
    this.price = price;
    }
    beep() {
    console.log(this.make + " " + this.model + ' beep-beep-beep!');
    }
}

let bugattiVeyron = new SuperCar('Bugatti', 'Veyron', 100000);
bugattiVeyron.beep();

let bugattiChiron = Object.create(bugattiVeyron);
console.dir(bugattiChiron);

console.log(JSON.stringify(bugattiChiron));
bugattiChiron.model = 'Chiron';
console.log(JSON.stringify(bugattiChiron));
bugattiChiron.beep();

let zazSensJson = `{
  "make": "ZAZ",
  "model": "Sens",
  "price": 10000
}`;

let zazSens = JSON.parse(zazSensJson);
zazSens.beep = beep;
zazSens.beep();