# Google Maps Scraper
App Programming Course 
Made by Joel Keskinen, Panu Teräs and Jimi Hietakangas

This scraper parses Google Maps API to get the longitude and latitude from an inputted address. Along with the search radius and the business type, the user is given a list of the nearby businesses within the radius, along with the business address, distance, google rating and business status.

The scraper runs with Python3 and has been built using Flask and React.

## Requirements
Each request requires an API key. Your personal API key can be generated in [Google Cloud Console](https://developers.google.com/maps/documentation/javascript/get-api-key). Your API key should not be shared. 

Replace ## Google API Key ## with your API Key

## Dependencies
- [Googlemaps](https://github.com/googlemaps/google-maps-services-python)
- [Flask](https://flask.palletsprojects.com/en/2.2.x/)
- [React](https://reactjs.org/docs/getting-started.html)

## Install
1. Clone the repository from Github.
2. Install Python packages from the requirements.txt file.
```pip install requirements.txt```
3. Install required node-modules in the /client directory.
 ```npm install``` 
4. Run app.py
5. Start the React server.
```npm start```

## Built with Google Maps API
- The project has been made with the [Python Google Maps Geolocation and Places API](https://github.com/googlemaps/google-maps-services-python).
- You can get your own API key [here](https://developers.google.com/maps/documentation/javascript/get-api-key)

### API Documentation:
- https://pypi.org/project/googlemaps/
- https://github.com/googlemaps/google-maps-services-python


