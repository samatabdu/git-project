<h1>HTML5 &lt;dialog&gt; Element</h1>
<p id="result">Click on the button to open modal</p>
<button id="openButton">Open Modal</button>

<!-- element -->
<dialog id="confirmationDialog">
  <!-- content -->
  <button aria-label="Close modal" id="buttonCloseX">✖</button>
  
  <h1>Modal message here</h1>
  <p>Are you sure to confirm this action?</p>
  
  <input type="text" name="title"/>
  <input type="text" name="description"/>
  
  <button id="buttonOk">Confirm</button>
  <button id="buttonClose">Close</button>
</dialog>