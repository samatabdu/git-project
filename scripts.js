// elements IDs attribution
const openButton = document.querySelector("#openButton");
const confirmationDialog = document.querySelector("#confirmationDialog");
const buttonOk = document.querySelector("#buttonOk");
const buttonClose = document.querySelector("#buttonClose");
const buttonCloseX = document.querySelector("#buttonCloseX");
const result = document.querySelector("#result");

// open dialog
openButton.addEventListener("click", () => {
  // is supported
  if (typeof confirmationDialog.showModal === "function") {
    confirmationDialog.showModal();
  } else {
    // is not supported
    alert(
      "The dialog HTML5 API is not supported by this browser. Please, update."
    );
  }
});

function handleClose() {
  confirmationDialog.close();
  result.textContent = "Result: <dialog> was closed (click event)";
}

// button1
buttonOk.addEventListener("click", () => {
  confirmationDialog.close();
  result.textContent = "Result: <dialog> was confirmed! (click event)";
  // your confirm logic here...
});

// button2
buttonClose.addEventListener("click", () => {
  handleClose()
});

// button3
buttonCloseX.addEventListener("click", () => {
  handleClose()
});

// esc key
confirmationDialog.addEventListener("cancel", (event) => {
  result.textContent = "Result: <dialog> was canceled by ESC key press (cancel event)";
});

//elements 
const btnToggler = window.document.querySelector(".navbar-toggler"); 
const inputSearch = window.document.querySelector(".navbar-search"); 
const iconSearch = window.document.querySelector("#icon-search");
const navbar = window.document.querySelector(".navbar");

//events
btnToggler.addEventListener('click', () => {
    navbar.classList.toggle('active'); 
});

inputSearch.addEventListener('click', () => {
    if(!navbar.classList.contains("active")) {
        navbar.classList.add('active'); 
    }
});

iconSearch.addEventListener('click', () => {
    if(!navbar.classList.contains("active")) {
        navbar.classList.add('active'); 
    }
});


(function(){
  
  document.addEventListener('DOMContentLoaded', function(event) {

    var list = document.querySelectorAll('.make-snippet');

    [].forEach.call(list, function(el) {
      var snippet = el.innerHTML.replace(/</g,'&lt;');
          snippet = snippet.replace(/ /g,'&nbsp;');
      var code = '<pre class="language-markup"><code>'+snippet+'</pre></code>';
      el.insertAdjacentHTML('afterend',code);
    });
    
    // if your page has prism.js you get syntax highlighting
    if(window.Prism){
      Prism.highlightAll(false);
    }

  });

})();
