/**
 * Class for loading JSONs
 * Both for events and configuration
 */
export default class JsonLoader {
  headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  configPath = "../config.json";

  /**
   * Load configuration object
   * The configuration object contains the events array with the relative paths of the events
   * @returns Promise
   */
  async loadConfig() {
    try {
      const response = await fetch(this.configPath, this.headers);
      const config = response.json();

      return config;
    } catch (e) {
      console.log("An error occured during loading configuration: ", e);
    }
  }

  /**
   * Load a single event
   * @returns Promise
   */
  async loadEvent(eventPath) {
    try {
      const response = await fetch(eventPath, this.headers);
      const event = response.json();

      return event;
    } catch (e) {
      console.log("An error occured during loading event: ", e);
    }
  }

  /**
   * Generates an array of all events defined in config.json
   * @returns Object[]
   */
  async generateAllEvents() {
    try {
      const events = [];
      const config = await this.loadConfig();
      for (const eventPath of config.events) {
        const event = await this.loadEvent(eventPath);
        events.push(event);
      }

      return events;
    } catch (e) {
      console.log("An error occured during generating all events: ", e);
    }
  }

  /**
   * Strips events from the unnecessary attributes for FullCalendar
   * @returns Object[]
   */
  async sanitizeEventData() {
    try {
      const fullCalendarEvents = [];
      const rawEvents = await this.generateAllEvents();
      rawEvents.forEach((rawEvent) => {
        const innerRawEvent = rawEvent[Object.keys(rawEvent)[0]];
        const sanitizedEvent = {
          title: innerRawEvent.title,
          start: this.formatDate(innerRawEvent["date-start"]),
          end: this.formatDate(innerRawEvent["date-end"]),
        };

        fullCalendarEvents.push(sanitizedEvent);
      });

      return fullCalendarEvents;
    } catch (e) {
      console.log("Error during sanitizing event data: ", e);
    }
  }

  /**
   * Converts short date to ISO date format
   * @param {string} date
   */
  formatDate(date) {
    const [month, day, year] = date.split("/");
    const isoDate = year + "-" + month + "-" + day;

    return isoDate;
  }
}
