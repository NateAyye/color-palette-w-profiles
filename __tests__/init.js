
class App {
  static init() {
    this.auth = new Auth();
    const nav = new Nav();
    this.main = new Main();
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

    this.main.main.querySelector('.get-users').addEventListener('click', async (e) => {
      const results = await fetch('http://localhost:3500/users')
      results.json().then(data => {
        console.log(data)
      })
    })

    // Log Out Event listener
    document.querySelector('.logout')?.addEventListener('click', ev => {
      this.auth.logOut();
    })
  }

}

App.init()