console.log('App.js File is Running!');

var app ={
    title: 'Indecision App',
    subtitle: 'This is a paragraph',
    options: ['One', 'Two']
}

// Introduction to jsx -- javascript xml
var template =( 
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {(app.options && app.options.length > 0) ? `Here are your options ${app.options}` : `No Options`}
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
        {(user.age && user.age >= 18) && <p>Age : {user.age}</p>}
         {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

//ReactDOM.render(template, appRoot);
 ReactDOM.render(template, appRoot);

