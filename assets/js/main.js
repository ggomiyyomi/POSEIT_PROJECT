document.addEventListener("DOMContentLoaded", () => {
  loadComponent("../components/navbar.html", "navbar");
  loadComponent("../components/footer.html", "footer");
});

function loadComponent(path, id) {
  fetch(path)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}