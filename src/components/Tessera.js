import React from 'react'
import '../scss/tessera.scss';
const Tessera = (props) => {
    
    return (
        
        <div className='contenitore-tessere'>
            {
                props.backdrop_path ? (
                    <img src={'https://image.tmdb.org/t/p/w342' + props.backdrop_path} alt="immagine" />
                ) : (
                    <img className="immagine-non-trovata" src="assets/immagine.jpeg" alt="immagine mancante" />
                )
            }
            
            <div className="display-none info">
                <h2 className="titolo">
                    {props.original_title}
                </h2>
                {
                props.overview ? (
                    <div className="trama">
                        <p>{props.overview.substr(0,250) + "..."}</p>
                    </div>
                ) : (
                    <div className="trama">
                    <p>Trama mancante</p>
                </div>
                )
            }
                
            </div>
            
            
        </div>
        
    )
}

export default Tessera;
