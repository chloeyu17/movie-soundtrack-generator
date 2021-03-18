//Global scope of variables for easy access

//search
var searchMovieBtn = $('#search-movie-btn')
var searchMovieInput = $('#search-movie')

//Results area variables
var songName = $('#song-name')
var composerName = $('#composer')
var movieName = $('#movie-name')




//Spotify Search API fetch function ....need to pass movie title through function parameter
function spotifySearch() {
    var url = "https://api.spotify.com/v1/search"

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
    
}

spotifySearch();