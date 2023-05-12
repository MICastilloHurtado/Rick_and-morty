import { useState } from 'react';
import style from './SearchBar.module.css'

const SearchBar =({onSearch}) => {

   const [id, setId] = useState('');

   const  handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div className={style.container}>
         <input type='search' className={style.barraDeBusqueda} onChange={handleChange} value={id}/>
         <button onClick={() => {onSearch(id)}} className={style.boton}>Search</button>
      </div>
   );
}

export default SearchBar
