import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';

class FoodDetail extends Component {

  state = {
      foodName: "",
      description: "",
  }
 
    componentDidMount(){
      //get(id) from ApiManager and hang on to the data; put it into state
      ApiManager.get("foods", this.props.foodId)
      .then((food) => {
        this.setState({
          foodName: food.name,
          description: food.description
        });
      });
    }

    handleDelete = () => {   
      console.log("I licked delete")                                                        
        //invoke the delete function in Food.
        this.setState({loadingStatus: true})
        ApiManager.delete("foods", this.props.foodId)
        .then(() => this.props.history.push("/foods"))
    }  
    
    render() {
      console.log("WWWTTTFFF!!!", this.props);
      console.log("DELETE", this.state);
      return (
        <div className="card">
        <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.foodName}</span></h3>
            <p>Description: {this.state.description}</p>
            <button type="button" onClick={this.handleDelete}>DELETE</button>
        </div>
      </div>
    );
  }
}

export default FoodDetail;
