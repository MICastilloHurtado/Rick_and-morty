const {login} = require('../controllers/login')
const {deleteFav, postFav} = require('../controllers/handleFavorites')
const {getCharById} = require ('../controllers/getCharById')
const router = require('express').Router()

router.get("/character/:id", getCharById);

router.get("/login", login);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = router