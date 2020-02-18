import { makeStyles, Typography } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(({ spacing }) => ({
  main: {
    marginTop: spacing(4),
    marginBottom: spacing(1),
  },
}))

export default function H2({ children }) {
  const classes = useStyles()

  return (
    <Typography variant="h4" component="h2" className={classes.main}>
      {children}
    </Typography>
  )
}
