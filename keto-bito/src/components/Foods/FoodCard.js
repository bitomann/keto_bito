import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ApiManager from '../modules/ApiManager';

class FoodCard extends Component {

    foodAdded  = evt => {
        const editedFoodId = this.props.food.id
        console.log("check", editedFoodId)
        evt.preventDefault()
        const editedFood = {
            addToList: evt.target.onClick,
            id: editedFoodId
        };

        ApiManager.patch("foods", editedFood)
        .then(this.props.getAllFoods)
    }

    savedFood = evt => {
        const shoppingListId = this.props.savedFoods.foodId
        evt.preventDefault()
        const favorite = {
            addShoppingToList: evt.target.onClick,
            id: shoppingListId
        }
        console.log("check", shoppingListId)
    }

    render() {
        return (
            <div className="foodCard">
                <div className="card-content">
                    <h1>Food Name: {this.props.food.name}</h1>
                    <p>Description: {this.props.food.description}</p>
                    {/* <button type="button" onClick={() => this.props.deleteFood}>DELETE</button> */}
                    <button type="button" onClick={() => { this.props.history.push(`/foods/${this.props.food.id}/edit`)}}> EDIT</button>
                    <Link to={`/foods/${this.props.food.id}`}><button>Details</button></Link>
                    <button type="button"onClick={this.savedFood}>ADD TO SHOPPING LIST</button>
                    <hr />
                </div>    
            </div>
        );
    }
}

export default FoodCard