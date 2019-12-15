import React, { Component } from 'react'
import ApiManager from '../modules/ApiManager'


class ShoppingList extends Component {

    state = {
        savedFoods: [],
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
    
    render() {
        console.log("test", this.state)
        return (
            <>
                <h1>SHOPPING LIST</h1>
                <section>
                    <button type="button"
                        className="newFoodButton"
                        // onClick renders articleForm.js 
                        onClick={() => { this.props.history.push("/foods/new") }}>
                        New Food
                    </button>
                </section>
                <div className="shoppingList">
                    {this.state.foods.map(list =>
                        <ShoppingList
                        // key={}
                        // food={}
                        getAllFoods={this.getAllFoods}
                        {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default ShoppingList