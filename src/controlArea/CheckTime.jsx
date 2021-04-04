import React, { useState } from "react"
import Common from "../Common"

const CheckTimeContext = React.createContext()

const CheckTimeProvider = ({ children }) => {
    const ctx = Common()
    // const time = ctx.canvas.getAttribute('time') //読み込み日時の取得
    const [imgDataCache, setImgDataCache] = useState(null)
    // const [timeOld, setTimeOld] = useState(time)

    // if (time === null) { return }

    // if (time !== timeOld) {
    //     setImgDataCache(ctx.context.getImageData(
    //         0, 0, ctx.canvas.width, ctx.canvas.height
    //     ))

    //     setTimeOld(time)
    // }

    return (
        <CheckTimeContext.Provider value={[imgDataCache, setImgDataCache]}>
            {children}
        </CheckTimeContext.Provider>

    )
}

export { CheckTimeContext, CheckTimeProvider }