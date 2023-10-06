const {Favorite, User} = require('../DB_connection')

const postFav = async (req, res) => {

    try {
        const {id, name, origin, status, image, species , gender} = req.body;
        
        if(!id || !name || !origin || !status || !image || !species || !gender)return res.status(401).send('Faltan datos')

        
        const user = await User.findByPk(id);

        if (!user) return res.status(404).send('Usuario no encontrado');

        // Crear el favorito asociado al usuario
        const newFavorite = await Favorite.create({
            name,
            origin,
            status,
            image,
            species,
            gender
        });

        // Asociar el favorito al usuario
        await user.addFavorite(newFavorite);

        // Obtener la lista de favoritos asociados al usuario
        const favList = await user.getFavorites();

        return res.status(200).send(favList);
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = postFav