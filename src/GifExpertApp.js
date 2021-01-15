import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    // const categories = ['Naruto', 'One piece', 'Death Note']
    const [categories,setCategories] = useState(['Naruto']);

    // const handleAdd = (newCategorie) => {
    //     setCategories([...categories, newCategorie]);
    // }

    return (
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr />


            {/* <button onClick={ }>Agregar Categoria</button> */}
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }

            </ol>
        </>

    ); 

}

export default GifExpertApp;