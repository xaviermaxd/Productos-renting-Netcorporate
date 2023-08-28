const ticketFormulario = document.getElementById('ticketFormulario')
const btCerrar = document.getElementById('btCerrar');
const modal = document.getElementById("modal");


function mostrar(){
    modal.showModal();
}

function ocultar(){
    modal.close(); 
}

function copiarSerie() {
    let serie = document.getElementById('copiar');
    navigator.clipboard.writeText(serie.textContent);
}


