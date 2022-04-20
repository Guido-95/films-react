import React,{useContext, useReducer} from 'react';
import reducer from './reducer';
import axios from 'axios';
import {CERCA_FILM,START_FETCH} from './actions'
const AppContext = React.createContext();

const initialState = {
    films:[],
    loading:false,

}
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initialState)
    const fetchFilms = async(nomeFilm)=>{
        dispatch({
            type:START_FETCH
        })
        try{
            const response = await axios.get('https://api.themoviedb.org/3/search/movie',{ 
                params:{
                api_key: "e99307154c6dfb0b4750f6603256716d",
                query: nomeFilm,
                language: 'it-IT'
                }
            })
            dispatch({
                type: CERCA_FILM,
                payload: response.data.results,
            });
            
        }catch(err){
            console.log(err);
        }  
    }
    
    return (
        <AppContext.Provider
        value={{
            ...state,
            fetchFilms
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

const useContextGlobal =  () =>{
    return useContext(AppContext);
};

  
export {AppProvider,useContextGlobal}
