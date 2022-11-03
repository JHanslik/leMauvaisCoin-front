import React from 'react'

const Textarea = ({ handleChange, name, value, placeholder, error, row }) => {

  return (
    <section className="flex justify-center py-0.5">
    <div className="py-4 bg-teal-50 px-5 rounded">
    <label className="block mb-2 text-m ">{name}</label>

    <textarea className="border-2 border-teal-100 rounded w-[600px] p-1"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      rows={row}
    />
    </div>
    {error && <p>{error}</p>}
  </section>
  )
}

export default Textarea