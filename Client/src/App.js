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
const URL = 'http://localhost:3001/rickandmorty/login/';
 

  


function App() {
   const location = useLocation()
   const navigate = useNavigate()
   const [access, setAccess] = useState(false)
   const [characters, setCharacters] = useState([]);

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         
            setAccess(access);
            access && navigate('/home');
         
            
         } catch (error) {
            console.log(error.message)
         }
      }
      
      useEffect(() => {
            if(!access){ 
               navigate('/')};
          }, [access, navigate]);
      

   const onSearch= async (id) => {
      try {
         
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
                  }
      } catch (error) {
         alert('No hay personajes con este id')
      }


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
