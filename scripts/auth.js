class Auth {

  constructor() {
    document.querySelector('body').style.display = 'none';
    const auth = localStorage.getItem("auth");
    this.validateAuth(auth);
  }

  validateAuth(auth) {
    this.pathArray = location.pathname.split('\/')
    const currentPath = this.pathArray.pop()
    if (auth !== "1") {
      if(currentPath) {
        window.location.replace(this.pathArray.join('/'));
      }
      document.querySelector('body').style.display = 'block';
    } else {
      document.querySelector('body').style.display = 'block';
    }
  }

  logOut() {
    localStorage.removeItem("auth");
    window.location.replace(this.pathArray.join('/') + '/');
  }
}
