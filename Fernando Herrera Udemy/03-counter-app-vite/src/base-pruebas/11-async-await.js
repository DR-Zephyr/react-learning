//

export const getImagen = async () => {
    try {
        const apiKey = '0PyQ41349oQ7hLQpJdfQLb6ltAflqs4Q';
        const resp = await fetch(
            `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
        );
        const { data } = await resp.json();

        const { url } = data.images.original;

        return url;
        
    } catch (error) {
        // manejo del error
        console.log(error);
        return 'No se encontro la imagen'
    }
};
