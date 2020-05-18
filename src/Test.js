import React, { Component } from 'react';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './lang/en';
import heb from './lang/heb'

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('heb', heb);
counterpart.setLocale('en');

const Link = (props) => {
  return (
    <Translate
      content={props.content}
      component="a"
      href="//google.com"
      target="_blank"
    />
  )
}

class Test extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             lang:'en'
        }
    }
    

  

  onLangChange = (e) => {
    this.setState({lang: e.target.value});
    counterpart.setLocale(e.target.value);
  }

  render() {
    const link = <Link content="link"/>;
    return (
      <div className="App">

        <select value={this.state.lang} onChange={this.onLangChange}>
          <option value="en">EN</option>
          <option value="de">DE</option>
        </select>

        <Translate content="title" component="h1" className="class"/>

        <Translate content="copy.p1" component="p" unsafe={true}/>

        <Translate content="copy.p2" component="p" with={{ link }}/>

        <Translate component="input" type="text" attributes={{placeholder: 'placeholder'}}/>

      </div>
    );
  }
}

export default Test;