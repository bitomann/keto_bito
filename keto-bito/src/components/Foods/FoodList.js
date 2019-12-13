import React, { Component } from 'react'
import ApiManager from "../modules/ApiManager"
import FoodCard from './FoodCard';
// This Module Handles Setting the State of Foods, Rendering  Food Cards to the DOM, and Delete and Edit Functionality for A Single Food

class FoodList extends Component {
    // defines what this component needs to render
    state = {
        foods: [],
    }
    
    componentDidMount() {
        //getAll from ApiManager, hangs on to that data, and puts it into state
        ApiManager.getAll("foods")
            .then(foods => {
                this.setState({
                    foods: foods
                })
            })
    }

    getAllFoods= () => {
    ApiManager.getAll("foods")
    .then((foods) => {
        this.setState({
            foods: foods
        })
    })}

    // deleteFood= id => {
    //     // handles deleting a single food from foods array and renders updated array to the DOM
    //     ApiManager.delete("foods", id)
    //         .then(() => {
    //             ApiManager.getAll("foods")
    //                 .then((updatedFoodList) => {
    //                     this.setState({
    //                         foods: updatedFoodList
    //                     })
    //                 })
    //             })
    //         }        
    
    render() {
        console.log("test", this.state)
        return (
            <>
                <h1>Foods</h1>
                <section>
                    <button type="button"
                        className="newFoodButton"
                        // onClick renders articleForm.js 
                        onClick={() => { this.props.history.push("/foods/new") }}>
                        New Food
                    </button>
                </section>
                <div className="foodList">
                    {this.state.foods.map(food =>
                        <FoodCard
                        key={food.id}
                        food={food}
                        deleteFood={this.deleteFood}
                        getAllFoods={this.getAllFoods}
                        {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }
}
export default FoodList;