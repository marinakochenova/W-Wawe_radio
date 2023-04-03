// бургер меню

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav-ad')
let menu1 = document.querySelector('.nav-ad__list')
let menu2 = document.querySelector('.header-ad__list')
let menuLinks = document.querySelectorAll('.nav__link');
let menuSecondLinks = document.querySelectorAll('.header__link');

burger.addEventListener('click', function() {

    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__ad--active');
    menu.style.transition = ('visibility 0.3s ease-in-out, transform 0.3s ease-in-out;');
    document.body.classList.toggle('stop-scroll');
})

menu.addEventListener('transitionend', function(){
    if (!menu.classList.contains('header__nav--active')) {
         menu.removeAttribute('style')
    }
});

menuLinks.forEach(element => {
    element.addEventListener('click', function () {
        burger.classList.remove('burger--active'); 
        menu.classList.remove('header__ad--active');
        document.body.classList.remove('stop-scroll');
    })
})

menuSecondLinks.forEach(element => {
    element.addEventListener('click', function () {
        burger.classList.remove('burger--active'); 
        menu.classList.remove('header__ad--active');
        document.body.classList.remove('stop-scroll');
    })
})


// menu.addEventListener('transitionend', function(){
//     if (!menu.classList.contains('header__nav--active')) {
//         menu.removeAttribute('style')
//     }
// });

// menuSecond.addEventListener('transitionend', function(){
//     if (!menuSecond.classList.contains('header__list--active')) {
//         menuSecond.removeAttribute('style')
//     }
// });



// поиск

let search = document.querySelector('.header__search');
let form = document.querySelector('.header__open-form');
let btn = document.querySelector('.header__search-btn');

search.addEventListener('click',

function() {
    form.classList.toggle('header__open-form--active');
    document.body.classList.toggle('stop-scroll');

})

btn.addEventListener('click', 

function(){

        form.classList.remove('header__open-form--active');
        document.body.classList.remove('stop-scroll');

})

// авторизация

let btnLogin = document.querySelector('.login-desk');
let menuLogin = document.querySelector('.log');
let menuClose = document.querySelector('.login__close');
let btnAdLogin = document.querySelector('.login-ad');

btnLogin.addEventListener('click',

function() {
    menuLogin.classList.toggle('login--active');
    document.body.classList.toggle('stop-scroll');
})

btnAdLogin.addEventListener('click',

function() {
    menuLogin.classList.toggle('login--active');
    document.body.classList.toggle('stop-scroll');
})

menuClose.addEventListener('click', 

function() {
    menuLogin.classList.remove('login--active');
    document.body.classList.remove('stop-scroll');

})


//podcasts 

let like = document.querySelectorAll('.podc__numb');
like.forEach(e=>e.addEventListener('click', function (event) {
      let number = +event.target.textContent;
      number++;
      event.target.textContent = number;
   }
));

// select - choices

const element = document.querySelector('select');
const choices = new Choices(element, {
    searchEnabled: false,
});

// accordion 

new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active',
    openOnInit: [0],
    
});


// табы (смена элемента при нажатии на кнопку)

//broadcast

let sell = document.querySelectorAll('.broadcast__name');
let broadcast = document.querySelectorAll('.broadcast__list');

sell.forEach(function(element){
    element.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;

        sell.forEach(function(lbl){  lbl.classList.remove('broadcast__name--active')});
        e.currentTarget.classList.add('broadcast__name--active');
       
        broadcast.forEach(function(element){ element.classList.remove('broadcast__list--active')});
        document.querySelector(`[data-target=${path}]`).classList.add('broadcast__list--active');
    })
})

// guests 

let tabsBtn = document.querySelectorAll('.guests__link');
let tabsItem = document.querySelectorAll('.guests__cont1');

tabsBtn.forEach(function(element){
    element.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn){  btn.classList.remove('guests__link--active')});
        e.currentTarget.classList.add('guests__link--active');

        tabsItem.forEach(function(element){ element.classList.remove('guests__cont1--active')});
        document.querySelector(`[data-target=${path}]`).classList.add('guests__cont1--active');
    })
});

//playlists

let tabsLabel = document.querySelectorAll('.playlists__label');
let tabsCont = document.querySelectorAll('.playlists__content');

tabsLabel.forEach(function(el){
    el.addEventListener('click', function(et){
        const path = et.currentTarget.dataset.path;

        tabsLabel.forEach(function(lbl){  lbl.classList.remove('playlists__label--active')});
        et.currentTarget.classList.add('playlists__label--active');

        tabsCont.forEach(function(el){ el.classList.remove('playlists__content--active')});
        document.querySelector(`[data-target=${path}]`).classList.add('playlists__content--active');
    })
})

//playlists - swiper 

const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 30,
    effect: 'coverflow',
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoHeight: true,

  });

   // swiper-playlists for 320px
   const swiperOne = new Swiper('.swiper-one', {
    loop: true,
    spaceBetween: 15,
    grabCursor: true,
    slidesPerView: 'auto'
    // autoHeight: true,
    // breakpoints: {

    //     320: {
    //         slidesPerView: 2.5,
    //         spaceBetween: 30,
    //     },
    // }

  });

//about-swiper

const swiperAbout = new Swiper('.swiper-about', {
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {

    1175: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    1150: {
        slidesPerView: 2,
        spaceBetween: 15,
    }, 
    1140: {
        slidesPerView: 1.5,
        spaceBetween: 12,
    },  
    1024: {
        slidesPerView: 1,
        spaceBetween: 30,
    },
        // when window width is >= 768px
    768: {
        slidesPerView: 1,
        spaceBetween: 30,
    },

    500: {
        slidesPerView: 1,
        spaceBetween: 25,
    },

    396: {
        slidesPerView: 1,
        spaceBetween: 20,
    },

    100: {
        slidesPerView: 1,
        spaceBetween: 10,
    }
    }

  });

   // form

    const validate = new window.JustValidate('#form'); 
    const validation = new JustValidate('#form');

    validation
    .addField('#text', [{
        rule: 'required',
        errorMessage: 'Вы не ввели текст',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: "Не достаточное количество символов"
    } 
  ])
    .addField('#name', [{
            rule: 'required',
            errorMessage: 'Вы не ввели имя'
        },
        {
          rule: 'minLength',
          value: 2,
          errorMessage: "Не достаточное количество символов"
        } 
  ])
    .addField('#email', [{
        rule: 'required',
        errorMessage: 'Вы не ввели e-mail',
    },
    {
        rule: 'email',
        errorMessage: 'Вы не корректно ввели email',
    }
  ])
    // })

  //показать больше 

  const btnMore = document.querySelector('.podcasts__btn');
  const moreItems = document.querySelectorAll('.podc');

  btnMore.addEventListener( 'click', () => {
    moreItems.forEach(el => { 
        el.classList.remove('podc--hidden')
        el.classList.remove('mob')});
        
    btnMore.classList.add('podcasts__btn--hidden');
  })

  //что в эфире 

  const nowBtn = document.querySelector('.header__now');
  const playItems = document.querySelectorAll('.play');
  const contNow = document.querySelector('.header__bord')

  nowBtn.addEventListener('click', () => {
    playItems.forEach(el => { el.classList.toggle('play--visible')});
    nowBtn.classList.toggle('header__now--active');
    contNow.classList.toggle('header__bord--active');
  })

 