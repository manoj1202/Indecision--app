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

var templateTwo =(
    <div>
        <h1>Manoj Kumar</h1>
        <p>Age : 24</p>
        <p>Location : Kansas</p>
    </div>
);

var appRoot = document.getElementById('app');

//ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);

