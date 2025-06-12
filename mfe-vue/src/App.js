import { createApp, reactive } from 'vue';

export default function mount(selector = 'body') {
  const state = reactive({ message: 'Vue waiting...' });

  const App = {
    setup() {
      const send = () => {
        const event = new CustomEvent('user:updated', {
          detail: { id: 2, name: 'Vue User' }
        });
        window.dispatchEvent(event);
      };
      window.addEventListener('user:updated', (e) => {
        const { id, name } = e.detail || {};
        state.message = `Vue received: ${id} ${name}`;
      });
      return { state, send };
    },
    template: `<div><div>{{ state.message }}</div><button @click="send">Update from Vue</button></div>`
  };

  const el = document.createElement('div');
  document.querySelector(selector).appendChild(el);
  createApp(App).mount(el);
}
