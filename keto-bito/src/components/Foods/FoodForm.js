import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';

class FoodForm extends Component {
    state = {
        foodName: "",
        description: "",
        // imageUrl: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
    /*  Local method for validation, set loadingStatus, create food      object, invoke the ApiManager post method, and redirect to the full food list
    */
    constructNewFood = evt => {
        const userId = localStorage.getItem("credentials");
        evt.preventDefault();
        if (this.state.foodName === "" || this.state.description === "") {
            window.alert("Please input a food description😃");
        } else {
            this.setState({ loadingStatus: true });
            const food = {
                foodName: this.state.foodName,
                description: this.state.description,
                // imageUrl:
                userId: Number(userId)
            }
            // Create the food and redirect user to food list
            
           return  ApiManager.post("foods", food)
            .then(() => this.props.history.push("/foods"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <label htmlFor="foodName">Food Name:</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="foodName"
                        placeholder="Food Name"
                        />
                        <label htmlFor="description">Description:</label>
                        <input
                        type="input"
                        required
                        onChange={this.handleFieldChange}
                        id="description"
                        placeholder="Description"
                        />
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewFood}
                        >Save</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default FoodForm