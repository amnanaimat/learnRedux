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

var store = Redux.createStore(reducer,Redux.compose(
window.devToolsExtension? window.devToolsExtension(): f => f
));

var unsubscribe = store.subscribe(()=>{
	var state = store.getState();
	console.log('currentState: ' , state);
	
});

store.dispatch({type:'CHANGE_TEXT',
				text:"watching tutorials"});
				