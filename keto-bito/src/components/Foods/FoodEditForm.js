import React, { Component } from "react";
import ApiManager from "../modules/ApiManager";

class FoodEditForm extends Component {
    state = {
        foodName: "",
        description: "",
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
            name: this.props.foodName,
            description: this.props.description,
            userId: Number(userId)
        };

        ApiManager.update("foods", editedFood)
        .then(() => this.props.history.push("/foods"))
    }

componentDidMount() {
    ApiManager.get("foods", this.props.match.params.taskId)
    .then(food => {
        this.setState({
            foodName: food.name,
            description: food.description,
            loadingStatus: false,
        });
    });
}


render() {
    return (
        <>
        <form>
        <fieldset>
            <div className="formgrid">
                <label htmlFor="taskName">Food Name</label>
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
              >Submit</button>
              </div>
        </fieldset>
        </form>
        </>
     );
    }
}    

    export default FoodEditForm