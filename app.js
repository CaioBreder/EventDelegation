const nameForm = document.querySelector('#nameForm');
const nameInput = document.querySelector('#nameInput');
const nameButtons = document.querySelector('#nameButtons');

const nameCounts = {};

nameForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  if (name) {
    if (nameCounts[name]) {
      nameCounts[name] += 1;
    } else {
      nameCounts[name] = 1;
    }

    const button = document.createElement('button');
    button.textContent = `${name} (${nameCounts[name]})`;
    nameButtons.appendChild(button);

    button.addEventListener('click', () => {
      console.log(name);
    });

    nameInput.value = '';
  }
});

nameButtons.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const name = event.target.textContent.split(' ')[0];
    console.log(name);
  }
});