import React, { Component } from 'react'
import ApiManager from '../modules/ApiManager'
import '../ShoppingList/ShoppingList.css'


class ShoppingList extends Component {

    state = {
        savedFoods: [],
        // shoppingLists: [],
    }
    shoppingListId = localStorage.getItem("shoppingLists")
    componentDidMount() {
        ApiManager.getLoggedInUserSavedFoodsList(this.shoppingListId)
        .then(savedFoods => {
            console.log("CHECK", savedFoods)
            this.setState({
                savedFoods: savedFoods,
            })
        })
        // ApiManager.getLoggedInUserShoppingList(this.userId)
        //  .then(results =>
        // {
        //     console.log("RESULTS", results)
        //     localStorage.setItem("shoppingLists", results.id)

        // } )
    }

    
   
    handleDelete = (savedFoodId) => {
        console.log("DELETE", savedFoodId)
        //invoke the delete function in APIManger and re-direct to the animal list.
        // this.setState({loadingStatus: true})
        ApiManager.delete("savedFoods", savedFoodId)
        .then(() => ApiManager.getLoggedInUserSavedFoodsList(this.shoppingListId)
        .then(savedFoods => {
            console.log("CHECK", savedFoods)
            this.setState({
                savedFoods: savedFoods,
            })
        }))
    }
    
    render() {
        console.log("LIST RENDER", this.state)
        return (
            <>                
            <h1>SHOPPING LIST</h1>
            <div className="shoppingList">
                <ul> {this.state.savedFoods.map(savedFoods => 
                   <li key={savedFoods.id}>
                   <button type="button" disabled={this.state.loadingStatus} onClick={
                       () => this.handleDelete(savedFoods.id)}>Remove</button>
                    {savedFoods.food.name}
                   </li>
                 )} </ul>
            </div>
            </>
            )
        }
}

export default ShoppingList