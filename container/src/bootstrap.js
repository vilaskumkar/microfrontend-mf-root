console.log('bootstrap');

import('mfeReact/App').then((mount) => {
  if (mount.default) mount = mount.default;
  mount('#react-root');
});

import('mfeAngular/App').then((mount) => {
  if (mount.default) mount = mount.default;
  mount('#angular-root');
});

import('mfeVue/App').then((mount) => {
  if (mount.default) mount = mount.default;
  mount('#vue-root');
});
