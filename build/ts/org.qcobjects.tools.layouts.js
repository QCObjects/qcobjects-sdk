/* eslint-disable array-callback-return */
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
exports.BasicLayout = void 0;
const qcobjects_1 = require("qcobjects");
const org_qcobjects_effects_1 = require("./org.qcobjects.effects");
class BasicLayout extends qcobjects_1.InheritClass {
    dependencies = [];
    constructor({ component = null, dependencies = [] }) {
        super({ component, dependencies });
    }
    load() {
        this.dependencies.push((0, qcobjects_1.New)(qcobjects_1.SourceCSS, {
            external: !(qcobjects_1.CONFIG.get("useLocalSDK", false)),
            url: (qcobjects_1.CONFIG.get("useLocalSDK", false)) ? ("css/basic-layout.css") : (qcobjects_1.CONFIG.get("remoteSDKPath", false) + "css/basic-layout.css")
        }));
    }
    coloredBorder() {
        /*
        * A helper function to visualize the layout borders
        * Usage: BasicLayout.coloredBorder()
        */
        setTimeout(function () {
            (0, qcobjects_1.Tag)("nav").map((element) => { element.style.border = "20px solid #3333"; });
            (0, qcobjects_1.Tag)("nav").map((element) => { element.style.backgroundColor = "#129999"; });
            (0, qcobjects_1.Tag)("component>footer").map((element) => { element.style.background = "#876"; });
            (0, qcobjects_1.Tag)("component>div").map((element) => { element.style.border = "3px dashed #fff"; });
            (0, qcobjects_1.Tag)("component>section").map((element) => { element.style.border = "3px solid #000"; });
            (0, qcobjects_1.Tag)("component>section").map((element) => { element.style.backgroundColor = "#fffaaa"; });
            (0, qcobjects_1.Tag)("component>article").map((element) => { element.style.border = "3px dotted #000"; });
            (0, qcobjects_1.Tag)("component>header").map((element) => { element.style.background = "#789"; });
            (0, qcobjects_1.Tag)("component>footer").map((element) => { element.style.background = "#876"; });
            (0, qcobjects_1.Tag)("component>article:nth-child(1)").map((element) => { element.style.border = "1px solid #444"; });
            (0, qcobjects_1.Tag)("component>article:nth-child(1)").map((element) => { element.style.backgroundColor = "#555aaa"; });
            (0, qcobjects_1.Tag)("component>article:nth-child(2)").map((element) => { element.style.backgroundColor = "#aaa333"; });
            (0, qcobjects_1.Tag)("component>article:nth-child(3)").map((element) => { element.style.backgroundColor = "#54da82"; });
            (0, qcobjects_1.Tag)("*").map((element) => { element.style.color = "#fff"; });
            (0, qcobjects_1.Tag)("component>article").map((element) => org_qcobjects_effects_1.Fade.apply(element, 0, 1));
            (0, qcobjects_1.Tag)("component>footer").map((element) => org_qcobjects_effects_1.Fade.apply(element, 0, 1));
            (0, qcobjects_1.Tag)("component>header").map((element) => org_qcobjects_effects_1.Fade.apply(element, 0, 1));
            (0, qcobjects_1.Tag)("nav").map((element) => { element.style.display = "block"; element.style.width = element.offsetParent?.scrollWidth.toString() || element.clientWidth.toString(); org_qcobjects_effects_1.MoveXInFromLeft.apply(element); });
            (0, qcobjects_1.Tag)("component>article").map((element) => { element.style.display = "block"; element.style.height = element.offsetParent?.scrollHeight.toString() || element.clientHeight.toString(); org_qcobjects_effects_1.MoveYInFromBottom.apply(element); });
            (0, qcobjects_1.Tag)("component>article:nth-child(2)").map((element) => { element.style.display = "block"; element.style.width = element.offsetParent?.scrollWidth.toString() || element.clientWidth.toString(); org_qcobjects_effects_1.MoveXInFromRight.apply(element); });
        }, 300);
    }
}
exports.BasicLayout = BasicLayout;
(0, qcobjects_1.Package)("org.qcobjects.tools.layouts", [
    BasicLayout
]);
