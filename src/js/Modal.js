import { eventData } from "./script";

export class Modal {
  constructor(name, description, schedule, imageURL, eventId) {
    this.name = name;
    this.description = description;
    this.schedule = schedule;
    this.image = imageURL;
    this.event = eventId;

    this.element = document.createElement("div");
    this.createHTML();
  }

  createHTML() {
    this.element.classList.add("modal-page__background");
    this.element.innerHTML = `

    <div class="modal-page">
    <span class="modal-page__close">&times;</span>
    <div class="modal-page__info">
    <img class="modal-page__image" src="${this.image}" alt="" class="s" />
    <div class="modal-page__description">
      <h2 class="modal-page__headline">${this.name}</h2>
      <h3 class="modal-page__subtitle">Description</h3>
      <p class="modal-page__text">${this.description}
      </p>
      <h3 class="modal-page__subtitle">Schedule</h3>
      <p class="modal-page__text">${this.schedule}
      </p>
    </div>
  </div>

  <div class="modal-page__formbox">
    <h2 class="modal-page__headline">Register for the event</h2>
    <form class="modal-page__form">
      <label class="modal-page__label" for="name">Your Name
        <input type="text" name="name" id="name" class="modal-page__input">
      </label>
      <label class="modal-page__label" for="surname">Your surname
        <input type="text" name="surname" id="surname" class="modal-page__input">
      </label>
      <label class="modal-page__label" for="name">Your email adress
        <input type="text" name="email" id="email" class="modal-page__input">
      </label>
      <label class="modal-page__label" for="phone">Your telephone number
        <input type="text" name="phone" id="phone" class="modal-page__input">
      </label>
      <label class="modal-page__label" for="age">
      <input type="checkbox" name="phone" id="age" class="modal-page__input--left">I am old enough to participate
    </label>
      <label class="modal-page__label" for="comments">Your questions or comments
        <textarea name="comments" id="comments" class="modal-page__input"></textarea>
      </label>
      <button type="button" class="modal-page__button">REGISTER</button>
    </form>
  </div>
  </div>
    `;

    const closeButton = this.element.querySelector(".modal-page__close");
    closeButton.addEventListener("click", () => {
      this.element.style.display = "none";
    });

    const registerButton = this.element.querySelector(".modal-page__button");
    registerButton.addEventListener("click", this.register);
    document.body.appendChild(this.element);
  }

  register = () => {
    try {
      let nameIn = this.element.querySelector("#name").value;
      let surnameIn = this.element.querySelector("#surname").value;
      let emailIn = this.element.querySelector("#email").value;
      let phoneIn = this.element.querySelector("#phone").value;
      let commentsIn = this.element.querySelector("#comments").value;

      const sendData = async () => {
        const url = `https://test-api.codingbootcamp.cz/api/597ac8ff/events/${this.event}/registrations`;

        const dataToSend = {
          name: nameIn,
          surname: surnameIn,
          email: emailIn,
          phone: phoneIn,
          comments: commentsIn,
        };
        //
        //
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(dataToSend),
          headers: {
            "Content-Type": "application/json",
          },
        });
        //
        //
        const usableDataToSend = await response.json();
        console.log(usableDataToSend);

        const registerButton = this.element.querySelector(
          ".modal-page__button"
        );
        if (usableDataToSend.status == "success") {
          registerButton.style.backgroundColor = "green"
          registerButton.style.color = "white"
          registerButton.textContent = "SUCCESS"
        } else {
          registerButton.style.backgroundColor = "red"
          registerButton.style.color = "white"
          registerButton.textContent = "FAILURE"
        }
      };

      sendData();
    } catch (e) {
      console.log(e);
      console.log("Your message");
    }
  };
}
