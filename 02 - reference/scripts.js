document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".friend-section");
  const buttons = document.querySelectorAll(".nav-button");

  function showCard(id) {
    sections.forEach(sec => sec.classList.remove("active"));
    const card = document.getElementById(id + "-card");
    if(card) card.classList.add("active");
    localStorage.setItem("lastViewedCard", id);
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => showCard(btn.dataset.friend));
  });

  const last = localStorage.getItem("lastViewedCard") || "nomore";
  showCard(last);
});
