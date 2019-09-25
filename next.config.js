const withPlugins = require('next-compose-plugins')

const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts')
const optimizedImages = require('next-optimized-images')
const mdxFm = require('next-mdx-frontmatter')({
  extension: /\.mdx?$/,
})

module.exports = withPlugins([
  [withCSS],
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
  [
    mdxFm,
    {
      pageExtensions: ['js', 'mdx'],
    },
  ],
])
