# Movie-Soundtrack-Generator

## Description 

Our application takes a movie search from the user and returns a list of soundtracks that contain similar search terms.  After the user selects the desired soundtrack, they can sample the songs on apple music. We accomplish this by using HTML, CSS, Bootstrap, Javascript, and fetching data from IMDb and Apple Music web APIs.

### Project Overview

* The personalized homepage displays a searchbar and the developers' favorite soundtrack and movie using the APIs.
* The page has a interactive user-friendly interface that adjusts to various screen sizes and mobile view using media queries. 
* The page is styled with CSS and Bootstrap.
* When the user searches for a movie, the site returns a list of possible soundtracks that contain similar keywords in the title.  These soundtracks are displayed for the user selection preference. 
* The OMDB API pulls data about the movie inputted by the user and returns data including the movie's title, year of release, and poster. 
* The title and year of release pulled from the OMDB API are compared with the soundtrack title and year from the Apple Music API.
* Since Apple Music and OMDB have different standards for title capitalization, we created a function that sets both the movie and soundtrack title to all lowercase characters in order to catch edgecases.
* User searches are stored in the local storage and displayed in a history section on the page.  Thus, the user can easily access and select past searches. 
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

* We would like to integrate another movie API in order to catch edgecases in which the movie title value doesn't match the soundtrack title value.

* Additionally, integrating multiple music APIs, such as Spotify or Youtube, would allow the user to select their preferred streaming service as well as catching the aforementioned edgecases. 

* It could also be interesting to try loading the audio into the page using the HTML audio element instead of opening a new tab in the browser.

* Ideally, we would allow users to create an account so that they can access past searches from their account on different devices. 

* Finally, creating a backend framework and mobile application would allow for increased user accessibility and ease of use on different devices. 

## Errors

* There are certain edgecases for which the soundtrack's title on the iTunes API does not match the title on the OMDB API.  For instance, in cases where the sountrack is titled Main Theme (Soundtrack Title).

* CORS Policy limits the number of times that users can select soundtracks.


License
Copyright (c) [2021] [Chloe Yu, Gabe Thomas, Cliff Morin, Steven Paul]
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
