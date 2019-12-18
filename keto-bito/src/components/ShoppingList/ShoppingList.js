import React, { Component } from 'react'
import ApiManager from '../modules/ApiManager'

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
   
    handleDelete = () => {
        //invoke the delete function in APIManger and re-direct to the animal list.
        this.setState({loadingStatus: true})
        ApiManager.delete("savedFoods", this.props.savedFoodId)
        .then(() => this.props.history.push("/shoppinglist"))
    }
    
    render() {
        console.log("LIST RENDER", this.state)
        return (
            <>                
            <h1>SHOPPING LIST</h1>
            <div className="shoppingList">
                <ul> {this.state.savedFoods.map(savedFoods => 
                   <li key={savedFoods.id}>
                   <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Remove</button>
                    {savedFoods.food.name}
                   </li>
                 )} </ul>
            </div>
            </>
            )
        }
}

export default ShoppingList