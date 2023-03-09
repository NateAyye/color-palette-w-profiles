class Aside {
  constructor () {
    this.render()
    this.resize()
    this.eventInit()
  }

  eventInit() {
    document.querySelector('.show-setting-toggle').addEventListener('click', evt => {
      this.aside.classList.toggle('active-settings')
    })
  }
  resize() {

    document.styleSheets[0].insertRule(`aside {
      transform: translateX(calc(${getComputedStyle(this.aside).width} + .25rem));
    }`, 0)

    this.aside.style.top = getComputedStyle(document.querySelector('nav')).height;
  }

  render() {
    this.aside = document.createElement('aside')

    this.aside.innerHTML = `
      <div>
        <div draggable="false" class="resize-handle"></div>
        <h3>Settings</h3>
      </div>
    `;

    document.querySelector('main').append(this.aside);
  }
}
