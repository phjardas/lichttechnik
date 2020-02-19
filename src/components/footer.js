import { Container, makeStyles, Link, Typography } from "@material-ui/core"
import React from "react"
import { usePages } from "../components/page"
import { Link as GatsbyLink } from "gatsby"

const useStyles = makeStyles(({ palette, spacing }) => ({
  nav: {
    display: "flex",
    marginBottom: spacing(4),
  },
  navPrevious: {
    marginRight: "auto",
  },
  navNext: {
    marginLeft: "auto",
  },
  footer: {
    marginTop: spacing(4),
    padding: `${spacing(4)}px 0`,
    background: palette.background.default,
  },
  imprint: {
    marginBottom: spacing(2),
  },
}))

export default function Footer() {
  const { previous, next } = usePages()
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container component="footer" maxWidth="sm">
        {(previous || next) && (
          <nav className={classes.nav}>
            {previous && (
              <Link
                component={GatsbyLink}
                to={previous.path}
                className={classes.navPrevious}
              >
                zurück: {previous.label}
              </Link>
            )}
            {next && (
              <Link
                component={GatsbyLink}
                to={next.path}
                className={classes.navNext}
              >
                weiter: {next.label}
              </Link>
            )}
          </nav>
        )}
        <Typography
          variant="caption"
          component="div"
          className={classes.imprint}
        >
          Impressum: Philipp Jardas &lt;
          <Link href="mailto:philipp@jardas.de">philipp@jardas.de</Link>&gt;
        </Typography>
        <Typography variant="caption" component="div">
          <Link
            rel="license"
            href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.de"
          >
            <img
              alt="Creative Commons License"
              src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"
            />
          </Link>
          <br />
          This work is licensed under a{" "}
          <Link
            rel="license"
            href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.de"
          >
            Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
            International License
          </Link>
          .
        </Typography>
      </Container>
    </footer>
  )
}
