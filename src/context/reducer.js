import {CERCA_FILM,START_FETCH} from './actions'

const reducer = (state,action)=>{
    if(action.type === START_FETCH){
        console.log('ricerca iniziata');
        return{
            ...state,
            loading:true
        }
    }
    if(action.type === CERCA_FILM){
       
        return {
            ...state,
            films:action.payload,
            loading:false
        } 
    }
    
    return state;
}

export default reducer;