import React from 'react';
import Helmet from 'react-helmet';
import AdSense from 'react-adsense';
import PostTemplateDetails from '../components/PostTemplateDetails';

class PostTemplate extends React.Component {
  render() {
    const siteMetadata = this.props.data.site.siteMetadata;
    const { title, subtitle } = siteMetadata;
    const post = this.props.data.markdownRemark;
    const { title: postTitle, description: postDescription } = post.frontmatter;
    const description = postDescription !== null ? postDescription : subtitle;

    return (
      <div>
        <Helmet>
          <title>{`${postTitle} - ${title}`}</title>
          <meta name="description" content={description} />
        </Helmet>
        <PostTemplateDetails siteMetadata={siteMetadata} post={post} />
        <AdSense.Google
          client="ca-pub-6583782974868046"
          slot="3185903488"
          style={{ display: "block" }}
          format="auto"
          responsive="true"
        />
      </div>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        author {
          name
          twitter
        }
        disqusShortname
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        tagSlugs
      }
      frontmatter {
        title
        tags
        date
        description
      }
    }
  }
`;
