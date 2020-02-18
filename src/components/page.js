import { Location } from "@reach/router"
import { withPrefix } from "gatsby"
import React, { createContext, useContext } from "react"

const PagesContext = createContext()

const pages = [
  { path: "/", label: "Startseite", menu: false },
  { path: "/einfuehrung", label: "Einführung" },
  { path: "/scheinwerfer", label: "Scheinwerfer" },
  { path: "/technik", label: "Technik" },
  { path: "/pult", label: "Das Lichtpult" },
  { path: "/beleuchtsungstechniken", label: "Beleuchtungstechniken" },
  { path: "/beispiele", label: "Beispiele" },
  { path: "/vorbereitung", label: "Vorbereitung" },
  { path: "/wie-beleuchte-ich-was", label: "Wie beleuchte ich was?" },
  { path: "/tipps-und-tricks", label: "Tipps und Tricks" },
  { path: "/literatur", label: "Literatur" },
  { path: "/dankeschoen", label: "Dankeschön!" },
]

export function PagesProvider({ children }) {
  return (
    <Location>
      {({ location }) => {
        const currentPageIndex = pages.findIndex(
          p => withPrefix(p.path) === location.pathname
        )

        const current = currentPageIndex >= 0 && pages[currentPageIndex]
        const previous = currentPageIndex > 0 && pages[currentPageIndex - 1]
        const next =
          currentPageIndex < pages.length - 1 && pages[currentPageIndex + 1]

        const pagesWithMeta = pages.map((p, i) => ({
          ...p,
          current: i === currentPageIndex,
        }))

        const context = {
          pages: pagesWithMeta,
          current,
          previous,
          next,
        }

        return (
          <PagesContext.Provider value={context}>
            {children}
          </PagesContext.Provider>
        )
      }}
    </Location>
  )
}

export function usePages() {
  return useContext(PagesContext)
}
