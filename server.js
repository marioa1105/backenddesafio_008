const express = require('express');

const productos = require('./productos.js');
const app = express();

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(PORT, () =>{
    console.log(`Escuchando en puerto ${PORT}`);
});

server.on('error', error => {
    console.log('error en el servidor:', error);
});

app.get('/api/productos',(req,res)=>{
    try{
        let items = productos.getProducts();
        res.json(items);

    }catch(err){
        
        res.status(404).json({error: err.message});
    }   
});

app.get('/api/productos/:id',(req,res)=>{
    try{
        let item = productos.getProductById(req.params.id);
        res.json(item);

    }catch(err){
        res.status(404).json({error: err.message});
    }    
});

app.post('/api/productos',(req,res)=>{
    try{
        
        let item = productos.saveProduct(req.body);
        res.json(item);

    }catch(err){
        res.status(404).json({error: err.message});
    }    
});