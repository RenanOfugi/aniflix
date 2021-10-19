$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'uMYhjVwp0Fk',
        events: {
            'onReady': onPlayerReady,
        }
    });
}

const modal = document.querySelector(".modal");
const trigger = document.querySelector("#botao-assistir");
const closeButton = document.querySelector(".close-button");

function toggleModalOpen() {
    modal.classList.toggle("show-modal");
    player.playVideo()
}

function toggleModalClose() {
    modal.classList.toggle("show-modal");
    stopVideo()
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModalOpen);
closeButton.addEventListener("click", toggleModalClose);
window.addEventListener("click", windowOnClick);

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

function stopVideo() {
    player.stopVideo();
}

