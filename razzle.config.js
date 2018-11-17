'use strict';
const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {
  modify(config, { target, dev }, webpack) {
    if (target === 'web') {
      return {
        ...config,
        plugins: [
          ...config.plugins,
          new LoadablePlugin({
            filename: 'build/loadable-stats.json'
          }),
        ],
      };
    }

    return config;
  },
};