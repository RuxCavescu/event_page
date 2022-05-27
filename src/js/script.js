import { Widget } from "./widget";
import { Modal } from "./Modal";

export const eventData = async () => {
  const response = await fetch(
    "https://test-api.codingbootcamp.cz/api/597ac8ff/events"
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
};



eventData();

const createEvents = (usableEventData) => {
  for (let i = 1; i < usableEventData.length; i++) {
    new Widget(usableEventData[i].name, usableEventData[i].description, usableEventData[i].data, usableEventData[i].image_url, usableEventData[i].id);
  }
};
