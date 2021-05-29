class productos{
     
    constructor(title, price, thumbnail){
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
        this.id = -1;
        this.productos= [];
    }

    saveProduct(item){
        let id;
        
        if (this.productos.length == 0){
            id = 1;
        }else{
            id = this.productos.length + 1;
        }

        item.id = id;
        this.productos.push(item);
        return item;
    }
    getProducts(){
        if (this.productos == 0){
            throw new Error("No hay productos cargados");
        }
        return this.productos;
    }
    getProductById(id){
        let obj = this.productos.find(x => x.id == id);
        if(obj == null || obj == undefined){
            throw new Error("Producto no encontrado");            
        }

        return obj;

    }
}

module.exports = new productos();