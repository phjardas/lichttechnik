import { makeStyles, Typography } from "@material-ui/core"
import Img from "gatsby-image"
import React from "react"

const useStyles = makeStyles(({ spacing }) => ({
  wrapper: {
    textAlign: "center",
  },
  wrapperFluid: {
    margin: `${spacing(2)}px 0`,
  },
  wrapperFixed: {
    display: "inline-block",
    margin: spacing(2),
  },
  wrapperFloat_left: {
    float: "left",
    marginLeft: 0,
    marginRight: spacing(4),
  },
  wrapperFloat_right: {
    float: "right",
    marginLeft: spacing(4),
    marginRight: 0,
  },
  caption: {
    marginTop: spacing(1),
  },
}))

export default function Image({ alt, fluid, float, ...props }) {
  const classes = useStyles()

  return (
    <div
      className={`${classes.wrapper} ${
        fluid ? classes.wrapperFluid : classes.wrapperFixed
      } ${float ? classes[`wrapperFloat_${float}`] : ""}`}
    >
      <Img fluid={fluid} alt={alt} {...props} />
      {alt && (
        <Typography
          variant="caption"
          component="div"
          className={classes.caption}
        >
          {alt}
        </Typography>
      )}
    </div>
  )
}
