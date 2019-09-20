

// animations for the videos options

var videoTumb = document.querySelectorAll(".vd-tumb");

for (let i = 0; i < videoTumb.length; i++) {

    videoTumb[i].addEventListener("mouseover", function () {
        // alert("i got click");
        videoTumb[i].querySelector("img").style.opacity = "0.4";
        videoTumb[i].querySelector(".vid-container-option").style.visibility = "visible";
    });

    videoTumb[i].addEventListener("mouseout", function () {
        // alert("i got click");
        videoTumb[i].querySelector("img").style.opacity = "1";
        videoTumb[i].querySelector(".vid-container-option").style.visibility = "hidden";
    });
}

// control for the video library section carousel

var arrows = document.querySelectorAll(".arrow");

for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("mouseover", function() {
        var listVideos = document.querySelector(".videos-list");
        if (arrows[i].classList.contains("ar-left")) {
            alert("this is the left arrow!");
        } else if (arrows[i].classList.contains("ar-right")) {
            alert("this is the right arrow!")
        }
    });
    
}