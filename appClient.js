/*jslint node: true */
"use strict";

// SOAP client example

var soap = require('soap');
var url = 'http://www.webservicex.net/globalweather.asmx?WSDL';
var args = {CityName:"moscow",CountryName:"Russia"};
var args2 = {CountryName:"United Kingdom"};


soap.createClient(url, function(err,client) {
  client.GetWeather(args,function(err,result) {
    console.log(result);
  });
  client.GetCitiesByCountry(args2,function(err,result) {
    console.log(result);
  });
});

