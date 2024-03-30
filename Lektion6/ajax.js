let loadBtn = document.getElementById('loadBtn')
let loadJsonBtn = document.getElementById('loadJSON')

// skapa en eventlistener on button
loadBtn.addEventListener('click', loadText);
loadJsonBtn.addEventListener('click', loadJSON);

function loadText(){
    console.log("Inne i Ajax-function");
    const xhr = new XMLHttpRequest();
    // console.log(xhr)
    xhr.onload = function() {
        console.log("Inne i onload");
        console.log(xhr);
        document.getElementById("output").innerHTML = xhr.responseText;
        };
    xhr.open('GET', 'demo.html');
    xhr.send();
}

function loadJSON() {
    console.log("Inne i loadJSON-function");
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        console.log(xhr.response);
        json = JSON.parse(xhr.response)
        console.log(json);
        renderJSON(json)
        };
    xhr.open('GET', 'demo.json');
    xhr.send();
}

function renderJSON(json){
    document.getElementById("output").innerHTML = `
        <h2>${json.name}</h2>
        <h2>${json.email}</h2>
        <h4>Company: ${json.company.name}</h4>
        `;
}
