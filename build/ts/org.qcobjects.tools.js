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
const qcobjects_1 = require("qcobjects");
(function () {
    (0, qcobjects_1.Package)("org.qcobjects.tools", [
        class Process extends qcobjects_1.Timer {
            alive;
            steps = [];
            currentStep = 0;
            duration;
            constructor({ steps = [], currentStep = 0, alive = false }) {
                super({ steps, currentStep, alive });
                this.alive = alive;
            }
            stop() {
                this.alive = false;
            }
            start() {
                this.alive = true;
                this.thread({
                    duration: this.duration,
                    timing: (timeFraction) => {
                        this.currentStep += 1;
                        // eslint-disable-next-line @typescript-eslint/no-floating-promises
                        this.steps.map((p) => {
                            let _ret_;
                            if (typeof p === "function") {
                                _ret_ = Promise.resolve().then(function () {
                                    p.call(process);
                                });
                            }
                            return _ret_;
                        });
                        return timeFraction;
                    },
                    intervalInterceptor(progress) {
                        qcobjects_1.logger.debug("process execution progress: " + progress.toString());
                    }
                });
            }
            // eslint-disable-next-line no-unused-vars
            thread(arg0) {
                throw new Error("Method not implemented.");
            }
        }
    ]);
})();
