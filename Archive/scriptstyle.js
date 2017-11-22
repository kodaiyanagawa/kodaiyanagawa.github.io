$('demoreelbutton').click(function() {
  $('#demoreelmodal').fadeIn(function() {  
    $('#demoreellink').attr('src', 'https://player.vimeo.com/video/202174201' + $(this).data('src') + '?autoplay=1');
  }.bind(this));
});
$('#demoreelclose').click(function(){
  $('#demoreelmodal').fadeOut(function() {
    $('#demoreellink').attr('src', '');
  });
});
$(document).on('click', '.close_link a', function() {
  $('#demoreelmodal').fadeOut(function() {
    $('#demoreellink').attr('src', '');
  });
  return false;
});  




var modal = document.getElementById('demoreelmodal');

var img = document.getElementById('demoreelbutton');
var ifrm = document.getElementById("demoreellink");
var captionText = document.getElementById("demoreelcaption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

span.onclick = function pause() {
  $('#demoreellink').attr("src","");
  modal.style.display = "none";
  return false;
}


//-------------------------------------------//サムネイルクリックでリンク先のページの内容を表示
$('.contents-block').each(function(){
  var page = $(this).attr('data');

  $(this).click(function(){
    $(this).addClass('now');
    ajax(page);
    $('#ajax').after('<div id="cover"></div>');
  });

});

$('#demoreellink').attr('src', 'https://player.vimeo.com/video/202174201' + $(this).data('src') + '?autoplay=1');
    $('#demoreellink').attr('src', 'https://player.vimeo.com/video/202174201', $('#demoreellink').attr('src', 'https://player.vimeo.com/video/202174201'));
    $('#demoreellink').attr('src', $('#demoreellink').attr('src'));


document.getElementById('some_frame_id').contentWindow.location.reload();