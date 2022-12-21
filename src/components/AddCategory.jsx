import { useState } from "react"
export const AddCategory = ( {onNewCategory}) =>
{
    const [inputValue, setInputValue]= useState('');
    const onInputChanged = ( {target} ) =>{
          setInputValue(target.value);
    }
    const onSubmit= (event)=>
    {
        event.preventDefault();
        if(inputValue.trim().length<=1)
        return;
        onNewCategory(inputValue.trim() );
        setInputValue('');
    }
    return (
    <>
        <form onSubmit={(event)=> onSubmit(event)}>


        <input 
        type="text"
        placeholder="Buscar GIfs"
        value={inputValue}
        onChange= {(event) => onInputChanged(event)}
        />
        </form>
       
    </>
       
        
    )
}