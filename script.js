

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

  localStorage.setItem("dark-theme", "enabled");
}

let darkMode = localStorage.getItem("dark-theme");

if (darkMode === "enabled") {
  dark(); // set state of darkMode on page load
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

