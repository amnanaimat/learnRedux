export var changeName = (name)=>{
	return {
  type: 'CHANGE_NAME',
  name
}
	
};
//Hobbies Reducer and action generator
//-----------------


export var addHobby =(hobby)=>{
	return {
  type: 'ADD_HOBBY',
  hobby
}
};
export  var removeHobby = (id)=>{
	return {
  type: 'REMOVE_HOBBY',
  id
}
}

//Movies Reducer and action generator
//-----------------

export  var addMovie = (title,genre)=>{
	return {
  type: 'ADD_MOVIE',
  title,
  genre
}
};
export  var removeMovie = (id)=>{
	return {
  type: 'REMOVE_MOVIE',
  id
}
};