/**
 * Wrapper class for FullCalendar
 */
export default class Calendar {
  calendarElement;
  calendar;
  events;

  constructor(calendarElement, events) {
    try {
      this.calendarElement = calendarElement;
      this.events = events;
      this.calendar = new FullCalendar.Calendar(
        calendarElement,
        this.getConfig()
      );
    } catch (e) {
      console.log("An error occured during creating Calendar: ", e);
    }
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
      height: 650,
      events: this.events,
    };

    return config;
  }
}
