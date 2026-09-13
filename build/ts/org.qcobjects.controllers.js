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
exports.GenericController = void 0;
const qcobjects_1 = require("qcobjects");
class GenericController extends qcobjects_1.Controller {
}
exports.GenericController = GenericController;
(0, qcobjects_1.Package)("org.qcobjects.controllers", [
    GenericController
]);
