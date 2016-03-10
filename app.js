/*jslint node: true */
"use strict";


var soap = require('soap');

var http = require('http');

var myService = {
      GlobalWeather: {
        GlobalWeatherSoap: {
          GetWeather: function(args, callback) {
                  // do some work
                  callback({
                      name1: args.CountryName,
                      name5: args.CityName
                  });
              },
          GetCitiesByCountry: function(args, callback) {
                  // do some work
                  callback({
                      name2: args.CountryName
                  });
              }
        },
        GlobalWeatherSoap12: {
          GetWeather: function(args, callback) {
                  // do some work
                  callback({
                      name3: args.CountryName,
                      name6: args.CityName
                  });
              },
          GetCitiesByCountry: function(args, callback) {
                  // do some work
                  callback({
                      name4: args.CountryName
                  });
              }
        }
      }
    };



var xml = require('fs').readFileSync('globalweather.wsdl','utf8');
var server = http.createServer(function(request,response) {
  response.end("404: Not Found: " + request.url);
});

server.listen(8000);

soap.listen(server,'/wsdl',myService, xml);

