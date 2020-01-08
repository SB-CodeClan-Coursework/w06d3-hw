const Traveller = function(journeys) {
  this.journeys = journeys;
};



Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transportToFilterBy) {
  console.log("transportToFilterBy:", transportToFilterBy)
  // transportToFilterBy === 'train'
  const result = this.journeys.filter((journey, index) => {
    // 'train' === 'train' -> true
    // 'train' === 'train' -> true
    //  'aeroplane' == 'train' -> false
    // ...
    console.log("journey.transport:", journey.transport, "index:", index)
    return journey.transport === transportToFilterBy;
  });
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => {
    return journey.distance > minDistance
  });
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
