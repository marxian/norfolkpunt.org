const withPlugins = require('next-compose-plugins')

const withFonts = require('next-fonts')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins([
  [withFonts],
  [
    optimizedImages,
    {
      optimizeImagesInDev: false,
      responsive: {
        adapter: require('responsive-loader/sharp'),
      },
    },
  ],
])
