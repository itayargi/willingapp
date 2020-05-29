import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views';
import PostsShow from './PostsShow';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import postJson from './postsJson.json'

export default class PostsPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      swipeIndex:0,
    }
  }
  
  a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
    
    render() {
        const styles = {
            slide: {
              // padding: 10,
              maxHeight: "100vh",
              color: 'black',
              // boxSizing:"border-box"
              width:"100%"
                
            },
            slide1: {
              backgroundColor: '#FEA900',
              width:"100%"
              
            },
            slide2: {
              backgroundColor: '#B3DC4A',
            },
            slide3: {
              backgroundColor: '#6AC0FF',
            },
          };
          
          const handleChangeIndex = (index) => {
            this.setState({
              swipeIndex: index,
            })
          };
          const handleChange = (event, newValue) => {
            this.setState({
                swipeIndex: newValue,
              })
          };
          
          const miniPosts=postJson.slice(0,15)

        return (
            <div>
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
          <h3 style={{ margin: "auto" }}>HOME SCREEN</h3>
        </div>
                <AppBar position="static" color="default">
                    <Tabs
                    value={this.state.swipeIndex}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    >
                    <Tab label="RECENT" {...this.a11yProps(0)} />
                    <Tab label="LOCATION" {...this.a11yProps(1)} />
                    <Tab label="MINE" {...this.a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
              slideStyle={{ }} 
              index={this.state.swipeIndex}
              onChangeIndex={handleChangeIndex}
              enableMouseEvents>
              <div style={Object.assign({}, styles.slide, {})}><PostsShow postsFile={miniPosts} updateUser={this.props.updateUser} /></div>
              <div style={Object.assign({}, styles.slide, {})}><PostsShow postsFile={miniPosts} updateUser={this.props.updateUser}/></div>
              <div style={Object.assign({}, styles.slide, {})}><PostsShow postsFile={miniPosts} updateUser={this.props.updateUser}/></div>
            </SwipeableViews>
            {/* float btn */}
            <div style={{position:"fixed", bottom:"10%", right:"4%", zIndex:5}}>
              <Link style={{}} to='/newRequest'>
                <div>
                    <Fab color="primary" aria-label="add" >
                    <AddIcon />
                    </Fab>
                </div>
              </Link>
          </div>
            </div>
            
                
        )
    }
}
