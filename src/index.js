import "normalize.css/normalize.css";
import "lazysizes";
import "./styles/main.scss";
import $ from "jquery";
window.jQuery = window.$ = $;
import smoothScroll from "jquery-smooth-scroll";
import { Highlight, unHighlight } from "./modules/Waypoint";
import waypoints from "../node_modules/waypoints/lib/noframework.waypoints";

$(".nav__item a").smoothScroll();
new Highlight("#home", "50%");
new unHighlight("#home", "-50%");
new Highlight("#contact", "50%");
new unHighlight("#contact", "-50%");
new Highlight("#portfolio", "50%");
new unHighlight("#portfolio", "-50%");
// new Waypoint({
//   element: $("#home"),
//   handler: function () {
//     console.log("here");
//   },
// });
