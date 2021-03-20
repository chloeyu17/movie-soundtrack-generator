var API_KEY_OMDB = "80c5dba2"
var API_KEY_MUSIXMATCH = "b8a7a5f08ebc8726a80091d40c2a0c86"

//Global scope of variables for easy access

//search
var searchMovieBtn = $('#search-movie-btn')
var searchMovieInput = $('#search-movie')
var movieSearchHistory = [];

//Results area variables
var songName = $('#song-name')
var composerName = $('#composer')
var movieName = $('#movie-name')

// //Musixmatch Search API fetch function ....need to pass movie title through function parameter
// function musicSearch() {
//     var url = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/?apikey=" + API_KEY_MUSIXMATCH

//     fetch(url) 

//         .then(function (response){
//             if (!response.ok) {
//                 throw response.json();
//             }
//             return response.json();
//         })

//         .then(function (data){
            
//             console.log(data);
//         })
    
// }

//itunes api search
function musicSearch(search) {
    var url = "https://itunes.apple.com/search?term="+search+"&country=US"+"&limit=10"

    fetch(url) 

        .then(function (response){
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })

        .then(function (data){
            console.log(data);

            $('#movie-wrapper').empty();

            // var jumbatron = $('<')
            // <div class="jumbotron">
            // <h1 class="display-4">Hello, world!</h1>
            // <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            // <hr class="my-4">
            // <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            // <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            // </div>
            //add album title
            //add album artist
            //add album art

            //for loop to loop over each track
            //to create cards or something with info we want in them

        })
};

// musicSearch();

//OMDb Search API fetch function ....need to pass movie title through function parameter
function omdbSearch(search) {
    var url = "http://www.omdbapi.com/?apikey="+API_KEY_OMDB+"&s="+search;

    fetch(url) 

        .then(function (response){
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })

        .then(function (data){
            console.log(data);

            //empty card container on every search
            $('#movie-wrapper').empty();
            //loop to create card from movie search results
            for (let i = 0; i < data.Search.length; i++) {
                

                if(data.Search[i].Poster !==  "N/A"){
                    // Movie card elements
                    var movieWrapper = $('#movie-wrapper')
                    var movieCol = $("<div class='col-12 col-md-4 col-sm mb-3'>");
                    var movieCard = $("<div id='movieCard' class='card text-dark' style='width: 18rem; background-color:#238C79'>");
                    var movieCardTitle = $("<h5 class='card-title text-center'>")
                    var movieCardBody = $("<img class='card-img-bottom' style='width:100%'>");

                    //Creates eventlistener to select album based on movie 
                    movieCard.on("click", function(){
                    

                    musicSearch(data.Search[i].Title + "+" + "soundtrack");
                    });

                    // create each card
                    movieWrapper.append(movieCol);
                    movieCol.append(movieCard);
                    movieCard.append(movieCardTitle);
                    movieCard.append(movieCardBody);
                    // movieCardBody.append(movieImg);

                    //add info to cards
                    movieCardTitle.text(data.Search[i].Title);
                    movieCardBody.attr('src', data.Search[i].Poster);

                    //If there are 5 cards stop loop
                    if (i === 19)
                        break;
                }        
            }
        })
}

function generateTitle(search) {
    for(var i = 0; i<search.length; i++){
        if(search[i]=== " "){
            search[i] = "+";
        }
    }
    return search.join('');
}

//submit on click of search button
searchMovieBtn.on('click', function() {
    var input = searchMovieInput.val().trim();
    console.log(input);
    var searchTitle = generateTitle(Array.from(input));
    omdbSearch(searchTitle);
    //adds "soundtrack" to end of every search for music search
    // musicSearch(searchTitle+ "+" + "soundtrack")

});



//submit on enter button hit
$('#form-search').on('submit', function(event) {
    event.preventDefault();
    var input = searchMovieInput.val().trim();
    console.log(input);
    var searchTitle = generateTitle(Array.from(input));
    omdbSearch(searchTitle);
    //adds "soundtrack" to end of every search for music search
    // musicSearch(searchTitle+ "+" + "soundtrack")

        window.localStorage.setItem("input",Array.from(input));
        console.log(Array.from(input))
        // Turn input into an array 
        // Pull from array
        // var userMovies = JSON.parse(localStorage.getItem("input"));
        // console.log(userMovies);
    
});

// function listArray() {
//     movieSearchHistoryList.empty();
//     movieSearchHistory.forEach(function (movieTitle){
//         //var searchHistoryItem = $('<li type="button" class="list-group-item btn btn-warning btn-sm" id="city-btn">');
//         //add ul for entries
        
//     });   
//     //Loop for local storage for user search history

// }




