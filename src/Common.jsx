import { useState, useEffect } from "react"

export default function Common() {


    const [canvas, setCanvas] = useState(null)
    const [context, setContext] = useState(null)

    useEffect(() => {
        setCanvas(document.getElementById("canvas"))
        console.log(canvas)
    }, [])

    useEffect(() => {
        if (canvas) {
            setContext(canvas.getContext("2d"))
        }
    }, [canvas])

    return ({ canvas, context })
}