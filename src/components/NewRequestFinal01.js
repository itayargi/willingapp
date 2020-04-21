import React, { Component } from "react";
import NavNumbers from './NavNumbers'
import { Grid, Image } from 'semantic-ui-react'
import { Nav } from "react-bootstrap";
import './NewRequestFinal_01.css'
import Case from '../pics/Category Icons/Case.svg'
import emergency from '../pics/Category Icons/Emergency.svg'
import lostFound from '../pics/Category Icons/Lost and found.svg'
import General from '../pics/Category Icons/General.svg'
import givAway from '../pics/Category Icons/Give away.svg'
import ItemNeeded from '../pics/Category Icons/Item needed.svg'
import Ride_Delivery from '../pics/Category Icons/Ride_Delivery.svg'
import RoadAssist from '../pics/Category Icons/Road assist.svg'
import Social from '../pics/Category Icons/Social.svg'
import { Link } from 'react-router-dom';


export default class NewRequestFinal01 extends Component {
  
  
  render() {
    
    
    return (       
      <div style={{}} className="container22">
        <Nav>
        <NavNumbers name="itay"/>

        </Nav>
        
        <Link to='homePage'>
          <p style={{width:"100%", textAlign:"center"}}>homePage</p>
        </Link>
        <div className="container">
        <div>
          <p>Let’s start by choosing a category that best describes your request. This helps other people to see your request quickly.</p>
        </div>
        <br/>
        <div style={{marginTop: "40px"}} className="ui-container">
        <Grid container columns={3}>
          <Grid.Column className="gridBorder" >
              <Image className="pic"  src={emergency} />
              <p className="words">Emergency</p>
          </Grid.Column>
          <Grid.Column className="gridBorder">
          <Image className="pic" src={Case} />
            <p className="words">Medical</p>
          </Grid.Column>
          <Grid.Column className="gridBorder">
          <Image className="pic" src={Ride_Delivery} />
            <p className="words">Ride/Delivery</p>
          </Grid.Column>
        </Grid>
        <Grid container columns={3}>
        <Grid.Column className="gridBorder">
          <Image className="pic" src={RoadAssist} />
            <p className="words">Road assistant</p>
          </Grid.Column>
          <Grid.Column className="gridBorder">
          <Image className="pic" src={ItemNeeded} />
            <p className="words">Item needed</p>
          </Grid.Column>
          <Grid.Column className="gridBorder">
          <Image className="pic" src={givAway} />
            <p className="words">Give away item</p>
          </Grid.Column>
        </Grid>
        <Grid container columns={3}>
        <Grid.Column className="gridBorder">
          <Image className="pic" src={lostFound} />
            <p className="words">Lost and found</p>
          </Grid.Column>
          <Grid.Column className="gridBorder">
          <Image className="pic" src={Social} />
            <p className="words">Social</p>
          </Grid.Column>
          <Grid.Column className="gridBorder">
          <Image className="pic" src={General} />
            <p className="words">General</p>
          </Grid.Column>
        </Grid>
        </div>
      </div>

      </div>
    );
  }
}
