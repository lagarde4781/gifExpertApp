import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ ])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        // setCategories( cat => [ ...cat, 'Nueva']) // Otra forma de obtener el valor actual
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>  
            <h1>GifExpertApp</h1>

            <AddCategory 
                // setCategories={ setCategories } // Se pasa la referencia para que pueda ser ocupao en el otro componente
                onNewCategory={ onAddCategory }
            />

            { 
                categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    )
                ) 
            }
        </>
    )
}
