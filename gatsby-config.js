module.exports = {
  siteMetadata: {
    url: 'https://nonoll.github.io/',
    siteUrl: 'https://nonoll.github.io/',
    subtitle: 'nonoll',
    title: 'nonoll',
    description: 'description',
    copyright: 'copyright',
    googleSiteVerification: 'LUaKiF6Iq58APnt3zmLrFFt5v6X76GUFCB7m7bS0uEA',
    disqusShortname: 'nonoll-github-io',
    menu: [
      {
        label: 'Articles',
        path: '/'
      },
      {
        label: 'Categories',
        path: '/categories/'
      },
      {
        label: 'Tags',
        path: '/tags/'
      },
      {
        label: 'About me',
        path: '/about/'
      },
      // {
      //   label: 'Contact me',
      //   path: '/contact/'
      // }
    ],
    author: {
      name: 'nonoll',
      email: 'hkroh.nonoll@gmail.com',
      telegram: '',
      twitter: '',
      github: 'nonoll',
      rss: 'rss.xml',
      vk: '',
      steemit: 'nonoll'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        head: true,
        trackingId: 'UA-65353444-2',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-steem',
      options: {
        path: `${__dirname}/src/pages/articles`,
        tag: 'nonoll',
        sortBy: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin-bottom: 1.0725rem' }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                site_url: url
                title
                description: subtitle
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => (
              allMarkdownRemark.edges.map(edge =>
                Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.site_url + edge.node.fields.slug,
                  guid: site.siteMetadata.site_url + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }]
                }))
            ),
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                        layout
                        draft
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml'
          }
        ]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
