import React, { Component } from 'react'
import ApiManager from '../modules/ApiManager'
import FoodCard from '../Foods/FoodCard'
// import FoodCard from '../Foods/FoodCard'


class ShoppingList extends Component {

    state = {
        savedFoods: [],
    }

    componentDidMount() {
        ApiManager.getAll("savedFoods?_expand=food&_expand=shoppingList")
        .then(savedFoods => {
            this.setState({
                savedFoods: savedFoods
            })
        })
    }
   
   
    
    render() {
        console.log("LIST RENDER", this.state)
        return (
            <>                
            <h1>SHOPPING LIST</h1>
            <div className="shoppingList">
                <ul> {this.state.savedFoods.map(savedFoods => 
                   <li key={savedFoods.id}>
                    {savedFoods.food.name}
                   </li>
                 )} </ul>
            </div>
            </>
            )
        }
}

export default ShoppingList