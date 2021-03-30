import React, { useEffect, useState } from 'react'
import ReadImage from './ReadImage'
import DrawImage from './DrawImage'
import styled from 'styled-components'

const GetContext = () => {
    const canvas = document.getElementById("canvas")
    const context = canvas.getContext("2d")
    return ({ canvas, context })
}

const Canvas = () => {
    const [img, setImg] = useState(null)
    const [ctx, setCtx] = useState(null)

    useEffect(() => {
        setCtx(GetContext())
    }, [])

    console.log(img)

    useEffect(() => {
        if (!img) { return }
        try {
            console.log(img)
            ReadImage(img).then(function (url) {
                const dtURL = url
                DrawImage(dtURL, ctx.canvas, ctx.context)
                const elNoView = document.getElementById("noView")
                elNoView.style.display = "none"
                ctx.canvas.style.display = "inline"
            })
        } catch (e) {
            return
        }
    }, [img])

    const fileInputRef = React.createRef()
    const Click = () => {
        fileInputRef.current.click()
    }

    return (
        <>
            <div id="imageArea" class="uiArea">
                <div id="noView">
                    <div>画像ファイルをドロップするかタップしてください。</div>
                </div>
                <canvas id="canvas" width="800" height="420" onClick={Click}>
                </canvas>
                <FileInput type="file" accept=".jpg,.jpeg,.png,.gif" id="file" ref={fileInputRef}
                    onChange={
                        e => setImg(e.target.files[0])
                    } />
            </div>
        </>
    )
}

const FileInput = styled.input`
display:none;`

export { Canvas, GetContext }






