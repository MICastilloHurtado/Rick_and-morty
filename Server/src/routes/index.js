const deleteFav = require('../handlers/deleteFav')
const {getCharById} = require ('../handlers/getCharById')
const login = require('../handlers/login')
const postFav = require('../handlers/postFav.js')
const postUser = require('../handlers/postUser')
const router = require('express').Router()


router.get("/character/:id", getCharById);

router.get("/login", login);

router.post("/login", postUser);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = router