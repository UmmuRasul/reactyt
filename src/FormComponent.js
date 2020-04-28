import React from 'react';
import FormContainer from './FormContainer'

function FormComponent(props){
  return(
    <main>
      <form>
        <input
          name="firstName"
          value="{props.data.firstName}"
          onChange={props.handleChange}
          placeholder="First Name"
        />

        <br/>

        <input
          name="lastName"
          value="{props.data.lastName}"
          onChange={props.handleChange}
          placeholder="Last Name"
        />

        <br />
        <input
          name="age"
          value="{props.data.age}"
          onChange={props.handleChange}
          placeholder="Age"
        />
        <br />
        <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={props.data.gender}
          onChange={props.handleChange}
        />Male
        </label>

        <br />
        <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={props.data.gender}
          onChange={props.handleChange}
        />Female
        </label>
        <br />
        <select
          value={props.data.destination}
          name="destination"
          onChange={props.handleChange}
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
          onChange={props.handleChange}
          checked={props.data.isVegan}
        />Vegan
        </label>

        <br />
        <label>
        <input
          type="checkbox"
          name="isKosher"
          onChange={props.handleChange}
          checked={props.data.isKosher}
        />Kosher
        </label>

        <label>
        <input
          type="checkbox"
          name="isKosher"
          onChange={props.handleChange}
          checked={props.data.isLoctoseFree}
        />Loctose Free
        </label>
        <br />

        <button>Submit</button>
      </form>
      <hr />
      <h2>Enter Information below:</h2>
      <p>Your Name: {props.data.firstName}{this.state.lastName}<p/>
      <p>Your Age: {props.data.age}</p>
      <p>Your Gender: {props.data.gender}</p>
      <p>Your Destination: {props.data.destination}</p>
      <p>Your dietary restrictions:</p>
        <p>Vegan:{props.data.isVegan ? "Yes" : "No"}</p>
        <p>Kosher:{props.data.isKosher ? "Yes" : "No"}</p>
        <p>LoctoseFree:{props.data.isLoctoseFree ? "Yes" : "No"}</p>

    </main>
  )
}
export default FormComponent;
