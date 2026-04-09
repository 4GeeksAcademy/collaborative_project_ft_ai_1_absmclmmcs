(function () {
  function setSearchError(message) {
    var input = document.getElementById("header-search-input");
    var error = document.getElementById("header-search-error");

    if (!input || !error) {
      return;
    }

    if (message) {
      error.textContent = message;
      error.classList.remove("hidden");
      input.setAttribute("aria-invalid", "true");
      input.classList.add("border-[#A63D3D]", "focus:border-[#A63D3D]", "focus:ring-[#A63D3D]/20");
      return;
    }

    error.textContent = "";
    error.classList.add("hidden");
    input.removeAttribute("aria-invalid");
    input.classList.remove("border-[#A63D3D]", "focus:border-[#A63D3D]", "focus:ring-[#A63D3D]/20");
  }

  function validateSearch(value) {
    var query = value.trim();

    if (!query) {
      return "Please enter a product name or keyword.";
    }

    if (query.length < 2) {
      return "Use at least 2 characters to search.";
    }

    return "";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("header-search-form");
    var input = document.getElementById("header-search-input");

    if (!form || !input) {
      return;
    }

    form.addEventListener("submit", function (event) {
      var errorMessage = validateSearch(input.value);

      if (errorMessage) {
        event.preventDefault();
        setSearchError(errorMessage);
        return;
      }

      setSearchError("");
    });

    input.addEventListener("input", function () {
      if (!input.value.trim()) {
        return;
      }

      setSearchError(validateSearch(input.value));
    });
  });
})();
