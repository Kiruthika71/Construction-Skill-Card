window.addEventListener("scroll", function() {
    var header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const accordion = document.querySelectorAll('.content-box');

for(i=0; i <accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}

var counter = 1;
setInterval(function() {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if(counter > 3) {
        counter =1;
    }
}, 5000);
