import style from './Card.module.css'
import { Link } from 'react-router-dom';
import {addFav, removeFav} from '../../redux/actions'
import {  connect } from 'react-redux';
import { useState, useEffect} from 'react';

const Card = ({id, onClose, name, status, species, gender, origin, image, addFav, removeFav, myFavorites}) => {
   
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         removeFav(id)
      }else{
         setIsFav(true)
         addFav({id, name, status, species, gender, origin, image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   

   return (
      <div className={style.contenedor}>
            {
             isFav ? (
            <button onClick={handleFavorite}>❤️</button>
             ) : (
            <button onClick={handleFavorite}>🤍</button>
              )
            }
         <img src={image} alt='' className={style.imagen}/>
         <Link to={`/detail/${id}`}>
         <h2>Name : {name}</h2>
         </Link>
         <h2>Status : {status}</h2>
         <h2>Specie : {species}</h2>
         <h2>Gender : {gender}</h2>
         <h2>Origin : {origin}</h2>
         <button onClick={()=> {onClose(id)}} className={style.close}>Cerrar</button>
      </div>
   );
};



const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) =>{
   return {
      addFav: (character)=>{dispatch(addFav(character))},
      removeFav: (id) =>{dispatch(removeFav(id))}
   }
};

export default connect(
   mapStateToProps,
   mapDispatchToProps)(Card);
