const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character"

const getCharById = async (req, res) => {
    
    try {
        const {id} = req.params
        const {data} = await axios(`${URL}/${id}`)
    
        if(!data.name)throw new Error(`ID : ${id} not found`)
        const character = {
            id:data.id, status:data.status, name:data.name, species:data.species, origin:data.origin,
             image:data.image, gender:data.gender
        };
            return res.status(200).json(character)
        
    
    
    }    catch (error) {
            return error.message.includes('ID')
            ? res.status(404).send(error.message)
            : res.status(500).send(error.message)
        }

}

module.exports = {getCharById}
