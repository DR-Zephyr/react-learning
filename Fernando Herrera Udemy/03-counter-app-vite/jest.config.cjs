module.exports = {
    //testEnvironment: Esta opción especifica el entorno de prueba que Jest debe usar para ejecutar las pruebas. En este caso, se ha configurado para usar 'jest-environment-jsdom'. JSDOM es una implementación de JavaScript del estándar DOM (Document Object Model) que se utiliza para simular un entorno de navegador en Node.js. Esto permite a los desarrolladores escribir y ejecutar pruebas para código que interactúa con el DOM (como el código de frontend o React) sin necesidad de un navegador real.
    testEnvironment: 'jest-environment-jsdom',
    // setupFiles: Esta opción permite especificar una lista de archivos que se deben cargar antes de que se ejecuten las pruebas. Estos archivos suelen contener configuraciones globales o inicializaciones que deben estar disponibles antes de que comiencen las pruebas. En este caso, se ha especificado un archivo ./jest.setup.js, lo que significa que Jest cargará y ejecutará este archivo antes de ejecutar cualquier prueba. Es común usar setupFiles para configuraciones como la configuración de bibliotecas de simulación (mocking) o la configuración de polyfills.
    setupFiles: ['./jest.setup.js']
};
