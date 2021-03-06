import { Container, makeStyles, Typography } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Footer from "./footer"
import Header from "./header"
import { PagesProvider } from "./page"
import SEO from "./seo"
import ThemeProvider from "./theme"

const useStyles = makeStyles(({ spacing }) => ({
  main: {
    marginTop: 64 + spacing(2),
  },
}))

export default function Layout({ title, children }) {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider>
      <PagesProvider>
        <SEO title={title} />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container component="main" maxWidth="sm" className={classes.main}>
          <Typography variant="h3" component="h1" gutterBottom>
            {title}
          </Typography>
          {children}
        </Container>
        <Footer />
      </PagesProvider>
    </ThemeProvider>
  )
}
