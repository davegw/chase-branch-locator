Chase Branch Locator
====================

http://chase-branch-locator.azurewebsites.net/

The Chase Branch Locator is a responsive website that uses the browser's geo-location API to find user location and the Chase API to query nearby Chase branches. The Google Maps API is used for displaying the locations on maps. 

The website is built using AngularJS. Tests are run with the Karma test runner and Jasmine testing framework.

To run the website locally (will run on http://localhost:8000/):
```
npm install
bower install
python -m SimpleHTTPServer
```

To run unit tests:
```
karma start
```
