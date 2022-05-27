import { Widget } from './widget';

const eventData = async () => {
  const response = await fetch(
    'https://test-api.codingbootcamp.cz/api/597ac8ff/events'
  );
  const usableEventData = await response.json();

  console.log(usableEventData);
};

eventData();
