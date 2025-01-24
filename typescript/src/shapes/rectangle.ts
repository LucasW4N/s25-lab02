// interface Rectangle {
//     width: number,
//     height: number,
//     computeArea: () => number
// }

function newRectangle(width: number, height: number): Shape {
    return {
        // width,
        // height,

        computeArea: function (): number {
            return width * height
        }
    }
}

export { newRectangle }
