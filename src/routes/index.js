const express = require('express');
const produtoController = require("../controllers/produtoController")
const routes = express.Router();

routes.get("/", (req, res) => {
    console.log(req.query);
    res.send("Olá, Mundo!");
});

routes.get("/produto/lista", produtoController.listarProduto);
routes.post ("/produto", produtoController.cadastrarProduto);

routes.get("/produto/:id/teste", (req, res) => {
    console.log(req.params);
    res.send("Olá, Mundo!");
});

routes.post("/cadastrar", (req,res)=> {
    console.log(req.body);
    res.json(req.body);
    // res.send("Cadastrei um produto");
});

module.exports = routes;