const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  // remotes: {
  //   // "mfe1": "http://localhost:4200/remoteEntry.js",
  //   mfe1: "http://localhost:3000/remoteEntry.js", // reference separately compiled and deployed mfe1 project.
  // },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
