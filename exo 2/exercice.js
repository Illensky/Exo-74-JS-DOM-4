let catPic = document.getElementById("cat-pic");
let onCatClick = function(e) {
    var stashePic = document.getElementById("mustache-pic");
    stashePic.style.left = (event.clientX).toString() + "px";
    stashePic.style.top = (event.clientY).toString() + "px";;
};

catPic.addEventListener("click", onCatClick);








