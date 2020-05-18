import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import RecentPosts from './RecentPosts';
import LocationPosts from './LocationPosts'
import MyPosts from './MyPosts';
import PostsShow from './PostsShow';
import location from '../pics/location.png'
import arrow from '../pics/arrow.png'
import clock from '../pics/clock.png'
import postJson from './postsJson.json'
import cities_data from './israel-cities'
import Case from '../pics/Category Icons/Case.svg'
import emergency from '../pics/Category Icons/Emergency.svg'
import lostFound from '../pics/Category Icons/Lost and found.svg'
import General from '../pics/Category Icons/General.svg'
import givAway from '../pics/Category Icons/Give away.svg'
import ItemNeeded from '../pics/Category Icons/Item needed.svg'
import Ride_Delivery from '../pics/Category Icons/Ride_Delivery.svg'
import RoadAssist from '../pics/Category Icons/Road assist.svg'
import Social from '../pics/Category Icons/Social.svg'
import { Link } from "react-router-dom";
import PostsPage from './PostsPage'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));
export default function FullWidthTabs(props) {
// function for posts

// translate which city by number
const findCity=(num)=>{
  if (cities_data.name){
      return cities_data.find(city=>city.id===num).name
  }
}
// show the time with minutes, hours and days
const findTime=(timeNum)=>{
  const time= new Date(timeNum)
  const hours= time.getHours();
  const days= time.getDay();
  const minutes = time.getMinutes();
  // time post display
  if(days>0){
    return days+ " days ago"
  }
  else if (hours <=0){
    return minutes + " minutes ago"
  }
  else return hours+" hours ago"
}
// find type of category
const findCategory=(num)=>{
  switch (num){
    case 0:
      return "Emergency"
    case 1:
      return "Medical"
    case 2:
      return "Ride/Delivery"
      case 3:
      return "Road assistant"
    case 4:
      return "Item needed"
    case 5:
      return "Give away item"
      case 6:
      return "Lost and found"
    case 7:
      return "Social"
    default:
      return "General"
  }
}
// find picture for category
const categoryPic=(num)=>{
  switch (num){
    case 0:
      return emergency
    case 1:
      return Case
    case 2:
      return Ride_Delivery
      case 3:
      return RoadAssist
    case 4:
      return ItemNeeded
    case 5:
      return givAway
      case 6:
      return lostFound
    case 7:
      return Social
    default:
      return General
  }
 }

// end functions
 
  // const recent = props.user
  // recent.map(user=>{
  //   // user.categoryId=categoryPic(user.categoryId)
  //   user.categoryId=findCategory(user.categoryId)
  //   user.city=findCity(user.city)
  //   user.createDate=findTime(user.createDate)

  // })
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="RECENT" {...a11yProps(0)} />
          <Tab label="LOCATION" {...a11yProps(1)} />
          <Tab label="MINE" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        {/* tab 1- recent posts */}
          {/* <RecentPosts user={props.user} updateUser={props.updateUser}/> */}
          <PostsShow postsFile={props.user} updateUser={props.updateUser}/>
          {/* <PostsPage postsFile={recent} updateUser={props.updateUser}/> */}
           
        {/* <LocationPosts location={props.location} updateUser={props.updateUser}/> */}

        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        {/* tab 2- local posts */}
        {/* <LocationPosts location={props.location} updateUser={props.updateUser}/> */}
        <PostsShow postsFile={props.location} updateUser={props.updateUser}/>
        {/* <PostsPage postsFile={recent} updateUser={props.updateUser}/> */}

        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        {/* tab 3- my posts */}
        {/* <MyPosts updateUser={props.updateUser} myPosts={props.myPosts}/> */}
        <PostsShow postsFile={props.myPosts} updateUser={props.updateUser}/>
        {/* <PostsPage postsFile={recent} updateUser={props.updateUser}/> */}


        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
