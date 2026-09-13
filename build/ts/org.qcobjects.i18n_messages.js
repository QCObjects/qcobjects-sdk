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
exports.i18n_messages = void 0;
const qcobjects_1 = require("qcobjects");
class i18n_messages extends qcobjects_1.InheritClass {
    constructor({ messages = [] }) {
        super({
            messages
        });
        if (qcobjects_1.CONFIG.get("use_i18n", false)) {
            qcobjects_1.CONFIG.set("lang", "en");
            if (!qcobjects_1.global.get("i18n")) {
                qcobjects_1.global.set("i18n", {
                    messages
                });
            }
            else {
                qcobjects_1.global.set("i18n", {
                    messages: qcobjects_1.global.get("i18n").messages.concat(messages)
                });
            }
        }
    }
    _load_i18n_packages_() {
        // eslint-disable-next-line array-callback-return
        return qcobjects_1.CONFIG.get("i18n_languages", []).map((i18n_packagename) => {
            (0, qcobjects_1.Import)(`org.quickcorp.i18n_messages.${i18n_packagename}`);
        });
    }
}
exports.i18n_messages = i18n_messages;
(0, qcobjects_1.Package)("org.qcobjects.i18n_messages", [
    i18n_messages
]);
(new i18n_messages({}))._load_i18n_packages_();
