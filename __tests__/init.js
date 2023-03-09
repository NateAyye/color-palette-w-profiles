
class App {
  static init() {
    this.auth = new Auth();
    const nav = new Nav();
    const main = new Main();
    const aside = new Aside();
    // const footer = new Footer();

    this.eventHandlerInit();
  }

  static eventHandlerInit() {
    //Set Styles
    if (!window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.add('dark-theme');
    }

    // Log Out Event listener
    document.querySelector('.logout')?.addEventListener('click', ev => {
      this.auth.logOut();
    })
  }

}

App.init()