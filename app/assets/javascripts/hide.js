$(document).ready(function(){
  hideWhenClicked();
})

function hideWhenClicked(){
  $('#hide_this').addEventListener('click', function(){
    this.remove();
  })
}
