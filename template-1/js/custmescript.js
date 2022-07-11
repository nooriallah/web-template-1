
$("#btnNavbarToggler").click(() => {
    $("#menu1").toggle(200);
    // alert("something");
})

window.onscroll = () => {
    $("#menu1").slideUp(200);
}

// slider 
const myCarouselElement = document.querySelector('#slide1')
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    wrap: true,
});
console.log(myCarouselElement);
