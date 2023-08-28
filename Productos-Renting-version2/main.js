const main_img = document.querySelector('.main_img')
const thumbnails = document.querySelectorAll('.thumbnail')


thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        thumb.classList.add('active')
        main_img.src = thumb.src
    })
})



var serieEquipo = document.getElementById("serieEquipo").innerHTML;
var iframe = document.getElementById('ticketFormulario');

function mostrar(){
    document.getElementById('ticketFormulario').style.display = 'block';
    document.getElementById('mostrarForm').style.display = 'none';
    document.getElementById('ocultarForm').style.display = 'block';
    
}

function ocultar(){
    document.getElementById('ticketFormulario').style.display = 'none';
    document.getElementById('mostrarForm').style.display = 'block';
    document.getElementById('ocultarForm').style.display = 'none';
    
}







