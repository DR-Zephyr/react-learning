//

import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const App = () => {
    const [categories, setCategories] = useState(['black clover']);
    const onAddCategory = (newCategory) => {
        // Verifica si la nueva categoría ya existe (sin distinguir mayúsculas y minúsculas)
        const isCategoryExists = categories.some(
            (category) => category.toLowerCase() === newCategory.toLowerCase()
        );

        if (!isCategoryExists) {
            // Agrega la nueva categoría si no existe
            setCategories([newCategory, ...categories]);
        } else {
            // Muestra una alerta para indicar que la categoría ya existe
            alert(`La categoria ${newCategory} ya existe`);
        }
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={(event) => {
                    onAddCategory(event);
                }}
            />
            {categories.map((category) => (
                <GifGrid
                    key={category}
                    category={category}
                />
            ))}
        </>
    );
};
