

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
  element.classList.toggle("dark-theme");
  console.log("test");
  
  var str = "true";
  localStorage.setItem("dark-theme", str);
}

let darkMode = localStorage.getItem("dark-theme");
console.log(parseInt(darkMode));

if (darkMode === str) {
  console.log("t")
  // var element = document.body;
  // element.classList.toggle("dark-theme");
  dark();
}




// scrollbar
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if ((changeInfo.status == 'loading' || changeInfo.status == 'complete') && tab.active) {
    // check if is reddit page
    if (tab.url.indexOf('reddit.com') > -1) {
      // insert css
      const css = 'body { background-color: var(--newCommunityTheme-canvas); }';
      chrome.scripting.insertCSS({ target: { tabId: tabId }, css: css, });
    }
  }
}); 

