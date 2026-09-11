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
import { Component, Package } from "qcobjects";


export class ListItemComponent extends Component {
  shadowed= false;
  tplsource= "inline";
  template="<a href=\"{{value}}\">{{label}}</a>";
  cached= false;

  constructor (o:any){
    o.name="list-item";
    super(o);
  }

}

export class ListComponent extends Component {
  data!:any;
  shadowed= true;
  tplsource= "inline";
  template= "<p>Loading...</p>";
  body: any;
  shadowRoot: HTMLElement | undefined;
  rows!: string | number | null;
  subcomponents!: never[];
  done: any;
  serviceData: any;

  constructor (o:any){
    o.name = "list";
    super(o);
    this.body.setAttribute("controllerClass","ListController");
    this.body.setAttribute("subcomponentClass","ListItemComponent");

  }

}

Package("org.qcobjects.components.list",[
  ListItemComponent,
  ListComponent
]);
