console.log('App.js File is Running!');

var app ={
    title: 'Indecision App',
    subtitle: 'This is a paragraph'
}

// Introduction to jsx -- javascript xml
var template =( 
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

// var userName = 'Manoj Kumar';
// var userAge = 24;
// var userLocation = 'Dallas';
var user = {
    name: 'King',
    age : 25,
    location: 'Kansas'
}

function getLocation(location){
   if(location){
        return <p>Location : {location}</p>;
   } 
}

var templateTwo =(
    <div>
        <h1>{user.name ? user.name : 'Add Some Name'}</h1>
        <p>Age : {user.age}</p>
         {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

//ReactDOM.render(template, appRoot);
 ReactDOM.render(templateTwo, appRoot);

