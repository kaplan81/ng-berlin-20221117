// @ts-check

const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

const shellWebpackConfig = {
  ...withModuleFederationPlugin({
    remotes: {
      mfe1: 'http://localhost:3000/remoteEntry.js',
    },
    shared: {
      ...shareAll({
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto',
      }),
    },
  }),
  /**
   * Fix reference:
   * https://github.com/angular-architects/module-federation-plugin/issues/96#issuecomment-981896034
   */
  output: {
    uniqueName: 'shell',
    publicPath: 'auto',
    scriptType: 'text/javascript',
  },
};

// Uncomment for debugging.
// console.log('shellWebpackConfig:::', shellWebpackConfig);
// console.log('ModuleFederationPlugin:::', shellWebpackConfig.plugins[0]);

module.exports = shellWebpackConfig;
