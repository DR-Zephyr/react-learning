


// Destructuracion
// Asignacion destructurante

const persona = {
    nombre: 'Juan',
    edad: 45,
    clave: 'Ironman',
}

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({ clave, nombre, edad }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }

    }
}

const { nombreClave, anios, latlng } = useContext(persona);

console.log(nombreClave, anios);
console.log(latlng);