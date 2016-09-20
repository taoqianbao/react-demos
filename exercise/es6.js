/*
ES6 中，通过 export default 导出单个类
*/

export default class ES6Syntax extends Component {

};


/*
ES6 中，通过定义一个继承自React.Component的class来定义一个组件类
*/

export default class ES6Syntax2 extends Component {

  //在构造函数中对 state 进行初始化（推荐这种方法）
  constructor(props){
    super(props);    
  }

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    year: React.PropTypes.number.isRequired,
    label: React.PropTypes.string,
  };

  static defaultProps ={
      name: 'ES6syntax',
      year: 2015,
      label: 'click me'
  };

  render(){
    return (
      <View />
    );
  }

  componentWillMount: function(){
  }

}
