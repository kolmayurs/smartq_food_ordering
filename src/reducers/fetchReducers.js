export default function fetchReducers(state={
	fetching:false,
	fetched: false,
	data: [],
	error: null
}, action){
	switch(action.type){
		case 'FETCH_DATA_START' : {
			return {...state, fetching:true}
		}
		case 'FETCH_DATA_SUCCESSFUL' : {
			return {...state, fetching:false, fetched: true, data: action.payload}
		}
		case 'FETCH_DATA_ERROR' : {
			return {...state, fetching:false, fetched: false, error: action.payload}
		}
		default : {
			return {...state}
		}
	}
}