$(function(){
    is_paused = false;

    talk = function(duration, red, green, blue){
			  $('.finish-screen').hide();
        $('.heading').hide();
		    $('#timer').pietimer({
			      seconds: duration,          // 45mins = 2700seconds
			      color: 'rgba('+ red + ','+ green +' , '+ blue +', 0.8)',
			      height: 200,
			      width: 200,
				    is_reversed: true
		    },
		                         function(){
			                           $('.finish-screen').show('slow');
		                         });
			  $('#timer').pietimer('start');
    }
    
	  // Long talk
		$('a#start').click(function(){
        talk(2700, 0, 0, 200);
			  return false;
		});

    // Short talks
		$('a#start_short').click(function(){
        talk(900, 0, 200, 0);
			  return false;
		});

    // Both
		$('a#pause').click(function(){
        if(is_paused){
            $('.pause-screen').hide();
			      $('#timer').pietimer('start');
            is_paused = false;
        }else{
            $('.pause-screen').show();
			      $('#timer').pietimer('pause');
            is_paused = true;
        }
			  return false;
		});

		$('a#stop').click(function(){
			  $('#timer').hide();
			  return false;
		});

    $('a#restart').click(function(){
        location.reload()
        return false;
    })
		
});
