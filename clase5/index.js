if (confirm('¿Querés cambiar el tema a oscuro?')) {
    let body = document.querySelector('body');
    body.classList.add('dark');

    let titulo1 = document.querySelector('h1');
    titulo1.classList.add('h1Titulo');

    let item = document.querySelectorAll('.item');
    item.classList.add('itemOscuro');
}