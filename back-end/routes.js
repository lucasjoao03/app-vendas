const express = require('express');
const routes = express.Router();
const users = [{
    id : 1,
    nome : "João Lucas",
    email : "joaolucascgbarbosa878@gmail.com",
    senha : c123456
}]

routes.post('/login', (req, res) => {
    const {email, senha} = req.body;
    const user  = users.find(user => user.email === email && user.senha === senha);
    if (user){
        return res.status(200).json(user)
    } else {
        return res.status(401).json({message: "Credenciais inválidas"});
    } 
    
});
module.exports = routes;