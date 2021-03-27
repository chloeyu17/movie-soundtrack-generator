# Movie-Soundtrack-Generator

## Description 

An application that converts the user’s movie searches into the soundtrack allowing them to sample the songs. We accomplish this by using HTML, CSS, Bootstrap, Javascript (JQuery), and fetching data from IMDb and Apple Music web APIs.

### Project Overview

* Personalized homepage with searchbar and linked favorites soundtrack and movies using the apis.
* Created a friendly user interface that is interactive when adjusting to different screen sizes and mobile view using media queries. 
* Styling was set in CSS and Bootstrap 
* Using the OMDB API, we can pull movie titles and results searched from the user, including artwork. 
* If there are multiple entries under the same title/series the movies are displayed for user selection. 
* We then use a function that pulls the movie soundtrack from the Apple Music API.
* Because Apple Music and OMDB use different character traits for the titles, we created a function that makes them lowercase.  
* The user searches are stored in the local storage and to be accessed later from the user and selected again. 
* The user also has the option to clear their storage history.  

## Usage  

### Homepage  
![Screenshot]()

### Application Selection 
![Screenshot]()

### Application of Local Storage
![Screenshot]()

## Links

* Application URL: (https://chloeyu17.github.io/movie-soundtrack-generator)
* GitHub Repository URL: (https://github.com/chloeyu17/movie-soundtrack-generator)

## API Documentation

* Itunes Search API: https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/

* OMDB API Documentation: https://readthedocs.org/projects/omdbpy/downloads/pdf/latest/

* OMDB API Usage :http://www.omdbapi.com/#usage

## Future Development 

* Sync all movie albums that may have different title values with a different movie API. 

* Integrate multiple music APIs for the user's preferred streaming services. 

* Users can access additional past searches from their accounts. 

* Create a backend framework and mobile application for increased user accessibility to the platform. 



License
Copyright (c) [2021] [Chloe Yu, Gabe Thomas, Cliff Morin, Steven Paul]
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
