'use strict';
const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {
  modify(config, { target, dev }, webpack) {
    const appConfig = config; // stay immutable here

    if (target === 'web') {
      appConfig.plugins.push(new LoadablePlugin());
    }
    
    return appConfig;
  },
};