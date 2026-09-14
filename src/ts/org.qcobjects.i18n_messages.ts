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
import { Package, InheritClass, CONFIG, Import, get, set } from "qcobjects";



export class i18n_messages extends InheritClass {

  constructor({
    messages = []
  }) {
    super({
      messages
    });
    if (CONFIG.get("use_i18n", false)) {
      CONFIG.set("lang", "en");
      if (!get("i18n")) {
        set("i18n", {
          messages
        });
      } else {
        set("i18n", {
          messages: get("i18n").messages.concat(messages)
        });
      }
    }

  }

  _load_i18n_packages_() {
    // eslint-disable-next-line array-callback-return
    return CONFIG.get("i18n_languages", []).map((i18n_packagename: any) => {

      Import(`org.quickcorp.i18n_messages.${i18n_packagename}`);
    });
  }

}

Package("org.qcobjects.i18n_messages", [

  i18n_messages
]);

(new i18n_messages({}))._load_i18n_packages_();
