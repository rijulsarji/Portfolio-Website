function oppen(el){
    var elem = document.getElementById(el);
    elem.style.transition = "right 0.5s linear";
    elem.style.right = "0px";
}
function closse(el){
    var elem = document.getElementById(el);
    elem.style.transition = "right 0.5s linear";
    elem.style.right = "-30vw";
}

