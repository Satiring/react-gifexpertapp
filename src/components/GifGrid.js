import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    const {data, loading} = useFetchGifts( category );  

    return (
        <>
            <h3>{ category }</h3> 
            {/* { loading ? 'Cargando Imagenes...' : 'Imagenes Cargadas. ALL OK'} */}
            { loading && <p className="animate__animated animate__tada animate__slow">Cargando</p>}
            <div className="card-grid animate__animated animate__bounce animate__fast">
                
                {
                        data.map( img => (
                            <GifGridItem 
                                key={img.id}
                                {...img} />
                        ))
                    }
                
            </div>
        </>
    )
}
