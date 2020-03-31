import React, { Component } from "react";
import '../semantic/dist/semantic.css'
import NavNumbers from './NavNumbers'
import { Grid, Image } from 'semantic-ui-react'
import lamp from '../pics/lamp.png'


export default class NewRequestFinal_01 extends Component {
  
  render() {
    
    return (       
      <div className="container">
      <NavNumbers/>
      <div style={{alignItems:"center" }} class="ui container three column grid">
      <div style={{alignItems:"center", alignContent:"center", justifyContent:"center",}} class="column"><img src={lamp} class="ui mini image" />Emergency</div>
      <div class="column"><img src={lamp} class="ui mini image" />Medical</div>
      <div class="column"><img src={lamp} class="ui mini image" />Ride/Delivery</div>
      <div class="column"><img src={lamp} class="ui mini image" /></div>
      <div class="column"><img src={lamp} class="ui mini image" /></div>
      <div class="column"><img src={lamp} class="ui mini image" /></div>
      <div class="column"><img src={lamp} class="ui mini image" /></div>
      <div class="column"><img src={lamp} class="ui mini image" /></div>
      <div class="column"><img src={lamp} class="ui mini image" /></div>
</div>

        <div class="ui grid container">
          <div class="four wide column">Emergency</div>
          <div class="four wide column">Medical</div>
          <div class="four wide column">Ride/Delivery</div>
          <div class="four wide column">Road assistant</div>
          <div class="four wide column">Item needed</div>
          <div class="four wide column">Give away item</div>
          <div class="four wide column">Lost and found</div>
          <div class="four wide column">Social</div>
          <div class="four wide column">General</div>

        </div>
        
      </div>
    );
  }
}
