const audio = new Audio();
let imgBox = document.querySelector('.imgBox');
let slides = imgBox.getElementsByTagName('img');
let play = document.querySelector('.play');
let video = document.querySelector('.video');
let main = document.querySelector('.main');
let home = document.querySelector('.home');
let about = document.querySelector('.about');
let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');
let fourth = document.querySelector('.fourth');
let fifth = document.querySelector('.fifth');
let isPlay = false
let i = 0;

function prevSlide() {
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('active');
}

function nextSlide() {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
}

let contentBox = document.querySelector('.contentBox');
let slidesText = contentBox.getElementsByTagName('div');
let j = 0;

function prevSlidetext() {
    slidesText[j].classList.remove('active');
    j = (j - 1 + slidesText.length) % slidesText.length;
    slidesText[j].classList.add('active');
}

function nextSlidetext() {
    slidesText[j].classList.remove('active');
    j = (j + 1) % slidesText.length;
    slidesText[j].classList.add('active');
}




play.addEventListener('click', function(event){
    if (event.target.classList.contains('play')) {
        event.target.classList.toggle('pause');
        if (!isPlay) {
            isPlay = true;
            about.classList.remove('menu_link_play');
            main.classList.remove('main_about');
            first.classList.remove('menu_link_play');
            main.classList.remove('main_first');
            second.classList.remove('menu_link_play');
            main.classList.remove('main_second');
            third.classList.remove('menu_link_play');
            main.classList.remove('main_third');
            fourth.classList.remove('menu_link_play');
            main.classList.remove('main_fourth');
            fifth.classList.remove('menu_link_play');
            main.classList.remove('main_fifth');
            audio.src = 'audio/Another.mp3';
            audio.currentTime = 0;
            audio.play();
        } else {
            video.src = '';
            isPlay = false;
            audio.pause();
            home.classList.remove('menu_link_play');
        }
    }
})


about.addEventListener('click', function(event){
    if (event.target.classList.contains('about')) {
        event.target.classList.add('menu_link_play');
        play.classList.add('pause');
        main.classList.add('main_about');
        play.classList.remove('menu_link_play');
        main.classList.remove('main_play');
        first.classList.remove('menu_link_play');
        main.classList.remove('main_first');
        second.classList.remove('menu_link_play');
        main.classList.remove('main_second');
        third.classList.remove('menu_link_play');
        main.classList.remove('main_third');
        fourth.classList.remove('menu_link_play');
        main.classList.remove('main_fourth');
        fifth.classList.remove('menu_link_play');
        main.classList.remove('main_fifth');
        audio.src = 'audio/спокойствие.mp3';
        isPlay = true;
        audio.currentTime = 0;
        audio.play();
    }
})

first.addEventListener('click', function(event){
    if (event.target.classList.contains('first')){
        event.target.classList.add('menu_link_play');
        play.classList.add('pause');
        main.classList.add('main_first');
        video.src = 'video/Loreen.mp4'
        about.classList.remove('menu_link_play')
        main.classList.remove('main_about')
        play.classList.remove('menu_link_play')
        main.classList.remove('main_play')
        second.classList.remove('menu_link_play');
        main.classList.remove('main_second');
        third.classList.remove('menu_link_play');
        main.classList.remove('main_third');
        fourth.classList.remove('menu_link_play');
        main.classList.remove('main_fourth');
        fifth.classList.remove('menu_link_play');
        main.classList.remove('main_fifth');
        audio.src = 'audio/Loreen.mp3'
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
    }
})


second.addEventListener('click', function(event){
    if (event.target.classList.contains('second')){
        event.target.classList.add('menu_link_play');
        play.classList.add('pause');
        main.classList.add('main_second');
        video.src = 'video/Foureira.mp4'
        about.classList.remove('menu_link_play')
        main.classList.remove('main_about')
        play.classList.remove('menu_link_play')
        main.classList.remove('main_play')
        first.classList.remove('menu_link_play');
        main.classList.remove('main_first');
        third.classList.remove('menu_link_play');
        main.classList.remove('main_third');
        fourth.classList.remove('menu_link_play');
        main.classList.remove('main_fourth');
        fifth.classList.remove('menu_link_play');
        main.classList.remove('main_fifth');
        audio.src = 'audio/Fuego.mp3'
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
    }
})

third.addEventListener('click', function(event){
    if (event.target.classList.contains('third')){
        event.target.classList.add('menu_link_play');
        play.classList.add('pause');
        main.classList.add('main_third');
        video.src = 'video/Laurence.mp4'
        about.classList.remove('menu_link_play')
        main.classList.remove('main_about')
        play.classList.remove('menu_link_play')
        main.classList.remove('main_play')
        first.classList.remove('menu_link_play');
        main.classList.remove('main_first');
        second.classList.remove('menu_link_play');
        main.classList.remove('main_second');
        fourth.classList.remove('menu_link_play');
        main.classList.remove('main_fourth');
        fifth.classList.remove('menu_link_play');
        main.classList.remove('main_fifth');
        audio.src = 'audio/Laurence.mp3'
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
    }
})

fourth.addEventListener('click', function(event){
    if (event.target.classList.contains('fourth')){
        event.target.classList.add('menu_link_play');
        play.classList.add('pause');
        main.classList.add('main_fourth');
        video.src = 'video/Lordi.mp4'
        about.classList.remove('menu_link_play')
        main.classList.remove('main_about')
        play.classList.remove('menu_link_play')
        main.classList.remove('main_play')
        first.classList.remove('menu_link_play');
        main.classList.remove('main_first');
        second.classList.remove('menu_link_play');
        main.classList.remove('main_second');
        third.classList.remove('menu_link_play');
        main.classList.remove('main_third');
        fifth.classList.remove('menu_link_play');
        main.classList.remove('main_fifth');
        audio.src = 'audio/Lordi.mp3'
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
    }
})

fifth.addEventListener('click', function(event){
    if (event.target.classList.contains('fifth')){
        event.target.classList.add('menu_link_play');
        play.classList.add('pause');
        main.classList.add('main_fifth');
        video.src = 'video/Nocturne.mp4'
        about.classList.remove('menu_link_play')
        main.classList.remove('main_about')
        play.classList.remove('menu_link_play')
        main.classList.remove('main_play')
        first.classList.remove('menu_link_play');
        main.classList.remove('main_first');
        second.classList.remove('menu_link_play');
        main.classList.remove('main_second');
        third.classList.remove('menu_link_play');
        main.classList.remove('main_third');
        fourth.classList.remove('menu_link_play');
        main.classList.remove('main_fourth');
        audio.src = 'audio/Nocturne.mp3'
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
    }
})

