
// inherit the prototype methods from one constructor into another.
// Borrowed from github/com/nodejs/node-v0.x-archive/blob/master/lib/util.js#L621-L644

function inherits = function(ctor, superCtor) { // Child -> Musician, Parent -> Person 
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};

// classical prototypal
var Person = function(name) {
  this.name = name;
};

Person.prototype.sayName = function() {
  console.log("Hey, my name is " + this.name);
};

Person.prototype.shoutName = function() {
  console.log("I said " + this.name.toUpperCase() + "!")
};

var maciek = new Person("Maciek");
var tomek = new Person("Tomek");

maciek.sayName();
tomek.sayName();

maciek.shoutName();
tomek.shoutName();

// playing with inheritance

var Musician = function(name, instrument) {
  Musician.super_.call(this, name);
  this.instrument = instrument;
};

inherits(Musician, Person);

Musician.prototype.getInstrument = function() {
  console.log(this.instrument);
};

Musician.prototype.shoutName = function() {
  console.log("Hi I am famous, my name is " + this.name + "!!!!");
};

var marek = new Musician("Marek", "Guitar");
marek.sayName();
marek.getInstrument();
marek.shoutName();
