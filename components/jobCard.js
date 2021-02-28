const template = document.createElement('template');
template.innerHTML = ``;

class JobCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.innerHTML = ``;
  }
}

window.customElements.define('job-card', JobCard);