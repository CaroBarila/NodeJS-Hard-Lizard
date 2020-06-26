const contacto = require('./contacto');
const homePage = require('./homePage');
const enCartelera = require('./enCartelera');
const masVotadas = require('./masVotadas');
const sucursales = require('./sucursales');
const preguntasFrecuentes = require('./preguntasFrecuentes');
let index = {

homePage:function(res){
res.write(homePage.titulo)
res.write('\n\n')
res.write("Total de películas en cartelera: " + homePage.cantidad())
res.write('\n\n')
res.write('Listado de Películas\n\n')

let pelis = homePage.listarPelis();
for(peli of pelis){
    res.write(peli)
    res.write('\n')
}
res.write('\n Recordá que podés visitar las secciones: \n\n');
            res.write('I. En Cartelera\n');
            res.write('II. Más Votadas\n');
            res.write('III. Sucursales\n');
            res.write('IV. Contacto\n');
            res.write('V. Preguntas Frecuentes\n');
            res.end()

res.end()
},
enCartelera:function(res){
res.write(enCartelera.titulo);
res.write('\n\n')
res.write("Total de películas: " + enCartelera.cantidad())
res.write('\n\n')
res.write('Listado de Películas: \n')
res.write('\n\n')
let peliculas = enCartelera.listarPelis();
for(pelicula of peliculas){
    res.write('\n')
    res.write(pelicula.title)
    res.write('\n')
    res.write('\n')
    res.write(pelicula.overview)
    res.write('\n')
}
res.end()
},
masVotadas:function(res){
    res.write(masVotadas.titulo)
    res.write('\n\n');
    res.write('Total de votadas: ' + masVotadas.cantidad())
    res.write('\n\n');
    res.write('Rating Promedio: ' + masVotadas.promedio())
    res.write('\n\n');
    res.write('Listado de peliculas\n\n')
let movies = masVotadas.listarPelis();
movies.forEach(function(movie){
    res.write('\n')
    res.write(movie.title + 'Rating: '+ movie.vote_average)
    res.write('\n')
    res.write(movie.overview)
    res.write('\n')
    
})
res.end()
},
sucursales:function(res){
    res.write(sucursales.titulo);
    res.write('\n\n')
    res.write("Total de Salas: " + sucursales.cantidad())
    res.write('\n\n')
    res.write('Listado de Salas\n')
    res.write('\n\n')
    let theaters = sucursales.listarSalas();
    theaters.forEach(function(theater){
        res.write('\n')
        res.write(theater.name)
        res.write('\n')
        res.write('\n')
        res.write(theater.address)
        res.write('\n')
        res.write('\n')
        res.write(theater.description)
    })
    res.end()
},
contacto:function(res){
res.write(contacto.titulo);
res.write('\n')
res.write(contacto.contenido);
res.write('\n')
res.end()
},

preguntasFrecuentes:function(res){
    res.write(preguntasFrecuentes.titulo);
    res.write('\n\n')
   res.write('Total de preguntas: '+ preguntasFrecuentes.cantidad())
   res.write('\n\n')
   res.write('Listado de Preguntas Frecuentes:\n')
    res.write('\n\n')
    let faqs = preguntasFrecuentes.listarFaqs();
    for(faq of faqs){
        res.write('\n')
        res.write(faq.faq_title)
        res.write('\n')
        res.write('\n')
        res.write(faq.faq_answer)
        res.write('\n')
    }
res.end()
}

}

module.exports = index
