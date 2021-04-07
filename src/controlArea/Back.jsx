import { useContext } from 'react'
import Common from '../Common'
import { CheckTimeContext, CounterContext } from './CheckTime'

const Back = () => {
    const ctx = Common()
    const [imgDataCache, setImgDataCache] = useContext(CheckTimeContext)
    const [counter, setCounter] = useContext(CounterContext)
    console.log(imgDataCache)
    console.log(counter)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(counter)
        if (counter) {
            setCounter(false)
            console.log(imgDataCache)
            ctx.context.putImageData(imgDataCache, 0, 0)
            setImgDataCache(ctx.context.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height))
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">戻す</button>
        </form>
    )
}

export default Back