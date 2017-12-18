'use strict';

var hrs = ['6AM' , '7AM' , '8AM' , '9AM' , '10AM' , '11AM' , '12PM' , '1PM' , '2PM' , '3PM' , '4PM' , '5PM' , '6PM' , '7PM'];
var storeLocationsArray = [];

function CreateStore(name, minCustomer, maxCustomer, avgCookieSales) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSales = avgCookieSales;
}

CreateStore.prototype.randomCookiePerHour = function() {
  return Math.floor(Math.random() * this.maxCustomer - this.minCustomer + this.minCustomer * this.avgCookieSales);
};

function createAndPushNewStore(name, minCustomer, maxCustomer, avgCookieSales){
  name = new CreateStore(name, minCustomer, maxCustomer, avgCookieSales);
  storeLocationsArray.push (name);
}

createAndPushNewStore('First and Pike', 23, 65, 6.3);
createAndPushNewStore('SeaTac Airport', 3, 24, 1.2);
createAndPushNewStore('Seattle Center', 11, 38, 3.7);
createAndPushNewStore('Capitol Hill', 20, 38, 2.3);
createAndPushNewStore('Alki', 2, 16, 4.6);

console.log('stores: ', storeLocationsArray);
