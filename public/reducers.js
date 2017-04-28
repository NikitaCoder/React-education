const initialState = {
    counter: 0,
    counterVisible : false
}

function counterApp(state, action){

    if(typeof state === "undefined"){
        return initialState;
    }

    switch(action.type){
        case "Add" :
            return Object.assign( {}, state, { counter: state.counter + 1});
            break;
        case "Del" :
            return state.counter > 0 ? Object.assign( {}, state, { counter: state.counter - 1}) : Object.assign( {}, state, { counter: state.counter});
            break; 
        case "Toggle":
            return Object.assign( {}, state, { counterVisible: !state.counterVisible});
            break;    
        default: 
            return state;   
    }

}

export default counterApp;