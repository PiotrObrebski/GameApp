import './TimeControl.css';

import React, { CSSProperties, useEffect } from 'react';
import { ReactElement } from 'react';
import { connect } from 'react-redux';

const TimeControl = (
  props:{
    currentGame: IGame
    active: boolean
  }
): ReactElement => {
  // useEffect(()=>{
  //   if (props.active){
  //     const timer = setTimeout(() => {
  //       // sliderAnimation()
        
        
  //     }, props.currentGame.time);
  //     return () => clearTimeout(timer);
  //   }

  // },[props.active]);

  // const sliderAnimation = () => {
  //   const sliderElement = document.querySelector('.time-control-slider');
  //   const transitionTime = props.currentGame.time.toString() + 's';
  //   window.getComputedStyle(sliderElement, ':before').setProperty('transition', transitionTime)
  // }

  const generateSliderClassName = () => {
    const sliderClassName = props.active ? 'time-control-slider time-control-slider-hidden' : 'time-control-slider';

    return sliderClassName;
  }

  return(
  <div className="time-control">
    <div className="time-control-top">
      <div className={generateSliderClassName()}>
        {/* <div style={sliderheight} className="slider-bar"></div> */}
      </div>
    </div>
    <div className="time-control-bottom">
      <div className="time-control-bottom-content">
        <div className="time-control-text">time</div>
        <div className="time-control-number">
          {props.currentGame.time}
        </div>
      </div>
    </div>
  </div>
)}

const mapStateToProps = (
  state: {
    currentGame: IGame;
  }
) => {
  const { currentGame } = state;
  return { currentGame };
}

export default connect(
  mapStateToProps, 
  {}
)(TimeControl);