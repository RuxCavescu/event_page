import { eventData } from './script';

export class Modal {
  constructor(name, description, schedule, imageURL) {
    this.name = name;
    this.description = description;
    this.schedule = schedule;
    this.image = imageURL;

    this.element = document.createElement('div');
    this.createHTML();
    this.register();
  }

  createHTML() {
    this.element.classList.add('modal-page__background');
    this.element.innerHTML = `

    <div class="modal-page">
    <span class="modal-page__close">&times;</span>
    <div class="modal-page__info">
    <img class="modal-page__image" src="" alt="" class="s" />
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
      <label class="modal-page__label" for="comments">Your questions or comments
        <textarea name="comments" id="comments" class="modal-page__input"></textarea>
      </label>
      <button type="submit" class="modal-page__button">REGISTER</button>
    </form>
  </div>
  </div>
    `;

    const closeButton = this.element.querySelector('.modal-page__close');
    closeButton.addEventListener('click', () => {
      this.element.style.display = 'none';
    });
  }

  register() {
    const registerButton = this.element.querySelector('.modal-page__button');
    let name = this.element('input#name').value;
    let surname = this.element('input#surname').value;
    let email = this.element('input#email').value;
    let phone = this.element('input#phone').value;

    registerButton.addEventListener('click', (event) => {
      evenet.preventDefault();
    });
  }
}
