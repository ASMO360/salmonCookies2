'use strict';

var storeLocationsArray = [1stAndPike, SeaTacAirport, SeattleCenter, CapitolHill, Alki]

function createStore(name, minCustomer, maxCustomer, avgCookieSales) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSales = avgCookieSales;
}

createStore.prototype.randomCookiePerHour = function() {
  return Math.round((Math.random()) * (this.maxCustomer - this.minCustomer) + this.minCustomer0 * this.avgCookieSales);
};

function createAndPushNewStore(name, minCustomer, maxCustomer, avgCookieSales){
  createStore(name, minCustomer, maxCustomer, avgCookieSales);
  storeLocationsArray.push;
}
