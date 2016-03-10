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


### Prerequisities

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you have to get a development env running

Stay what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* Dropwizard - Bla bla bla
* Maven - Maybe
* Atom - ergaerga

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
