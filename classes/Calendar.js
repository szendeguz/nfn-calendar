/**
 * Wrapper class for FullCalendar
 */
export default class Calendar {
  calendarElement;
  calendar;

  constructor(calendarElement) {
    console.log("Itt vagyok");
    this.calendarElement = calendarElement;
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
      events: [
        {
          // this object will be "parsed" into an Event Object
          title: "The Title", // a property!
          start: "2024-02-12", // a property!
          end: "2024-02-18", // a property! ** see important note below about 'end' **
        },
        {
          // this object will be "parsed" into an Event Object
          title: "The Title", // a property!
          start: "2024-02-15", // a property!
          end: "2024-02-18", // a property! ** see important note below about 'end' **
        },
      ],
    };

    return config;
  }
}
