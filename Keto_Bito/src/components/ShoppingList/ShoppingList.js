import React, { Component } from 'react'
import ApiManager from '../modules/ApiManager'
// import FoodCard from '../Foods/FoodCard'
// import RegisterAccount from '../auth/RegisterAccount'


class ShoppingList extends Component {

    state = {
        savedFoods: [],
        // shoppingLists: [],
    }

    componentDidMount() {
        ApiManager.getAll("savedFoods?_expand=food&_expand=shoppingList")
        .then(savedFoods => {
            this.setState({
                savedFoods: savedFoods,
            })
        })
        // .then(shoppingLists => {
        //     this.setState({
        //         shoppingLists: shoppingLists,
        //     })
        // })
    }

    
   
    handleDelete = (savedFoodId) => {
        //invoke the delete function in APIManger and re-direct to the animal list.
        // this.setState({loadingStatus: true})
        ApiManager.delete("savedFoods", savedFoodId)
        .then(() => ApiManager.getAll("savedFoods?_expand=food&_expand=shoppingList")
        .then(savedFoods => {
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