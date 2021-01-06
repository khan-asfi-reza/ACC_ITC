"use strict";var hamburger=document.querySelector(".hamburger");var navLinks=document.querySelector(".nav-links");var links=document.querySelectorAll(".nav-links li");hamburger.addEventListener("click", function (){hamburger.classList.toggle('open'); navLinks.classList.toggle("open"); links.forEach(function (link){link.classList.toggle("fade");});});document.addEventListener('DOMContentLoaded', function (event){var dataText=["Adamjee Cantonment College IT Club", " "]; function typeWriter(text, i, fnCallback){if (i < text.length){document.querySelector(".type-writer").innerHTML=text.substring(0, i + 1) + '<span class="type-writer-span" aria-hidden="true"></span>';setTimeout(function (){typeWriter(text, i + 1, fnCallback);}, 300);}else if (typeof fnCallback=='function'){setTimeout(fnCallback, 700);}}function StartTextAnimation(i){if (typeof dataText[i]=='undefined'){setTimeout(function (){StartTextAnimation(0);}, 2000);}if (i < dataText[i].length){typeWriter(dataText[i], 0, function (){StartTextAnimation(i + 1);});}}StartTextAnimation(0);});var introImage=function introImage(){var intro_images=document.querySelectorAll('.itb-img'); var current_class=null; var next_class=null; for (var i=0; i < intro_images.length; i++){var className=intro_images[i].classList[0]; if (i===0){current_class=className; intro_images[i].classList.remove(current_class);}else{next_class=className; intro_images[i].classList.remove(next_class); intro_images[i].classList.add(current_class); current_class=next_class; if (i===intro_images.length - 1){intro_images[0].classList.add(current_class);}}}};document.addEventListener('DOMContentLoaded', function (){setInterval(introImage, 5000);});startImageTransition();function startImageTransition(){var images=document.getElementsByClassName("test"); for (var i=0; i < images.length; ++i){images[i].style.opacity=1;}var top=1; var cur=images.length - 1; setInterval(changeImage, 3000); async function changeImage(){var nextImage=(1 + cur) % images.length; images[cur].style.zIndex=top + 1; images[nextImage].style.zIndex=top; await transition(); images[cur].style.zIndex=top; images[nextImage].style.zIndex=top + 1; top=top + 1; images[cur].style.opacity=1; cur=nextImage;}function transition(){return new Promise(function (resolve, reject){var del=0.01; var id=setInterval(changeOpacity, 10); function changeOpacity(){images[cur].style.opacity -=del; if (images[cur].style.opacity <=0){clearInterval(id); resolve();}}});}}var isInViewport=function isInViewport(elem){var distance=elem.getBoundingClientRect(); return distance.top >=0 && distance.left >=0 && distance.bottom <=(window.innerHeight || document.documentElement.clientHeight) && distance.right <=(window.innerWidth || document.documentElement.clientWidth);};var viewport_functions=[{dom: document.getElementById('sector_header'), function: function _function(){document.getElementById('sector').classList.add('sector-animated');}},{dom: document.getElementById('event_header'), function: function _function(){document.getElementById('event_section').classList.add('sector-animated');}},{dom: document.getElementById('introduction_header'), function: function _function(){document.getElementById('introduction').classList.add('sector-animated');}},{dom: document.getElementById('our_team_header'), function: function _function(){document.getElementById('our_team').classList.add('sector-animated');}}];var onViewPort=function onViewPort(element, callback){window.addEventListener('scroll', function (event){if (isInViewport(element)){callback();}}, false);};(function f(){viewport_functions.forEach(function (each){onViewPort(each.dom, each.function);});})();var member=0;var exec=0;var event=0;var workshop=0;var numberCounter=document.getElementById('member');var execCounter=document.getElementById('exec');var eventCounter=document.getElementById('event');var workshopCounter=document.getElementById('workshop');onViewPort(document.getElementById('number_counter'), function (){function increaseMember(breakpoint, dom){if (member < breakpoint){member +=10; dom.innerHTML="+".concat(member, "<br/>Members");}}function increaseExec(breakpoint, dom){if (exec < breakpoint){exec +=1; dom.innerHTML="+".concat(exec, "<br/>Executives");}}function increaseEvent(breakpoint, dom){if (event < breakpoint){event +=1; dom.innerHTML="+".concat(event, "<br/>Events");}}function increaseWorkshop(breakpoint, dom){if (workshop < breakpoint){workshop +=10; dom.innerHTML="+".concat(workshop, "<br/>Workshops");}}var interval=setInterval(function (){increaseMember(500, numberCounter); increaseExec(50, execCounter); increaseEvent(50, eventCounter); increaseWorkshop(100, workshopCounter); if (member===500 && exec===50 && event===50 && workshop===100){clearInterval(interval);}}, 10);});document.getElementById('learn_more').addEventListener('click', function (){document.getElementById('introduction').scrollIntoView();});