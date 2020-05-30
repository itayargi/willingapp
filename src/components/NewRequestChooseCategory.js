import React, { Component } from 'react';
import './NewRequestFinal_01.css'


export default class NewRequestChooseCategory extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      index:props.index,

      
    };
    
  }
  choosenCategory=()=>{
      this.props.handleNext();
      console.log(this.state.index);
      this.props.updateCategory(this.state.index);

    };
  render() {
    let cssProperties = {}
    cssProperties['--x-position'] = this.props.index%3;
    cssProperties['--y-position'] = this.props.index/3;

    return (
        <button class="categoryButton" onClick={this.choosenCategory} style={cssProperties}>
        <img  className="ctegoryImg" alt={this.props.lable} src={this.props.src}></img>
        <a class="categoryLable">{this.props.lable}</a>
        </button>
     
    )
  }
}