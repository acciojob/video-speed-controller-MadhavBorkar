const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const video = document.querySelector('.viewer');
const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');

function handleSpeedChange(e) {
  const y = e.pageY - speed.offsetTop;
  const percent = y / speed.offsetHeight;
  const min = 0.5;
  const max = 2;
  const height = Math.round(percent * 100) + '%';
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + '×';
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleSpeedChange);
speed.addEventListener('mousedown', (e) => {
  handleSpeedChange(e);
  speed.addEventListener('mousemove', handleSpeedChange);
});

document.addEventListener('mouseup', () => {
  speed.removeEventListener('mousemove', handleSpeedChange);
});