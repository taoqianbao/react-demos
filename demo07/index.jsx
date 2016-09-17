'use strict';

var MyComponent = React.createClass({

  handleClick: function() {
    this.refs.myTextInput.focus();
  },
  render: function() {
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input type="button" value="Focus the text input" onClick={this.handleClick} />
      </div>
    );
  }
});


var YourComponent = React.createClass({
  handleClick: function(){
    this.refs.myUserPwd.focus();
  },
  render: function(){
    return (
        <div>
            <input type="text" ref="myUserName" />
            <input type="text" ref="myUserPwd" />
            <input type="button" value="Focus the text input" onClick={this.handleClick} />
        </div>
    );
  }
});


ReactDOM.render(
  <YourComponent />,
  document.getElementById('example')
);
