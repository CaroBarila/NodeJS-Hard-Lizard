const fs = require('fs')
let sucursales = {
    db:'./data/theaters.json',
    titulo: "Nuestras Salas",
    leerJSON: function(){
        let theaterJSON = fs.readFileSync(this.db,'utf-8');
        let theater = JSON.parse(theaterJSON);
        return theater
    },
    cantidad: function(){
        return this.leerJSON().total_theaters
    },
    listarSalas:function(){
        let theaters = this.leerJSON();

        return theaters.theaters 
    }
}
module.exports = sucursales