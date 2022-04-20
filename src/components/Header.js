import React,{useState} from 'react'
import '../scss/header.scss';
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
        <header>
            <h1 className='logo'>Logo</h1>
            <div className="ricerca">
                <input type="text" onKeyDown={impostaNomeFilm} onChange= {impostaNomeFilm} value={film} />
                <button onClick={()=>fetchFilms(film)} className='bottone-ricerca btn btn-info'>cerca...</button>
            </div>
        </header>
    )
}

export default Header
