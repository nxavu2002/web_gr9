let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let reg = document.querySelector('#reg_form')
let registerForm = document.querySelector('.register-form-container')
let videoBtn = document.querySelectorAll('.vid-btn');
const form = document.querySelector('.Form')


// Tìm kiếm
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

// Đăng nhập
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});
reg.addEventListener('click',() => {
    loginForm.classList.remove('active');
})

// Đăng ký

reg.addEventListener('click',() => {
    registerForm.classList.add('active');
})
formClose.addEventListener('click', () =>{
    registerForm.classList.remove('active');
});


// video
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});


// Phần slider
var swiper = new Swiper(".aboutus-slider", {
    spaceBetween: 15,
    loop:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

// Phần slider
var swiper = new Swiper(".hotel-slider", {
    spaceBetween: 15,
    loop:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

// backtop
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#backtop').fadeIn();
        } else {
            $('#backtop').fadeOut();
        }
    })
    $("#backtop").click(function() {
        $('html, body').animate({
            scrollTop:0
        }, 500);
    });
});