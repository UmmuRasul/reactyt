import FormContainer from './FormContainer'

function FormComponent(props){
  return(
    <main>
      <form>
        <input
          name="firstName"
          value="{this.data.firstName}"
          onChange={props.handleChange}
          placeholder="First Name"
        />

        <br/>

        <input
          name="lastName"
          value="{this.state.lastName}"
          onChange={props.handleChange}
          placeholder="Last Name"
        />

        <br />
        <input
          name="age"
          value="{this.state.age}"
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
          value={this.state.destination}
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
          checked={this.state.isVegan}
        />Vegan
        </label>

        <br />
        <label>
        <input
          type="checkbox"
          name="isKosher"
          onChange={props.handleChange}
          checked={this.state.isKosher}
        />Kosher
        </label>

        <label>
        <input
          type="checkbox"
          name="isKosher"
          onChange={props.handleChange}
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
      <p>Your dietary restrictions:</p>
        <p>Vegan:{this.state.isVegan ? "Yes" : "No"}</p>
        <p>Kosher:{this.state.isKosher ? "Yes" : "No"}</p>
        <p>LoctoseFree:{this.state.isLoctoseFree ? "Yes" : "No"}</p>

    </main>
  )
}
export default FormComponent;
