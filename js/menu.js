var navbarItems = document.getElementsByClassName('navbar-item');

var headerItem = document.getElementsByClassName('header-item');
var meItem = document.getElementsByClassName('me-item');
var workItem = document.getElementsByClassName('work-item');
var contactItem = document.getElementsByClassName('contact-item');

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
        console.log(target);
        deleteActiveClass();
        if(target=="#header"){
           
           headerItem[0].classList.add('active');
           //navbarItems[0].classList.add('active');

        }
        if(target=="#me"){
            //navbarItems[1].classList.add('active');
            meItem[0].classList.add('active');
        }
        if(target=="#work"){
            //navbarItems[2].classList.add('active');
            workItem[0].classList.add('active');
        }
        if(target=="#contact"){
            //navbarItems[3].classList.add('active');
            contactItem[0].classList.add('active');
        }
	});
});


function deleteActiveClass() {
    headerItem[0].classList.remove('active');
    meItem[0].classList.remove('active');
    workItem[0].classList.remove('active');
    contactItem[0].classList.remove('active');
}