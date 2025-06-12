export default function mount(selector = 'body') {
  const container = document.createElement('div');
  container.textContent = 'React App';
  const button = document.createElement('button');
  button.textContent = 'Update from React';
  button.addEventListener('click', () => {
    const event = new CustomEvent('user:updated', {
      detail: { id: 1, name: 'React User' }
    });
    window.dispatchEvent(event);
  });
  container.appendChild(button);
  document.querySelector(selector).appendChild(container);
}
