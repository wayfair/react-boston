import React from "react"
import Layout from "../components/Layout"
import {
  Box,
  Container,
  SectionTitle,
  Text,
} from "../components/layout-components"
import Link, { linkStyles } from "../components/link"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

const About = () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        site {
          siteMetadata {
            about
          }
        }
      }
    `}
    render={data => {
      return (
        <Layout>
          <Container title="About React Boston">
            <Text
              mb={10}
              css={css`
                a {
                  ${linkStyles}
                }
              `}
              dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.about }}
            />
            <SectionTitle mb={2}>Past Years</SectionTitle>
            <Text mb={2}>Have a look at our previous conferences:</Text>
            <Box as="ul" pl={8}>
              <li>
                <Link href="https://www.reactboston.com/2017/">2017</Link>
              </li>
              <li>
                <Link href="https://www.reactboston.com/2018/">2018</Link>
              </li>
            </Box>
          </Container>
        </Layout>
      )
    }}
  />
)

export default About
