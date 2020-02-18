import { Link as MuiLink } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import P from "../components/P"

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      titleImage: file(relativePath: { eq: "titel.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 552) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout title="Willkommen!">
      <P>
        In diesem Tutorial könnt ihr lernen, wie man mit wenig Aufwand ein TEN
        SING Konzert ins richtige Licht rückt. Angefangen von der richtigen Wahl
        der Scheinwerfer und Technik und deren Positionierung über Grundlagen
        der Beleuchtung bis hin zu Basics des Lichtdesigns. Grundlegende
        Kenntnisse der Veranstaltungstechnik werden vorausgesetzt, allerdings
        muss man kein Technik-Guru sein, um von diesem Tutorial profitieren zu
        können, ganz im Gegenteil.
      </P>
      <Image fluid={data.titleImage.childImageSharp.fluid} alt="Titelbild" />
      <P>
        Falls du das Tutorial weiterverwenden möchtest, beachte bitte die
        Creative Commons Lizensierung am Ende jeder Seite. Du hast das Recht,
        dieses Tutorial zu nichtkommerziellen Zwecken kostenlos
        weiterzuverbreiten, dies schließt auch Ausdrucke zum persönlichen
        Gebrauch mit ein. Wenn du das Tutorial zur Verwendung an einer
        Ausbildungseinrichtung verwenden möchtest, bitte ich um{" "}
        <MuiLink href="mailto:philipp@jardas.de">
          Kontaktaufnahme per Email
        </MuiLink>
        .
      </P>
    </Layout>
  )
}
