$(".openbtn").click(function () {
  $(this).toggleClass('active');
});

document.querySelector('.openbtn').addEventListener('click', function() {
  document.querySelector('.menu-items').classList.toggle('active');
});