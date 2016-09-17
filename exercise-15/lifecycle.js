function LifeCycle(name){

  var obj = {
    name: name
  };

  for(var n in Cycle){
    obj[n] = Cycle[n];
  }

  return obj;

}

var Cycle = {
  getInitialState: function() {
    console.log(this.name, 'getInitialState');
    return {};
  },
  getDefaultProps: function() {
    console.log(this.name, 'getDefaultProps');
    return {};
  },
  componentWillMount: function() {
    console.log(this.name, 'componentWillMount');
  },
  componentDidMount: function() {
    console.log(this.name, 'componentDidMount');
  },
  componentWillReceiveProps: function(nextProps) {
    console.log(this.name, 'componentWillReceiveProps');
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    console.log(this.name, 'shouldComponentUpdate');
  },
  componentWillUpdate: function(nextProps, nextState) {
    console.log(this.name, 'componentWillUpdate');
  },
  componentDidUpdate: function(prevProps, prevState) {
    console.log(this.name, 'componentDidUpdate');
  },
  componentWillUnmount: function() {
    console.log(this.name, 'componentWillUnmount');
  },
};



var Ctrip = React.createClass({
  mixins: [LifeCycle('Ctrip')],
  render: function(){
    console.log('Ctrip', 'render');
    return (
      <ul>
        <li>Ctrip</li>
        <ul>
          { this.props.children }
        </ul>
      </ul>

    );
  }
});

ReactDOM.render(<Ctrip>
    <span>span item</span>
    <span>span item</span>
  </Ctrip>, document.getElementById('example'));
