function limitWords(id) {
    var maxWords=5;
    var d=document.getElementById(id);
    if ( d.value.split(' ').length > maxWords ) {
        alert("Limite de 150 palabras" d.value.split(' ').length);
        inputNombre.focus();
        event.preventDefault();
        return false;
    }
}