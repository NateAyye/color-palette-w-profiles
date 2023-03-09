class Nav {
  constructor () {
    this.render()
    this.eventHandlerInit();
  }

  eventHandlerInit() {
    //Set Theme Toggle Handler
    document.querySelector('.theme-changer').addEventListener('click', () => {
      let didSwitch = false;
      document.body.classList.forEach((className) =>{
        if (className.match(/^(dark|light)-theme$/) && !didSwitch) {
          const theme = className.split('-')[0]
          document.body.classList.remove(className)
          theme === 'light' ? document.body.classList.add('dark-theme') : document.body.classList.add('light-theme');
          didSwitch = true;
        }
      })
    })
  }

  render() {
    const nav = document.createElement('nav')
      nav.innerHTML = `
        <div class="nav-container">
            <a class="brand-btn" href="index.html">
              <svg class="brand" width="35" height="35" viewBox="-2 -2 50 50" >
                <path class="cls-1" d="m.64,46h7.62c.07,0,.13-.05.14-.13l2.6-18.5c0-.1.13-.13.17-.05l5.78,18.84c.02.05.07.09.13.09h7.78c.07,0,.13-.05-.86-.13L27.97.9c1.01-.08.94-.15.86-.15h-9.22c-.07,0-.13.05-.14.12l-2.41,22.21c-.02.15-.22.18-.27.03-1.1-3.5-5.35-21.08-5.78-22.53-.02-.06-.07-.09-.13-.09h-6.27c-.07,0-.13.05-.14.13L.5,45.85c0,.08.06.15.14.15Z"/>
                <path class="cls-1" d="m28.05,2.75h12.87s.07.03.07.07l4.99,43.35s-.03.08-.07.08h-7.21s-.07-.03-.07-.06l-3.38-18.88c-.05-.28-.45-.28-.49,0l-3.13,18.87s-.04.06-.07.06h-7.49s-.08-.04-.07-.08L27.98,2.82s.03-.07.07-.07Z"/>
                <polygon points="33.99 12.75 34.56 20.3 33.41 20.3 33.99 12.75 33.99 12.75"/>
              </svg>
            </a>
          <div class="navbar-settings">
            <button class="theme-changer">
              <svg width="30" height="30" viewBox="-15 -15 30 30" >
                <path fill-opacity=".9" d=" M0,-4 C-2.2100000381469727,-4 -4,-2.2100000381469727 -4,0 C-4,2.2100000381469727 -2.2100000381469727,4 0,4 C2.2100000381469727,4 4,2.2100000381469727 4,0 C4,-2.2100000381469727 2.2100000381469727,-4 0,-4z"></path>
                <path fill-opacity=".9" d=" M0,6 C-3.309999942779541,6 -6,3.309999942779541 -6,0 C-6,-3.309999942779541 -3.309999942779541,-6 0,-6 C3.309999942779541,-6 6,-3.309999942779541 6,0 C6,3.309999942779541 3.309999942779541,6 0,6z M8,-3.309999942779541 C8,-3.309999942779541 8,-8 8,-8 C8,-8 3.309999942779541,-8 3.309999942779541,-8 C3.309999942779541,-8 0,-11.3100004196167 0,-11.3100004196167 C0,-11.3100004196167 -3.309999942779541,-8 -3.309999942779541,-8 C-3.309999942779541,-8 -8,-8 -8,-8 C-8,-8 -8,-3.309999942779541 -8,-3.309999942779541 C-8,-3.309999942779541 -11.3100004196167,0 -11.3100004196167,0 C-11.3100004196167,0 -8,3.309999942779541 -8,3.309999942779541 C-8,3.309999942779541 -8,8 -8,8 C-8,8 -3.309999942779541,8 -3.309999942779541,8 C-3.309999942779541,8 0,11.3100004196167 0,11.3100004196167 C0,11.3100004196167 3.309999942779541,8 3.309999942779541,8 C3.309999942779541,8 8,8 8,8 C8,8 8,3.309999942779541 8,3.309999942779541 C8,3.309999942779541 11.3100004196167,0 11.3100004196167,0 C11.3100004196167,0 8,-3.309999942779541 8,-3.309999942779541z"></path>
              </svg>
            </button>
              <a class="user-icon" href="login.html">
                <img alt="user image" src="public/user.png" width="25" height="25"/>
              </a>
            <button class="show-setting-toggle">
              <svg width="40" height="40" viewBox="-2 -2 50 50" >
                <rect x="3" y="7" width="40" height="6" rx="3" ry="3"/>
                <rect x="3" y="20" width="40" height="6" rx="3" ry="3"/>
                <rect x="3" y="33" width="40" height="6" rx="3" ry="3"/>
              </svg>
            </button>
          </div>
        </div>
      `;
      document.body.append(nav);
      // document.querySelector('main').style.top = getComputedStyle(nav).height;
  }
}
