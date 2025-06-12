export default function mount(selector = 'body') {
  const container = document.createElement('div');
  container.textContent = 'Angular waiting...';
  document.querySelector(selector).appendChild(container);
  window.addEventListener('user:updated', (e) => {
    const { id, name } = e.detail || {};
    container.textContent = `Angular received: ${id} ${name}`;
  });
}
