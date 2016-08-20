$(function(){
	  
		$('#timer').pietimer({
			  seconds: 2,          // 45mins = 2700seconds
			  color: 'rgba(0, 0, 0, 0.8)',
			  height: 400,
			  width: 400,
				is_reversed: true
		},
		                     function(){
			                      $('.finish').show('slow');
		                    });
		
		$('a#start').click(function(){
			  $('.finish').hide();
			  $('#timer').pietimer('start');
			  return false;
		});
		$('a#pause').click(function(){
			  $('#timer').pietimer('pause');
			  return false;
		});
    $('a#restart').click(function(){
        $('.finish').hide();
        return false;
    })
		
});
