import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ApiManager from '../modules/ApiManager';
import ShoppingList from '../ShoppingList/ShoppingList';

class FoodCard extends Component {

    componentDidMount() {
        //getAll from ApiManager, hangs on to that data, and puts it into state
        // ApiManager.getLoggedInUser("userId")
        //     .then(userId => {
        //         this.setState({
        //             userId: userId
        //         })
        //     })
            // .then
        ApiManager.getAllforLoggedInUser("userId", "shoppingList")
            .then(shoppingList => {
                this.setState({
                    shoppingList: shoppingList
                })
            })
    }


    savedFood = evt => {
        const shoppingListId = this.props.savedFoods
        evt.preventDefault()
        const favoriteFoodId = {
            addShoppingList: evt.target.onClick,
            id: ShoppingList
        }
        console.log("SAVE TO LIST", shoppingListId, favoriteFoodId)
    }

    render() {
        return (
            <div className="foodCard">
                <div className="card-content">
                    {/* <h1>{this.props.food.name}</h1> */}
                    <Link className="nav-link" id="keto-bito" style={{ textDecoration: 'none' }} to="/foods">{this.props.food.name}</Link>
                    <p>{this.props.food.description}</p>
                    <button type="button" onClick={() => this.props.deleteFood}>DELETE</button>
                    <button type="button" onClick={() => { this.props.history.push(`/foods/${this.props.food.id}/edit`)}}> EDIT</button>
                    <Link to={`/foods/${this.props.food.id}`}><button>Details</button></Link>
                    <button type="button" name="savedFood" onClick={this.state}>ADD TO SHOPPING LIST</button>
                    <hr />
                </div>    
            </div>
        );
    }
}

export default FoodCard