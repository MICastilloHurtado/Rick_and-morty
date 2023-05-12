import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import  React, { useState , useEffect} from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';


   const email = 'marcos@gmail.com'
   const password = 'marcos123'


function App() {
   const location = useLocation()
   const navigate = useNavigate()
   const [access, setAccess] = useState(false)
   const [characters, setCharacters] = useState([]);

   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home')
      }
      
   };

   useEffect(() => {
      !access && navigate('/');
    }, [access]);



   function onSearch(id){
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => {
            return char.id !== Number(id)
         })
      )
   };

   return (
      
      <div className='App'>
      {location.pathname !== '/'
       ? <Nav onSearch={onSearch} access={access} setAccess={setAccess}/>
      : null}

                 
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/favorites' element={<Favorites/>} />
         </Routes>
                
      </div>
   );
}

export default App;
