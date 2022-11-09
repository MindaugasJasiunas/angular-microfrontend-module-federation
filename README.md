# Starterkit for Trying out @angular-architects/module-federation

# Steps
- Create base & any other application
- Add module federation to both applications - one as `host`, other as `remote`
Make sure to provide your own project names & applications ports
```
ng add @angular-architects/module-federation --project shell --type host --port 4201
ng add @angular-architects/module-federation --project mfe1 --type remote --port 4202
```
- In remote application create new module that will be exported, routes & register routes in that module
```
imports: [..., RouterModule.forChild(BOOKS_ROUTES) ],
```
- Expose module in remote app `webpack.config.js` file
```
  exposes: {
    "./books.module": "./projects/books-app/src/app/books/books.module.ts",
  },
```
- Check if remote app `remoteEntry.js` loads
```
http://localhost:4202/remoteEntry.js
```
- Add remote app to base app as route
```
{
    path: `books`,
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './books.module',
      })
        .then((m) => m.BooksModule)
        .catch((err) => console.log('ERROR:', err)),
},
```
- Now when navigating to `/books` route - remote app module with routes loads
- Try new remote app routes
```
< hostUrl >/< hostRoutePathForChildProject >/< childProjectInnerRoute >
```
- OPTIONAL: load remoteEntry.js file on base app load
  - Option 1: provide file in `index.html`
```
< head>
  < script src="http://localhost:4202/remoteEntry.js">< /script>
< /head>
```
  - Option 2: provide file in `main.js` or `boostrap.js`
```
import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
  loadRemoteEntry('http://localhost:4202/remoteEntry.js', 'booksApp'),
])
  .catch((err) => console.log('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.log(err));
```
