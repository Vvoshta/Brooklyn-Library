let profile = {
    'visits': 1,
    'bonuses': 0,
    'books_count': 0,
    'books': []
};

// Hamburger menu

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header-menu'),
    menuItem = document.querySelectorAll('.header-menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
        })
    })

});


// Header menu

const windowChanger = window.matchMedia('(max-width: 1024px)')
function hideAndShow(e){
    if(e.matches) {
        $('.header-menu').hide();
    }
    else {
        $('.header-menu').show();
    }
}
windowChanger.addListener(hideAndShow);
hideAndShow(windowChanger);

$(document).ready(function(){
    let w = $(window).width();

    if (w <= 1024) {
        $('.hamburger').click(function () {
            $('.header-menu').slideToggle("slow");
        });

        $('.header-menu__item').click(function () {
            $('.header-menu').slideToggle("slow");
        });

        $('.hamburger__close').on('click', function() {
            $('.header-menu').slideToggle("slow");
        });
    };


// About slider

    $('.cards-list').slick({
        dots:true,
        arrows: false,
		slidesToShow:3,
        slidesToScroll:1,
		speed:800,
        infinite: false,
		responsive:[
            {
				breakpoint: 1400,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 1020,
				settings: {
					slidesToShow:1,
                    slidesToScroll: 1,
                    infinite: false,
                    arrows: true,
                    prevArrow: '<button type="button" class="slick-prev"><img src="assets/svg/arrow-before.svg"></button>',
                    nextArrow: '<button type="button" class="slick-next"><img src="assets/svg/arrow-after.svg"></button>'
				}
			}
		]
    });


// Profile modal
    $('#profile').click(function(e) {
        if ($('#profile').hasClass('profile')) {
        $('#auth').slideToggle("slow");
        } else if ($('#profile').hasClass('profile_logged-in')) {
        $('#modal-logged').slideToggle("slow");
        };
    });

    if (w <= 1024) {
        $('.profile').on('click', function(e){
            $('.header-menu').slideUp("slow");
            $('.hamburger').removeClass('hamburger_active');
        });

        $('.hamburger').on('click', function(e){
            $('.modal-profile').slideUp("slow");
        });
    };

    $('.hamburger').on('click', function(){
        $('.modal-profile').slideUp("slow");
    });

    $('.hamburger').on('click', function(){
        $('#modal_logged').slideUp("slow");
    }); // 111-116 new

// Validation

    function validateForms(form){
        $(form).validate({
            rules: {
                first_name: {
                    required: true,
                    debug: true
                },
                last_name: {
                    required: true,
                    debug: true
                },
                email: {
                    required: true,
                    email: true,
                    debug: true
                },
                password_reg: {
                    required: true,
                    minlength: 8,
                    debug: true
                },
                reader_details: {
                    required: true,
                    debug: true
                },
                password_log: {
                    required: true,
                    minlength: 8,
                    debug: true
                },
                bank_card: {
                    required: true,
                    minlength: 16,
                    maxlength: 16,
                    debug: true,
                    creditcard: true
                },
                exp_code_first: {
                    required: true,
                    minlength: 2,
                    maxlength: 2,
                    debug: true,
                    digits: true
                },
                exp_code_second: {
                    required: true,
                    minlength: 2,
                    maxlength: 2,
                    debug: true,
                    digits: true
                },
                cvc: {
                    required: true,
                    minlength: 3,
                    maxlength: 3,
                    debug: true,
                    digits: true
                },
                holder_name: {
                    required: true,
                    debug: true
                },
                post_code: {
                    required: true,
                    debug: true
                },
                city: {
                    required: true,
                    debug: true
                }
            },
            messages: {
                first_name: {
                    required: "Enter your name",

                },
                last_name: {
                    required: "Enter your last name"
                },
                email: {
                  required: "Enter your email",
                  email: "Enter a valid email"
                },
                password_reg: {
                    required: "Enter your password",
                    minlength: jQuery.validator.format("Minimum {0} characters required")
                },
                reader_details: {
                    required: "Enter your e-mail or readers card number"
                },
                password_log: {
                    required: "Enter your password",
                    minlength: jQuery.validator.format("Minimum {0} characters required")
                },
                bank_card: {
                    required: "Enter your bank card number",
                    minlength: jQuery.validator.format("Minimum {0} characters required")
                },
                exp_code_first: {
                    required: "Enter a valid expiration date (first 2 numbers)",
                    minlength: jQuery.validator.format("Minimum {0} characters required")
                },
                exp_code_second: {
                    required: "Enter a valid expiration date (second 2 numbers)",
                    minlength: jQuery.validator.format("Minimum {0} characters required")
                },
                cvc: {
                    required: "Enter a valid CVC/CVV code",
                    minlength: jQuery.validator.format("Minimum {0} characters required")
                },
                holder_name: {
                    required: "Enter the cardholder name",
                    minlength: jQuery.validator.format("Minimum {0} characters required")
                },
                post_code: {
                    required: "Enter your postal code"
                },
                city: {
                    required: "Enter your city/town"
                }
              }
        });
    };

    validateForms('#register_form');
    validateForms('#login_form');
    validateForms('#buy-card__modal_left');


// Mouse up

    $('body').mouseup(function (e) {
        let w = $(window).width();
        if(e.target.id == "header-right") return;
        if($(e.target).closest('.header-right').length)
            return; 
    
        let auth = $('#auth');
        if (e.target != auth[0] && !auth.has(e.target).length) {
            auth.slideUp('fast');
            return;
        };
    
        if (w <= 1024) {
        let menu = $('.header-menu');
        if (e.target != menu[0] && !menu.has(e.target).length) {
            menu.slideUp('fast');
            $('.hamburger').removeClass('hamburger_active');
            return;
        }};
    });
    checkBookBtns()
    
});


// Popup auth

$(function() {
    $('.modal-profile__link_log').bind('click', function(e) {
        e.preventDefault();
        document.getElementById('login_form').reset();
        $('#login_container').bPopup({
        closeClass: 'modal-log__close'
        });
    });

    $('.modal__link_log').bind('click', function(e) {
        e.preventDefault();
        document.getElementById('login_form').reset();
        $('#login_container').bPopup({
            closeClass: 'modal-log__close'
        });
    });

    $('.btn-disabled').bind('click', function(e) {
        if (!isLogin) {
            e.preventDefault();
            document.getElementById('login_form').reset();
            $('#login_container').bPopup({
                closeClass: 'modal-log__close'
            });
        } else {
            e.preventDefault();
            document.getElementById('login_form').reset();
            $('#buy-card__modal').bPopup({
                closeClass: 'buy-card__close'
            });
        }
    }); // 296-309 new

    $('.modal-profile__link_reg').bind('click', function(e) {
        e.preventDefault();
        document.getElementById('register_form').reset();
        $('#register_container').bPopup({
            closeClass: 'modal-reg__close'
        });
    });

    $('.modal__link_reg').bind('click', function(e) {
        e.preventDefault();
        document.getElementById('register_form').reset();
        $('#register_container').bPopup({
            closeClass: 'modal-reg__close'
        });
    });

    $('.modal-login__link_profile').bind('click', function(e) {
        e.preventDefault();
        $('#logged-in__my-profile').bPopup({
            closeClass: 'logged-in__close'
        });
    });
});

// Register form storage

const reg_form = document.getElementById('register_form'),
reg_formFields = reg_form.elements,
reg_submitBtn = document.getElementById('modal__button_reg');

reg_form.addEventListener("submit", (e) => {
    e.preventDefault();
});

let user = {};

reg_submitBtn.addEventListener('click', addUserItem);
reg_submitBtn.addEventListener('click', checkReg);

function checkReg() {
    $('#register_container').fadeOut(300);
    $("div.b-modal").remove();
};


function addUserItem() {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('profile', JSON.stringify(profile));
};

function changeHandler() {
    localStorage.setItem(this.name, this.value);
    user[this.name] = this.value;
}

function checkStorage() {
    for (let i = 0; i < reg_formFields.length; i++) {
        if (reg_formFields[i].type !== "submit") {
            reg_formFields[i].value = localStorage.getItem(reg_formFields[i].name, reg_formFields[i].value);
        };
    };

    attachEvents();
};

function attachEvents() {
    for (let i = 0; i < reg_formFields.length; i++) {
        reg_formFields[i].addEventListener('change', changeHandler);
    }
};
checkStorage();


// Login form storage

const log_form = document.getElementById('login_form'),
log_formFields = log_form.elements,
log_submitBtn = document.getElementById('modal__button_log');


let user_log = {};

log_submitBtn.addEventListener('click', checkLogin);

log_form.addEventListener("click", (e) => {
    e.preventDefault();
});


function addNewUserItem() {
    localStorage.setItem('user_log', JSON.stringify(user_log));
};

let isLogin = false;
function checkLogin() {

    addNewUserItem();
    let userObject = JSON.parse(localStorage.getItem('user')),
    userLogObject = JSON.parse(localStorage.getItem('user_log'));


    if (Object.keys(userObject).length !== 0 && Object.keys(userLogObject).length !== 0) {
        if (userObject["email"] === userLogObject["reader_details"] && userObject["password_reg"] === userLogObject["password_log"]) {
            
            addBooksToProfile(profile.books);
            addProfile(profile); // new
            incrementVisit();
            $('#login_container').fadeOut(300);
            $("div.b-modal").remove();

            detachAuth = $('#auth').detach();
            popupBuyCard();
            
            $("#profile").removeClass('profile').addClass("profile_logged-in");
            profileImg = $("img.profile__icon").detach();
            $(".profile__link").append("<div class='profile_block_new'>" + userObject["first_name"][0] + userObject["last_name"][0] + "</div>");
            $(".logged-in__initials").text(userObject["first_name"][0] + userObject["last_name"][0]);
            $('.logged-in__full-name').text(userObject["first_name"] + ' ' + userObject["last_name"]);
            isLogin = true;
            } else {
            console.log('Error');
            isLogin = false;
        };
    };
};

function popupBuyCard() {
    $('#buy-card__modal').bPopup({
        closeClass: 'buy-card__close'
    });
};

function changeNewHandler() {
    localStorage.setItem(this.name, this.value);
    user_log[this.name] = this.value;
}

function checkNewStorage() {
    for (let i = 0; i < log_formFields.length; i++) {
        if (log_formFields[i].type !== "submit") {
            log_formFields[i].value = localStorage.getItem(log_formFields[i].name, log_formFields[i].value);
        };
    };

    attachNewEvents();
};

function attachNewEvents() {
    for (let i = 0; i < log_formFields.length; i++) {
        log_formFields[i].addEventListener('change', changeNewHandler);
    }
}
checkNewStorage();


// Modal buttons disabled

let cansubmit = true;

function checkformReg() {
    let reg_check = document.forms["register_form"].elements;
    let cansubmit = true;

    for (var i = 0; i < reg_check.length; i++) {
        if (reg_check[i].value.length == 0) {
            cansubmit = false
        };
    };

    document.getElementById('modal__button_reg').disabled = !cansubmit;
}

function checkformLog() {
    let log_check = document.forms["login_form"].elements;
    let cansubmit = true;

    for (var i = 0; i < log_check.length; i++) {
        if (log_check[i].value.length == 0) {
            cansubmit = false
        };
    }
    document.getElementById("modal__button_log").disabled = !cansubmit;
}


// To log out
$(".modal-login__link_logout").click(function () {
    $("#profile").removeClass("profile_logged-in").addClass("profile");
    detachLogged = $('#modal-logged').detach();
    $(".modal__wrapper").append(detachAuth);
    $("div.profile_block_new").remove();
    $("a.profile__link").append(profileImg);
    location.reload();
});


// Copy button
var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function (e) {
console.info('Action:', e.action);
console.info('Text:', e.text);
console.info('Trigger:', e.trigger);
});

clipboard.on('error', function (e) {
console.info('Action:', e.action);
console.info('Text:', e.text);
console.info('Trigger:', e.trigger);
});


// Buying a card
const buyCardForm = document.getElementById('buy-card__modal_left'),
buyCardFormFields = buyCardForm.elements,
card_submitBtn = document.getElementById('buy-card__button');

buyCardForm.addEventListener("submit", (e) => {
    e.preventDefault();
});

let library_card = {};

buyCardForm.addEventListener('submit', addNewCard);
buyCardForm.addEventListener('submit', checkPurchase);

function checkPurchase() {
    $('#buy-card__modal').fadeOut(300);
    $("div.b-modal").remove();
};

function addNewCard() {
    localStorage.setItem('library_card', JSON.stringify(library_card));
};

function changeProcessor() {
    localStorage.setItem(this.name, this.value);
    library_card[this.name] = this.value;
};

function checkCardStorage() {
    for (let i = 0; i < buyCardFormFields.length; i++) {
        if (buyCardFormFields[i].type !== "submit") {
            buyCardFormFields[i].value = localStorage.getItem(buyCardFormFields[i].name, buyCardFormFields[i].value);
        };
    };

    attachCardNewEvents();
};


function attachCardNewEvents() {
    for (let i = 0; i < buyCardFormFields.length; i++) {
        buyCardFormFields[i].addEventListener('change', changeProcessor);
    }
};

checkCardStorage();


// Increment visits
function incrementVisit() {
    let profile = JSON.parse(localStorage.getItem('profile'));
    profile.visits += 1;
    $(".logged-in__visits__number").text(profile.visits);
    addProfile(profile);
};

function addProfile(profile) {
    localStorage.setItem('profile', JSON.stringify(profile));
};



// Without book card
card_submitBtn.addEventListener('click', checkBookBtns);

function checkBookBtns() {
    if (Object.keys(library_card).length == 0 && !isLogin) {
        $('.book-card__button').addClass('btn-disabled')
    } else {
        $('.book-card__button').removeClass('btn-disabled')
    };
};


// Books counter in my profile
let buyCardBtn = document.getElementsByClassName('book-card__button');

function addBtnListener() {
    for (let i = 0; i < buyCardBtn.length; i++) {
        buyCardBtn[i].addEventListener('click', incrementBooks);
    }
};

function incrementBooks() {
    let parent = this.parentNode,
    bookTitle = parent.querySelector('h3').textContent,
    bookAuthor = parent.querySelector('h4').textContent,
    bookName = bookTitle + ', ' + bookAuthor;
    // parent.getElementsByClassName('book-card__title');

    if (isLogin) {
        let profile = JSON.parse(localStorage.getItem('profile'));
        profile.books_count += 1;
        $(".logged-in__book__number").text(profile.books_count);
        this.removeEventListener('click', incrementBooks);
        this.classList.add('btn-disabled');
        this.textContent = 'Own';
        profile.books.push(bookName);
        addProfile(profile);
        addBooksToProfile(profile.books);
    };
};

function addBooksToProfile(books) {
    $(".rented-books__list").empty();
    for (let i = 0; i < books.length; i++) {
        $(".rented-books__list").append("<li class='rented-books__item'>" + books[i] + "</li>");
    };
}
addBtnListener();

