const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// POST
function sendMessage(text1, text2) {
    const json = JSON.stringify({ title: text1, userId: text2 });
    fetch(apiUrl, {
            method: 'POST',
            body: json,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            showInformation(data);
        });
}

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Los DataSet los podemos obtener desde 'e.target' o desde 'button'
        sendMessage(e.target.dataset.titulo, e.target.dataset.idUsuario);
    });
});

function showInformation(json) {
    console.log(typeof(json));
    let span = document.querySelector('#mensaje-posteado');
    span.innerHTML += `<li>${json.title} - ${json.userId}</li>`
}

// Le ponemos 'async' porque la función es asincrónica (devuelve una promesa).
// Entonces debe ser esperada (con await)
async function sendMessageAsync(text1, text2) {
    const json = JSON.stringify({ title: text1, userId: text2 });
    return fetch(apiUrl, {
        method: 'POST',
        body: json,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

async function testAsync() {
    // el 'await' hace que el llamado asincrónico quede esperando a que termine

    // 1er 'then' de la manera tradicional
    const response = await sendMessageAsync('Prueba async', 'Emi');

    // 2do 'then' de la manera tradicional
    const data = await response.json();
    // console.log(data);
    return data;
}

async function otherTestAsync() {
    console.log(await testAsync());
}

otherTestAsync();