$(document).ready(function(){
    var $shoutout = $('#shoutout');
    var id = 1;
    getShoutout(id);

    $shoutout.on('click', '#next',function(){
        $(this).parent().empty();
        if(currentId == 18){
            getShoutout(1);
        } else {
            getShoutout(currentId + 1);
        }
    });

    $shoutout.on('click', '#prev',function(){
        $(this).parent().empty();
        if(currentId == 1){
            getShoutout(18);
        } else {
            getShoutout(currentId - 1);
        }
    });

    function displayShoutout(obj){
        currentId = parseInt(obj.id);

        var $nameh2 = $('<h2>');
        var $message = $('<p>');
        var $prev = $('<button>').text('Previous').attr('id', 'prev');
        var $next = $('<button>').text('Next').attr('id', 'next');

        $message.text(obj.message);
        $nameh2.text(obj.name);
        $shoutout.append($nameh2).append($message).append($prev).append($next);

        return currentId;

    }

    function getShoutout(id){
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/shoutouts/' + id,
            complete: function(){
                console.log('Ajax Complete!');
            },
            success: function(data){
                console.log(data);
                displayShoutout(data);
            },
            error: function(req, errorType, errorMessage){
                console.log('There was an error: ', errorMessage);
            }
        });
    }

});



