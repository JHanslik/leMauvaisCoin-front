import React from 'react'

const Textarea = ({ handleChange, name, value, placeholder, error, row }) => {

  return (
     <fieldset>
     <label>{name}</label>

     <textarea
       name={name}
       placeholder={placeholder}
       value={value}
       onChange={handleChange}
       rows={row}
     />

     {error && <p>{error}</p>}
   </fieldset>
  )
}

export default Textarea