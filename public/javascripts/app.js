$(document).ready(function(){
    var $shoutouts = $('#shoutouts');
    getShoutouts();

    $('.carousel').carousel();

    function displayShoutout(obj){

        obj.forEach(function(elem){
            var $name = $('<div>').text(elem.name).attr('data-id', elem.id);
            if (elem.id == 1){
                $name.attr('class', 'item active');
            } else {
                $name.attr('class', 'item');
            }
            var $liMessage = $('<li>').text(elem.message);
            $name.append($liMessage);
            $shoutouts.append($name);
        });
    }

    function getShoutouts(id){
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/shoutouts/' + id,
            complete: function(){
                console.log('Ajax Complete!');
            },
            success: function(data){
                displayShoutout(data);
            },
            error: function(req, errorType, errorMessage){
                console.log('There was an error: ', errorMessage);
            }
        });
    }

});



