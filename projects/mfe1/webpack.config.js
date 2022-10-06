const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  // library: {type: "module"},
  name: 'mfe1',
  // filename: "remoteEntry.js",
  exposes: {
    // './Component': './projects/mfe1/src/app/app.component.ts',
    './flights.module': './projects/mfe1/src/app/flights/flights.module.ts', // expose FlightsModule under the Name ./flights.module
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
