// Content stays in HTML; the component only enhances disclosure behavior.
class CareerEntry extends HTMLElement {
  connectedCallback() {
    if (this.initialized) return;

    const description = this.querySelector(".career-description");
    const details = this.querySelector(".career-details");
    const toggle = this.querySelector(".career-toggle");
    const label = this.querySelector(".career-toggle-label");
    const card = this.querySelector(".career-card");
    const fullDescription = description.textContent.trim();
    const preview = document.createElement("p");
    preview.className = "career-description";
    preview.textContent = fullDescription.length > 100
      ? fullDescription.slice(0, 99).trimEnd() + "…"
      : fullDescription;
    description.before(preview);

    const setExpanded = (expanded) => {
      toggle.setAttribute("aria-expanded", String(expanded));
      card.classList.toggle("is-expanded", expanded);
      details.hidden = !expanded;
      description.hidden = !expanded;
      preview.hidden = expanded;
      label.textContent = expanded ? "See less" : "See more";
    };

    toggle.addEventListener("click", () => {
      setExpanded(toggle.getAttribute("aria-expanded") !== "true");
    });
    setExpanded(false);
    toggle.hidden = false;
    this.initialized = true;
  }
}

customElements.define("career-entry", CareerEntry);
