
/* =========================================
   NEXORA PREMIUM BUSINESS PLATFORM
   FILE: script.js
========================================= */

"use strict";

document.addEventListener("DOMContentLoaded", function () {

  // 01. MOBILE NAVIGATION

  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("navigation");

  if (menuToggle && navigation) {

    menuToggle.addEventListener("click", function () {

      const isOpen = navigation.classList.toggle("active");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "×" : "☰";

    });

    navigation.querySelectorAll("a").forEach(function (link) {

      link.addEventListener("click", function () {

        navigation.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";

      });

    });

    document.addEventListener("click", function (event) {

      if (
        !navigation.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {

        navigation.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";

      }

    });

  }


  // 02. CONTACT FORM VALIDATION

  const contactForm = document.getElementById("contactForm");
  const contactStatus = document.getElementById("contactStatus");

  if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

      event.preventDefault();

      const name = document.getElementById("contactName");
      const email = document.getElementById("contactEmail");
      const message = document.getElementById("contactMessage");

      if (!name || !email || !message) {
        return;
      }

      const nameValue = name.value.trim();
      const emailValue = email.value.trim();
      const messageValue = message.value.trim();

      if (!nameValue || !emailValue || !messageValue) {

        showStatus("Please complete all fields.", "error");
        return;

      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(emailValue)) {

        showStatus("Please enter a valid email address.", "error");
        return;

      }

      showStatus(
        "Your information is valid. Contact form backend is not connected yet.",
        "success"
      );

    });

  }

  function showStatus(message, type) {

    if (!contactStatus) return;

    contactStatus.textContent = message;

    contactStatus.style.color =
      type === "success" ? "#247a45" : "#c0392b";

  }


  // 03. CURRENT YEAR

  const yearElement = document.getElementById("currentYear");

  if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

  }


  // 04. SMOOTH SCROLL

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });


  // 05. BUTTON CLICK FEEDBACK

  document.querySelectorAll("[data-scroll]").forEach(function (button) {

    button.addEventListener("click", function () {

      const targetId = button.getAttribute("data-scroll");
      const target = document.querySelector(targetId);

      if (target) {

        target.scrollIntoView({
          behavior: "smooth"
        });

      }

    });

  });

});
