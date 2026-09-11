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
import { CONFIG, Controller, New, Package, SourceCSS, SourceJS } from "qcobjects";
declare let SwaggerUIBundle: any;
declare let SwaggerUIStandalonePreset: any;
export class SwaggerUIController extends Controller {
  component: any;
  dependencies: any;

  startSwaggerUI() {
    // Begin Swagger UI call region
    if (typeof SwaggerUIBundle !== "undefined") {

      const ui = SwaggerUIBundle({
        url: CONFIG.get("swagger-ui-url", "https://petstore.swagger.io/v2/swagger.json"),
        dom_id: "#" + CONFIG.get("swagger-ui-dom_id", "swagger-ui"),
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout"
      });
      // End Swagger UI call region
      (window as any).ui = ui;
    }

  }

  done() {
    this.component.body.innerHTML = "<div id=\"" + CONFIG.get("swagger-ui-dom_id", "swagger-ui") + "\"></div>";
    const swaggerUIPackagePath = CONFIG.get("swagger-ui-package-path", "node_modules/swagger-ui-dist/");

    this.dependencies?.push(New(SourceJS, {
      url: swaggerUIPackagePath + "swagger-ui-standalone-preset.js",
      external: CONFIG.get("swagger-ui-external", false)
    }));
    this.dependencies?.push(New(SourceCSS, {
      url: swaggerUIPackagePath + "swagger-ui.css",
      external: CONFIG.get("swagger-ui-external", false)
    }));
    this.dependencies?.push(New(SourceJS, {
      url: swaggerUIPackagePath + "swagger-ui-bundle.js",
      external: CONFIG.get("swagger-ui-external", false),
      done: () => {
        this.startSwaggerUI();
      }
    }));
  }

}

Package("org.qcobjects.controllers.swagger", [
  SwaggerUIController

]);

