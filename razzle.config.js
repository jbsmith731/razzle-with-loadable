'use strict';
const LoadablePlugin = require('@loadable/webpack-plugin');
const path = require('path');

module.exports = {
  modify(config, { target, dev }, webpack) {
    const appConfig = config; // stay immutable here

    if (target === 'web') {
      const filename = path.resolve(__dirname, 'build/loadable-stats.json')

      appConfig.plugins = [
        ...appConfig.plugins,
        new LoadablePlugin({ writeToDisk: true, filename }),
      ]
    }
            
    return appConfig;
  },
};