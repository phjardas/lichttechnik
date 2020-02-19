import { makeStyles, Typography } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(({ spacing }) => ({
  main: {
    margin: `${spacing(2)}px 0`,
  },
}))

export default function P({ children }) {
  const classes = useStyles()

  return <Typography className={classes.main}>{children}</Typography>
}
