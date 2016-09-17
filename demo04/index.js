'use strict';

var HelloComponent = React.createClass({
  render:function(){
    return <h1>
      hello { this.props.name }
    </h1>;
  }
});


ReactDOM.render(
  <HelloComponent name='Jon' />,
  document.getElementById('example')
);
