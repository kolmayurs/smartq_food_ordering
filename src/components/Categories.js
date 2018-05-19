import React from 'react';
import '../css/styles.css';
import {Link} from 'react-router-dom';

class Categories extends React.Component{

	render(){
		let a = [];
		let urlall = (<Link to="/category/all"><li className="cat cat-all">All</li></Link>);
		if(this.props.activeTab === 'all'){
			urlall = (<Link to="/category/all"><li className="cat cat-all cat-active">All</li></Link>);
		}
		else{
			urlall = (<Link to="/category/all"><li className="cat cat-all">All</li></Link>);
		}
		const data = this.props.cat.map((items, i) => {
			if(a.indexOf(items.category) === -1){
				let url = items.category.replace(/ /g, "_").toLowerCase()
				a.push(items.category)
				if(this.props.activeTab===url){
					return(<Link  key={'items_' + i } to={'/category/'+url}><li className="cat cat-active">{items.category}</li></Link>)
				}
				else{
					return(<Link  key={'items_' + i } to={'/category/'+url}><li className="cat">{items.category}</li></Link>)
				}
			}
			
		})
		return(
				<div className="cat-container">
					<ul>
						{urlall}
						{data}
					</ul>
				</div>
			)
	}

}

export default Categories;


Categories.defaultProps = {
  activeTab: 'all',
};