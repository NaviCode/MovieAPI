$(document).ready(function () {
    $('#searchSubmit').click(function(){
        var movie = $('#movie').val();
        getMovieData(movie);

    });

    function getMovieData(movie){
        $('#movieResults').empty();        
        var searchString = "https://www.omdbapi.com/?s="+movie+"&r=json";
        $.get(searchString,function(data,status){
            var results = data['Search']
            showResults(results);
        })
    };

    function showResults(results){
        for(var i in results){
            $('#movieResults').append(results[i]['Title'] + '<br>');
        }
    };
});
