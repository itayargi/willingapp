import React, { Component } from 'react'
import { Link } from "react-router-dom";
import emergency from '../pics/Category Icons/Emergency.svg'
import location from '../pics/location.png'
import { Grid } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
// import AddMoreBtn from './AddMoreBtn'
import Translate from 'react-translate-component';
import '../App.css';
// import './'
// import 'semantic-ui';
// import '../semantic/src/semantic.less'
import 'semantic-ui-css/semantic.min.css'

export default class RequestDetails_01 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  

    
    render() {
      var phone = this.props.user.phone;
      var whatsappLink= "https://api.whatsapp.com/send?phone=" + phone + "&text=Hello"
      var i = 0;
      const showMore=()=>{
        if(!i){
          document.getElementById('more').style.display="inline-block"
          document.getElementById('showP').style.display="none"
          document.getElementById('moreBtn').style.display="none"
          document.getElementById('upBtn').style.display="inline-block"

          i=1;
        }
        else{
          document.getElementById('more').style.display="none"
          document.getElementById('showP').style.display="block"
          document.getElementById('moreBtn').style.display="inline-block"
          document.getElementById('upBtn').style.display="none"

          i=0;
        }
      }
        return (
            <div style={{backgroundColor:"rgb(255, 255, 255)"}}>
            {/* header */}
                <div
                    style={{
                        display: "grid",
                        color: "white",
                        height: "10vh",
                        backgroundColor: "rgb(57, 55, 119)"
                    }}
                    className="homeHeader"
                    >
                    <div style={{position:"absolute", top:"26pt"}} className="fullPage">
                        <Link to='/postsPage'><i style={{fontSize:"28pt",color:"white" }} className="angle left icon"></i></Link>
                    </div>
                    <h3 style={{ margin: "auto" }}>REQUEST DETAILS</h3>
            {/* end header */}
            </div>
            <div className="container">
            <div style={{fontSize:"12pt", height:"37pt", backgroundColor:"rgb(248, 248, 248)", paddingTop:10}} className="container">
                    <p style={{display:"inline",}}>status:</p>
                    <p style={{display:"inline", marginRight:"15%", fontWeight:"bold"}}>open</p>
                    <p style={{display:"inline"}}>Time posted:</p>
                    <p style={{display:"inline", fontWeight:"bold"}}>{this.props.user.date}</p>

                
            </div>
            <div className="container">
                <img alt='img' src={emergency} width="20px" style={{float:"left"}}></img>
                <h4 style={{marginLeft:"30px", fontSize:"16pt"}}>{this.props.user.header}</h4>
                <p style={{fontSize:"14pt", direction:"rtl", textAlign:"right"}}>{this.props.user.post}</p>
            </div>
            <div style={{textAlign:"center", }}>
            <hr></hr>
            <p style={{lineHeight:0,display:"block"}} id="showP">show more</p>
            <button id="moreBtn" onClick={showMore} style={{border:"none", backgroundColor:"white", }}><Icon style={{color:"rgb(38, 153, 251)"}} name="angle down"></Icon></button>
            <button id="upBtn" onClick={showMore} style={{border:"none", backgroundColor:"white", display:"none",color:"rgb(38, 153, 251)"}}><Icon name="angle up"></Icon></button>

            </div>

            <div id="more" style={{marginLeft:20,marginTop:"50px", fontSize:"8pt", display:"none"}} className="container">
            <Grid>
    <Grid.Row>
      <Grid.Column width={8}>
        <img alt='img' src={location} width="10px" style={{float:"left"}}></img>
        <div style={{display:"inline-block"}}>
        {/* <p>LOCATION</p> */}
        <div className="propsHeaders"><Translate content="location" component="h4" unsafe={true}/></div>

        <p  style={{color:"rgb(0, 130, 242)"}} className="propsTags">{this.props.user.location}</p>
        {/* <Translate content="copy.p1" component="p" unsafe={true}/> */}

        </div>
      </Grid.Column>
      <Grid.Column width={8}>
        <img alt='img' src={location} width="10px" style={{float:"left"}}></img>
        <div style={{display:"inline-block"}}>
        {/* <p>DISTANCE</p> */}
        <div className="propsHeaders"><Translate content="distance" component="h4" unsafe={true}/></div>

        <p className="propsTags">{this.props.user.distance}</p>
        </div>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={8}>
        <img alt='img' src={location} width="10px" style={{float:"left"}}></img>
        <div className="propsHeaders" style={{display:"inline-block"}}>
        <p>DUE DATE</p>
        <p className="propsTags">{this.props.user.date}</p>
        </div>
      </Grid.Column>
      <Grid.Column width={8}>
        <img alt='img' src={location} width="10px" style={{float:"left"}}></img>
        <div className="propsHeaders" style={{display:"inline-block"}}>
        <p>URGENCY LEVEL</p>
        <p className="propsTags">Urgent</p>
        </div>
      </Grid.Column>
    </Grid.Row>
    </Grid>
    <hr/>
    <Grid>
    <Grid.Row>
      <Grid.Column width={8}>
        <img alt='img' src={location} width="10px" style={{float:"left"}}></img>
        <div className="propsHeaders" style={{display:"inline-block"}}>
        <Translate content="phone" component="p" />
        <p className="propsTags">{this.props.user.phone}</p>
        </div>
      </Grid.Column>
      <Grid.Column width={8}>
        <img alt='img' src={location} width="10px" style={{float:"left"}}></img>
        <div className="propsHeaders" style={{display:"inline-block"}}>
        <p>POSTER NAME</p>
        <p className="propsTags">{this.props.user.userName}</p>
        </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
</div>           
<div style={{width:"100%", textAlign:"center", marginTop:"20px"}}>
You can connect with the person that posted this request via next lorem ipsom:
</div>
<div style={{width:"100%", textAlign:"center", marginTop:20}}>
    <a href={whatsappLink} ><Icon size="big" style={{marginRight:50}} color="green" name="whatsapp"></Icon></a>
    <Icon size="big" style={{marginRight:50}} color="blue" name="phone"></Icon>
    <Icon size="big" color="yellow" name="mail"></Icon>
</div>
{/* <div style={{position:"absolute" , top:"3%", left:"3%", }} className="linkHome">
    <Link style={{color:"white"}} to='/homePage'>Home</Link>
</div> */}
</div>
            {/* end page */}
            </div>
        )
    }
}
