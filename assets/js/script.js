
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


//Spotify Search API fetch function ....need to pass movie title through function parameter
// function musicSearch() {
//     var url = ""

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

// musicSearch();

//Spotify Search API fetch function ....need to pass movie title through function parameter
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
        })
    
}
omdbSearch();

function generateTitle(search) {
    for(var i = 0; i<search.length; i++){
        if(search[i]=== " "){
            search[i] = "+";
        }
    }
    console.log(search.join(''));
}

generateTitle(Array.from("The Invisible Man"));