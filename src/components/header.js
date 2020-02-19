import {
  AppBar,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core"
import {
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
} from "@material-ui/icons"
import { Link as GatsbyLink } from "gatsby"
import React, { forwardRef, useCallback, useMemo, useState } from "react"
import { usePages } from "./page"

const useStyles = makeStyles(({ mixins, spacing }) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
  },
  menuButton: {
    marginRight: spacing(2),
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: spacing(0, 1),
    ...mixins.toolbar,
    justifyContent: "flex-end",
  },
}))

export default function Header({ siteTitle }) {
  const { pages, current } = usePages()
  const classes = useStyles()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const openDrawer = useCallback(() => setDrawerOpen(true), [setDrawerOpen])
  const closeDrawer = useCallback(() => setDrawerOpen(false), [setDrawerOpen])

  return (
    <>
      <AppBar>
        <Toolbar>
          <Container maxWidth="sm" className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={openDrawer}
              edge="start"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" tag="div" noWrap>
              <Link component={GatsbyLink} to="/" color="inherit">
                {siteTitle}
              </Link>
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
      <Drawer variant="temporary" anchor="left" open={drawerOpen}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={closeDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {pages
            .filter(page => !page.hidden)
            .map(page => (
              <ListItemLink
                key={page.path}
                button
                to={page.path}
                selected={current && current.path === page.path}
                onClick={closeDrawer}
              >
                <ListItemText primary={page.label} />
              </ListItemLink>
            ))}
        </List>
      </Drawer>
    </>
  )
}

function ListItemLink({ to, onClick, ...props }) {
  const renderLink = useMemo(
    () =>
      forwardRef((itemProps, ref) => (
        <GatsbyLink to={to} ref={ref} {...itemProps} onClick={onClick} />
      )),
    [to, onClick]
  )

  return (
    <li>
      <ListItem component={renderLink} {...props} />
    </li>
  )
}
