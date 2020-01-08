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
  const total = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance;
  }, 0);
  return total
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const result = this.journeys.map((journey) => journey.transport)
  const unique = [...new Set(result)];

  return unique
};


module.exports = Traveller;
