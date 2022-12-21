import React from 'react'
import {useState } from 'react'
import { AddCategory, GifGrid } from './components';
export const GifExpertApp = () =>
{
    const [categories, setcategories] = useState(['Del Bombillo Soy'])
    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory)) return; 

     //categories.push(newCategory);
     //console.log(newCategory);
    setcategories([newCategory,...categories ] );
    }


    console.log(categories);

    return (
        <>
        {/*djask  */}
               <h1>GifExpertApp</h1>
        <AddCategory 
             onNewCategory={(value)=> onAddCategory(value)}
            currentcategories={categories}
             
              />            
 
            {categories.map(category =>{
                return (
                    <GifGrid 
                    key={category} 
                    category={category} />


                ) 

            })}
          

        
      </>

    )
}
   
    