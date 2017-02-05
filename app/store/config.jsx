var redux = require('redux');
var {nameReducer,hobbiesReducer,moviesReducer} = require('./../reducers/index.jsx');

export var configure =()=>{
	
	var reducer = redux.combineReducers({
	name : nameReducer,
	hobbies : hobbiesReducer,
	movies: moviesReducer
});

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


return store;
}

