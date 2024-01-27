
export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = 'Luis'

console.log( `Este es un texto: ${ getSaludo( nombre ) }`);