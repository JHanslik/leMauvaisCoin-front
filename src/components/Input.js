const Input = ({ handleChange, type, name, value, placeholder, error }) => {
    return (
        <section className="flex justify-center py-0.5">
            <div className="py-4 bg-teal-50 px-5 rounded">
                <label className="block mb-2 text-m ">{name}</label>

                <input
                    className="border-2 border-teal-100 rounded w-[600px] p-1"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                />
            </div>
            {error && <p>{error}</p>}
        </section>
    )
}

export default Input
