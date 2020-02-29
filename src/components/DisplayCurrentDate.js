import React, { Component } from "react";


class displayDate extends Component {

  state = {
    curDate: null
  }

  componentDidMount() {
    setInterval(
      () => this.GetDayMonthYear(), 1000)
  }

  GetDayMonthYear() {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];
    let currentDate = new Date();
    let formatedDate = currentDate.getDate() + "-" + months[currentDate.getMonth()] + "-" + currentDate.getFullYear()
    this.setState({ curDate: formatedDate })
  }

  render() {
    return (
      <div>{this.state.curDate}</div>
    );
  }
}

export default displayDate;
