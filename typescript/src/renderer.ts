import { newRectangle, Rectangle } from "./shapes/rectangle.js";

function newRenderer(Shape: Rectangle) {
    return {
        draw() {
            const area: number = Shape.computeArea()
            console.log("Shape drawn\n" + "Its area is " + area)
        }
    }
}

export { newRenderer }