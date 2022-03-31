// Obtenemos las imágenes estáticas del HTML
let userImages = document.querySelectorAll('img');

// ACTIVIDAD
// Obtenemos los a estáticos del HTML
let userLinks = document.querySelectorAll('.rutas-img');

// Obtenemos las etiquetas de clase 'tarjeta' estáticas del HTML
let divList = document.querySelectorAll('.tarjeta');

// Por acá va a pasar tantas veces como 'img' tengamos
userImages.forEach((item, index) => {

    // Capturamos las URL (tantas como elementos 'img' haya) que ingresa el usuario
    let url = prompt('Ingresá la URL de la imagen ' + (index + 1));

    // Le configuramos el atributo para que muestre la imagen
    item.setAttribute('src', url);
    item.style.maxWidth = '200px';

    // Le agregamos el atributo "href"



    // div de clase 'tarjeta' de cada iteración
    let div = divList[index];

    // Agregamos los elementos para mostrar las URL's

    // Creamos el elemento 'p'
    let text = document.createElement('p');

    // Agregamos el texto de la variable 'url'
    text.appendChild(document.createTextNode(url));

    // Agregamos el párrafo al 'div' con clase 'tarjeta'
    div.appendChild(text);

    // Si lo queremos agregar antes de 'img'
    // div.insertBefore(text, item);
});