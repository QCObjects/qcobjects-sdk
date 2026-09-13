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
exports.GridComponent = exports.GridItemComponent = void 0;
const qcobjects_1 = require("qcobjects");
class GridItemComponent extends qcobjects_1.Component {
    name = "grid-item";
    shadowed = true;
    tplsource = "inline";
    template = `
<img src="{{image}}" />
<p>{{description}}</p>
`;
    cached = false;
}
exports.GridItemComponent = GridItemComponent;
class GridComponent extends qcobjects_1.Component {
    name = "grid";
    cached = false;
    view = null;
    shadowed = true;
    rows = 3;
    cols = 3;
    templateURI = "";
    data = {};
    tplsource = "inline";
    template = "<p>Loading...</p>";
    body;
    constructor(o) {
        super(o);
        this.body.setAttribute("controllerClass", "DataGridController");
        const subcomponentClass = (this.body.getAttribute("subcomponentClass") !== null) ? (this.body.getAttribute("subcomponentClass")) : ("GridItemComponent");
        this.body.setAttribute("subcomponentClass", subcomponentClass);
    }
}
exports.GridComponent = GridComponent;
(0, qcobjects_1.Package)("org.qcobjects.components.grid", [
    GridComponent,
    GridItemComponent
]);
