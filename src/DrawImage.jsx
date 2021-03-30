const DrawImage = (url, canvas, context) => {
    return new Promise((resolve, reject) => {

        const img = new Image()

        img.src = url
        console.log(url)
        img.onload = () => {
            const wC = canvas.width
            const hC = canvas.height
            const wI = img.width
            const hI = img.height


            context.drawImage(img, 0, 0, wI, hI, 0, 0, wC, hC)
            resolve()
        }
    })
}

export default DrawImage