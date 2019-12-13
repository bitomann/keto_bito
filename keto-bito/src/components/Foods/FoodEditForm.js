import React, { Component } from "react";
import ApiManager from "../modules/ApiManager";

class FoodEditForm extends Component {
    state = {
        foodName: "",
        description: "",
        // imageUrl: "",
        loadingStatus: true,
        // ^something to with edit button 
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    updateExistingFood = evt => {
        const userId = localStorage.getItem
        ("credentials")
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedFood = {
            id: this.props.match.params.foodId,
            name: this.state.foodName,
            description: this.state.description,
            userId: Number(userId)

        };

        ApiManager.update("foods", editedFood)
        .then(() => this.props.history.push("/foods"))
    }
// calls API to get the animal based on the animalId in the URL.
componentDidMount() {
    ApiManager.get("foods", this.props.match.params.foodId)
    .then(food => {
        this.setState({
            foodName: food.name,
            description: food.description,
            // imageUrl:,
            loadingStatus: false,
        });
    });
}


render() {
    console.log(this.props.match.params.foodId)
    console.log(this.props)
    console.log("STATE", this.state)
    return (
        <>
        <form>
        <fieldset>
            <div className="formgrid">
                <label htmlFor="foodName">Food Name</label>
                <input type="text" required className="form-control" onChange={this.handleFieldChange}
                id="foodName" value={this.state.foodName}
                />

<label htmlFor="description">Description</label>
              <input
                type="input"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="description"
                value={this.state.description}
              />
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingFood}
                className="btn btn-primary"
              >Update</button>
              </div>
        </fieldset>
        </form>
        </>
     );
    }
}    

    export default FoodEditForm