import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';

class FoodCard extends Component {

    foodAdded  = evt => {
        const editedFoodId = this.props.food.id
        evt.preventDefault()
        const editedFood = {
            addToList: evt.target.checked,
            id: editedFoodId
        };

        ApiManager.patch("foods", editedFood)
        .then(this.props.getAllFoods)
    }

    reneder() {
        return (
            <div className="foodCard">
                <div className="card-content">
                    <h1>Food Name: {this.props.food.name}</h1>
                    <p>Description: {this.props.food.description}</p>
                    <button type="button" onClick={() => this.props.deleteFood}>DELETE</button>
                    <button type="button" onClick={() => { this.props.hidtory.push(`/foods/${this.props.food.id}/edit`)}}> EDIT</button>
                    <label htmlFor="addFoodToList">ADD TO SHOPPING LIST</label>
                    <input type="checkbox" name="addFoodToList" checked={this.props.food.added} onChange={this.foodAdded}/>
                    <hr />
                </div>    
            </div>
        );
    }
}

export default FoodCard