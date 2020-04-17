"use strict";
class Canvas2DUtil {
    constructor(canvas) {
        this.context = canvas.getContext("2d");
    }
    drawText(text) {
        if (this.context == null)
            return;
        this.context.save();
        this.context.textBaseline = "middle";
        this.context.textAlign = "center";
        let centerX = this.context.canvas.width * 0.5;
        let centerY = this.context.canvas.height * 0.5;
        this.context.fillText(text, centerX, centerY);
        this.context.strokeStyle = "green";
        this.context.strokeText(text, centerX, centerY);
        this.context.restore();
    }
}
let canvas = document.getElementById("canvas");
if (canvas == null) {
    alert("无法获取HTMLCanvasElement");
    throw new Error("无法获取HTMLCanvasElement");
}
let canvas2d = new Canvas2DUtil(canvas);
canvas2d.drawText("hello world");
let loadshTest = new LodashTest();
loadshTest.call();
//# sourceMappingURL=main.js.map