class App {
  constructor () {
    const heading = document.createElement('h1');
    heading.textContent = 'It just works! :)';
    document.body.appendChild(heading);
  }
}

// eslint-disable-next-line
new App();
