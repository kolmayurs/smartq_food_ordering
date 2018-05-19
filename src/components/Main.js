import React from 'react';
import '../css/styles.css';

class Main extends React.Component{
	constructor(props){
		super(props);
		this.state={item_count:0}
	}
	render(){
		let a = [];
		const data = this.props.menu.map((items, i) => {
			var res = items.availabletime.split('-');
			let startTime = res[0]+':00';
			let endTime = res[1]+':00';
			let currentDate = new Date()   

			let startDate = new Date(currentDate.getTime());
			startDate.setHours(startTime.split(":")[0]);
			startDate.setMinutes(startTime.split(":")[1]);
			startDate.setSeconds(startTime.split(":")[2]);

			let endDate = new Date(currentDate.getTime());
			endDate.setHours(endTime.split(":")[0]);
			endDate.setMinutes(endTime.split(":")[1]);
			endDate.setSeconds(endTime.split(":")[2]);
			let url = items.category.replace(/ /g, "_").toLowerCase()

			let valid = startDate < currentDate && endDate > currentDate;
			if(this.props.activeTab==="all"){
					if(valid){
				if(a.indexOf(items.category) === -1){
				a.push(items.category);	
				if(items.vegflag === "veg"){
					return(<div className="category_box" key={'items_' + i }>
							<div className="main_category">{items.category}</div>
							<div className="items_box">
								<div className="item_veg"></div>
								<div className="item_box">
									<div className="item_name">{items.name}</div>
									<div className="item_disc">{items.description}</div>
								</div>
								<div className="quantity_box">
										<div className="sub_item">-</div>
										<div className="dis_item">{this.state.item_count}</div>
										<div className="add_item">+</div>
									</div>
									<div className="item_cost">&#x20B9;&nbsp;{items.price}</div>
							</div>
					</div>)
				}
				if(items.vegflag === "nonveg"){
					return(<div className="category_box" key={'items_' + i }>
							<div className="main_category">{items.category}</div>
							<div className="items_box">
								<div className="item_nonveg"></div>
								<div className="item_box">
									<div className="item_name">{items.name}</div>
									<div className="item_disc">{items.description}</div>
								</div>
								<div className="quantity_box">
										<div className="sub_item">-</div>
										<div className="dis_item">{this.state.item_count}</div>
										<div className="add_item">+</div>
									</div>
									<div className="item_cost">&#x20B9;&nbsp;{items.price}</div>
							</div>
					</div>)
				}
				
			}
			else{
				if(items.vegflag === "veg"){
					return(<div key={'items_' + i } className="items_box_disable">
								<div className="item_veg"></div>
								<div className="item_box">
									<div className="item_name">{items.name}</div>
									<div className="item_disc">{items.description}</div>
								</div>
								<div className="quantity_box">
										<div className="sub_item">-</div>
										<div className="dis_item">{this.state.item_count}</div>
										<div className="add_item">+</div>
									</div>
									<div className="item_cost">&#x20B9;&nbsp;{items.price}</div>
							</div>)
				}
				if(items.vegflag === "nonveg"){
					return(<div key={'items_' + i } className="items_box_disable">
								<div className="item_nonveg"></div>
								<div className="item_box">
									<div className="item_name">{items.name}</div>
									<div className="item_disc">{items.description}</div>
								</div>
								<div className="quantity_box">
										<div className="sub_item">-</div>
										<div className="dis_item">{this.state.item_count}</div>
										<div className="add_item">+</div>
									</div>
									<div className="item_cost">&#x20B9;&nbsp;{items.price}</div>
							</div>)
				}
				
			}

			}
			else{
				if(a.indexOf(items.category) === -1){
				a.push(items.category);	
				if(items.vegflag === "veg"){
					return(<div className="category_box" key={'items_' + i }>
							<div className="main_category">{items.category}</div>
							<div className="items_box_disable">
								<div className="item_veg"></div>
								<div className="item_box">
									<div className="item_name">{items.name}</div>
									<div className="item_disc">{items.description}</div>
								</div>
								<div className="quantity_box">
										<div className="sub_item">-</div>
										<div className="dis_item">{this.state.item_count}</div>
										<div className="add_item">+</div>
									</div>
									<div className="item_cost">&#x20B9;&nbsp;{items.price}</div>
							</div>
					</div>)
				}
				if(items.vegflag === "nonveg"){
					return(<div className="category_box" key={'items_' + i }>
							<div className="main_category">{items.category}</div>
							<div className="items_box_disable">
								<div className="item_nonveg"></div>
								<div className="item_box">
									<div className="item_name">{items.name}</div>
									<div className="item_disc">{items.description}</div>
								</div>
								<div className="quantity_box">
										<div className="sub_item">-</div>
										<div className="dis_item">{this.state.item_count}</div>
										<div className="add_item">+</div>
									</div>
									<div className="item_cost">&#x20B9;&nbsp;{items.price}</div>
							</div>
					</div>)
				}
				
			}
			else{
				if(items.vegflag === "veg"){
					return(<div key={'items_' + i } className="items_box">
								<div className="item_veg"></div>
								<div className="item_box">
									<div className="item_name">{items.name}</div>
									<div className="item_disc">{items.description}</div>
								</div>
								<div className="quantity_box">
										<div className="sub_item">-</div>
										<div className="dis_item">{this.state.item_count}</div>
										<div className="add_item">+</div>
									</div>
									<div className="item_cost">&#x20B9;&nbsp;{items.price}</div>
							</div>)
				}
				if(items.vegflag === "nonveg"){
					return(<div key={'items_' + i } className="items_box">
								<div className="item_nonveg"></div>
								<div className="item_box">
									<div className="item_name">{items.name}</div>
									<div className="item_disc">{items.description}</div>
								</div>
								<div className="quantity_box">
										<div className="sub_item">-</div>
										<div className="dis_item">{this.state.item_count}</div>
										<div className="add_item">+</div>
									</div>
									<div className="item_cost">&#x20B9;&nbsp;{items.price}</div>
							</div>)
				}
				
			}
			}
			
			}
			else{
						//dddddddhihidhiuchiudshciheidhiucheiu
						if(url === this.props.activeTab){
							if(valid){
				if(a.indexOf(items.category) === -1){
				a.push(items.category);	
				if(items.vegflag === "veg"){
					return(<div className="category_box" key={'items_' + i }>
							<div className="main_category">{items.category}</div>
							<div className="items_box">
								<div className="item_veg"></div>
								<div className="item_box">
									<div className="item_name">{items.name}</div>
									<div className="item_disc">{items.description}</div>
								</div>
								<div className="quantity_box">
										<div className="sub_item">-</div>
										<div className="dis_item">{this.state.item_count}</div>
										<div className="add_item">+</div>
									</div>
									<div className="item_cost">&#x20B9;&nbsp;{items.price}</div>
							</div>
					</div>)
				}
				if(items.vegflag === "nonveg"){
					return(<div className="category_box" key={'items_' + i }>
							<div className="main_category">{items.category}</div>
							<div className="items_box">
								<div className="item_nonveg"></div>
								<div className="item_box">
									<div className="item_name">{items.name}</div>
									<div className="item_disc">{items.description}</div>
								</div>
								<div className="quantity_box">
										<div className="sub_item">-</div>
										<div className="dis_item">{this.state.item_count}</div>
										<div className="add_item">+</div>
									</div>
									<div className="item_cost">&#x20B9;&nbsp;{items.price}</div>
							</div>
					</div>)
				}
				
			}
			else{
				if(items.vegflag === "veg"){
					return(<div key={'items_' + i } className="items_box_disable">
								<div className="item_veg"></div>
								<div className="item_box">
									<div className="item_name">{items.name}</div>
									<div className="item_disc">{items.description}</div>
								</div>
								<div className="quantity_box">
										<div className="sub_item">-</div>
										<div className="dis_item">{this.state.item_count}</div>
										<div className="add_item">+</div>
									</div>
									<div className="item_cost">&#x20B9;&nbsp;{items.price}</div>
							</div>)
				}
				if(items.vegflag === "nonveg"){
					return(<div key={'items_' + i } className="items_box_disable">
								<div className="item_nonveg"></div>
								<div className="item_box">
									<div className="item_name">{items.name}</div>
									<div className="item_disc">{items.description}</div>
								</div>
								<div className="quantity_box">
										<div className="sub_item">-</div>
										<div className="dis_item">{this.state.item_count}</div>
										<div className="add_item">+</div>
									</div>
									<div className="item_cost">&#x20B9;&nbsp;{items.price}</div>
							</div>)
				}
				
			}

			}
			else{
				if(a.indexOf(items.category) === -1){
				a.push(items.category);	
				if(items.vegflag === "veg"){
					return(<div className="category_box" key={'items_' + i }>
							<div className="main_category">{items.category}</div>
							<div className="items_box_disable">
								<div className="item_veg"></div>
								<div className="item_box">
									<div className="item_name">{items.name}</div>
									<div className="item_disc">{items.description}</div>
								</div>
								<div className="quantity_box">
										<div className="sub_item">-</div>
										<div className="dis_item">{this.state.item_count}</div>
										<div className="add_item">+</div>
									</div>
									<div className="item_cost">&#x20B9;&nbsp;{items.price}</div>
							</div>
					</div>)
				}
				if(items.vegflag === "nonveg"){
					return(<div className="category_box" key={'items_' + i }>
							<div className="main_category">{items.category}</div>
							<div className="items_box_disable">
								<div className="item_nonveg"></div>
								<div className="item_box">
									<div className="item_name">{items.name}</div>
									<div className="item_disc">{items.description}</div>
								</div>
								<div className="quantity_box">
										<div className="sub_item">-</div>
										<div className="dis_item">{this.state.item_count}</div>
										<div className="add_item">+</div>
									</div>
									<div className="item_cost">&#x20B9;&nbsp;{items.price}</div>
							</div>
					</div>)
				}
				
			}
			else{
				if(items.vegflag === "veg"){
					return(<div key={'items_' + i } className="items_box">
								<div className="item_veg"></div>
								<div className="item_box">
									<div className="item_name">{items.name}</div>
									<div className="item_disc">{items.description}</div>
								</div>
								<div className="quantity_box">
										<div className="sub_item">-</div>
										<div className="dis_item">{this.state.item_count}</div>
										<div className="add_item">+</div>
									</div>
									<div className="item_cost">&#x20B9;&nbsp;{items.price}</div>
							</div>)
				}
				if(items.vegflag === "nonveg"){
					return(<div key={'items_' + i } className="items_box">
								<div className="item_nonveg"></div>
								<div className="item_box">
									<div className="item_name">{items.name}</div>
									<div className="item_disc">{items.description}</div>
								</div>
								<div className="quantity_box">
										<div className="sub_item">-</div>
										<div className="dis_item">{this.state.item_count}</div>
										<div className="add_item">+</div>
									</div>
									<div className="item_cost">&#x20B9;&nbsp;{items.price}</div>
							</div>)
				}
				
			}
			}
			
						}
			}
			
		})
		return(
				<div className="menu-container">
				{data}
				</div>
			)
	}

}

export default Main;

Main.defaultProps = {
  activeTab: 'all',
};