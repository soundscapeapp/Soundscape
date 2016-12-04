$('.test').on('click', function(){
	console.log('test');
});

var lyric = '';

$.get('/api/lyric', function(data){
    lyric = data;

$('#container').append('<div class="quote">' + '<p>' + lyric + '</p>' + '</div>');

});

