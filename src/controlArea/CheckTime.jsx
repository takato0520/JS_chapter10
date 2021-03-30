export default function CheckTime() {
    const canvas = document.getElementById('canvas')
    const context = canvas.getContext('2d')
    const time = context.getAttribute('time') //読み込み日時の取得

    if (time === null) { return }

    if (time !== timeOld) {
        const imgDataCache = context.getImageData(
            0, 0, canvas.width, canvas.height
        )

        timeOld = time

        return true
    }
}