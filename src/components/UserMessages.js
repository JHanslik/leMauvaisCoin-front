import React from 'react'

const UserMessages = ({ message }) => {
    return (
        <section>
            <div
                href=""
                className="flex  bg-gray-800 rounded-lg border shadow-xl "
            >
                <div className="flex flex-col p-5 ">
                    <div className="flex flex-col ">
                        <h5 className=" mb-2 text-5xl font-bold text-[whitesmoke] text-right p-5">
                            {message.title}
                        </h5>
                        <p className=" w-[500px] mb-3 font-normal text-lg text-gray-400 text-right p-5">
                            {message.content}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserMessages
