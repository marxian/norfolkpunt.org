/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const _ = require('lodash')
const fs = require('fs')
const slugify = require('slugify')

function makeSlug(string) {
  return slugify(string, { lower: true })
}

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
    const slug = makeSlug(`${node.name} ${node.sailNumber}`)
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

  if (node.internal.type === `MarkdownRemark`) {
    const slug = makeSlug(node.frontmatter.title)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        boats: allBoatsJson {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        events: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/events/" } }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        meetings: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/meetings/" } }
        ) {
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
      result.data.boats.edges.forEach(({ node }) => {
        createPage({
          path: `/boats/${node.fields.slug}`,
          component: path.resolve('./src/templates/boat.js'),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      result.data.events.edges.forEach(({ node }) => {
        createPage({
          path: `/events/${node.fields.slug}`,
          component: path.resolve('./src/templates/event.js'),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      result.data.events.edges.forEach(({ node }) => {
        createPage({
          path: `/meetings/${node.fields.slug}`,
          component: path.resolve('./src/templates/meeting.js'),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
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
