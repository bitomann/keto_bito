import React, { Component } from "react"
import ApiManager from "../modules/ApiManager"
// import ShoppingList from "../ShoppingList/ShoppingList"

class RegisterAccount extends Component {

    state = {
        email: "",
        password: "",
        confirmPassword: "",
        userId: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Save new user to database
    constructNewUser = e => {
        e.preventDefault();
        ApiManager.getUserData()
            .then(users => {
                if (users.find(user => user.email.toLowerCase() === this.state.email.toLowerCase())) {
                    alert("Email already exists")
                } else if (this.state.password !== this.state.confirmPassword) {
                    alert("Passwords don't match")
                } else if (this.state.email === "" || this.state.password === "" || this.state.confirmPassword === "") {
                    alert("Please fill out all fields")
                } else if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))) {
                    alert("Please enter a valid email address")
                } else {
                    this.setState({ loadingStatus: true });
                    const user = {
                        email: this.state.email,
                        password: this.state.password
                    };
                    // Create the user and redirect user to shopping List
                    ApiManager.createNewUser(user)
                    .then(results => {
                        localStorage.setItem("credentials", results.id)
                        return results
                    })
                    .then(results => {
                        const shoppingList = {
                            userId: results.id
                        };
                        ApiManager.createShoppingList(shoppingList)
                       .then(results =>
                        {
                            console.log("RESULTS", results)
                            localStorage.setItem("shoppingLists", results.id)

                        } ) 
                        });
                this.props.history.push("/shoppingList")
                 }}

                 
                 )
                 }
                 
            
            render() {
            return (
                <>
                <form>
                    <fieldset>
                        <h3>Register</h3>
                        <div className="formgrid">
                            <label htmlFor="inputEmail">Email address: </label>
                            <input onChange={this.handleFieldChange} type="email"
                                id="email"
                                placeholder="Email address"
                                required="" />

                            <label htmlFor="inputPassword">Password: </label>
                            <input onChange={this.handleFieldChange} type="password"
                                id="password"
                                placeholder="Password"
                                required="" />

                            <label htmlFor="inputPassword">Confirm Password</label>
                            <input onChange={this.handleFieldChange} type="password"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                required="" />

                        </div>
                        <button onClick={this.constructNewUser} type="submit">
                            Register
                        </button>
                    </fieldset>
                </form>
            </>
        )
    }
    }


export default RegisterAccount;
