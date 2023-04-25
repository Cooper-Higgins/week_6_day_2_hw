const Park = function (name, ticketPrice, collectionOfDinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = collectionOfDinosaurs;
  }

  Park.prototype.addDinosaur = function (dinosaur) {
    this.collectionOfDinosaurs.push(dinosaur);
  }

  Park.prototype.removeDinosaur = function (dinosaur) {
    const indexOfDinosaur = this.collectionOfDinosaurs.indexOf(dinosaur);
    this.collectionOfDinosaurs.splice(indexOfDinosaur, 1)
  }

  Park.prototype.findMostAttractiveDinosaur = function (collectionOfDinosaurs) {
    const attractiveScores = []
    for (const i = 0; i < collectionOfDinosaurs.length; i++) {
      const dinosaur = collectionOfDinosaurs[i];
      const attractiveScores = dinosaur.guestsAttractedPerDay;
    }
    
    for (const dinosaur of collectionOfDinosaurs) {
      attractiveScores.append(dinosaur.guestsAttractedPerDay);
    }
  }

  Park.prototype.findDinosaursBySpecies = function (speciesString) {
    const dinosaursBySpecies = []

    for (const dinosaur of this.collectionOfDinosaurs) {
      if (dinosaur.species == speciesString); {
        dinosaursBySpecies.push(dinosaur)
      }
    }
  }

  // Park.prototype.calculateTotalVisitorsPerDay = function () {
  //   let totalVisitorsPerDay = 0;

  //   for (const )
  // }

  module.exports = Park;
  