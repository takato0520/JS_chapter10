import { useContext } from 'react'
import Common from '../Common'
import { CheckTimeContext, CounterContext } from './CheckTime'
const Sepia = () => {
    const ctx = Common()
    const [imgDataCache, setImgDataCache] = useContext(CheckTimeContext)
    const [counter, setCounter] = useContext(CounterContext)

    console.log(imgDataCache)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (counter === 0) {
            setCounter(counter + 1)
            console.log(counter)
            const w = ctx.canvas.width
            const h = ctx.canvas.height
            const imgDt = ctx.context.getImageData(0, 0, w, h)
            const data = imgDt.data

            for (let i = 0; i < data.length; i += 4) {
                const r = data[i + 0]
                const g = data[i + 1]
                const b = data[i + 2]
                const a = data[i + 3]

                let Y = 0.298912 * r + 0.586611 * g + 0.114478 * b //輝度の計算
                Y = Math.trunc(Y) //少数部分の桁を取り除く

                data[i + 0] = Math.trunc(Y * 240 / 255)
                data[i + 1] = Math.trunc(Y * 200 / 255)
                data[i + 2] = Math.trunc(Y * 145 / 255)
            }

            setImgDataCache(ctx.context.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height))
            ctx.context.putImageData(imgDt, 0, 0)

            console.log(imgDt)
            console.log(ctx.context.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height))
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">セピア</button>
        </form>
    )
}

export default Sepia