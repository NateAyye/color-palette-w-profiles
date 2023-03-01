class Login {
  regExPatterns = {
    password:
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$",
  };
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
    this.validateOnSubmit();
  }

  validateOnSubmit() {
    const self = this;

    this.form.addEventListener("submit", (e) => {
      // Prevent Form From Submitting
      e.preventDefault();

      let error = 0;

      self.fields.forEach((field) => {
        const input = document.querySelector(`#${field}`);

        if (self.validateFields(input) === false) {
          error++;
        }
      });

      if (error === 0) {
        //do log-in api call here
        localStorage.setItem("auth", '1');
        this.form.submit();
      }
    });
  }

  validateFields(field) {
    if (field.value.trim() === "") {
      this.setStatus(
        field,
        `${field.previousElementSibling.innerText} cannot be blank`,
        "error"
      );
      return false;
    } else {
      if (field.id === "password") {
        if (field.value.length < 8) {
          this.setStatus(
            field,
            `${field.previousElementSibling.innerText} must be at least 8 characters`,
            "error"
          );
          return false;
        } else {
          this.setStatus(field, null, "success");
        }
      } else if (field.id === "confirm-password") {
        const password = document.getElementById("password");
        if (password.value !== field.value) {
          this.setStatus(
            field,
            `${field.previousElementSibling.innerHTML} must match the password`,
            "error"
          );
          return false;
        } else {
          this.setStatus(field, null, "success");
          return true;
        }
      }
    }
  }

  setStatus(field, message, status) {
    let errorMessage = field.parentElement.querySelector(".error-message");

    if (status === "success") {
      if (errorMessage) {
        errorMessage.innerText = "";
      }
      errorMessage.classList.remove("input-error");
    }

    if (status === "error") {
      errorMessage.innerText = message;
      errorMessage.classList.add("input-error");
    }
  }
}


const form = document.querySelector(".login-form");
if (localStorage.getItem('auth') === '1') {
  const pathArray = location.pathname.split('\/')
  const currentPath = pathArray.pop().replace('.html', '')
  window.location.replace(pathArray.join('/') + '/dashboard.html?')
}
if (form) {
  const fields = ["username", "password", "confirm-password"];
  const validator = new Login(form, fields);
}
