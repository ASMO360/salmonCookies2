'use strict';

var storeLocationsArray = [1stAndPike, SeaTacAirport, SeattleCenter, CapitolHill, Alki]

function createStore(name, minCustomer, maxCustomer, avgCookieSales) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSales = avgCookieSales;
}

function createAndPushNewStore
