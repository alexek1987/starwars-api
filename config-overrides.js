const path = require('path')
const {
  override,
  addPostcssPlugins,
  addWebpackAlias,
} = require('customize-cra')

module.exports = override(
  addPostcssPlugins([require('tailwindcss')]),
  addWebpackAlias({
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@features': path.resolve(__dirname, 'src/features'),
    '@lib': path.resolve(__dirname, 'src/lib'),
    '@client': path.resolve(__dirname, 'src/client'),
    '@config': path.resolve(__dirname, 'src/config'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@interfaces': path.resolve(__dirname, 'src/interfaces'),
    '@model': path.resolve(__dirname, 'src/model'),
    '@constant': path.resolve(__dirname, 'src/constant'),
  })
)
