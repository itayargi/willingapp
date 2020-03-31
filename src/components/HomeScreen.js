import React, { Component } from "react";
import { ViewPager, Frame, Track, View, } from 'react-view-pager'
import ListOfPosts from "./ListOfPosts";
import OnBoarding1 from "./OnBoarding1";
import 'bootstrap/dist/css/bootstrap.min.css';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MyPosts from "./MyPosts";


export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value:[],

        }
    }
    
  render() {
    const firstPAge = () => {
        this.track.scrollTo("0")
      };
      const secondPage = ()=>{
          this.track.scrollTo("2");
      }

  const handleChange = (event, newValue) => {
    this.setState({value:newValue});
  };
    return ( 
      <div style={{alignItems:"center", alignContent:"center",justifyContent:"center",}}>
        <ViewPager initialPage={0}>
          >
          <Frame>
            <div
              style={{
                display: "grid",
                color: "white",
                height: "10vh",
                backgroundColor: "rgb(57, 55, 119)"
              }}
              className="homeHeader"
            >
              <h3 style={{ margin: "auto" }}>HOME SCREEN</h3>
            </div>
            <div style={{display:"grid",width:"100%" }}>
            <Paper  square>
  <Tabs
    value={this.state.value}
    indicatorColor="primary"
    textColor="primary"
    onChange={handleChange}
    aria-label="disabled tabs example"
  >
    <Tab label="Active" onClick={firstPAge}/>
    <div style={{width:"100%"}}></div>
    <Tab label="Active2" onClick={secondPage}/>
    <div style={{width:"100%"}}></div>
    <Tab label="Active3" onClick={firstPAge}/>
  </Tabs>
</Paper>
</div>

            <Track
              ref={c => (this.track = c)}
              viewsToShow={1}
              // infinite
              className="track"
            >
              <View key="1">
                <ListOfPosts />
              </View>
              <View key="2">
              <MyPosts/>

              </View>
              <View key="3">
              <ListOfPosts />


              </View>
            </Track>
          </Frame>
        </ViewPager>
      </div>
    );
  }
}
