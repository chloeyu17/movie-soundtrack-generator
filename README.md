# Movie-Soundtrack-Generator

## Description 

Our application takes a movie search from the user and returns a list of soundtracks that contain similar search terms.  After the user selects the desired soundtrack, they can sample the songs on apple music. We accomplish this by using HTML, CSS, Bootstrap, Javascript, and fetching data from IMDb and Apple Music web APIs.

### Project Overview

* Personalized homepage with searchbar and developers' linked favorite soundtrack and movie using the APIs'.
* Created a friendly user interface that is interactive when adjusting to different screen sizes and mobile view using media queries. 
* Set styling in CSS and Bootstrap.
* Used the OMDB API to pull movie titles and results searched by the user, including artwork. 
* User has the ability to search multiple entries under the same title/series and are displayed for the user selection preference. 
* We then use a function that pulls the movie soundtrack from the Apple Music API.
* Because Apple Music and OMDB use different character traits for the titles, we created a function that makes them lowercase.  
* The user searches are stored in the local storage and to be accessed later from the user and selected again. 
* The user also has the option to clear their storage history.  

## Usage  

### Homepage  
![home demo](assets/images/homedemo.gif)

### Application Selection 
![music search demo](assets/images/musicsearchdemo.gif)

### Application of Local Storage
![history demo](assets/images/localstoragedemo.gif)

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
