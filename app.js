var express = require("express")
var app = express()
var puerto = 3000;

const productos = [];

app.post ('/Productos/Guardar', function(request,response){
    const productos =request.body;
    productos.push(producto);
});

app.put ('/Productos/Modificar/:codigo', function(request,response){
    const codigo =request.params.codigo;
    const productoIndex = productos.findIndex((p) => p.codigo === codigo);

    if (productoIndex !== -1) {
        productos [productoIndex] = request.body;
        response.json ({ message: 'Producto modificado'});
    } else {
        response.status(404).json ({ message: 'Producto no encontrado'})
    }
});

app.delete('/Productos/Eliminar/:codigo', function(request,response){
    const codigo = request.params.codigo;
    const productoIndex = productos.findIndex((p) => p.codigo === codigo);

    if (productoIndex !== -1) {
        productos.splice(productoIndex, 1);
        response.json ({ message: 'Producto eliminado'});
    } else {
        response.status(404).json({message: 'Producto no encontrado'});
    }
});

app.get ('/Productos/ListarTodos', function(request,response){
    response.json(productos);
});

app.get ('/Productos/ListarPorCodigo/:codigo', function(request,response){
    const codigo = request.params.codigo;
    const producto = productos.find((p) => p.codigo === codigo);

    if (producto) {
        response.json(producto);
    } else {
        response.status(404).json ({message: 'Producto no encontrado'});
    }
});

app.listen (puerto, function(){
    console.log("servidor funcionando por el puerto" + puerto)
});
