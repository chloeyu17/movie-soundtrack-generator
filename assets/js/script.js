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
    console.log(search);
    var url = "https://itunes.apple.com/search?term="+search+"&country=US"
    
    fetch(url, {
        // mode: 'no-cors'
    }) 

        .then(function (response){
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })

        .then(function (data){
            console.log(data);

            //empties movie wrapper after clicked on a movie selection
            $('#movie-wrapper').empty();
            //shows music wrapper
            $('#music-wrapper').removeClass('hide');
            //empties track list every new search
            $('#tracks').empty();
            

            for (let i = 0; i < data.results.length; i++) {
                var musicResults = data.results[i].collectionId;

                if (data.results[i].collectionName.indexOf(search)) {
                    console.log(musicResults);
                
                    //var of id's
                    var albumTitle = $('#album-title') 
                    var composer = $('#composer') 
                    var tracks = $('#tracks')
                    var albumBtn = $('#albumBtn')
                    var albumImg = $('#album-image')

                    //var for making elements
                    
                    var listItem = $("<li class='list-group-item d-flex justify-content-between align-items-center' id='list'>");
                    var listItemTrack = $("<a target='_blank' id='item-track' class='item-track'>");
                    var listItemPreview = $("<a target='_blank' id='item-prev' class='item-prev'>");
                    var listItemPlayBtn = $("<i class='fas fa-play'>")
                    

                    //Add tags to Jumbotron
                    

                    //make music content not in loop
                    albumImg.attr('src', data.results[0].artworkUrl100);
                    albumTitle.text(data.results[0].collectionName);
                    composer.text(data.results[0].collectionArtistName);
                    composer.attr('href', data.results[0].collectionArtistViewUrl)
                    albumBtn.attr('href', data.results[0].trackViewUrl)

                    

                    //if statement to make tracks list items 
                    if(data.results[i].collectionId === data.results[0].collectionId && data.results[i].trackNumber <= data.results[i].trackCount){

                        //add tags to jumbotron
                        tracks.append(listItem);
                        listItem.append(listItemTrack);
                        $('.list-group-item').append(listItemPreview);
                        listItemPreview.append(listItemPlayBtn);

                        //add track content
                        listItemTrack.attr('href', data.results[i].trackViewUrl);
                        listItemTrack.text(data.results[i].trackNumber + ".  " + data.results[i].trackName);
                        listItemPreview.attr('href', data.results[i].previewUrl);
                    }
                    //else break loop
                    else {
                        break;
                    }
                }
            }

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
            //hides music jumbotron for every new search
            $('#music-wrapper').addClass('hide');
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
                    

                    musicSearch(data.Search[i].Title + " " + "Soundtrack");
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

                    //If there are 20 cards stop loop
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




