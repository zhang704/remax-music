const less = require('@remax/plugin-less');
const { RemaxIconfontPlugin } = require("remax-iconfont-plugin");
const path = require('path');
const cwd = process.cwd();

module.exports = {
  one: true,
  output: 'dist/' + process.env.REMAX_PLATFORM,
  plugins: [
    less({}),
    RemaxIconfontPlugin({
      cssURL: "http://at.alicdn.com/t/font_1665529_qpoc6elsjun.css"
    })
  ],
  configWebpack({ config }) {
    config.resolve.alias
      .merge({
        '@components': path.resolve(cwd, 'src/components'),
        '@images': path.resolve(cwd, 'src/images'),
        '@utils': path.resolve(cwd, 'src/utils'),
        '@pages': path.resolve(cwd, 'src/pages'),
        "@": path.resolve(cwd, 'src')
      })
      .end();
  }
};
