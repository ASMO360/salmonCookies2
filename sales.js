'use strict';

var storeLocationsArray = []

function CreateStore(name, minCustomer, maxCustomer, avgCookieSales) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSales = avgCookieSales;
}

CreateStore.prototype.randomCookiePerHour = function() {
  return Math.round((Math.random()) * (this.maxCustomer - this.minCustomer) + this.minCustomer0 * this.avgCookieSales);
};

function createAndPushNewStore(name, minCustomer, maxCustomer, avgCookieSales){
  name = new CreateStore(name, minCustomer, maxCustomer, avgCookieSales);
  storeLocationsArray.push (name);
  console.log('stores: ', storeLocationsArray);
}

createAndPushNewStore('First and Pike', 23, 65, 6.3);
createAndPushNewStore('SeaTac Airport', 3, 24, 1.2);
