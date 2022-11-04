import React from 'react'

const ProductArticle = ({ product }) => {
    return (
        <section>
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
                    <div class="flex gap-20 items-center pt-5 justify-end">
                        <span class="text-5xl flex justify-end font-bold text-[whitesmoke] p-5">
                            {product.price / 100} $
                        </span>
                        <a
                            href=""
                            class="text-white bg-blue-700 mx-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Add to cart
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductArticle
