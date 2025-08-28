const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
/* slide Bar */
    function openNav() {
    document.getElementById("mysidebar").style.left = "0";
    document.getElementById("overlay").style.display = "block";
  }
 function closeNav() {
   document.getElementById("mysidebar").style.left = "-250px"
   document.getElementById("overlay").style.display = "none"
 }
 /* img */
 window.onload = function() {
  const myImage = document.getElementById("myImage");
  const overlay = document.getElementById("overlay");
  const fullscreenImg = document.getElementById("fullscreenImg");
 myImage.onclick = function () {
  fullscreenImg.src = this.src;
  fullscreenImg.style.display = "block"; // make it visible
  overlay.style.display = "flex";
};
function closeImage() {
  overlay.style.display = "none";
  fullscreenImg.style.display = "none";
  fullscreenImg.src = ""; // reset
}
};
/* cookies */
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function acceptCookies() {
  setCookie("cookieConsent", "true", 365);
  document.getElementById("cookieConsent").style.display = "none";
}

window.onload = function() {
  if (!getCookie("cookieConsent")) {
    document.getElementById("cookieConsent").style.display = "block";
  }
};

document.getElementById('searchButton').addEventListener('click', function() {
    let searchQuery = document.getElementById('searchInput').value.toLowerCase();
    let articles = document.querySelectorAll('.blog-container');

    articles.forEach(function(article) {
        let title = article.querySelector('.title').innerText.toLowerCase();
        let content = article.querySelector('p').innerText.toLowerCase();
        let tags = Array.from(article.querySelectorAll('.tags span')).map(tag => tag.innerText.toLowerCase()).join(' ');

        if (title.includes(searchQuery) || content.includes(searchQuery) || tags.includes(searchQuery)) {
            article.parentElement.style.display = 'block';
        } else {
            article.parentElement.style.display = 'none';
        }
    });
});
