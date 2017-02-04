var Redux = require('redux');

console.log('Starting Redux Tdo Example');
var stateDefault = {
	someText: '',
	done: false,
	todos:[]
};
var reducer = (state = stateDefault,action)=>{
	
	switch(action.type){
		case "CHANGE_TEXT":
		
		return {
			...state,
			someText: action.text
		};
		default:
		return state;
		
	}
	
};

var store = Redux.createStore(reducer);

var currentState = store.getState(); 
console.log('currentState: ' , currentState);
store.dispatch({type:'CHANGE_TEXT',
				text:"watching tutorials"});
				
currentState = store.getState(); 				
console.log('currentState: ' , currentState);