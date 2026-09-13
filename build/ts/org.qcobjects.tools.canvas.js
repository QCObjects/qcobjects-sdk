/**
 * QCObjects Framework SDK
 * ________________
 *
 * Author: Jean Machuca <correojean@gmail.com>
 *
 * Cross Browser Javascript Framework for MVC Patterns
 * QCObjects is licensed under the MIT License
 * [LICENSE] (https://github.com/QCObjects/qcobjects-sdk/blob/main/LICENSE.txt)
 *
 * Copyright (C) 2015 Jean Machuca,<correojean@gmail.com>
 *
 * Everyone is permitted to copy and distribute verbatim copies of this
 * license document, but changing it is not allowed.
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasTool = void 0;
const qcobjects_1 = require("qcobjects");
class CanvasTool extends qcobjects_1.InheritClass {
    drawImageFilled(img, canvas, zoom = 1, px = 0, py = 0) {
        // get the scale
        let scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        scale = scale * zoom;
        // get the top left position of the image
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, (px + x), (py + y), img.width * scale, img.height * scale);
    }
    getImageResized(img, width, height, resizedImage, zoom = 1, px = 0, py = 0) {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = width.toString();
        canvas.style.height = height.toString();
        this.drawImageFilled(img, canvas, zoom, px, py);
        resizedImage.src = canvas.toDataURL("image/png");
        return canvas;
    }
}
exports.CanvasTool = CanvasTool;
(0, qcobjects_1.Package)("org.qcobjects.tools.canvas", [
    CanvasTool
]);
