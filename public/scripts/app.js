'use strict';

console.log('App.js File is Running!');

var app = {
    title: 'Indecision App',
    subtitle: 'This is a paragraph'

    // Introduction to jsx -- javascript xml
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
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

// var userName = 'Manoj Kumar';
// var userAge = 24;
// var userLocation = 'Dallas';
var user = {
    name: 'King',
    age: 25

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
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

//ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
