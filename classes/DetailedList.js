/**
 * Class for creating project detail cards
 */
export default class DetailedList {
  document;
  events;
  parentDiv;

  constructor(document, events) {
    this.document = document;
    this.events = events;
    this.parentDiv = this.document.getElementById("detailed-list");
  }

  /**
   * Append detailed list element to #detailed-list div
   */
  generateDetailedList() {
    try {
      this.events.forEach((rawEvent) => {
        const htmlString = this.createHtmlString(
          rawEvent[Object.keys(rawEvent)[0]]
        );

        this.parentDiv.insertAdjacentHTML("afterbegin", htmlString);
      });
    } catch (e) {
      console.log("An error occured during generating detailed list view: ", e);
    }
  }

  /**
   * Creates an HTML string from event data
   * @param {string} event
   * @returns String
   */
  createHtmlString(event) {
    const htmlString = `
        <div class="detailed-list-card">
            <h3>${event.project}</h3>
            <div class="detailed-list-card-inner">
                <p>Title: <span>${event.title}</span></p>
                <p>Leírás: <span>${event.desc}</span></p>
                <p>Kezdés dátuma: <span>${event["date-start"]}</span></p>
                <p>Befejezés dátuma: <span>${event["date-end"]}</span></p>
                <p>Kezdés időpontja: <span>${event["time-start"]}</span></p>
                <p>Befejezés időpontja: <span>${event["time-end"]}</span></p>
                <p>Egyéb infó: <span>${event.more}</span></p>
            </div>
        </div>
    `;

    return htmlString;
  }
}
