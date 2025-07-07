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

(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/30/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());