/**
 * QCObjects SDK 2.5
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
import { Package } from "qcobjects";
import { Fade, Move } from "./org.qcobjects.effects";

export class ModalFade extends Fade {
  duration = 500;

}


export class ModalMoveUp extends Move {

  duration = 800;

}


export class ModalMoveDown extends Move {

  duration = 300;

}


Package("org.qcobjects.modal.effects", [
  ModalFade,
  ModalMoveDown,
  ModalMoveUp
]);


