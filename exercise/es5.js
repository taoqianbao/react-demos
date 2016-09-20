/*

1.1 引用

ES5 中，通过 require 引入外部模块（相当于 C 中的 #include
*/

/*
导出单个类

ES5 中，通过 module.exports 导出某个类给别的模块用
*/
var ES5Syntax = React.createClass({
  render: function(){

  }
});


module.exports = ES5Syntax;



/*
define component

ES5 中，通过React.createClass来定义一个组件类
*/
var ES5Syntax2 = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'ES5Syntax',
      year: 1204,
      label: 'ClickMe',
    };
  },
  propTypes:{
    name: React.PropTypes.string.isRequired,
    year: React.PropTypes.number.isRequired,
    label: React.PropTypes.string,
  },
  render: function(){
    return (
      <View style={styles.container}>
      </View>
    );
  },
  componentWillMount: function(){

  },
});
