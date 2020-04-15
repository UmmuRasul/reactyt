import React from 'react'
function ContactCard(props){
  return(
    <div className="contact-card">
      <img src={props.contact.imgUrl}/>
      <h3>{props.contact.name}</h3>
      <p>Phone: {props.contact.Phone}</p>
    </div>
  )
}
export default ContactCard
