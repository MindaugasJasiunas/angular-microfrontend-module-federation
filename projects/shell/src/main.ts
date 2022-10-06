import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
  loadRemoteEntry({
    type: 'module',
    remoteEntry: 'http://localhost:3000/remoteEntry.js',
  }),
])
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));

//import('./bootstrap').catch((err) => console.error(err));
