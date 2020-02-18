import {
  createMuiTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core"
import { indigo, pink } from "@material-ui/core/colors"
import React from "react"

const theme = createMuiTheme({
  primary: indigo,
  secondary: pink,
})

console.log(theme)

export default function ThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <>
        <CssBaseline />
        {children}
      </>
    </MuiThemeProvider>
  )
}
