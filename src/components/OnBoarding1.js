import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './OnBoarding1.css'
import onboarding1 from '../pics/Onboarding_01.png'
import OnBorading3 from './OnBoarding3';


export default class OnBoarding1 extends Component {
    
    
    
    render() {
        const location =()=>{
            navigator.geolocation.getCurrentPosition(function(position){
	            console.log(position);
    	    }); 
        }

        return (
            <div className="container">
            <div className="partUp">
                <img alt="firstPic" src={onboarding1} className="pictureUp"></img>

            </div>
            {/* end part 1 */}
            <div className="partDown">
            <div className="kituv">
                <h3>סיוע</h3>
                <p>בקש מה שאתה רוצה מהאנשים הרלוונטיים שרוצים לעזור.רלוונטיים שרוצים לעזור.</p>
                </div>
                <div className="buttons">
                <div className="row">
                <div className="col-4">
                {/* <Link style={{fontSize:20}} to='/OnBoarding3'> */}
                <button onClick={this.props.skipAction}>skip</button>
            
                {/* </Link> */}
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4">
                    {/* <Link style={{fontSize:20}} to='/OnBoarding2'> */}
                    {/* </Link> */}
                    <button onClick={this.props.nextAction}>--></button>
                    {/* <button onClick={location}>location</button> */}
                    </div>
                    </div>

                </div>
            </div>
                {/* end part down */}
                

            </div>
        )
    }
}
