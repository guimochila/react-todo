var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var $ = require('jquery');

var TodoApp = require('TodoApp');

// Load foundation
$(document).foundation();
// App css
require('!style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
