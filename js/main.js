console.log('initialize....');

var modal = document.getElementById('modal'),
    bg = document.getElementById("modal-backdrop")

showModal();

// modal
function showModal(){
  modal.style.display = "block";
  bg.style.display = "block";
}

function hideModal(){
  modal.style.display = "none";
  bg.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        bg.style.display = "none";
    }
}

$(document).ready(function(){

  $('.toggle-slide.head').click(function(){
    var t = $(this).attr('target');

    $(t).slideToggle(400);
    $(this).find('.fa').toggleClass(function(){
      return $(this).is('.fa-angle-down, .fa-angle-up') ? 'fa-angle-down fa-angle-up' : 'fa-angle-down';
    });
  });

});
