import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>
                Hi there!, I am the proud creator of this site, 
                which I built with Gatsby. I like to eat cookies more and watch 
                netflix and also I am interested in Investing.
            </p>
            <StaticImage 
                alt="cute white puppy." 
                src="../images/puppy.jpg"
            />
        </Layout>
    )
}

export default AboutPage
