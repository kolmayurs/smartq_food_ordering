import React from 'react';
import '../css/styles.css';


class Cart extends React.Component{

	render(){

		return(
				<div className="cart-container">
					<div className="cart_header">
					<div className="cart_text">Your Cart
					</div>
					<i className="trash_symbol fas fa-trash-alt"></i>
					</div>
					

				</div>
			)
	}

}

export default Cart;