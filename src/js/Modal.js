export class Modal {
  constructor() {
    this.element = document.createElement("div");
    this.createHTML();
  }

  createHTML() {
    this.element.classList.add("modal-page");
    this.element.innerHTML = `
    <div class="modal-page__info">
    <img class="modal-page__image" src="" alt="" class="s" />
    <div class="modal-page__description">
      <h2 class="modal-page__headline">Find out Prague with locals</h2>
      <h3 class="modal-page__subtitle">Description</h3>
      <p class="modal-page__text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
        tempore similique, voluptate facere minima atque quaerat
        accusantium? Aliquam, ipsam modi, quae placeat quaerat eum hic
        repudiandae, voluptates inventore ipsum officia!
      </p>
      <h3 class="modal-page__subtitle">Schedule</h3>
      <p class="modal-page__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
      <label class="modal-page__label" for="phonw">Your telephone number
        <input type="text" name="phone" id="phone" class="modal-page__input">
      </label>
      <label class="modal-page__label" for="comments">Your questions or comments
        <textarea name="comments" id="comments" class="modal-page__input"></textarea>
      </label>
      <button class="modal-page__button">REGISTER</button>
    </form>
  </div>
    `;
  }
}
