import React, { useEffect, useState } from 'react'
import Common from "./Common"
import ReadImage from './ReadImage'
import DrawImage from './DrawImage'
import styled from 'styled-components'

const Canvas = () => {
    const ctx = Common()
    const [img, setImg] = useState(null)

    console.log(img)

    useEffect(() => {
        if (!img) { return }
        try {
            console.log(img)
            ReadImage(img).then(function (url) {
                const dtURL = url
                const elNoView = document.getElementById("noView")
                DrawImage(dtURL, ctx.canvas, ctx.context)
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

export default Canvas






