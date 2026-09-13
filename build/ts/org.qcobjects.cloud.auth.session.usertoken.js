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
exports.SessionUserToken = void 0;
const qcobjects_1 = require("qcobjects");
class SessionUserToken extends qcobjects_1.InheritClass {
    static user = {};
    __cache__;
    __instanceID;
    constructor(o) {
        super(o);
        const __instance__ = this;
        this.__cache__ = new qcobjects_1.ComplexStorageCache({
            index: __instance__.__instanceID.toString(),
            load() {
                let __token__;
                if (typeof navigator !== "undefined" && typeof origin !== "undefined") {
                    __token__ = qcobjects_1._Crypt.encrypt(`${navigator.userAgent}|${o.username}|${(+(new Date())).toString()}`, origin);
                }
                else {
                    __token__ = qcobjects_1._Crypt.encrypt(`${o.username}|${(+(new Date())).toString()}`, qcobjects_1.CONFIG.get("domain", "localhost"));
                }
                SessionUserToken.user = {
                    priority: __instance__.__instanceID.toString(),
                    token: __token__
                };
                return SessionUserToken.user;
            },
            alternate(cacheController) {
                SessionUserToken.user = cacheController?.cache.getCached(__instance__.__instanceID.toString()); // setting dataObject with the cached value 
            }
        });
    }
    static generateIndex(s) {
        return (typeof Buffer !== "undefined") ? (Buffer.from(s, "ascii").toString("base64")) : (btoa(s));
    }
    static getGlobalUser(...args) {
        const username = [args].join("|");
        const __index__ = "userToken_" + SessionUserToken.generateIndex(username);
        if (typeof qcobjects_1.global.get(__index__) === "undefined" || qcobjects_1.global.get(__index__) === null) {
            qcobjects_1.global.set(__index__, (0, qcobjects_1.New)(SessionUserToken, {
                username
            }));
        }
        SessionUserToken.user = qcobjects_1.global.get(__index__).user;
        return qcobjects_1.global.get(__index__).user;
    }
    static getGlobalUserToken(...args) {
        return SessionUserToken.getGlobalUser(args).token;
    }
    static getGlobalUserId(...args) {
        return SessionUserToken.getGlobalUser(args).id;
    }
    static getGlobalUserPriority(...args) {
        return SessionUserToken.getGlobalUser(args).priority;
    }
    static getLoginCredentialsToken(username, password) {
        return qcobjects_1._Crypt.encrypt(`${username}${password}`, SessionUserToken.getGlobalUserToken(username));
    }
    static closeGlobalSession(...args) {
        SessionUserToken.getGlobalUser(args);
        const username = [args].join("|");
        const __index__ = "userToken_" + SessionUserToken.generateIndex(username);
        if (typeof qcobjects_1.global.get(__index__) !== "undefined") {
            qcobjects_1.global.get(__index__).__cache__.clear();
            qcobjects_1.global.set(__index__, null);
            SessionUserToken.user = {};
        }
    }
}
exports.SessionUserToken = SessionUserToken;
(0, qcobjects_1.Package)("org.qcobjects.cloud.auth.session.usertoken", [
    SessionUserToken
]);
