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
