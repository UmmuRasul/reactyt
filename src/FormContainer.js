import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FormComponent from ',/FormComponent';

class FormContainer extends Component{
  constructor(){
    super()
    this.state = {
      firstName:"",
      lastName:"",
      age: "",
      gender:"",
      destination:"",
      isVegan: false,
      isKosher:false,
      isLoctoseFree:false
    }
      this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    const {name, value, type, checked} = event.target
    type === "checkbox" ?
      this.setState({
        [name]: checked
      })
    :
    this.setState({
      [name]:value
    })
  }
  render(){
    return(
      <FormComponent
          handleChange={this.handleChange}
          data={this.state}
      />
    )

  }
}
export default FormContainer;
