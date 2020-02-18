import { AppBar, Toolbar, Link, Typography, Container } from "@material-ui/core"
import React from "react"
import { Link as GatsbyLink } from "gatsby"

export default function Header({ siteTitle }) {
  return (
    <AppBar>
      <Toolbar>
        <Container maxWidth="sm">
          <Typography variant="h6" tag="div">
            <Link component={GatsbyLink} to="/" color="inherit">
              {siteTitle}
            </Link>
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
