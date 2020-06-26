let index = require('./src/index')
let router = function(url,res){
switch(url){
    case '/':
        index.homePage(res);
        console.log("Home")
        break
    case '/en-cartelera':
        index.enCartelera(res);
        console.log("En Cartelera")
        break
    case '/mas-votadas':
        index.masVotadas(res);
        console.log("Más Votadas")
        break
        case '/sucursales':
            index.sucursales(res);
            console.log("Sucursales")
            break
        case '/contacto':
            index.contacto(res);
            console.log("Contacto")
            break
            case'/preguntas-frecuentes':
            index.preguntasFrecuentes(res);
            console.log("Preguntas Frecuentes")
            break
            default:
            res.end('404 pagina no encontrada')
        }

        }

module.exports = router