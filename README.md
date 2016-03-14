# Mocking Agresso Web Service Using Node JS

Application to mock an Agresso (Unit4 Business World) web service to use when developing SOAP web services for Agresso (Unit4) Business World ERP apps.

SOAP is the XML way of defining what information is sent and how.

SOAP enables client applications to easily connect to remote services and invoke remote methods.

A SOAP message is an ordinary XML document containing the following elements:

* Envelope
* Header
* Body
* Fault

SOAP message structure:
```
<?xml version="1.0"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://www.w3.org/2001/12/soap-envelope" SOAP-ENV:encodingStyle="http://www.w3.org/2001/12/soap-encoding">

   <SOAP-ENV:Header>
      ...
      ...
   </SOAP-ENV:Header>

   <SOAP-ENV:Body>
      ...
      ...
      <SOAP-ENV:Fault>
         ...
         ...
      </SOAP-ENV:Fault>
      ...
   </SOAP-ENV:Body>

</SOAP_ENV:Envelope>
```

For notes on how to use [option in SOAP client creation](http://stackoverflow.com/questions/20087573/node-js-and-async-module-error)

## Getting Started

### Examples of SOAP use

Example for app.js:

wsdl `http://www.webservicex.net/globalweather.asmx?WSDL`

`Client.describe()` - description of services, ports and methods as a JavaScript object

Example description:

```
{
      GlobalWeather: {                    <!-- MyService -->
        GlobalWeatherSoap: {                <!-- MyPort -->
          GetWeather: [Object],               <!-- MyFunction -->
          GetCitiesByCountry: [Object] },     <!-- MyFunction -->
        GlobalWeatherSoap12: {              <!-- MyPort -->
          GetWeather: [Object],               <!-- MyFunction -->
          GetCitiesByCountry: [Object]        <!-- MyFunction -->
        }
      }
    }
```

That is:

```
{
      MyService: {
        MyPort: {
          MyFunction: {
            input: {
              name: 'string'
            }
          }
        }
      }
    }
```



There are five binding styles to choose from when creating a WSDL file see, [Which style of WSDL should I use?](http://www.ibm.com/developerworks/library/ws-whichwsdl/)

To understand the code I have written a few examples taken from stackoverflow mostly:

1 server `app.js` ; client `appClient.js` - blocking

2 server `app2.js` ; client `appClient.js` - non blocking

3 server `app3.js` ; client `appClient2.js` - non blocking

4 server `app4.js` ; client `appClient4.js` - blocking

5 server `app5.js` ; client `appClient4.js` - non blocking


To run, in separate windows, for example:
```
node app
```
```
node appClient
```

You should then get description of service and output.



