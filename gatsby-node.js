const path = require('path')

module.exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blog.js');

    return graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
  `, { limit: 1000 }).then(result => {
        if (result.errors) {
            throw result.errors
        }

        // Create blog post pages.
        result.data.allContentfulBlogPost.edges.forEach(edge => {
            createPage({
                component: blogTemplate,
                path: `/blog/${edge.node.slug}`,
                context: {
                    slug: edge.node.slug
                }
            })
        })
    })


}