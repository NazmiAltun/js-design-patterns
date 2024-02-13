// All the 3 approaches below are the same,  creating new objects
const newObj2 = Object.create(Object.prototype);
const newObj3 = new Object();
const newObj = {};

// ES3 Compatible approach to assign  kv
newObj.someKey = 'Hello World!';
var key = newObj.someKey;
console.log(`Key = ${key}`);

// ES5 only approach
Object.defineProperty(newObj, 'someNewKey', {
  value: 'control',
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperties(newObj, {
  someKey: {
    value: 'Hello',
    writable: false,
  },
  anotherKey: {
    value: 'World',
    writable: false,
  },
});

class Car {
  constructor(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
  }
}

Car.prototype.toString = function () {
  return `${this.model} has done ${this.miles} miles`;
};

const civic = new Car('Honda Civic', 2009, 20000);
const mondeo = new Car('For Mondeo', 2015, 12000);

console.log(civic.toString());
console.log(mondeo.toString());
