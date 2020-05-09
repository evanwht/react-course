var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var myName = 'Evan';
var myMessage = 'New variable message';

ReactDOM.render(
    <Greeter name={myName} message={myMessage}/>,
    document.getElementById('app')
);