
/* =========================================
   NEXORA PREMIUM BUSINESS PLATFORM
   FILE: script.js
========================================= */

"use strict";

document.addEventListener("DOMContentLoaded", function () {

  // 01. MOBILE NAVIGATION

  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("navigation");

  function closeMenu() {
    if (!menuToggle || !navigation) return;

    navigation.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";
  }

  function openMenu() {
    if (!menuToggle || !navigation) return;

    navigation.classList.add("active");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation menu");
    menuToggle.textContent = "×";
  }

  if (menuToggle && navigation) {

    menuToggle.addEventListener("click", function () {

      const isOpen =
        navigation.classList.contains("active");

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }

    });

    // Close menu after clicking a navigation link

    navigation.querySelectorAll("a").forEach(function (link) {

      link.addEventListener("click", closeMenu);

    });

    // Close menu when clicking outside

    document.addEventListener("click", function (event) {

      if (
        !navigation.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }

    });

    // Close menu with Escape key

    document.addEventListener("keydown", function (event) {

      if (event.key === "Escape") {
        closeMenu();
      }

    });

  }


  // 02. CONTACT FORM VALIDATION

  const contactForm =
    document.getElementById("contactForm");

  const contactStatus =
    document.getElementById("contactStatus");

  function showStatus(message, type) {

    if (!contactStatus) return;

    contactStatus.textContent = message;

    contactStatus.style.color =
      type === "success" ? "#247a45" : "#c0392b";

  }

  if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

      event.preventDefault();

      const name =
        document.getElementById("contactName");

      const email =
        document.getElementById("contactEmail");

      const message =
        document.getElementById("contactMessage");

      if (!name || !email || !message) {

        showStatus(
          "Form fields could not be found. Please check the HTML.",
          "error"
        );

        return;
      }

      const nameValue = name.value.trim();
      const emailValue = email.value.trim();
      const messageValue = message.value.trim();

      // Check empty fields

      if (!nameValue || !emailValue || !messageValue) {

        showStatus(
          "Please complete all fields.",
          "error"
        );

        return;
      }

      // Check email format

      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(emailValue)) {

        showStatus(
          "Please enter a valid email address.",
          "error"
        );

        return;
      }

      // Frontend validation only.
      // No email or Firebase backend is connected.

      showStatus(
        "Your information is valid. Contact form backend is not connected yet.",
        "success"
      );

    });

  }


  // 03. AUTOMATIC CURRENT YEAR

  const yearElement =
    document.getElementById("currentYear");

  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }


  // 04. SMOOTH SCROLL

  const prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function scrollToElement(element) {

    if (!element) return;

    element.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start"
    });

  }

  // Handle internal navigation links

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId =
        link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target =
        document.getElementById(targetId.slice(1));

      if (target) {

        event.preventDefault();

        scrollToElement(target);

      }

    });

  });


  // 05. DATA-SCROLL BUTTONS

  document.querySelectorAll("[data-scroll]").forEach(function (button) {

    button.addEventListener("click", function () {

      const targetId =
        button.getAttribute("data-scroll");

      if (!targetId) return;

      const cleanId =
        targetId.startsWith("#")
          ? targetId.slice(1)
          : targetId;

      const target =
        document.getElementById(cleanId);

      if (target) {

        scrollToElement(target);

      }

    });

  });


});
