var API_KEY_OMDB = "80c5dba2"

//Global scope of variables for easy access

//search
var searchMovieBtn = $('#search-movie-btn')
var searchMovieInput = $('#search-movie')
var movieSearchHistory = [];
var searchHistoryList = $('#search-history')
var clearHistoryBtn = $('#clear-history-btn');
var movieHistoryBtn = $('#movie-btn');
var showHistoryBtn = $('#show-history-btn');

//Results area variables
var songName = $('#song-name')
var composerName = $('#composer')
var movieName = $('#movie-name')


//itunes api search
function musicSearch(year, search) {
    console.log(year, search);
    var url = "https://itunes.apple.com/search?term="+search+"&country=US"
    
    fetch(url, {
        cache: 'force-cache'
    }) 

        .then(function (response){
            if (!response.ok) {
                console.log(response)
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
            
            var searchTrim = search.split(" Soundtrack")
            // console.log(searchTrim);
            
            var weFoundAMatch = false
            for (let i = 0; i < data.results.length; i++) {
                var musicResults = data.results[i].collectionId;
                console.log(search);
                console.log(data.results[i].collectionName.indexOf(searchTrim[0]));
                var yearTrim = data.results[i].releaseDate.split("-")[0];
                // console.log(yearTrim, year);
                var lowerCaseSoundtrack = data.results[i].collectionName.toLowerCase()
                if ((lowerCaseSoundtrack.indexOf(searchTrim[0]) === 0) && (yearTrim == year)) {
                    // console.log(musicResults);
                    // $('#music-wrapper').removeClass('hide');
                    // $('#fail').addClass('hide')
                    weFoundAMatch = true;
                    //var of id's
                    var albumTitle = $('#album-title') 
                    var composer = $('#composer') 
                    var tracks = $('#tracks')
                    var albumBtn = $('#albumBtn')
                    var albumImg = $('#album-image')

                    //var for making tags/elements
                    var listItem = $("<li class='list-group-item d-flex justify-content-between align-items-center' id='list'>");
                    var listItemTrack = $("<a target='_blank' id='item-track' class='item-track'>");
                    var listItemPreview = $("<a target='_blank' id='item-prev' class='item-prev'>");
                    var listItemPlayBtn = $("<i class='fas fa-play'>")
                    
                    //make music content
                    albumImg.attr('src', data.results[i].artworkUrl100);
                    albumTitle.text(data.results[i].collectionName);
                    composer.text(data.results[i].collectionArtistName);
                    composer.attr('href', data.results[i].collectionArtistViewUrl);
                    albumBtn.attr('href', data.results[i].trackViewUrl);
                        
                    //add track content
                    listItemTrack.attr('href', data.results[i].trackViewUrl);
                    listItemTrack.text(data.results[i].trackName + "    (" + data.results[i].artistName + ")");
                    listItemPreview.attr('href', data.results[i].previewUrl);

                    //add tags to jumbotron
                    listItemPreview.append("  ",listItemPlayBtn);
                    listItem.append(listItemTrack, listItemPreview);
                    tracks.append(listItem);
                } 
            }

            if (weFoundAMatch) {
                $('#music-wrapper').removeClass('hide');
                $('#fail').addClass('hide')
            } else {
                $('#music-wrapper').addClass('hide');
                $('#fail').removeClass('hide')
            }

        })
};

//OMDb Search API fetch function ....need to pass movie title through function parameter
function omdbSearch(search) {
    var url = "https://www.omdbapi.com/?apikey="+API_KEY_OMDB+"&s="+search;

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
            $('#home-wrapper').addClass('hide');
            //loop to create card from movie search results
            for (let i = 0; i < data.Search.length; i++) {
                

                if(data.Search[i].Poster !==  "N/A"){
                    // Movie card elements
                    var movieWrapper = $('#movie-wrapper')
                    var movieCol = $("<div class='col-12 col-md-4 col-sm mb-3'>");
                    var movieCard = $("<div id='movieCard' class='card text-dark search-movie-card' style='width: 18rem; background-color:#60daff'>");
                    var movieCardTitle = $("<h5 class='card-title text-center'> ")
                    var movieCardBody = $("<img class='card-img-bottom' style='width:100%; height: 440px; object-fit: cover; border: black solid 2px'>");

                    //Creates eventlistener to select album based on movie 
                    movieCard.on("click", function(){
                    
                    var lowercaseTitle = data.Search[i].Title.toLowerCase()
                    musicSearch(data.Search[i].Year,  lowercaseTitle + " " + "Soundtrack");
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
};

function generateTitle(search) {
    for(var i = 0; i<search.length; i++){
        if(search[i]=== " "){
            search[i] = "+";
        }
    }
    return search.join('');
};

//submit on click of search button
searchMovieBtn.on('click', function() {
    var input = searchMovieInput.val().trim();
    console.log(input);
    var searchTitle = generateTitle(Array.from(input));
    omdbSearch(searchTitle);
});

//submit on enter button hit
$('#form-search').on('submit', function(event) {
    event.preventDefault();

    var input = searchMovieInput.val().trim();
    console.log(input);
    var searchTitle = generateTitle(Array.from(input));
    omdbSearch(searchTitle);
    searchMovieInput.val("");
    searchHistory(input);
});

function searchHistory(input) {
    if(input){
        if(movieSearchHistory.indexOf(input) === -1){
            movieSearchHistory.push(input)
            listArray();
        }
        else {
            var removeIndex = movieSearchHistory.indexOf(input);
            movieSearchHistory.splice(removeIndex,1);
            movieSearchHistory.push(input); 
            listArray();
        }
    }
};

function listArray() {
    searchHistoryList.empty();

    movieSearchHistory.forEach(function(input) {
        var searchHistoryItem = $('<li type="button" class="list-group-item btn btn-outline-danger btn-sm history-item" id="movie-btn">');
        searchHistoryItem.attr("data-value", input);
        searchHistoryItem.text(input);
        searchHistoryList.prepend(searchHistoryItem); 

        searchHistoryItem.on('click', function () {
            var historyItem = generateTitle(Array.from(searchHistoryItem.text()));
            console.log(historyItem); 
            omdbSearch(historyItem);
            searchHistory(searchHistoryItem.text());
        });
    }); 

    //sets input into local storage and places into and array 
    window.localStorage.setItem("input", JSON.stringify(movieSearchHistory));
    console.log("input", movieSearchHistory);
};

function getHistory() {

    movieList = JSON.parse(localStorage.getItem("input"));
    console.log(movieList);
    movieSearchHistory = movieList
    listArray();
    
};

clearHistoryBtn.on("click", function () {
    localStorage.clear();
    movieSearchHistory = [];
    listArray();
});

//show and hide history toggle button
showHistoryBtn.on("click", function () {

    //check if search history exists when page loads
   getHistory();

   if (searchHistoryList.data("toggle") === "hide") {
       showHistoryBtn.text("Hide History");
       searchHistoryList.data("toggle", "show");
       searchHistoryList.removeClass("d-none");
   }
   else {
    showHistoryBtn.text("Show History");
    searchHistoryList.data("toggle", "hide");
    searchHistoryList.addClass("d-none");
   }
});