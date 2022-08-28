

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var stickee = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > stickee) {
    header.classList.add("stickee");
  } else {
    header.classList.remove("stickee");
  }
}



document.getElementById('dark-theme').addEventListener('click', () => {
    document.documentElement.style.setProperty('--background-color', '#000')
} )

document.getElementById('light-theme').addEventListener('click', () => {
    document.documentElement.style.setProperty('--background-color', '#fff')
} ) 


$(".flexbox-item").click(function () {
    window.open(
      'https://www.google.com/',
      '_blank'
    );
});

$("a").click(function (event) {
    event.stopPropagation();
});