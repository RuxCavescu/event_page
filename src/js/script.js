import { Widget } from './widget';
import { Modal } from './Modal';

export const eventData = async () => {
  const response = await fetch(
    'https://test-api.codingbootcamp.cz/api/597ac8ff/events'
  );
  const usableEventData = await response.json();

  console.log(usableEventData);

  // Creating modals based on Modal class

  // const Modals = usableEventData.map((e) => {
  //   return new Modal(e.name, e.description, e.date, e.image_url, e.id);
  // });

  // console.log(Modals);

  // Modals.forEach((e) => {
  //   console.log(e);
  //   document.body.appendChild(e.element)
  // })
  createEvents(usableEventData);
  featuredEvent(usableEventData);
};

eventData();

const createEvents = (usableEventData) => {
  for (let i = 1; i < usableEventData.length; i++) {
    new Widget(
      usableEventData[i].name,
      usableEventData[i].description,
      usableEventData[i].date,
      usableEventData[i].image_url,
      usableEventData[i].id
    );
  }
};
// creating a featured event box
const featuredEvent = (usableEventData) => {
  const mainEvent = document.querySelector('.main__event');
  const img = usableEventData[0].image_url;
  const eventName = usableEventData[0].name;
  const eventDesc = usableEventData[0].description;
  mainEvent.innerHTML = `
  <h2>FEATURED EVENT</h2>
  <img class="event__img" src="${img}" alt="event image">
  <div class="event__content">
  <div class="event__text">
  <h3>${eventName}</h3>
  <p>"${eventDesc}"</p>
  </div>
  <div class="event__button"><button>REGISTER</button></div>
  </div>
  `;
};
