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