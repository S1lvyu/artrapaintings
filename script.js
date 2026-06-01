const currentPath = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-links a").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPath || (currentPath === "index.html" && href === "./index.html")) {
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    const original = button.textContent;
    button.textContent = "Cererea este pregatita";
    setTimeout(() => {
      button.textContent = original;
    }, 2200);
  });
});
