const less = require('@remax/plugin-less');
const { RemaxIconfontPlugin } = require("remax-iconfont-plugin");

module.exports = {
  one: true,
  output: 'dist/' + process.env.REMAX_PLATFORM,
  plugins: [
    less({}),
    RemaxIconfontPlugin({
      cssURL: "http://at.alicdn.com/t/font_1665529_pd95y6nwlrd.css"
    })
  ],
};
