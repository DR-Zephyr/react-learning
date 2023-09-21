module.exports = {
    presets: [
        //Este preset es utilizado para transpilar el código JavaScript moderno (ECMAScript 2015+) a una versión anterior de JavaScript que es compatible con la mayoría de los navegadores o entornos. La opción {targets: { esmodules: true }} indica que el código transpilado debe ser compatible con entornos que soportan módulos ES6. En otras palabras, Babel no transpilará las importaciones y exportaciones de módulos ES6, ya que se asume que el entorno objetivo ya las soporta.
        ['@babel/preset-env', { targets: { esmodules: true } }],
        // Este preset se utiliza para transpilar código JSX (sintaxis utilizada en React) a funciones React.createElement(). La opción {runtime: 'automatic'} es una característica introducida en Babel 7.9.0 que permite a los usuarios no importar React al usar JSX. En lugar de transpilar JSX a React.createElement(), Babel lo transpilará a funciones del nuevo runtime JSX que no requiere que React esté en el ámbito. Esto es especialmente útil con la introducción de React 17 y el nuevo JSX Transform.
        ['@babel/preset-react', { runtime: 'automatic' }],
    ],
};
