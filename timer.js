$(function(){

	  // Long talk
		$('a#start').click(function(){
			  $('.finish').hide();
        $('.heading').hide();
		    $('#timer').pietimer({
			      seconds: 20,          // 45mins = 2700seconds
			      color: 'rgba(0, 0, 200, 0.8)',
			      height: 200,
			      width: 200,
				    is_reversed: true
		    },
		                         function(){
			                           $('.finish').show('slow');
		                         });
			  $('#timer').pietimer('start');
			  return false;
		});

    // Short talks
		$('a#start_short').click(function(){
			  $('.finish').hide();
        $('.heading').hide();
		    $('#timer').pietimer({
			      seconds: 2,          // 15mins = 900seconds
			      color: 'rgba(0, 200, 0, 0.8)',
			      height: 200,
			      width: 200,
				    is_reversed: true
		    },
		                         function(){
			                           $('.finish').show('slow');
		                         });
			  $('#timer').pietimer('start');
			  return false;
		});

    // Both
		$('a#pause').click(function(){
			  $('#timer').pietimer('pause');
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
