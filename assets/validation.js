(function () {
  var errorClasses = ["border-[#A63D3D]", "focus:border-[#A63D3D]", "focus:ring-[#A63D3D]/20"];

  function setFieldError(inputId, errorId, message) {
    var input = document.getElementById(inputId);
    var error = document.getElementById(errorId);

    if (!input || !error) {
      return;
    }

    if (message) {
      error.textContent = message;
      error.classList.remove("hidden");
      input.setAttribute("aria-invalid", "true");
      input.classList.add(errorClasses[0], errorClasses[1], errorClasses[2]);
      return;
    }

    error.textContent = "";
    error.classList.add("hidden");
    input.removeAttribute("aria-invalid");
    input.classList.remove(errorClasses[0], errorClasses[1], errorClasses[2]);
  }

  function digitsOnly(value) {
    return value.replace(/\D/g, "");
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validateExpiry(value) {
    var trimmed = value.trim();

    if (!/^(0[1-9]|1[0-2])\/(\d{2})$/.test(trimmed)) {
      return false;
    }

    var parts = trimmed.split("/");
    var month = Number(parts[0]);
    var year = Number(parts[1]);
    var now = new Date();
    var currentYear = now.getFullYear() % 100;
    var currentMonth = now.getMonth() + 1;

    if (year < currentYear) {
      return false;
    }

    if (year === currentYear && month < currentMonth) {
      return false;
    }

    return true;
  }

  function showPaymentStatus(message, isError) {
    var status = document.getElementById("payment-form-status");

    if (!status) {
      return;
    }

    if (!message) {
      status.textContent = "";
      status.classList.add("hidden");
      status.classList.remove("text-[#A63D3D]", "text-[#11243A]");
      return;
    }

    status.textContent = message;
    status.classList.remove("hidden");
    status.classList.remove("text-[#A63D3D]", "text-[#11243A]");
    status.classList.add(isError ? "text-[#A63D3D]" : "text-[#11243A]");
  }

  function validatePaymentForm(fields) {
    var values = {
      fullName: fields.fullName ? fields.fullName.value.trim() : "",
      email: fields.email ? fields.email.value.trim() : "",
      phone: fields.phone ? fields.phone.value.trim() : "",
      addressLine1: fields.addressLine1 ? fields.addressLine1.value.trim() : "",
      city: fields.city ? fields.city.value.trim() : "",
      postalCode: fields.postalCode ? fields.postalCode.value.trim() : "",
      country: fields.country ? fields.country.value.trim() : "",
      cardName: fields.cardName ? fields.cardName.value.trim() : "",
      cardNumber: fields.cardNumber ? fields.cardNumber.value.trim() : "",
      cardExpiry: fields.cardExpiry ? fields.cardExpiry.value.trim() : "",
      cardCvv: fields.cardCvv ? fields.cardCvv.value.trim() : ""
    };

    var errors = {
      fullName: "",
      email: "",
      phone: "",
      addressLine1: "",
      city: "",
      postalCode: "",
      country: "",
      cardName: "",
      cardNumber: "",
      cardExpiry: "",
      cardCvv: ""
    };

    if (values.fullName.length < 2) {
      errors.fullName = "Please enter your full name.";
    }

    if (!values.email) {
      errors.email = "Please enter your email address.";
    } else if (!validateEmail(values.email)) {
      errors.email = "Please enter a valid email address.";
    }

    var phoneDigits = digitsOnly(values.phone);
    if (!values.phone) {
      errors.phone = "Please enter your phone number.";
    } else if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      errors.phone = "Please enter a valid phone number.";
    }

    if (values.addressLine1.length < 5) {
      errors.addressLine1 = "Please enter your street address.";
    }

    if (values.city.length < 2) {
      errors.city = "Please enter your city.";
    }

    if (values.postalCode.length < 3) {
      errors.postalCode = "Please enter a valid postal code.";
    }

    if (!values.country) {
      errors.country = "Please select your country.";
    }

    if (values.cardName.length < 2) {
      errors.cardName = "Please enter the name on your card.";
    }

    var cardNumberDigits = digitsOnly(values.cardNumber);
    if (!values.cardNumber) {
      errors.cardNumber = "Please enter your card number.";
    } else if (cardNumberDigits.length < 13 || cardNumberDigits.length > 19) {
      errors.cardNumber = "Card number must be between 13 and 19 digits.";
    }

    if (!values.cardExpiry) {
      errors.cardExpiry = "Please enter your card expiry date.";
    } else if (!validateExpiry(values.cardExpiry)) {
      errors.cardExpiry = "Use a valid future expiry in MM/YY format.";
    }

    var cardCvvDigits = digitsOnly(values.cardCvv);
    if (!values.cardCvv) {
      errors.cardCvv = "Please enter your CVV.";
    } else if (cardCvvDigits.length < 3 || cardCvvDigits.length > 4) {
      errors.cardCvv = "CVV must be 3 or 4 digits.";
    }

    setFieldError("full-name", "full-name-error", errors.fullName);
    setFieldError("email", "email-error", errors.email);
    setFieldError("phone", "phone-error", errors.phone);
    setFieldError("address-line1", "address-line1-error", errors.addressLine1);
    setFieldError("city", "city-error", errors.city);
    setFieldError("postal-code", "postal-code-error", errors.postalCode);
    setFieldError("country", "country-error", errors.country);
    setFieldError("card-name", "card-name-error", errors.cardName);
    setFieldError("card-number", "card-number-error", errors.cardNumber);
    setFieldError("card-expiry", "card-expiry-error", errors.cardExpiry);
    setFieldError("card-cvv", "card-cvv-error", errors.cardCvv);

    return !Object.keys(errors).some(function (key) {
      return Boolean(errors[key]);
    });
  }

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
    var searchForm = document.getElementById("header-search-form");
    var searchInput = document.getElementById("header-search-input");

    if (searchForm && searchInput) {
      searchForm.addEventListener("submit", function (event) {
        var errorMessage = validateSearch(searchInput.value);

        if (errorMessage) {
          event.preventDefault();
          setSearchError(errorMessage);
          return;
        }

        setSearchError("");
      });

      searchInput.addEventListener("input", function () {
        if (!searchInput.value.trim()) {
          return;
        }

        setSearchError(validateSearch(searchInput.value));
      });
    }

    var paymentForm = document.getElementById("payment-form");

    if (!paymentForm) {
      return;
    }

    var fields = {
      fullName: document.getElementById("full-name"),
      email: document.getElementById("email"),
      phone: document.getElementById("phone"),
      addressLine1: document.getElementById("address-line1"),
      city: document.getElementById("city"),
      postalCode: document.getElementById("postal-code"),
      country: document.getElementById("country"),
      cardName: document.getElementById("card-name"),
      cardNumber: document.getElementById("card-number"),
      cardExpiry: document.getElementById("card-expiry"),
      cardCvv: document.getElementById("card-cvv")
    };

    paymentForm.addEventListener("submit", function (event) {
      var isValid = validatePaymentForm(fields);

      if (!isValid) {
        event.preventDefault();
        showPaymentStatus("Please fix the highlighted fields before submitting.", true);
        return;
      }

      event.preventDefault();
      showPaymentStatus("Payment details look good. You can connect this form to checkout next.", false);
    });

    Object.keys(fields).forEach(function (key) {
      var field = fields[key];

      if (!field) {
        return;
      }

      field.addEventListener("input", function () {
        validatePaymentForm(fields);
        showPaymentStatus("", false);
      });

      field.addEventListener("blur", function () {
        validatePaymentForm(fields);
      });
    });
  });
})();
