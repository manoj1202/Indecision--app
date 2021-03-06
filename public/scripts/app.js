'use strict';

console.log('App.js File is Running!');

var app = {
    title: 'Indecision App',
    subtitle: 'This is a paragraph',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    app.options && app.options.length > 0 ? 'Here are your options ' + app.options : 'No Options',
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

//Introduction to jsx -- javascript xml

// var userName = 'Manoj Kumar';
// var userAge = 24;
// var userLocation = 'Dallas';
var user = {
    name: 'King',
    age: 25,
    location: 'Kansas'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location : ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Add Some Name'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
//ReactDOM.render(templateTwo, appRoot);
