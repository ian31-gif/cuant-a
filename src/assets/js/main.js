/* =========================================================
   Cuantía — main.js
   Lógica global: menú móvil, banner de cookies, año del footer,
   y activación diferida de anuncios (deshabilitada hasta tener
   el ID de AdSense — ver README.md).
   ========================================================= */
(function () {
  "use strict";

  // ---- Menú móvil ----
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // ---- Año automático en el footer ----
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // ---- Banner de consentimiento de cookies (RGPD) ----
  var CONSENT_KEY = "cuantia_cookie_consent"; // "accepted" | "rejected"
  var banner = document.getElementById("cookie-banner");

  function getConsent() {
    try { return window.localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }
  function setConsent(value) {
    try { window.localStorage.setItem(CONSENT_KEY, value); } catch (e) { /* noop */ }
  }

  function applyConsent(value) {
    // Cuando actives AdSense, aquí es donde debes cargar el script de
    // anuncios SOLO si value === "accepted" (o gestionarlo vía tu CMP).
    document.dispatchEvent(new CustomEvent("cuantia:consent", { detail: value }));
  }

  if (banner) {
    var existing = getConsent();
    if (existing) {
      banner.hidden = true;
      applyConsent(existing);
    } else {
      banner.hidden = false;
    }
    var acceptBtn = banner.querySelector("[data-consent-accept]");
    var rejectBtn = banner.querySelector("[data-consent-reject]");
    if (acceptBtn) acceptBtn.addEventListener("click", function () {
      setConsent("accepted"); banner.hidden = true; applyConsent("accepted");
    });
    if (rejectBtn) rejectBtn.addEventListener("click", function () {
      setConsent("rejected"); banner.hidden = true; applyConsent("rejected");
    });
  }

  // ---- Utilidad de formato de moneda/número (locale es-ES) ----
  window.cuantiaFormat = {
    currency: function (value, currency) {
      currency = currency || "EUR";
      return new Intl.NumberFormat("es-ES", { style: "currency", currency: currency, maximumFractionDigits: 2 }).format(value);
    },
    number: function (value, decimals) {
      return new Intl.NumberFormat("es-ES", { minimumFractionDigits: decimals || 0, maximumFractionDigits: decimals != null ? decimals : 2 }).format(value);
    },
    percent: function (value, decimals) {
      return new Intl.NumberFormat("es-ES", { minimumFractionDigits: decimals || 2, maximumFractionDigits: decimals != null ? decimals : 2 }).format(value) + " %";
    }
  };
})();
