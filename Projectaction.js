

"use strict";

//for the scrolle feature 
window.addEventListener('scroll', () =>{
    const scrollable = document.documentElement.scrollHeight -window.innerHeight; //document - window
    const scrolled = window.scrollY; //how much we have scrolled

    if(Math.ceil(scrolled)===scrollable){
        alert('Bottom of the page');
    }

});


//for the show/hide button
var show_hide = $("#show-hide");

var toggleButton = $("#toggleButton");

toggleButton.on("click", function() {
    show_hide.toggle(500);
        
    if(toggleButton.text() == "Hide")
    toggleButton.text("Show");

    else
    toggleButton.text("Hide");
});


//for the hover feature
toggleButton.hover(function() {
    $(this).css("background-color", "rgb(22, 11, 85)");
}, function() {
    $(this).css("background-color", "rgb(177, 19, 8)");

});

