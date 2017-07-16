var image = document.getElementById("title-animado");

image.addEventListener("mousemove",function(event){    
    image.style.fontSize = 30 + "px";
})

image.addEventListener("mouseleave",function(event){    
    image.style.fontSize = 28 + "px";
})