import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (

        <Layout>
            <Head title="About" />
            <h1>About me.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p>Link to contact page: <Link to="/contact">Link</Link></p>

        </Layout>
    )

}

export default AboutPage