let scrollingBox;
let offsetLeftStart;
let isMoving;

document.addEventListener("DOMContentLoaded", function(){
    scrollingBox = document.querySelector("#futureInfo");
    isMoving = false;

    scrollingBox.addEventListener("mousedown",function(e){
        scrollLeftStart = scrollingBox.scrollLeft;
        offsetLeftStart = e.pageX - scrollingBox.offsetLeft;
        isMoving = true;
    });

    scrollingBox.addEventListener("mouseleave", function(e){
        isMoving = false;
    })
    scrollingBox.addEventListener("mousemove", function(e) {
        e.preventDefault();
        if(!isMoving) return;
        scrollingBox.scrollLeft = scrollLeftStart - (e.pageX - scrollingBox.offsetLeft - offsetLeftStart);
    });
});