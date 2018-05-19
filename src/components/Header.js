import React from 'react';
import '../css/styles.css';
import logo from '../img/logo.jpg';
import {Link} from 'react-router-dom';

class Header extends React.Component{
	render(){
		return(
				<header>
					<div className="container">
						<div className="logo">
							<Link to="/">
								<img src={logo} alt="logo" title="logo" />
							</Link>
						</div>
						<div className="home">
							<Link to="/">Home</Link>
						</div>
						<div className="email">
							<i className="fas fa-user"></i>
							<div className="email_id">example@thesmartq.com</div>
							<i className="fas fa-sort-down"></i>
						</div>
					</div>
				</header>
			)
	}

}

export default Header;