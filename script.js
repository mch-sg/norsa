// const popup = document.querySelector('.popup');
// const close = document.querySelector('.close');

//    function openPopup() {
//      window.location.hash = 'openModal'; 
//     popup.style.display = 'block';  
//   }

// //  window.onload = openPopup();

// close.addEventListener('click', () => {
//   popup.style.display = 'none';
// })




window.addEventListener("load", function(){
  setTimeout(
      function open(event){
          document.querySelector(".popup").style.display = "block";
      },
      000
  )
});
document.querySelector("#close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
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

if (darkMode === str) {
  console.log("t")
   var element = document.body;
   element.classList.toggle("dark-theme");
  // dark();
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






let buttons = document.querySelectorAll('.navhov');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    buttons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});
