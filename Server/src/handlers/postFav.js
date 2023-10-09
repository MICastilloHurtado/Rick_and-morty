const {Favorite, User} = require('../DB_connection')

const postFav = async (req, res) => {

    try {
        const { id, name, origin, status, image, species, gender } = req.body;

        if (!name || !origin || !status || !image || !species || !gender) {
            return res.status(401).json('Faltan datos');
        }

        const existingFav = await Favorite.findOne({
            where: { name }
        });

        if (existingFav) {
            return res.status(409).json('Este personaje ya está en favoritos');
        }

        const [newFav, created] = await Favorite.findOrCreate({ //newFav es el registro encontrado O CREADO, mientras que created es una variable booleana que indica true si se creó o false si se encontró
            where: { name },
            defaults: { id, origin, status, image, species, gender },//especifico los valores que se utilizarán para crear un nuevo registro si no se encuentra ningún registro existente
        });

        const allFavs = await Favorite.findAll();

        if (created) {
            res.status(201).json(allFavs);
        } else {
            res.status(200).json(allFavs);
        }
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = postFav