import React from "react"
import AdSense from "react-adsense";

// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import Post from '../components/Post';

import { useStaticQuery, graphql } from "gatsby";


const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexPageQuery {
      allMarkdownRemark(
          limit: 1000,
          filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } },
          sort: { order: DESC, fields: [frontmatter___date] }
        ){
        edges {
          node {
            fields {
              slug
              categorySlug
            }
            frontmatter {
              title
              date
              category
              description
            }
          }
        }
      }
    }
  `)
  const items = [];
  // const { title, subtitle } = this.props.data.site.siteMetadata;
  const posts = data.allMarkdownRemark.edges;
  posts.forEach((post) => {
    items.push(<Post data={post} key={post.node.fields.slug} />);
  });

  return (
    <Layout>
      <SEO title="Home" />
      <div className="content">
        <div className="content__inner">
          {items}
        </div>
      </div>
      <AdSense.Google
        client="ca-pub-6583782974868046"
        slot="3185903488"
        style={{ display: "block" }}
        format="auto"
        responsive="true"
      />
    </Layout>
  );
}

export default IndexPage
