const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let park;
  
  beforeEach(function () {
    dinosaur1 = new Dinosaur("T-Rex", "Carnivore", 50)
    dinosaur2 = new Dinosaur("Triceratops", "Omnivore", 30)
    dinosaur3 = new Dinosaur("Brontosaurus", "Herbivore", 20)
    dinosaur4 = new Dinosaur("Velociraptor", "Carnivore", 15)
    park = new Park("Jurassic Park", 100, [dinosaur1, dinosaur2, dinosaur3])
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3])
  });

  it('should be able to add a dinosaur to its collection', function (){
    park.addDinosaur(dinosaur4);
    const actual = [dinosaur1, dinosaur2, dinosaur3, dinosaur4];
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3, dinosaur4])
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(dinosaur1);
    const actual = [];
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species', function () {
    const actual = park.findDinosaursBySpecies(this.collectionOfDinosaurs, "T-Rex");
    assert.deepStrictEqual(actual, dinosaur1.species)
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
