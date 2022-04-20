import React from 'react'
import Tessera from './Tessera'
import '../scss/main.scss';
import { useContextGlobal } from '../context/AppProvider';

const Main = () => {
    const {films,loading} = useContextGlobal();
    return (
        <main>
            {
                loading == true ? (
                    <h1>sto caricando...</h1>
                ) 
                : loading == false && films.length ? (
                    <div className='riga'>
                        {
                            films.map( el => {
                            return <Tessera {...el} key={el.id}/>
                        })
                        }
                    </div>
                    
                ) : loading == false && films.length < 0 ?(
                    <h1> nessun film trovato</h1>
                ) : (
                    <h1> scrivi un titolo...</h1>
                )
                    
            }

        </main> 
       
    )
}

export default Main
