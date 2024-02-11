/**
 * Entry point for JavaScript
 */
import JsonLoader from "./classes/JsonLoader.js";
import Calendar from "./classes/Calendar.js";

document.addEventListener("DOMContentLoaded", async () => {
  // fetch events from JSONs
  const jsonLoader = new JsonLoader();
  const events = await jsonLoader.sanitizeEventData();

  // instantiate and render Calendar
  const calendarElement = document.getElementById("calendar");
  const calendar = new Calendar(calendarElement, events);
  calendar.render();
});
