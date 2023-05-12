import SearchBar from '../searchBar/SearchBar.jsx';
import style from  './Nav.module.css'
import { Link,  useNavigate } from 'react-router-dom';

const Nav = ({onSearch, access, setAccess}) => {
    const navigate = useNavigate()

    const handleLogOut = () => {
        setAccess(false);
        navigate('/');
      };


    return (
        <nav className={style.nav}>
            <SearchBar onSearch={onSearch}/>
            <button >
               <Link to='/home'>HOME</Link>
            </button>
            <button>               
            <Link to='/favorites'>FAVORITES</Link>
            </button>
            <button>               
            <Link to='/about'>ABOUT</Link>
            </button>
            <button onClick={handleLogOut}>
            LOG OUT
            </button>
        </nav>
    )
}

export default Nav