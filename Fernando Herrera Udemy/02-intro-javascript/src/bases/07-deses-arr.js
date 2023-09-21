const personajes = ['goku', 'Vegeta', 'Trunks'];

// Destructuring
const [, , p3] = personajes;

console.log(p3);

//Arrow function que retorna un arreglo
const retornaArreglo = () => {
    return ['ABC', 123];
}

//Destructuring del arreglo retornado
const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);


//Tarea
//1. El primer valor del arr se llamara Nombre
//2. El segundo setNombre

const useState = (valor) => {
    return [valor, () => { console.log(`Hola mundo`) }]
}

const [nombre, setNombre] = useState('Goku');

console.log(nombre);
setNombre();
