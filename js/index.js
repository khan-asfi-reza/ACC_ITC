const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

const isInViewport = function (elem) {
    const distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const onViewPort = (element, callback) => {
    window.addEventListener('scroll', function(event) {
        // add event on scroll

        if (isInViewport(element)) {
            //if in Viewport
            callback()
        }

    }, false);
};



document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    const dataText = ["Adamjee Cantonment College IT Club", " "];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.querySelector(".type-writer").innerHTML = text.substring(0, i+1) +'<span class="type-writer-span" aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 300);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
                StartTextAnimation(0);
            }, 2000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function(){
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0);
});


const introImage = () => {
    let intro_images = document.querySelectorAll('.itb-img');
    let current_class = null;
    let next_class = null;
    for(let i=0; i<intro_images.length; i++){
        let className = intro_images[i].classList[0];
        if(i === 0){
            current_class = className;
            intro_images[i].classList.remove(current_class);
        }else{
            next_class =  className;
            intro_images[i].classList.remove(next_class);
            intro_images[i].classList.add(current_class);
            current_class = next_class;
            if(i === intro_images.length - 1){
                intro_images[0].classList.add(current_class);
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', ()=>{
    setInterval(introImage, 5000)
});

let member = 0;
let exec = 0;
let event = 0;
let workshop = 0;
const numberCounter = document.getElementById('member');
const execCounter = document.getElementById('exec');
const eventCounter = document.getElementById('event');
const workshopCounter = document.getElementById('workshop');

onViewPort(document.getElementById('our_team'), ()=>{


    function increaseMember(breakpoint, dom) {
        if (member < breakpoint) {
            member+=10;
            dom.innerHTML = `+${member}<br/>Members`;
        }
    }
    function increaseExec(breakpoint, dom) {
        if (exec < breakpoint) {
            exec+=1;
            dom.innerHTML = `+${exec}<br/>Executives`;
        }
    }
    function increaseEvent(breakpoint, dom) {
        if (event < breakpoint) {
            event+=1;
            dom.innerHTML = `+${event}<br/>Events`;
        }
    }
    function increaseWorkshop(breakpoint, dom) {
        if (workshop < breakpoint) {
            workshop+=1;
            dom.innerHTML = `+${workshop}<br/>Members`;
        }
    }

    const interval =setInterval(()=>{
        increaseMember(500, numberCounter);
        increaseExec(50, execCounter);
        increaseEvent(50, eventCounter);
        increaseWorkshop(100, workshopCounter);
        if(member === 500 && exec === 50 && event === 50 && workshop === 100){
            clearInterval(interval);
        }
    }, 5);


});


