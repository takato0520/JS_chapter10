import React, { useState } from "react"

const CheckTimeContext = React.createContext()
const CounterContext = React.createContext()


const Provider = ({ children }) => {
    const [imgDataCache, setImgDataCache] = useState(null)
    const [counter, setCounter] = useState(false)

    return (
        <CounterContext.Provider value={[counter, setCounter]}>
            <CheckTimeContext.Provider value={[imgDataCache, setImgDataCache]}>
                {children}
            </CheckTimeContext.Provider>
        </CounterContext.Provider>
    )
}

export { CheckTimeContext, CounterContext, Provider }