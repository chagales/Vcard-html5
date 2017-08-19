$( document ).ready(function() {
	var form = $('#formContact');

	var inputNombre = $("#nombre")[0];
  var inputApellidos = $("#apellidos")[0];
	var inputEmail = $('#email-form')[0];
	var inputConocido = $('#conocido');
  var inputTlf = $('#tlf')[0];
	var comentariosTextarea = $('#free');
  //var submitButton = $('#enviar')[0];

	var inputOtros = document.createElement("input");
	inputOtros.setAttribute("id", "conocido_otro");
	inputOtros.setAttribute("type", "text");
	inputOtros.setAttribute("name", "conocido_otro");
	inputOtros.setAttribute("placeholder", "Otro...");
	inputOtros.setAttribute("required", "");

	inputConocido.change(function(event) {
		if ($( "select option:selected" ).val() == 'otro') {
			inputConocido.after( inputOtros);
		} else {
			if($('#conocido_otro').length) {
				$('#conocido_otro').remove();
			}
		}
	})

  form.submit(function (event) {
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

    if (inputEmail.checkValidity() === false) {
        alert("Introduce un email correcto");
        emailInput.focus();
        event.preventDefault();
        return false;
    }

    if (limitWords("free")){
        return false;
    }

    //submitButton.setAttribute("disabled", "");

    //event.preventDefault();

    setTimeout(function () {
        //submitButton.removeAttribute("disabled");
        sendNotification("Formulario recibido", "Body de ejemplo");
    }, 1000);

});


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

});





