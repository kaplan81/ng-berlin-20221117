// @ts-check

const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

const mfe1WebpackConfig = {
  ...withModuleFederationPlugin({
    name: 'mfe1',
    exposes: {
      './AppComponent': './projects/mfe1/src/app/app.component.ts',
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
// console.log('mfe1WebpackConfig:::', mfe1WebpackConfig);
// console.log('ModuleFederationPlugin:::', mfe1WebpackConfig.plugins[0]);

module.exports = mfe1WebpackConfig;
