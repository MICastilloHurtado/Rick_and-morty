const app = require('../src/app');
const session = require('supertest');
const request = session(app);

describe("Test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () =>{
        it("Responde con status: 200", async () =>{
            await request.get('/rickandmorty/character/1').expect(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await request.get('/rickandmorty/character/1');
            expect(response.body).toHaveProperty("id")
            expect(response.body).toHaveProperty("name")
            expect(response.body).toHaveProperty("species")
            expect(response.body).toHaveProperty("gender")
            expect(response.body).toHaveProperty("status")
            expect(response.body).toHaveProperty("origin")
            expect(response.body).toHaveProperty("image")
        })
        it("Si hay un error responde con status: 500", async () =>{
            const response = await request.get('/rickandmorty/character/14232j');
            expect(response.statusCode).toBe(500)
        })
    })

    describe("GET /rickandmorty/login", () =>{
        const access = {access : true}
        it("responde con un objeto con la propiedad access en true si los datos del usuario son validos", async () => {
            const response = await request.get('/rickandmorty/login?email=marcos2679525@gmail.com&password=marcos123');
            expect(response.body).toEqual(access)

        })
        it("responde con un objeto con la propiedad access en false si los datos del usuario son invalidos", async () => {
            const response = await request.get('/rickandmorty/login?email=marcos2679525@gmail.com&password=marcos1432');
            access.access = false
            expect(response.body).toEqual(access)

        })
    })

    describe("POST /rickandmorty/fav", ()=>{
        
        const character1 = { name:"james", origin:"Earth (C-137)", status:"Alive", image:"https://rickandmortyapi.com/api/character/avatar/2.jpeg", species:"Human" , gender:"Male"}
        const character2 = {  name:"Rick Sanchez", origin:"Earth (C-137)", status:"Alive", image:"https://rickandmortyapi.com/api/character/avatar/1.jpeg", species:"Human" , gender:"Male"}

        it("Debes guardar el personaje en favoritos", async () => {
            const response = await request.post('/rickandmorty/fav').send(character1);
            expect(response.body).toContainEqual(expect.objectContaining(character1));
        })
        it('Devuelve el previo elemento enviado y el actual', async () => {
            const response = await request.post('/rickandmorty/fav').send(character2);
            expect(response.body).toContainEqual(character1);
            expect(response.body).toContainEqual(character2);
        })
        
    })
    
    describe("DELETE /rickandmorty/fav/:id", ()=>{
        it('Devuelve el arreglo correspondiente si no se elimina ningun personaje', async ()=>{
            const response = await request.delete('/rickandmorty/fav/324324');
            expect(response.body).toContainEqual(character1);
            expect(response.body).toContainEqual(character2);
        })
        it('Elimina correctamente al personaje que se especifica por ID', async () => {
            const response = await request.delete('/rickandmorty/fav/1');
            expect(response.body).toContainEqual(character1);
        })
    })
})