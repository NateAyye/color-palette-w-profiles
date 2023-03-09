class Footer {
  constructor () {
    this.render()
  }

  render() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
      <div>
        <p>footer</p>
      </div>
    `
    document.body.append(footer)
  }
}