import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core"
import { indigo } from "@material-ui/core/colors"
import React from "react"

const theme = createMuiTheme({
  primary: indigo,
  secondary: indigo,
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "1em",
      },
    },
  },
})

export default function ThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <Wrapper>{children}</Wrapper>
      </>
    </MuiThemeProvider>
  )
}

const useStyles = makeStyles(({ palette }) => ({
  "@global": {
    body: {
      background: palette.background.paper,
    },
    abbr: {
      background: "#ffff00",
      textDecoration: "none",
      fontStyle: "italic",
    },
  },
}))

function Wrapper({ children }) {
  useStyles()
  return children
}
