import React from 'react'

export const GIfItem = ({title, url, id}) => {
    return (
    <div className="card">
        <img src ={url} alt={title}  />


    </div>
  )
}
