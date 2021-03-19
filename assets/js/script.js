var API_KEY_OMDB = "80c5dba2"
var API_KEY_MUSIXMATCH = "b8a7a5f08ebc8726a80091d40c2a0c86"

//Global scope of variables for easy access

//search
var searchMovieBtn = $('#search-movie-btn')
var searchMovieInput = $('#search-movie')

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
                

                // Movie card elements
                var movieWrapper = $('#movie-wrapper')
                var movieCol = $("<div class='col-12 col-md-6 col-sm mb-3'>");
                var movieCard = $("<div class='card text-white'>");
                var movieCardTitle = $("<h5 class='card-title'>")
                var movieCardBody = $("<div class='card-body'>");

                var movieImg = $("<img>");

                // create each card
                movieWrapper.append(movieCol);
                movieCol.append(movieCard);
                movieCard.append(movieCardTitle);
                movieCard.append(movieCardBody);
                movieCardBody.append(movieImg);

                //add info to cards
                movieCardTitle.text(data.Search[i].Title);
                movieImg.attr('src', data.Search[i].Poster);

                //If there are 5 cards stop loop
                if (i === 4)
                    break;
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

searchMovieBtn.on('click', function() {
    var input = searchMovieInput.val().trim();
    console.log(input);
    var searchTitle = generateTitle(Array.from(input));
    omdbSearch(searchTitle);
    //adds "soundtrack" to end of every search for music search
    musicSearch(searchTitle+ "+" + "soundtrack")
});

/*
var id 
var contentCards
var movieCards = $('#')

$('#search-movie-btn').on("click", function(){\

for (i = 0; i < data.length; i++) { 
            var id = data[i];
//making card elements 
var contentCards = $("<img>")
//Create each card
movieCards.append(contentCards)
//tags 
contentCards.attr(data.(apiimagelocation)
}
});
*/
