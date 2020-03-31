import React, { Component } from "react";
import { ViewPager, Frame, Track, View } from 'react-view-pager'
import OnBoarding1 from './OnBoarding1.js';
import OnBoarding2 from './OnBoarding2';

export default class OnboardingMain extends Component {
  render() {
    return (
      <div>
        <ViewPager>
          <Frame>
            <Track>
              <View><OnBoarding1/></View>
              <View><OnBoarding2/></View>
              {/* and other views (slides) you want to have in the carousel */}
            </Track>
          </Frame>
        </ViewPager>
      </div>
    );
  }
}
