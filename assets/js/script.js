// Menú móvil: abre/cierra la navegación en pantallas chicas
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector('button[aria-label="Abrir menú"]');
  var desktopNav = document.querySelector("header nav");
  var header = document.querySelector("header");
  if (!btn || !desktopNav || !header) return;
  var mobile = document.createElement("nav");
  mobile.className = "mobile-navigation";
  mobile.hidden = true;
  var list = document.createElement("div");
  list.className = "mobile-navigation__links";
  desktopNav.querySelectorAll("a").forEach(function (a) {
    var l = document.createElement("a");
    l.href = a.getAttribute("href");
    l.textContent = a.textContent;
    l.className = "mobile-navigation__link";
    list.appendChild(l);
  });
  var cta = header.querySelector('a[target="_blank"]');
  if (cta) {
    var c = cta.cloneNode(true);
    c.className = "mobile-navigation__cta";
    list.appendChild(c);
  }
  mobile.appendChild(list);
  header.appendChild(mobile);
  function toggle(open) {
    mobile.hidden = !open;
    btn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    btn.setAttribute("aria-expanded", open);
  }
  btn.addEventListener("click", function () {
    toggle(mobile.hidden);
  });
  list.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function () {
      toggle(false);
    });
  });
});
