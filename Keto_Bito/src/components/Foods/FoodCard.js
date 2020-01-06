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
        //     .then
        ApiManager.getAllforLoggedInUser("userId", "shoppingLists")
            .then(shoppingList => {
                this.setState({
                    shoppingList: shoppingList
                })
            })
    }
    
    
    savedFood = evt => {
        const shoppingListId = localStorage.getItem("shoppingLists");
        evt.preventDefault()
        const favoriteFoodId = {
            addShoppingList: evt.target.onClick,
            id: ShoppingList
        }
    }
    // console.log("SAVE TO LIST", shoppingListId, favoriteFoodId)
    
    addFoodToShoppingList = evt => {
        
    const newListItem = {
        shoppingListId: Number (localStorage.getItem("shoppingLists")),
        foodId: this.props.food.id
        
    }
    ApiManager.post("savedFoods", newListItem)
        console.log(newListItem) }

        // handleDelete = () => {   
        //     console.log("I clicked delete")
        //       //invoke the delete function in Food.
        //       this.setState({loadingStatus: true})
        //       ApiManager.delete("foods", this.props.foodId)
        //       .then(() => this.props.history.push("/foods"))
        //   }

    render() {
        console.log("FISH", this.props.food.userId)
        console.log("SCALEY", this.props.loggedUser)
        return (
            <div className="foodCard">
                <div className="card-content">
                    <h1>{this.props.food.name}</h1>
                    {/* <Link className="nav-link" id="keto-bito" style={{ textDecoration: 'none' }} to="/foods">{this.props.food.name}</Link> */}
                    {/* <p>{this.props.food.description}</p> */}
                    {/* <button type="button" onClick={this.handleDelete}>DELETE</button> */}
                    {
                    this.props.food.userId===this.props.loggedUser
                    ?
                    <button type="button" onClick={() => { this.props.history.push(`/foods/${this.props.food.id}/edit`)}}> EDIT</button>
                    :
                    null
                    }
                    <Link to={`/foods/${this.props.food.id}`}><button>Details</button>
                    </Link>
                    <button type="button" name="savedFood" onClick={
                       this.addFoodToShoppingList}
                    >ADD TO SHOPPING LIST</button>
                    <hr />
            
                </div>    
            </div>
        );
    }
}

export default FoodCard