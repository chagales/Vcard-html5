var navbarItems = document.getElementsByClassName('navbar-item');

for (var i = 0; i < navbarItems.length; i++) {
    navbarItems[i].addEventListener('click', function (event) {
        var sectionToGo = this.getElementsByTagName('a')[0].href.split("#");
        console.log("Estoy");
        deleteActiveClass();
        this.classList.add('active');
        
        if (sectionToGo.length === 2) {
            event.preventDefault();
            var goTo = sectionToGo[sectionToGo.length - 1];
            getElementByIdAndScroll(goTo);
        }
    });
}

function getElementByIdAndScroll (id) {
    var elem;
    if (id === '') {
        elem = document.getElementsByClassName('header')[0];
    } else {
        elem = document.getElementById(id);
    }

    scrollToElement(elem);
}

function scrollToElement (element) {
    var jump = parseInt(element.getBoundingClientRect().top * 0.3);
    document.body.scrollTop += jump;

    if (!element.lastJump || element.lastJump > Math.abs(jump)) {
        setTimeout(function() {

        element.lastJump = Math.abs(jump);
            scrollToElement(element);
        }, 40);
    } else {
        element.lastJump = null;
    }
}

function deleteActiveClass() {
    for (var i = 0; i < navbarItems.length; i++) {
        navbarItems[i].classList.remove('active');
    }
}

var acumulativeOffset = function (element) {
    var top = 0;

    do {
        top += element.offsetTop || 0;
        element = element.offsetParent;
    } while (element);

    return top;
}

var offsetQuienSoy = acumulativeOffset(document.getElementById('me')) - 50;
var offsetEquipo = acumulativeOffset(document.getElementById('work')) - 50;
var offsetTransporte = acumulativeOffset(document.getElementById('contact')) - 50;
var navbar = document.getElementsByClassName('navbar')[0];

window.addEventListener('scroll', changeMenuStyle);

var previous;
function changeMenuStyle(event) {
    var pageOffset = window.pageYOffset;

    if (pageOffset >= 0 && pageOffset < offsetQuienSoy) {
        if (!previous || previous !== 1) {
            previous = 1;
        } else if (previous === 1){
            return false;
        }
        
        deleteActiveClass();
        document.querySelector("a[href$='header']").parentNode.classList.add("active");
    } else if (pageOffset >= offsetQuienSoy && pageOffset < offsetEquipo) {
        if (!previous || previous !== 2) {
            previous = 2;
        } else if (previous === 2){
            return false;
        }
        
        deleteActiveClass();
        document.querySelector("a[href$='me']").parentNode.classList.add("active");
    } else if (pageOffset >= offsetEquipo &&  offsetQuienSoy < offsetTransporte) {
        if (!previous || previous !== 3) {
            previous = 3;
        } else if (previous === 3){
            return false;
        }

        deleteActiveClass();
        document.querySelector("a[href$='work']").parentNode.classList.add("active");
    } else if (pageOffset >= offsetTransporte) {
        if (!previous || previous !== 4) {
            previous = 4;
        } else if (previous === 4){
            return false;
        }

        deleteActiveClass();
        document.querySelector("a[href$='contact']").parentNode.classList.add("active");
    }  
}