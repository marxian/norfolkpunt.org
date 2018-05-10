/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const _ = require('lodash')
const fs = require('fs')

exports.onCreateNode = ({ node, boundActionCreators, getNode, getNodes }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === 'ImageSharp') {
    // Look for an appropriate notes file (<file>.meta.json) and connect it
    const nodePath = getNode(node.parent).absolutePath
    let rawMeta
    try {
      rawMeta = fs.readFileSync(`${nodePath}.meta.json`)
    } catch (e) {
      if (e.code !== 'ENOENT') {
        throw e
      }
    }

    if (rawMeta) {
      let data = JSON.parse(rawMeta)
      for (let o in data) {
        createNodeField({
          node,
          name: o,
          value: data[o],
        })
      }
    }
  }

  if (node.internal.type === 'BoatsJson') {
    // Create a slug for page generation and link management
    const slug = `${node.name.toLowerCase()}-${node.sailNumber}`
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })

    // Scan nodes for an ImageSharp with a mugshot field set to our slug
    const nodes = getNodes()
    const mugshot = nodes.find(node => {
      if (node.internal.type === 'ImageSharp') {
        if (node.fields && node.fields.mugshot) {
          return node.fields.mugshot === slug
        }
      }
      return false
    })
    if (mugshot) {
      node.mugshot___NODE = mugshot.id
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
