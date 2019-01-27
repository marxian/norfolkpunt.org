/* eslint-env node, es6 */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const fs = require('fs')
const slugify = require('slugify')

function makeSlug(string) {
  return slugify(string, { lower: true })
}

const defaultImageFields = {
  interest: 0,
}

exports.onCreateNode = ({ node, boundActionCreators, getNode, getNodes }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === 'ImageSharp') {
    // Look for an appropriate notes file (<file>.meta.json) and connect it
    let nodePath = getNode(node.parent).absolutePath
    let rawMeta
    try {
      rawMeta = fs.readFileSync(`${nodePath}.meta.json`)
    } catch (e) {
      if (e.code !== 'ENOENT') {
        throw e
      }
    }

    let data = {
      ...defaultImageFields,
      ...(rawMeta ? JSON.parse(rawMeta) : {}),
    }
    for (let o in data) {
      createNodeField({
        node,
        name: o,
        value: data[o],
      })
    }
  }

  if (node.internal.type === `MarkdownRemark`) {
    let slug = makeSlug(node.frontmatter.title)
    if (node.frontmatter.category === 'punts') {
      slug = makeSlug(`${node.frontmatter.name} ${node.frontmatter.sailNumber}`)
      createNodeField({
        node,
        name: `slug`,
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
        pages: allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                category
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.pages.edges.forEach(({ node }) => {
        createPage({
          path: `/${node.frontmatter.category}/${node.fields.slug}`,
          component: path.resolve(
            `./src/templates/${node.frontmatter.category}.js`
          ),
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

// exports.modifyWebpackConfig = ({ config, stage }) => {
//   if (stage === 'build-html') {
//     config.loader('null', {
//       test: /react-image-lightbox/,
//       loader: 'null-loader',
//     })
//   }
// }
