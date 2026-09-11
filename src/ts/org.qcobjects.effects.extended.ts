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
import {Effect, logger, Package} from "qcobjects";
import {Move, MoveElement} from "./org.qcobjects.effects.base";

export class MoveXInFromRight extends Move {
    duration = 1000;

    static apply(element:MoveElement) {
      Move.apply.call(this, element, element.width as number, 0, 0, 0);
    }
  }

  export class MoveXInFromLeft extends Move {
    duration = 1000;

    static apply(element:MoveElement) {
      Move.apply.call(this, element, -(element.width as number), 0, 0, 0);
    }
  }

  export class MoveYInFromBottom extends Move {
    duration = 1000;

    static apply(element:MoveElement) {
      Move.apply.call(this, element, 0, element.height as number, 0, 0);
    }

  }

  export class MoveYInFromTop extends Move {
    duration = 1000;

    static apply(element:MoveElement ) {
      Move.apply.call(this, element, 0, -(element.height as number), 0, 0);
    }
  }

  export class RotateX extends Effect {
    duration = 1000;
    static duration: any;

    static apply(element:HTMLElement, angleFrom:number, angleTo:number) {
      const da = angleTo - angleFrom;
      super.animate({
        duration: this.duration,
        timing(timeFraction: number) {
           
          return timeFraction;
        },
        draw(progress: number) {
          logger.debug("animation progress: " + progress.toString());
          const angle = Math.round(angleFrom + (progress * da / 100));
          logger.debug("angle: " + angle.toString());
          element.style.transform = "rotate3d(1,0,0," + angle.toString() + "deg)";
        }
      });
    }

  }

  export class RotateY extends Effect {
    duration = 1000;
    static duration: any;

    static apply(element:HTMLElement, angleFrom:number, angleTo:number) {
      const da = angleTo - angleFrom;
      super.animate({
        duration: this.duration,
        timing(timeFraction: number) {
           
          return timeFraction;
        },
        draw(progress: number) {
          logger.debug("animation progress: " + progress.toString());
          const angle = Math.round(angleFrom + (progress * da / 100));
          logger.debug("angle: " + angle.toString());
          element.style.transform = "rotate3d(0,1,0," + angle.toString() + "deg)";
        }
      });
    }
  }

  export class RotateZ extends Effect {
    duration = 1000;

    apply(element:HTMLElement, angleFrom:number, angleTo:number) {
      const da = angleTo - angleFrom;
      super.animate({
        duration: this.duration,
        timing(timeFraction: number) {
           
          return timeFraction;
        },
        draw(progress: number) {
          logger.debug("animation progress: " + progress.toString());
          const angle = Math.round(angleFrom + (progress * da / 100));
          logger.debug("angle: " + angle.toString());
          element.style.transform = "rotate3d(0,0,1," + angle.toString() + "deg)";
        }
      });
    }

  }

  export class Rotate extends Effect {
    duration = 1000;

    apply(element:HTMLElement, angleFrom:number, angleTo:number) {
      const da = angleTo - angleFrom;
      super.animate({
        duration: this.duration,
        timing(timeFraction: number) {
           
          return timeFraction;
        },
        draw(progress: number) {
          logger.debug("animation progress: " + progress.toString());
          const angle = Math.round(angleFrom + (progress * da / 100));
          logger.debug("angle: " + angle.toString());
          element.style.transform = "rotate3d(1,1,1," + angle.toString() + "deg)";
        }
      });
    }
  }

  export class Radius extends Effect {
    duration = 1000;

    apply(element:HTMLElement, radiusFrom:number, radiusTo:number) {
      const dr = radiusTo - radiusFrom;
      super.animate({
        duration: this.duration,
        timing(timeFraction: number) {
           
          return timeFraction;
        },
        draw(progress: number) {
          logger.debug("animation progress: " + progress.toString());
          const radius = radiusFrom + (progress * dr / 100);
          logger.debug("radius: " + radius.toString());
          element.style.borderRadius = radius.toString() + "px";
        }
      });
    }

  }

  export class Resize extends Effect {
    duration = 1000;

    apply(element:HTMLElement, scaleFrom:number, scaleTo:number) {
      const ds = scaleTo - scaleFrom;
      super.animate({
        duration: this.duration,
        timing(timeFraction: number) {
           
          return timeFraction;
        },
        draw(progress: number) {
          logger.debug("animation progress: " + progress.toString());
          const scale = scaleFrom + (progress * ds / 100);
          logger.debug("resize: " + scale.toString());
          element.style.transformOrigin = "center";
          element.style.transform = "scale(" + scale + "," + scale + ")";
        }
      });
    }

  }

  export class WipeLeft extends Effect {
    duration = 1000;

    apply(element:HTMLElement, scaleFrom:number, scaleTo:number) {
      const ds = scaleTo - scaleFrom;
      super.animate({
        duration: this.duration,
        timing(timeFraction: number) {
           
          return timeFraction;
        },
        draw(progress: number) {
          logger.debug("animation progress: " + progress.toString());
          const scale = scaleFrom + (progress * ds / 100);
          logger.debug("wipe: " + scale.toString());
          element.style.transformOrigin = "right";
          element.style.transform = "scaleX(" + scale + ")";
        }
      });
    }

  }

  export class WipeRight extends Effect {
    duration = 1000;

    apply(element:HTMLElement, scaleFrom:number, scaleTo:number) {
      const ds = scaleTo - scaleFrom;
      super.animate({
        duration: this.duration,
        timing(timeFraction: number) {
           
          return timeFraction;
        },
        draw(progress: number) {
          logger.debug("animation progress: " + progress.toString());
          const scale = scaleFrom + (progress * ds / 100);
          logger.debug("wipe: " + scale.toString());
          element.style.transformOrigin = "left";
          element.style.transform = "scaleX(" + scale + ")";
        }
      });
    }

  }

  export class WipeUp extends Effect {

    duration = 1000;

    apply(element:HTMLElement, scaleFrom:number, scaleTo:number) {
      const ds = scaleTo - scaleFrom;
      super.animate({
        duration: this.duration,
        timing(timeFraction: number) {
           
          return timeFraction;
        },
        draw(progress: number) {
          logger.debug("animation progress: " + progress.toString());
          const scale = scaleFrom + (progress * ds / 100);
          logger.debug("wipe: " + scale.toString());
          element.style.transformOrigin = "bottom";
          element.style.transform = "scaleY(" + scale + ")";
        }
      });
    }

  }

  export class WipeDown extends Effect {
    duration = 1000;

    apply(element:HTMLElement, scaleFrom:number, scaleTo:number) {
      const ds = scaleTo - scaleFrom;
      super.animate({
        duration: this.duration,
        timing(timeFraction: number) {
           
          return timeFraction;
        },
        draw(progress: number) {
          logger.debug("animation progress: " + progress.toString());
          const scale = scaleFrom + (progress * ds / 100);
          logger.debug("wipe: " + scale.toString());
          element.style.transformOrigin = "top";
          element.style.transform = "scaleY(" + scale + ")";
        }
      });
    }
  }
  Package("org.qcobjects.effects.extended", [
    MoveXInFromRight,
    MoveXInFromLeft,
    MoveYInFromBottom,
    MoveYInFromTop,
    RotateX,
    RotateY,
    RotateZ,
    Rotate,
    Radius,
    Resize,
    WipeLeft,
    WipeRight,
    WipeUp,
    WipeDown

  ]);
