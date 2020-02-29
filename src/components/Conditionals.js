import React, { Component } from "react";
//import DayBreak from "../components/DayBreak";
import DisplayCurrentDate from "./DisplayCurrentDate";
import HourHandle from "../components/HourHandle";
import Afternoon from "./images/afternoon.jpg";
import SunRise from "./images/sun_rise.png";
import Sunset from "./images/sunset.jpg";

class Conditionals extends Component {
  //===== A function to dynamically print text ===

  getGreetings() {
    let CurrentDate = new Date()
    let Hour = CurrentDate.getHours();
    if (Hour >= 4 && Hour <= 11)
      return 'Good Morning Love!';
    else if (Hour >= 12 && Hour <= 16)
      return 'Good Afternoon, wonderful Person!';
    else if (Hour >= 17 && Hour <= 20)
      return 'Good Evening Love!';
    else if (Hour >= 21 || Hour <= 3)
      return 'Good Night Dearest!';
  }

  //===== A function to dynamically style the background ===
  getStyle() {

    let Hour = new Date().getHours();
    if (Hour >= 4 && Hour <= 11) {
      return SunRise

    } else if (Hour >= 12 && Hour <= 16) {
      return Afternoon
    }
    else if (Hour >= 17 && Hour <= 20) {
      return Sunset
    }
    else if (Hour >= 21 || Hour <= 3) {
      return Sunset
    };

  }

  render() {
    return (
      <div>
        <div className='container'>
        <div className='BgImage' style={{ backgroundImage: `url(${this.getStyle()})` }}>
        <div style={{ fontFamily: 'Trebuchet MS', fontSize: '40px', color:'white' }}  ><DisplayCurrentDate /></div>
        <div className='Time'>
          <HourHandle />
        </div>
        <div className='Greetings'>
          {this.getGreetings()}</div>   
      </div>
        </div>
      </div>
    
    );
  }
}

export default Conditionals;
