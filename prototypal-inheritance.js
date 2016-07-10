// classical prototypal

var human = {
  species: "human",
  create: function(values) {
    var instance = Object.create(this);
    Object.keys(values).forEach(function(key) {
      instance[key] = values[key];
    });
    instance.name = name;
    return instance;
  },
  saySpecies: function() {
    console.log(this.species)
  },
  sayName: function() {
    console.log(this.name)
  }
};

var maciek = human.create("Maciek");
var marek = human.create("Marek");

// var musician = Object.create(human);
// musician.playInstrument = function() {
//   console.log("He plays..." + this.instrument);
// };

var maciek = Object.create(musician);
// maciek.name = "Maciek";
maciek.playInstrument = "Drums";

var marek = Object.create(musician);
// marek.name = "Marek";
marek.playInstrument = "Guitar";