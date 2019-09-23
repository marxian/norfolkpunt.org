const withPlugins = require('next-compose-plugins')

const optimizedImages = require('next-optimized-images')
const mdxFm = require('next-mdx-frontmatter')({
  extension: /\.mdx?$/,
})

module.exports = withPlugins([
  [
    optimizedImages,
    {
      optimizeImagesInDev: true,
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
