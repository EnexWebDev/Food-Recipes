import { Oval } from "react-loader-spinner";

import React from 'react'

const Spinner = () => {
    return (
    <Oval
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    )
}

export default Spinner