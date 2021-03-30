const ReadImage = (img) => {

    return new Promise((resolve, reject) => {

        const re = /\.(png|jpg|jpeg|gif)$/i //よく分からない記述
        // console.log(img.name.match(re))
        if (!img.name.match(re)) {
            reject()
            return
        } else {
            const reader = new FileReader()
            reader.onload = () => {
                resolve(reader.result)
            }

            reader.readAsDataURL(img)
        }

    })
}

export default ReadImage