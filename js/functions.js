// Top bar function to close button 
function closeBtn() {
  let topBar = document.getElementById("topBar");
  topBar.remove();
}
// Navigation menu toggler function
function togglemenu() {
  let x = document.getElementById("navBar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}