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
exports.SessionData = void 0;
const qcobjects_1 = require("qcobjects");
const org_qcobjects_cloud_auth_session_usertoken_1 = require("./org.qcobjects.cloud.auth.session.usertoken");
class SessionData extends qcobjects_1.InheritClass {
    __session_container__ = null;
    sessionData;
    /**
     * Sets the session container
     *
     * @param {*} sessionContainer1, sessionContainer2, ...
     *
     */
    setSessionContainer() {
        // eslint-disable-next-line prefer-rest-params
        this.__session_container__ = [...arguments];
    }
    /**
     * Gets the session container
     *
     * @return {*} sessionContainer
     */
    getSessionContainer() {
        if (typeof this.__session_container__ === "undefined" || this.__session_container__ === null) {
            throw new Error("You need to set a session container first: sessionData.setSessionContainer(...arguments)");
        }
        return this.__session_container__;
    }
    /**
     * Gets the session data
     *
     * @return {*} sessionData
     */
    getSessionData(...args) {
        const s = sessionStorage.getItem(`${this.index(args)}`);
        let sessionData;
        if (s !== null) {
            sessionData = JSON.parse(s);
        }
        if (typeof sessionData === "undefined" || sessionData === null) {
            sessionData = {};
        }
        return sessionData;
    }
    /**
     * Returns an index of the session
     *
     * @param {string} valueForIndex
     * @return {string} index
     * @example sessionInstance.index("me@email.com", "myusername")
     *
     */
    index(...args) {
        if (typeof org_qcobjects_cloud_auth_session_usertoken_1.SessionUserToken === "undefined") {
            throw new Error("You need to import SessionUserToken first: Import (\"org.qcobjects.cloud.auth.session.usertoken\")");
        }
        return `session_${btoa(org_qcobjects_cloud_auth_session_usertoken_1.SessionUserToken.getGlobalUserToken(args))}`;
    }
    /**
     * Saves the session instance
     *
     */
    save(...args) {
        const s = (0, qcobjects_1._DataStringify)(this.sessionData);
        sessionStorage.setItem(`${this.index(args)}`, s);
    }
    /**
     *
     * Gets the session value
     *
     * @param {*} name
     * @param {*} defaultValue
     * @return {*}
     */
    get(name, defaultValue) {
        const sessionData = this.getSessionData(this.getSessionContainer());
        return (typeof sessionData[name] !== "undefined") ? (sessionData[name]) : (defaultValue);
    }
    /**
     *
     * Sets the session value
     *
     * @param {*} name
     * @param {*} value
     */
    set(name, value) {
        const sessionContainer = this.getSessionContainer();
        const sessionData = this.getSessionData(sessionContainer);
        this.sessionData = sessionData;
        this.sessionData[name] = value;
        this.save(sessionContainer);
    }
}
exports.SessionData = SessionData;
(0, qcobjects_1.Package)("org.qcobjects.cloud.auth.session.data", [
    SessionData
]);
