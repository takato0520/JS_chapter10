import { useState, useEffect } from 'react'
import { GetContext } from '../Canvas'
import CheckTime from './CheckTime'

const Back = () => {
    const [ctx, setCtx] = useState(null)

    useEffect(() => {
        setCtx(GetContext())
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const imgDataCache = CheckTime.imgDataCache
        console.log(imgDataCache)
        ctx.context.putImageData(imgDataCache, 0, 0)
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">戻す</button>
        </form>
    )
}

export default Back