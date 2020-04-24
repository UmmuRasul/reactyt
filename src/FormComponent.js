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
          value="{.lastName}"
          onChange={props.handleChange}
          placeholder="Last Name"
        />

        <br />
        <input
          name="age"
          value="{.age}"
          onChange={props.handleChange}
          placeholder="Age"
        />
        <br />
        <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={this.stae.gender}
          onChange={props.handleChange}
        />Male
        </label>

        <br />
        <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={this.stae.gender}
          onChange={props.handleChange}
        />Female
        </label>
        <br />
        <select
          value={.destination}
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
          checked={.isVegan}
        />Vegan
        </label>

        <br />
        <label>
        <input
          type="checkbox"
          name="isKosher"
          onChange={props.handleChange}
          checked={.isKosher}
        />Kosher
        </label>

        <label>
        <input
          type="checkbox"
          name="isKosher"
          onChange={props.handleChange}
          checked={.isLoctoseFree}
        />Loctose Free
        </label>
        <br />

        <button>Submit</button>
      </form>
      <hr />
      <h2>Enter Information below:</h2>
      <p>Your Name: {.firstName}{.lastName}<p/>
      <p>Your Age: {.age}</p>
      <p>Your Gender: {.gender}</p>
      <p>Your Destination: {.destination}</p>
      <p>Your dietary restrictions:</p>
        <p>Vegan:{.isVegan ? "Yes" : "No"}</p>
        <p>Kosher:{.isKosher ? "Yes" : "No"}</p>
        <p>LoctoseFree:{.isLoctoseFree ? "Yes" : "No"}</p>

    </main>
  )
}
export default FormComponent;
