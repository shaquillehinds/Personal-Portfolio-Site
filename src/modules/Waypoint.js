import $ from "jquery";
import waypoints from "../../node_modules/waypoints//lib/noframework.waypoints";

export class Highlight {
  constructor(element, offset) {
    this.createWaypoints(element, offset);
  }

  createWaypoints(element, offset) {
    new Waypoint({
      element: document.querySelector(element),
      handler: function (direction) {
        if (direction == "down") {
          document
            .querySelectorAll(".nav__item a")
            .forEach((item) => item.classList.remove("highlight"));
          document.querySelector(`${element}-link`).classList.add("highlight");
        }
      },
      offset,
    });
  }
}

export class unHighlight {
  constructor(element, offset) {
    this.createWaypoints(element, offset);
  }

  createWaypoints(element, offset) {
    new Waypoint({
      element: document.querySelector(element),
      handler: function (direction) {
        if (direction == "up") {
          document
            .querySelectorAll(".nav__item a")
            .forEach((item) => item.classList.remove("highlight"));
          document.querySelector(`${element}-link`).classList.add("highlight");
        }
      },
      offset,
    });
  }
}
