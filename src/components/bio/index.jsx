import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

import './index.scss'

export const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social, introduction } = data.site.siteMetadata

      return (
        <div className="bio">
          <div className="author">
            <div className="author-description">
              <Image
                className="author-image"
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  borderRadius: `100%`,
                }}
              />
              <div className="author-name">
                <span className="author-name-prefix">Written by</span>
                <a
                  href={`https://www.nexclipper.io/`}
                  className="author-name-content"
                  target="_blank"
                >
                  <span>@{author}</span>
                </a>
                <div className="author-introduction">{introduction}</div>
                <p className="author-socials">
                  {social.github && (
                    <a
                      href={`https://github.com/${social.github}`}
                      target="_blank"
                    >
                      GitHub
                    </a>
                  )}
                  {social.medium && (
                    <a
                      href={`https://medium.com/${social.medium}`}
                      target="_blank"
                    >
                      Medium
                    </a>
                  )}
                  {social.twitter && (
                    <a
                      href={`https://twitter.com/${social.twitter}`}
                      target="_blank"
                    >
                      Twitter
                    </a>
                  )}
                  {social.facebook && (
                    <a
                      href={`https://www.facebook.com/${social.facebook}`}
                      target="_blank"
                    >
                      Facebook
                    </a>
                  )}
                  {social.linkedin && (
                    <a
                      href={`https://www.linkedin.com/${social.linkedin}`}
                      target="_blank"
                    >
                      Linkein
                    </a>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  />
)

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile.png/" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        introduction
        social {
          twitter
          github
          medium
          facebook
          linkedin
        }
      }
    }
  }
`

export default Bio
