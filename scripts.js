function logar() {
  var login = document.getElementById("user").value;
  var senha = document.getElementById("password").value;

  if (login == "admin" && senha == "admin") {
    location.href = "home.html";
  } else {
    alert("Usuario ou senha incorretos");
  }
}

document.addEventListener("DOMContentLoaded",() => {
  const links = document.querySelectorAll(".nav-links li a"); 
  const currentUrl = window.location.href; 

  links.forEach(link => {
      if (link.href === currentUrl) { 
          link.classList.add("active");
      }
  });
});

function navigateTo(url) {
  window.location.href = url;
}

document.addEventListener("DOMContentLoaded", function () {
  const statusPoints = document.querySelectorAll(".status-point");

  const filterButtons = document.querySelectorAll(".filters button");

  const filterSensors = (status) => {
    statusPoints.forEach((point) => {
      if (status === "Todos") {
        point.style.display = "block";
      } else if (point.getAttribute("data-status") === status) {
        point.style.display = "block";
      } else {
        point.style.display = "none";
      }
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const filter = e.target.getAttribute("data-filter");

      filterSensors(filter);
    });
  });
  filterSensors("Todos");
});
