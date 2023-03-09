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

  // Example POST method implementation:
  postData = async (url = "", data = {}) => {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }



validateOnSubmit() {
    const self = this;

    this.form.addEventListener("submit", async (e) => {
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
        this.postData("http://localhost:3000/users", { username: this.username, password: this.password }).then((data) => {
          console.log(data); // JSON data parsed by `data.json()` call
        });
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
      if (field.id === 'username') this.username = field.value
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
          this.password = field.value
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
