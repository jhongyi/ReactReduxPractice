// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
	  case 'ORDER_SELECTED':
	    return action.payload;
	  case 'ORDER_ADD':
	    return action.payload;  
	  case "ORDER_EDIT_GET":
		return action.payload;
  }
  return state;
}
