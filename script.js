const colors = ['red', 'green', 'orange', 'pink', 'blue', 'yellow'];
let screenHeight = window.screen.height;
for (let i = 0; i < 1200; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.classList.add(colors[Math.floor(Math.random() * colors.length)]);
  dot.style.top = `${Math.random() * screenHeight}px`;
  dot.style.left = `${Math.random() * window.innerWidth}px`;
  document.body.appendChild(dot);
}
