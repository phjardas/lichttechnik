import { makeStyles, Typography } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(({ spacing }) => ({
  main: {
    marginBottom: spacing(2),
  },
}))

export default function P({ children }) {
  const classes = useStyles()

  return (
    <Typography gutterBottom className={classes.main}>
      {children}
    </Typography>
  )
}
