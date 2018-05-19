import axios from 'axios';

export function fetchData(){
	return function(dispatch){
		dispatch({type:'FETCH_DATA_START'})
		axios.get('https://thesmartq.firebaseio.com/menu.json')
		.then(res => {
			dispatch({type:'FETCH_DATA_SUCCESSFUL', payload: res.data})
		})
		.catch(err => {
			dispatch({type: 'FETCH_DATA_ERROR', payload: err})
		})
	}
}
