/**
 * Wrapper class for FullCalendar
 */
export default class Calendar {
  calendarElement;
  calendar;
  events;

  constructor(calendarElement, events) {
    this.calendarElement = calendarElement;
    this.events = events;
    this.calendar = new FullCalendar.Calendar(
      calendarElement,
      this.getConfig()
    );
  }

  render() {
    this.calendar.render();
  }

  getConfig() {
    const config = {
      initialView: "dayGridMonth",
      locale: "hu",
      firstDay: "1",
      buttonText: {
        today: "Ma",
      },
      events: this.events,
    };

    return config;
  }
}
