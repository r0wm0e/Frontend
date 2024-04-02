// hämta från text
fetch('demo.html')
.then(resp => resp.text())
.then(data => {
        console.log(data)
        document.getElementById('outputHTML').innerHTML = data;
    }
    )
.catch(err => console.error(err));

// hämta från json
fetch('demo.json')
.then(resp => resp.json())
.then(data => renderJSON(data))
.catch(err => console.error(err));

function renderJSON(data){
    //const json = JSON.parse(data);
    console.log(data);
    document.getElementById('outputJSON').innerHTML = data.name;
}
// hämta från ett API
fetch('https://jsonplaceholder.typicode.com/users')
.then(resp => resp.json())
.then(users => renderUsers(users))
.catch(err => console.error(err));

function renderUsers(users){
    console.log(users);
    let output = '<table class="table table-striped"><tr><th>Name</th><th>Email</th></tr>';
    users.forEach(user => {
        output += '<tr><td>' + user.name + '</td><td>' + user.email + '</td></tr>'
    });
    output += '</table>'
    document.getElementById('outputAPI').innerHTML = output;
    //document.getElementById('outputJSON').innerHTML = data.name;
}

// Skapa en asynkron-funktion

async function getData(){
    const url = 'https://fakestoreapi.com/products';
    let resp = await fetch(url);
    console.log(resp);
    const json = await resp.json();
    console.log("Hämtar json");
    renderProducts(json);
}

getData();

function renderProducts(products){
    console.log(products);
    let output = '<table class="table table-striped"><tr><th>Title</th><th>Price</th></tr>';
    products.forEach(products => {
        output += '<tr><td>' + products.title + '</td><td>$' + products.price + '</td></tr>'
    });
    output += '</table>'
    document.getElementById('outputProducts').innerHTML = output;
    //document.getElementById('outputJSON').innerHTML = data.name;
}