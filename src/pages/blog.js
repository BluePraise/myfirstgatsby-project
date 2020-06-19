import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

import blogStyles from './blog.module.scss'

const BlogPage = () => {

    const posts = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(
                sort: {
                    fields: publishedDate,
                    order: DESC
                }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "DD MMMM YYYY")
                    }
                }
            }
        }
    `)


    return (

        <Layout>
            <Head title = "Blog" />
            <h1>My blog.</h1>
            <ol className={blogStyles.posts}>
                {
                    posts.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>
                                <Link to={edge.node.slug}>
                                    <h2>{edge.node.title}</h2>

                                    <p>{edge.node.publishedDate}</p>
                                </Link>
                            </li>
                        )
                    })
                }
            </ol>
        </Layout>
    )




}

export default BlogPage