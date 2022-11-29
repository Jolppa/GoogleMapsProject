# Google Maps Scraper
> Made by Joel Keskinen, Panu Teräs and Jimi Hietakangas for the app programming course.

This scraper parses Google Maps API in order get the longitude and latitude from an inputted address, which when used along with the search radius and the business type, the user is given a list of the nearby businesses within the radius, along with the business address, distance, google rating and the business status.

The application has been built using Python3, Flask and React.

## Dependencies
- [Googlemaps](https://github.com/googlemaps/google-maps-services-python)
- [Flask](https://flask.palletsprojects.com/en/2.2.x/)
- [React](https://reactjs.org/docs/getting-started.html)

## Install
1. Clone the repository from Github. ```git clone https://github.com/pteras/GoogleMapsProject.git``` 
2. Install Python packages from the requirements.txt file.
```pip install -r requirements.txt```
3. Install required node-modules in the /client directory.
 ```npm install``` 
4. Run app.py ```python3 app.py``` 
5. Start the server.
```npm start```

## Built with Google Maps API
- The project has been made with the [Python Google Maps Geolocation and Places API](https://github.com/googlemaps/google-maps-services-python).
- Each request requires an API key. Your personal API key can be generated in [Google Cloud Console](https://developers.google.com/maps/documentation/javascript/get-api-key). Your API key should not be shared. 

### API Documentation:
- https://pypi.org/project/googlemaps/
- https://github.com/googlemaps/google-maps-services-python


