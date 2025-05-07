
const Jogador = require("../models/JogadorModel");


class JogadorController{
    
    constructor(app){
        app.get("/jogador/criar", (req, res) =>{
            res.send("jogador Criado")
        })
    
    }

}

module.exports = JogadorController