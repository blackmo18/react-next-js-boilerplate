const path = require('path')
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
const webpack = require('webpack')

dotenvLoad();

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: config => {
    config.module.rules.forEach(rule => {
      config.plugins.push(
        new webpack.EnvironmentPlugin(process.env)
      )
    })
    return config
  },

}
