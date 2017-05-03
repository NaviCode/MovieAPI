$(document).ready(function () {
    $('#searchSubmit').click(function(){
        $('#movieResults').empty();
        var search = $('#movie').val();
        var apiEndPoint = "https://www.omdbapi.com/?s="+search+"&r=json";
        $.get(apiEndPoint,function(data,status){
            var results = data['Search'];
            for(var i in results){
                console.log(results[i]['Title'])
                $('#movieResults').append(results[i]['Title'] + '<br>');
            }
        })
    })
})
//test