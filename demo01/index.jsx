// var React = require('react');
// var ReactDOM = require('react-dom');

var MyComponent = React.createClass({
  render: function() {
    return <div>hello world { this.props.name }</div>;
  }
});

var node = document.getElementById('example');

ReactDOM.render(<MyComponent name='peter' />, node);

// ReactDOM.render(
//   <h1>Hello, peter!</h1>,
//   document.getElementById('example')
// );
