import React from 'react'
import {getGifs} from '../helpers/getGifs'
import { useState ,useEffect} from 'react';

export const useFetchGifs = (category) => {
 
  const [images, setImages] =useState([]);

        const getImages = async() =>
        {
            const newImages = await getGifs(category);
            setImages(newImages);

        } 

        useEffect(() =>
        {
            getImages();
            


        }, [])

       getGifs(category);
   
 
    return {
    images: images,
    isloading: true


  }
  
  
}
