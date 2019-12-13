import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';

class FoodDetail extends Component {

  state = {
      foodName: "",
      description: "",
  }
 
    componentDidMount(){
        // console.log(FoodDeatail: "ComponentDidMount");
        //get(id) from ApiManager and hang on to the data; put it into state
        ApiManager.get(this.props.foodId)
        .then((food) => {
            this.setState({
                foodName: food.name,
                description: food.description
            });
        });
    }

render() {
    return (
      <div className="card">
        <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Description: {this.state.description}</p>
        </div>
      </div>
    );
  }
}

export default FoodDetail;
