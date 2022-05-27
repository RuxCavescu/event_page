class Widget {
  constructor(name) {
    this.name = name;
    this.createWidget();
  }

  createWidget() {
    this.elem = document.createElement('div');
    this.elem.classList.add('event');
    this.elem.innerHTML = `<h3 class="event_name">${this.name}</h3>
<button class="btn">More</button>`;
    document.querySelector('.secondary__events').appendChild(this.elem);
  }
}

export { Widget };
