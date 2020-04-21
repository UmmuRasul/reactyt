import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem';
import todosData from './todosData';


class App extends Component{
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
      <main>
          <form>
            <input
            name="firstName"
            value="{this.state.firstName}"
            onChange={this.handleChange}
            placeholder="First Name"
            />

          <br/>

          <input
            name="lastName"
            value="{this.state.lastName}"
            onChange={this.handleChange}
            placeholder="Last Name"
          />

        <br />
        <input
          name="age"
          value="{this.state.age}"
          onChange={this.handleChange}
          placeholder="Age"
        />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.stae.gender}
              onChange={this.handleChange}
              />Male
          </label>

          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.stae.gender}
              onChange={this.handleChange}
              />Female
          </label>
          <br />
          <select
            value={this.state.destination}
            name="destination"
            onChange={this.handleChange}
          >
            <option value="">--Choose destination here--</option>
            <option value="German">German</option>
            <option value="Norway">Norway</option>
            <option value="Northpole">Northpole</option>
            <option value="Southpole">Southpole</option>
          </select>

          <br/>
          <label>
          <input
            type="checkbox"
            name="isVegan"
            onChange={this.handleChange}
            checked={this.state.isVegan}
          />Vegan
          </label>

          <br />
          <label>
          <input
            type="checkbox"
            name="isKosher"
            onChange={this.handleChange}
            checked={this.state.isKosher}
          />Kosher
          </label>

          <label>
          <input
            type="checkbox"
            name="isKosher"
            onChange={this.handleChange}
            checked={this.state.isLoctoseFree}
          />Loctose Free
          </label>
          <br />

          <button>Submit</button>
          </form>
          <hr />
          <h2>Enter Information below:</h2>
          <p>Your Name: {this.state.firstName}{this.state.lastName}<p/>
          <p>Your Age: {this.state.age}</p>
          <p>Your Gender: {this.state.gender}</p>
          <p>Your Destination: {this.state.destination}</p>
      </main>
      )
    }
  }
export default App;
