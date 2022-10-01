var photoWrap = document.getElementById("photos");
var photo = document.getElementsByClassName("photo");
var deg = 0;
photoWrap.addEventListener("click", function(e) {
　　var deg2 = 360 / photo.length;
　　deg += deg2;
　　this.style.webkitTransform = "rotateY(" + deg + "deg)";
});