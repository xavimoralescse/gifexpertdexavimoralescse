import { GIfItem } from './GIfItem';
import { useFetchGifs } from '../hooks/useFetchGifs'



export const GifGrid= ( {category} )=>
{       
        const { images,isloading}= useFetchGifs(category);
        console.log({images})

       
       return (
        <>
        
        <h3>{category}</h3>

        {
            isloading &&(<h2>Cargando...</h2>)
            
        }
       
        <div className="card-grid">
            {
                images.map((image)  =>( 
                   <GIfItem 
                   key={image.id} 
                   {...image }
                   />
                    
                    ))

            }
         
           


        </div>
        </>



    )
}