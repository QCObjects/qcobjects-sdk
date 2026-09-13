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
exports.ListComponent = exports.ListItemComponent = void 0;
const qcobjects_1 = require("qcobjects");
class ListItemComponent extends qcobjects_1.Component {
    shadowed = false;
    tplsource = "inline";
    template = "<a href=\"{{value}}\">{{label}}</a>";
    cached = false;
    constructor(o) {
        o.name = "list-item";
        super(o);
    }
}
exports.ListItemComponent = ListItemComponent;
class ListComponent extends qcobjects_1.Component {
    data;
    shadowed = true;
    tplsource = "inline";
    template = "<p>Loading...</p>";
    body;
    shadowRoot;
    rows;
    subcomponents;
    done;
    serviceData;
    constructor(o) {
        o.name = "list";
        super(o);
        this.body.setAttribute("controllerClass", "ListController");
        this.body.setAttribute("subcomponentClass", "ListItemComponent");
    }
}
exports.ListComponent = ListComponent;
(0, qcobjects_1.Package)("org.qcobjects.components.list", [
    ListItemComponent,
    ListComponent
]);
