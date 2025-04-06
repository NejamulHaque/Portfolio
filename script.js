const toggleSwitch = document.getElementById("toggle-switch");

// Check saved theme on load
window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");

  if (theme === "light") {
    document.body.classList.add("light-mode");
    toggleSwitch.checked = true;
  }
});

// Toggle and store preference
toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    document.body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light-mode");
    localStorage.setItem("theme", "dark");
  }
});

// Particles.js config
particlesJS("particles-js", {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: { value: "#00ffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" }
    },
    opacity: {
      value: 0.3,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00ffff",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
// Scroll Reveal Animations
ScrollReveal().reveal('.hero', {
  origin: 'top',
  distance: '50px',
  duration: 1000,
  delay: 200,
  easing: 'ease-in-out',
  reset: false
});

ScrollReveal().reveal('section', {
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 100,
  easing: 'ease-in-out',
  interval: 200,
  reset: false
});

document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formMsg = document.getElementById("formMsg");
  formMsg.textContent = "Sending...";

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value,
  };

  try {
    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (res.ok) {
      formMsg.textContent = "Message sent successfully!";
      e.target.reset();
    } else {
      formMsg.textContent = "Error: " + result.error;
    }
  } catch (err) {
    formMsg.textContent = "Server error.";
  }
});