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
        
        if(!nomeFilm == '' && nomeFilm.trim().length > 1){
            
            if(document.getElementById('div-errore')){
                let divForm = document.getElementById("div-ricerca");
                let messaggioErrore = document.getElementById('div-errore');
                divForm.removeChild(messaggioErrore);
            }
           
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
                console.log(response.data.results);
                
            }catch(err){
                console.log(err);
            }  
        }else{
            if(! document.getElementById('div-errore')){
                const elemento = document.createElement("div");
                elemento.id = 'div-errore'
                elemento.innerText = "Inserisci un titolo valido";
                let divForm = document.getElementById("div-ricerca");
                let form = document.getElementById('form-ricerca')
                divForm.insertBefore(elemento, form);
                // document.body.appendChild(para);
            }
      
            
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
