class ProjectCard extends HTMLElement {
  connectedCallback() {
    if (this.shadowRoot) return;

    const title = this.querySelector('[slot="title"]');
    if (title) {
      title.id = `project-title-${ProjectCard.nextId++}`;
      this.setAttribute("aria-labelledby", title.id);
    }
    this.setAttribute("role", "article");

    const root = this.attachShadow({ mode: "open" });
    root.innerHTML = `
      <style>
        :host {
          display: block;
          max-width: 600px;
        }

        slot {
          display: contents;
        }
      </style>
      <slot name="media"></slot>
      <slot name="meta"></slot>
      <slot name="title"></slot>
      <slot name="description"></slot>
      <slot name="links"></slot>
    `;
  }
}

ProjectCard.nextId = 1;
customElements.define("project-card", ProjectCard);
