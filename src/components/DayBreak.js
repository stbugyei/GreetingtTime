import React from 'react'


export function GetTime() {
  
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  let currentTime = new Date()
  let formattedDate = currentTime.getDate() + "-" + months[currentTime.getMonth()] + "-" + currentTime.getFullYear() + ' ' + currentTime.getHours() + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds();

  return (
    <div ><p>{formattedDate}</p>
    </div>
  );
}

export default GetTime;