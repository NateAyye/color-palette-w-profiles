class Main {
  constructor () {
    this.render()
    this.resize()
  }

  dashboard() {
    return `
      <div class="dashboard-container">
        <h1>Welcome to the Dashboard</h1>
        <p>W.I.P</p>
        <p class="text-center"><a href="#" class="logout">Log Out</a></p>
        <button class="get-users">Get Users</button>
      </div>
    `
  }

  resize() {
    const top = getComputedStyle(document.querySelector('nav')).height;
    // const right = getComputedStyle(document.querySelector('aside')).width;
    console.log(top)
    this.main.style.top = top;
    // this.main.style.right = right;
    this.main.style.left = '0';
  }

  render() {
    this.main = document.querySelector('main')
    const pathArray = window.location.pathname.split('/')
    const currentPath = pathArray[pathArray.length - 1].replace('.html', '');

    if (!this.main) this.main = document.createElement('main')

    let innerHTML
    if (currentPath === 'dashboard') {
      innerHTML = this.dashboard()

    }

    this.main.innerHTML += innerHTML ?? ``;


    document.body.append(this.main)
  }
}