import React, { Component } from "react";
import DayBreak from "../components/DayBreak";
import Afternoon from "./images/afternoon.jpg";
import SunRise from "./images/sun_rise.png";
import Sunset from "./images/sunset.jpg";

export class Conditionals extends Component {
  //===== A function to dynamically style the background ===

 Greetings() {
  let current_datetime = new Date()
  let Hour = current_datetime.getHours();
   if (Hour >= 5 && Hour <= 12)
     return 'GOOD MORNING!';
     else if (Hour >= 13 && Hour <= 17)
     return 'GOOD AFTERNOON!';
     else if (Hour >= 21 || Hour <= 3)
     return 'GOOD NIGHT!';
  }

  getStyle() {
    let current_datetime = new Date()
    let Hour = current_datetime.getHours();
    console.log(Hour)
    let ImgSrc;
    if (Hour >= 5 && Hour <= 16) {
      ImgSrc = SunRise 
      console.log(ImgSrc)
    } else if (Hour >= 17 && Hour <= 20) {
      ImgSrc = Afternoon
    }
    else if (Hour >= 21 || Hour <= 3) {
      ImgSrc = Sunset
    };
    return ImgSrc;
  }

  render() {
    return (

      <div className='BgImage' style={{ backgroundImage: `url(${this.getStyle()})` }}>
        <div className = 'Greetings'>{this.Greetings()}</div>
        <div className='Time'><DayBreak /></div>
      </div>
    );
  }
}

export default Conditionals;
