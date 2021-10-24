const API_URL = 'https://jsonplaceholder.typicode.com';

const HTMLResponse = document.querySelector('#app');
const tpl = document.createDocumentFragment();

fetch(`${API_URL}/users`).then((response) => response.json()).then((users) => {
    
    //USO DE TAGS HTML PARA MOSTRAR LOS DATOS DE API

    //const template = users.map(user => `<li>${user.name} && ${user.email} </li>`);
    //HTMLResponse.innerHTML = `<ul>${template}</ul>`;

    //USANDO TAGS POR CADA UNO DE LOS DATOS
    
    users.forEach(user => {
        let elem = document.createElement('li');
        elem.appendChild(document.createTextNode(`${user.name} && ${user.email}`));
        tpl.appendChild(elem);
    });
    HTMLResponse.appendChild(tpl);
});