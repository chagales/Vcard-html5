var form =  document.getElementsByTagName('form')[0];

var inputNombre = document.getElementById("nombre");
var inputApellidos = document.getElementById("apellidos");
var emailInput = document.getElementById("email-form");
var ejercitoInput = document.getElementById("como");
var texlibre = document.getElementById("free");

var submitButton = document.getElementById("enviar");
var navbarItems = document.getElementsByClassName('howInput');


var howInput = {
    how1: document.getElementById("linkedin_id"),
    how2: document.getElementById("twitter_id"),
    how3: document.getElementById("other"),
    how4: document.getElementById("other_text_id")
};

$('input[type="radio"]').on('click change', function(e) {
    console.log(e.type);
    if(form.tipo_how[0].checked){        
        document.getElementById('other_text_id').disabled = true;
        //event.preventDefault();
        return false;
    }
    if(form.tipo_how[1].checked){        
        document.getElementById('other_text_id').disabled = true;
        //event.preventDefault();
        return false;
    }
    if(form.tipo_how[2].checked){
        document.getElementById('other_text_id').disabled = false;
        //event.preventDefault();
        return false;
    }
});

/*form.addEventListener("click",function(event){
    if(form.tipo_how[0].checked){
        document.getElementById('other_text_id').disabled = true;
        //event.preventDefault();
        return false;
    }
    if(form.tipo_how[1].checked){
        document.getElementById('other_text_id').disabled = true;
        //event.preventDefault();
        return false;
    }
    if(form.tipo_how[2].checked){
        document.getElementById('other_text_id').disabled = false;
        //event.preventDefault();
        return false;
    }
});
*/
function limitWords(id) {
    var maxWords=150;
    var d=document.getElementById(id);
    var num= d.value.split(' ').length;
    if ( d.value.split(' ').length > maxWords ) {
        alert("Limite de 150 palabras");
        console.log(num);
        texlibre.focus();
        event.preventDefault();
        return false;
    }
}





form.addEventListener("submit", function (event) {
    if (inputNombre.checkValidity() === false) {
        alert("Escribe tu nombre");
        inputNombre.focus();
        event.preventDefault();
        return false;
    }

    if (inputApellidos.checkValidity() === false) {
        alert("Escribe tus apellidos");
        inputApellidos.focus();
        event.preventDefault();
        return false;
    }

    if (emailInput.checkValidity() === false) {
        alert("Introduce un email correcto");
        emailInput.focus();
        event.preventDefault();
        return false;
    }

    if (howInput.how1.checkValidity() === false) {
        alert("Introduce como me has conocido");
        event.preventDefault();
        return false;
    }

    if (limitWords("free")){
        return false;
    }

    submitButton.setAttribute("disabled", "");
    
    event.preventDefault();

    setTimeout(function () {
        form.reset();
        submitButton.removeAttribute("disabled");
        sendNotification("Formulario recibido", "Body de ejemplo");
    }, 1000);

});