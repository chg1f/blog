/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import {useStaticQuery, graphql} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
            avatar
          }
          social {
            mailto
            github
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const avatar = "https://avatars.githubusercontent.com/chg1f"
  // TODO: // const avatar = author?.avatar
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src={avatar}
        // src="https://avatars.githubusercontent.com/chg1f"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <div>
          Written by <strong>{author.name}</strong>
          <a href={`mailto:${social?.mailto || ``}`}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA+0lEQVRIie3UTUoDQRAF4I/gLiKu/cMrqOQOhrhz79IreApRcOEhFJSApxC9gjKJunbhykBc2CHtpGcMM7MQyYNmmq5673VXDcUCfwk9DDGuuQbopgwGDYhPVpYymARXqhUAtCOdGbyHwAsOK4gf4DlofKQS1nAV3aCPrTmE13Ed8e6wXUbo4Sm6yQmWEnktHJu+/BVHZcKXWA37Nk7xGcgP2Ityd3EfYiNcmPZuGWcpgzHecmc7OaHzQB6Fs0d0cpxMQZOLup8vxW+lK/yLCgMBG7jBLTZL8iobzIsfOq0GBEvxvwyG4Vt30PE9OGfQ1cxEzbBf49ELNIwvGf2IXh7cgg8AAAAASUVORK5CYII=" />
          </a>
          <a href={`https://github.com/${social?.github || ``}`}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABfUlEQVRIidXVvU8UURQF8B+LFDQbChNDQWEpJgQT/wQTPjZEolhL6V9h+Eg0UlLSQSgtLKCgo6YlCqiNhR9QYGygYtdiZpLh8mZn2Y6T3GLePefc997c3Mddx0BNfhDTWMATjOWa3zjADj7hqp/iUzhBpya+o3Ub4wEso92DeRFtrKm/EbB6C+MYq3XmrSCYxDyOEmbHeIX7YX2myvye7D7L5KE818QEhvOYyNegkSg8JIH5xC4f1h0ZDxK6uSLZKBFfBuE3WTvW4R++hrXoBT6HXbzowbzA86A9TJHOAqmZIlWgGbTnRaJ8RQ39I/b/cMr0RyBVtlsCs+H7NEXacP2YP/GoB/Nx/ArajynijJvtdol3uUnEY7zPOVH3OlWgIfv7HbzFbkmwnuBvJYw7+KP0DyKeyUbvBUaxlwtGK06QKrBYZV5gKSd+qOHFEdHBZp15gRXZCP6C/S68svm2ihlUhSnZ4Or2WrXxF2/0+BZEDOJpl3wLI/0Y3x38BxO8nay6oORaAAAAAElFTkSuQmCC" />
          </a>
          <p>
            {` `}
            {author?.summary || null}
          </p >
        </div>
      )}
    </div >
  )
}

export default Bio
