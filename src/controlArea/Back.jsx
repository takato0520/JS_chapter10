import { useContext } from 'react'
import Common from '../Common'
import { CheckTimeContext } from './CheckTime'

const Back = () => {
    const ctx = Common()
    const [imgDataCache, setImgDataCache] = useContext(CheckTimeContext)
    console.log(imgDataCache)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(imgDataCache)
        ctx.context.putImageData(imgDataCache, 0, 0)
        setImgDataCache(ctx.context.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height))
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">戻す</button>
        </form>
    )
}

export default Back