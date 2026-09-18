document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open");
    });
  }

  const form = document.querySelector("#contact-form");
  const message = document.querySelector("#form-message");
  if (form && message) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.querySelector("#name");
      const email = document.querySelector("#email");
      const subject = document.querySelector("#subject");
      const content = document.querySelector("#message");
      const errors = [];

      if (!name.value.trim()) errors.push("Le nom est obligatoire.");
      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        errors.push("Veuillez saisir une adresse e-mail valide.");
      }
      if (!subject.value.trim()) errors.push("Le sujet est obligatoire.");
      if (!content.value.trim()) errors.push("Le message est obligatoire.");

      if (errors.length) {
        message.className = "form-message error";
        message.textContent = errors.join(" ");
        message.setAttribute("role", "alert");
        return;
      }

      message.className = "form-message success";
      message.textContent = "Merci ! Votre message a été validé. Ce formulaire est une démonstration front-end : aucun message n'est réellement envoyé.";
      message.setAttribute("role", "status");
      form.reset();
    });
  }
});