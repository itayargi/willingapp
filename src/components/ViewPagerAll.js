import React, { Component } from "react";
import { ViewPager, Frame, Track, View } from "react-view-pager";
import OnBoarding1 from "./OnBoarding1.js";
import OnBoarding2 from "./OnBoarding2.js";
import OnBoarding3 from "./OnBoarding3.js";

export default class ViewPagerAll extends Component {
  render() {
    const nextAction = () => {
      this.track.next();
    };
    const skipAction = () => {
      this.track.next();
      this.track.next();
    };

    return (
      <div>
        <ViewPager tag="main">
          <Frame className="frame">
            <Track
              ref={c => (this.track = c)}
              viewsToShow={1}
              // infinite
              className="track"
            >
              <View className="view">
                <OnBoarding1 skipAction={skipAction} nextAction={nextAction} />
              </View>
              <View className="view">
                <OnBoarding2 nextAction={nextAction} />
              </View>
              <View className="view">
                <OnBoarding3 />
              </View>
            </Track>
          </Frame>
        </ViewPager>
      </div>
    );
  }
}
