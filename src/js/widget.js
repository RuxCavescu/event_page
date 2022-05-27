import { Modal } from "./Modal";

class Widget {
  constructor(name, description, schedule, imageURL, eventId) {
    this.name = name;
    this.description = description;
    this.schedule = schedule;
    this.image = imageURL;
    this.event = eventId;
    this.createWidget();
  }

  createWidget() {
    this.elem = document.createElement('div');
    this.elem.classList.add('event');
    this.elem.innerHTML = `<h3 class="event_name">${this.name}</h3>
<button class="btn">More</button>`;
    // this.elem.querySelector('button').addEventListener('click', functionToOpenModale);

    document.querySelector('.secondary__events').appendChild(this.elem);
    this.elem.querySelector(".btn").addEventListener("click", () => {
      new Modal(this.name, this.description, this.schedule, this.image, this.event)

    })
  }

  
}

export { Widget };
