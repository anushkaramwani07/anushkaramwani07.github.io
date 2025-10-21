/*JS for responsive menu demo*/
//This says to wait untill the HTML page is loaded before running JS
//otherwise, it may try to find burger icon before it exists
document.addEventListener("DOMContentLoaded", function() {

  //respond to clicks on the burger icon

  //this will find the element named navBurger and listen for clicks
  document.querySelector("#navBurger").addEventListener("clicked", function(e){
    document.querySelector("nav").classList.toggle("clicked");

  });
});