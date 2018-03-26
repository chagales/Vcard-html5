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

    if (limitWords("free") > 150){
        inputNombre.focus();
        event.preventDefault();
        console.log("150 max");
        return false;
    }

    //submitButton.setAttribute("disabled", "");

    //event.preventDefault();

		sendForm({
			'name': inputNombre.value,
			'phone': inputTlf.value,
			'email': inputEmail.value,
			'conocido': inputConocido.val(),
			'comentarios': comentariosTextarea.val()
		});
		event.preventDefault();
		return false;

});


function limitWords(id) {
    var maxWords=150;
    var d=document.getElementById(id);
    var comentario = d.value;
    var comentarioclean = comentario.replace(/\s\s+/g, ' ').trim();
		var comentariocleanWithoutSpaces = comentarioclean.split(' ');
		var numberOfWords = comentariocleanWithoutSpaces.length;
    if ( numberOfWords > maxWords ) {
        alert("Limite de 150 palabras");
        console.log("Por encima");
        return num;
    }
}

});





