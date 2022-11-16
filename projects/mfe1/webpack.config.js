// @ts-check

const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

const mfe1WebpackConfig = {
  ...withModuleFederationPlugin({
    name: 'mfe1',
    exposes: {
      './Component': './projects/mfe1/src/app/app.component.ts',
    },
    shared: {
      ...shareAll({
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto',
      }),
    },
  }),
};

// Uncomment for debugging.
// console.log('mfe1WebpackConfig:::', mfe1WebpackConfig);
// console.log('ModuleFederationPlugin:::', mfe1WebpackConfig.plugins[0]);

module.exports = mfe1WebpackConfig;
