import React,{useState} from 'react'
import '../scss/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass   } from '@fortawesome/free-solid-svg-icons'
import { useContextGlobal } from '../context/AppProvider';

const Header = () => {
    const {fetchFilms} = useContextGlobal();
    const [film,setFilm] = useState('');
    const impostaNomeFilm = (e)=>{
        
        setFilm(e.target.value)
        if (e.key === 'Enter') {
            fetchFilms(film);
        }
        
    }
   
    return (
        <header id='header'>
            <h1 className='logo'> 
                <a href='http://localhost:3000/'>
                    React Films
                </a> 
            </h1>
          
            <div id='div-ricerca' className="ricerca">
               
                <form id='form-ricerca' onSubmit={e => {e.preventDefault();}}>
                    <input type="text" placeholder='scrivi un titolo..' onKeyDown={impostaNomeFilm} onChange= {impostaNomeFilm} value={film} />
                    <FontAwesomeIcon onClick={()=>fetchFilms(film)} icon={faMagnifyingGlass} />
                  
                </form>
                
            </div>
        </header>
    )
}

export default Header
