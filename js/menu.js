var navbarItems = document.getElementsByClassName('navbar-item');
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

            navbarItems[0].classList.add('active');

        }
        if(target=="#me"){
            navbarItems[1].classList.add('active');

        }
        if(target=="#work"){
            navbarItems[2].classList.add('active');

        }
        if(target=="#contact"){
            navbarItems[3].classList.add('active');

        }
	});
});


function deleteActiveClass() {
    for (var i = 0; i < navbarItems.length; i++) {
        navbarItems[i].classList.remove('active');
    }
}