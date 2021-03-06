/*jslint node: true */
"use strict";


var http = require('http');
var soap = require('soap');
var helloService = {
  Hello_Service: {
    Hello_Port: {
      sayHello: function(args) {
        return {
          greeting: "Hello!!!"+ " " + args.name
        };
      }
    }
  }
};

var xml = require('fs').readFileSync('HelloService.wsdl', 'utf8');

var server = http.createServer(function(request,response) {
          response.end("404: Not Found: "+request.url);
      });

server.listen(8000);

soap.listen(server, '/wsdl', helloService, xml);