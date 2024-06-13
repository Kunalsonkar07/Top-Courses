import React from "react";

function Spinner(){
    return (
        <div className="w-[100%]  flex flex-col justify-center items-center mt-3">
            <div className="loader h-2 w-2 m-2"></div>
            <p className="text-[20px] font-bold text-white mt-6">Loading..</p>
        </div>
    )
}

export default Spinner ;