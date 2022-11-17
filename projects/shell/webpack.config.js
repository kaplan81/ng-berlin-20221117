// @ts-check

const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

const shellWebpackConfig = {
  ...withModuleFederationPlugin({
    remotes: {
      mfe1: 'http://localhost:4201/remoteEntry.js',
      mfe2: 'http://localhost:3000/remoteEntry.js',
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
   * Fix for error:
   * Uncaught SyntaxError: Cannot use 'import.meta' outside a module (at styles.js:7970:29)
   * https://github.com/angular-architects/module-federation-plugin/issues/96#issuecomment-981896034
      output: {
        uniqueName: 'shell',
        publicPath: 'auto',
        scriptType: 'text/javascript',
      },
    * And this would also apply to the other webpack configs for other modules such as the remotes.
    * However if we do that the remotes will be loaded under the shell port e.g. 4200.
    * So we need to live with that error, since it only happens in development mode.
    * It is a decision of the Angular CLI team:
    * https://github.com/angular/angular-cli/blob/main/packages/angular_devkit/build_angular/src/builders/dev-server/index.ts#L221  
    */
};

// Uncomment for debugging.
// console.log('shellWebpackConfig:::', shellWebpackConfig);
// console.log('ModuleFederationPlugin:::', shellWebpackConfig.plugins[0]);

module.exports = shellWebpackConfig;
