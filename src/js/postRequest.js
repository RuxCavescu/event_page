//post request for registering data

async () {
  const url =
    'https://test-api.codingbootcamp.cz/api/597ac8ff/events/EVENT_ID/registrations';
  const dataToSend = {
    name: this.name,
    surname: this.surname,
    email: this.email,
    phone: this.phone,
    comments: this.comments,
  };
  //
  //
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(dataToSend),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //
  //
  const usavleDataToSend = await response.json();
  console.log(usavleDataToSend);
};
