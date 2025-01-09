
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 150)
});

window.addEventListener("scroll", function(){
    let header = document.querySelector('#hamburger')
    header.classList.toggle('rolagem',window.scrollY > 150)
});

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("hamburger");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }