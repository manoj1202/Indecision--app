console.log('App.js File is Running!');

// Introduction to jsx -- javascript xml
var template =( 
    <div>
        <h1>Indecision App</h1>
        <p>This is a paragraph</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

// var userName = 'Manoj Kumar';
// var userAge = 24;
// var userLocation = 'Dallas';
var user={
    name : King,
    age : 25,
    location : Kansas
}
var templateTwo =(
    <div>
        <h1>{user.name}</h1>
        <p>Age : {user.age}</p>
        <p>Location :{user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

//ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);

