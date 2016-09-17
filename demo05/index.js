var NotesList = React.createClass({
  render: function(){
    return <ol>
      {
        React.Children.map(this.props.children, function(child){
          return <li>
            {child}
          </li>;
        })
      }
    </ol>;
  }
});

var arr = [
  <span>hello</span>,
  <span>world</span>
];

ReactDOM.render(<NotesList>
  { arr }
</NotesList>, document.getElementById('example'));
