/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
    nombre: "",
    edad: 0,
    ciudad: "",
    interesPorJs: "",
};

const listado = [{
        imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
        lenguajes: "HTML y CSS",
        bimestre: "1er bimestre",
    },
    {
        imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
        lenguajes: "Javascript",
        bimestre: "2do bimestre",
    },
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
        lenguajes: "React JS",
        bimestre: "3er bimestre",
    },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
    /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
    datosPersona.nombre = prompt("Ingresa tu nombre");
    datosPersona.edad = prompt("Ingresa el año en que naciste");
    datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
    datosPersona.interesPorJs = confirm("Te interesa Javascript?");
}

function renderizarDatosUsuario() {
    /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
    obtenerDatosDelUsuario();
    /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
    document.getElementById('nombre').innerText = datosPersona.nombre;
    calculoEdad();
    document.getElementById('edad').innerText = datosPersona.edad;
    document.getElementById('ciudad').innerText = datosPersona.ciudad;
    interesPorJs();
    document.getElementById('javascript').innerText = datosPersona.interesPorJs;

    function calculoEdad() {
        if (!isNaN(datosPersona.edad) && datosPersona.edad != '') {
            datosPersona.edad = 2022 - datosPersona.edad;
        } else {
            alert('Por favor ingresa un año de nacimiento válido (YYYY)');
        }
    }

    function interesPorJs() {
        if (datosPersona.interesPorJs) {
            datosPersona.interesPorJs = "Si";
        } else {
            datosPersona.interesPorJs = "No";
        }
    }
}


function recorrerListadoYRenderizarTarjetas() {
    /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
    if (fila.innerText == "") {
        let contenedorTarjetas = document.getElementById('fila');

        for (let materia of listado) {
            let tarjeta = document.createElement('div');
            contenedorTarjetas.appendChild(tarjeta);
            tarjeta.classList.add('caja');
            let imagen = document.createElement('img');
            imagen.setAttribute('src', materia.imgUrl);
            imagen.setAttribute('alt', materia.lenguajes);
            tarjeta.appendChild(imagen);
            let parrafoLenguajes = document.createElement('p');
            parrafoLenguajes.classList.add('lenguajes');
            parrafoLenguajes.innerText = materia.lenguajes;
            tarjeta.appendChild(parrafoLenguajes);
            let parrafoBimestre = document.createElement('p');
            parrafoBimestre.classList.add('bimestre');
            parrafoBimestre.innerText = materia.bimestre;
            tarjeta.appendChild(parrafoBimestre);
        }
    }
}

function alternarColorTema() {
    /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
    const body = document.getElementById('sitio');
    body.classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

let parrafoSobreMi = document.querySelector("#sobre-mi");

window.addEventListener("keydown", function(e) {
    if (e.key == "f") {
        parrafoSobreMi.classList.remove('oculto');
    }
})