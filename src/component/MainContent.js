import React from 'react';

function Header(){
  const date = new Date()
  const hours = date.getHours()
  let timeofDay

  if (hours < 12){
    timeofDay = "morning"
  }
  else if(hours>=12 && hours< 12){
    timeofDay = "afternoon"
  }else {
    timeofDay = "night"
  }
  const styles = {
    color:"#FF8C00",
    backgroundColor:"#FF2D00",
    fontSize:"200px"
  }

  return(
      <h1 style={styles}>Good {timeofDay} Mariam</h1>
  )
}
export default Header
