

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");


$(".flexbox-item").click(function () {
    window.open(
      'https://www.google.com/',
      '_blank'
    );
});

$("a").click(function (event) {
    event.stopPropagation();
});


// dark mode
function dark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  console.log("test");
}