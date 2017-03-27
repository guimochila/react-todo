var React = require('react');

var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog',
        },
        {
          id: 2,
          text: 'Clean the yard',
        },
        {
          id: 3,
          text: 'Travel the world',
        },
        {
          id: 4,
          text: 'Be a programmer',
        }
      ]
    };
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
