module.exports = {
  // bump deps, ignore whitespace
  preserveWhitespace: false,
  postcss: [
    // postcss-cssnext 已经包含了 autoprefixer
    // require('autoprefixer')({
    //   browsers: ['last 3 versions']
    // }),
    // 使用 postcss
    require('postcss-nesting')({ /* options */ }),
    require('postcss-salad'),
  ]
}
