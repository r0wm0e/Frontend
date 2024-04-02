let loadBtn = document.getElementById('loadBtn')
let loadJsonBtn = document.getElementById('loadJSON')
let loadApiBtn = document.getElementById('loadFromAPI')

// skapa eventlistener on buttons
loadBtn.addEventListener('click', loadText);
loadJsonBtn.addEventListener('click', loadJSON);
loadApiBtn.addEventListener('click', loadApi);

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

function loadApi() {
    console.log("Inne i loadApi-function");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.send();
    xhr.onload = function() {
        //console.log(xhr.response);
        json = JSON.parse(xhr.response)
        console.log(json);
        renderApi(json)
        };
}

function renderApi(json){

    let output = '<div>';    
    json.forEach(user => {
        output += user.name + '<br>';
    });
    output += '</div>';


    document.getElementById('output').innerHTML = output;
}

// Ajax via JQuery
    $(document).ready(function(){
        // Hämta bara text/HTML
        console.log("Hello from JQuery");
        $('#output-jquery').load('demo.html')

        // Hämta JSON
        $.getJSON('demo.json', function(response){
            console.log(response);
            $('#output-jquery-json').html(response.name);
        })
    });