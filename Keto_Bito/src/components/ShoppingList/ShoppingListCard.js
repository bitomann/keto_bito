// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import ApiManager from '../modules/ApiManager';


// class ShoppingListCard extends Component {

//     savedFood  = evt => {
//         const savedFoodId = this.props.food.id
//         console.log("check", savedFoodId)
//         evt.preventDefault()
//         const savedFood = {
//             addToShoppingList: evt.target.onClick,
//             id: savedFoodId
//         };

//         ApiManager.post("savedFoods", savedFood)
//         .then(this.props.getAllsavedFoods)
//     }

//     render() {
//         return (
//             <div className="shoppingListCard">
//                 <div className="card-content">
//                     <h1>Food Name: {this.props.savedFood.name}</h1>
//                     <ul> {this.state.savedFoods.map(savedFoods => 
//                    <li key={savedFoods.id}>
//                     {savedFoods.food.name}
//                    </li>
//                  )} </ul>
//                     <button type="button" onClick={() => this.props.deleteFood}>DELETE</button>
                    
//                     <hr />
//                 </div>    
//             </div>
//         );
//     }
// }

// export default ShoppingListCard