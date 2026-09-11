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
import { Package, Controller } from "qcobjects";

export class ModalController extends Controller {
  component: any;

  done() {
    const component = this.component;
    component.body.innerHTML = component.body.innerHTML.replace("/{{content}}/g", component.submodal.template);

  }

}

Package("org.qcobjects.modal.controllers", [
  ModalController

]);
