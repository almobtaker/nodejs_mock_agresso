/*jslint node: true */
"use strict";

// SOAP client example

var soap = require('soap');
var url = 'http://localhost:8000/wsdl?wsdl';
var args = {name: 'Ezzy'};


soap.createClient(url,function(err,client) {
  client.sayHello(args,function(err,result) {
    console.log(result);
    console.log(client.describe());
  });
});
