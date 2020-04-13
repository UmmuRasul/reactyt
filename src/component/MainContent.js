import React from 'react';

function Header(){
  const date = new Date(2019, 6, 8, 15)
  const hours = date.getHours()
  let timeofDay

  const styles = {
    fontSize:"30px"
  }

  if (hours < 12){
    timeofDay = "morning"
    styles.color = "#04756F"
  }
  else if(hours>=12 && hours< 12){
    timeofDay = "afternoon"
    styles.color = "#2E0927"
  }else {
    timeofDay = "night"
    styles.color = "#D90000"
  }

  return(
      <h1 style={styles}>Good {timeofDay} Mariam</h1>
  )
}
export default Header
