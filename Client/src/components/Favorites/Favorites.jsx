import Card from "../card/Card"
import { connect, useDispatch} from "react-redux"
import { filterCards, orderCards } from "../../redux/actions"
import { useState } from "react"

const Favorites = ({myFavorites}) => {

    const [aux, setAux] = useState(false)

    const dispatch = useDispatch()

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return(
        <div>
            <select onChange={handleOrder}>
                <option value='A'>ascendente</option>
                <option value='D'>descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value='Male'> Male</option>
                <option value='Female'> Female</option>
                <option value='Genderless'> Genderless</option>
                <option value='Unknown'> Unknown</option>
                <option value='allCharacters'> allCharacters</option>
               
            </select>
            {
                myFavorites?.map((fav) =>{
                    return(
                    <Card
                    image={fav.image}
                    key={fav.id}
                    id={fav.id}
                    name={fav.name}
                    status={fav.status}
                    species={fav.species}

                    />
                        )                        
                
                })
            }
           
        </div>
    )

    
}

const mapStateToProps = (state) => {
    return{
        myFavorites:state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);
