import React from "react"
import AdSense from "react-adsense";

import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
      <Link to="/page-2/">Go to page 2</Link>
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
