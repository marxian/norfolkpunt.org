/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const _ = require('lodash')

let images = []

exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === 'ImageSharp') {
    images.push(node)
  }

  if (node.internal.type === 'BoatsJson') {
    // Create a slug for page generation and link management
    const slug = `${node.name.toLowerCase()}-${node.sailNumber}`
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })

    // Look for an appropriate image and connect it
    const rex = new RegExp(slug)
    const img = _.find(images, i => rex.test(i.id))
    if (img) {
      node.mugshot___NODE = img.id
    }
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allBoatsJson {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allBoatsJson.edges.forEach(({ node }) => {
        createPage({
          path: `/boats/${node.fields.slug}`,
          component: path.resolve('./src/templates/boat.js'),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
            slugre: `/${node.fields.slug}/`,
          },
        })
      })
      resolve()
    })
  })
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /react-image-lightbox/,
      loader: 'null-loader',
    })
  }
}
