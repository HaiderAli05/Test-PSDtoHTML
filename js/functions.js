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

// Render HTML template-part (Top Bar) by using AJAX
function getTopbar() {
  const xhr = new XMLHttpRequest();
  let topbar = document.getElementById("topBar");

  xhr.onload = function () {
    if (this.status === 200) {
      topbar.innerHTML = xhr.responseText;
    } else {
      console.warn("Did not recieve 200 OK from response!");
    }
  }
  xhr.open("get", "template-parts/topbar.html", true);
  xhr.send();
}
// Render HTML template-part (Header) by using AJAX
function getHeader() {
  const xhr = new XMLHttpRequest();
  let header = document.getElementById("header");

  xhr.onload = function () {
    if (this.status === 200) {
      header.innerHTML = xhr.responseText;
    } else {
      console.warn("Did not recieve 200 OK from response!");
    }
  }
  xhr.open("get", "template-parts/header.html", true);
  xhr.send();
}
// Render HTML template-part (Homepage) by using AJAX
function getHomepage() {
  const xhr = new XMLHttpRequest();
  let homepage = document.getElementById("homepage");

  xhr.onload = function () {
    if (this.status === 200) {
      homepage.innerHTML = xhr.responseText;
    } else {
      console.warn("Did not recieve 200 OK from response!");
    }
  }
  xhr.open("get", "template-parts/homepage.html", true);
  xhr.send();
}
// Render HTML template-part (Footer) by using AJAX
function getFooter() {
  const xhr = new XMLHttpRequest();
  let footer = document.getElementById("footer");

  xhr.onload = function () {
    if (this.status === 200) {
      footer.innerHTML = xhr.responseText;
    } else {
      console.warn("Did not recieve 200 OK from response!");
    }
  }
  xhr.open("get", "template-parts/footer.html", true);
  xhr.send();
}


getTopbar();
getHeader();
getHomepage();
getFooter();