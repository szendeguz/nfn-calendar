/**
 * Entry point for JavaScript
 */
import Calendar from "./classes/Calendar.js";

document.addEventListener("DOMContentLoaded", () => {
  // instantiate and render Calendar
  const calendarElement = document.getElementById("calendar");
  const calendar = new Calendar(calendarElement);
  calendar.render();
});
