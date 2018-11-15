// The Car and the Truck have similar behavior and properties.
// Rewrite them in a way such that they share those properties.

function Vehicle(driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  };
  Vehicle.prototype.cargo = [];
  Vehicle.prototype.loadCargo = function(cargo) {
    this.cargo.push(cargo);
    return this;
  }
  Vehicle.prototype.unloadCargo = function() {
    return this.cargo.pop();
  };


var car = new Vehicle('car');
var truck = new Vehicle('truck');
truck.loadCargo('fish',chicken);

// using ob create without sharing proto
function shared(driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  };
function carOrTruck(driver) {
  if(car || truck == driver) {
    return shared(car);
  }
  else if (truck == driver) {
       var truck = Object.create(truckProp);
  }
}
  var truckProp = {
    cargo = [],
    loadCargo = function(cargo) {
      this.cargo.push(cargo);
      return this;
    },
    unloadCargo = function() {
      return this.cargo.pop();
    },
  }