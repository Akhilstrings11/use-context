import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from "../"
function UseContext() {
    const appValues = useContext(AppContext)
    console.log(appValues)
    return (
        <div>
            {/* <button onClick={() => setCount(count + 1)} >Add+</button> : {count} */}
        </div>
    )
}

export default UseContext
