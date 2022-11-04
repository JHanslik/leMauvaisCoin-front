import React from 'react'
import { Link } from 'react-router-dom'

const ProductArticle = ({ product }) => {
    return (
        <Link to={`/products/${product.id}`}>
            <div
                href=""
                className="flex  bg-gray-800 rounded-lg border shadow-xl "
            >
                {/* <div className="w-[750px] ">
                    <img
                        className="w-auto object-cover rounded-t-lg md:h-auto md:rounded-none md:rounded-l-lg"
                        src={product.image}
                        alt=""
                    />
                </div> */}
                <div className="flex flex-col p-5 ">
                    <div className="flex flex-col ">
                        <h5 className=" mb-2 text-5xl font-bold text-[whitesmoke] text-right p-5">
                            {product.title}
                        </h5>
                        <p className=" w-[500px] mb-3 font-normal text-lg text-gray-400 text-right p-5">
                            {product.content}
                        </p>
                    </div>
                    <div className="flex gap-20 items-center pt-5 justify-end">
                        <span className="text-5xl flex justify-end font-bold text-[whitesmoke] p-5">
                            {product.price / 100} $
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductArticle
