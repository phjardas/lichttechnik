import { Link } from "@material-ui/core"
import React from "react"
import Layout from "../components/layout"
import P from "../components/P"

export default function IndexPage() {
  return (
    <Layout title="Literatur">
      <P>
        Das Standardwerk der Theaterbeleuchtung überhaupt, das jeder Beleuchter
        im Regal stehen haben sollte, ist »Faszination Licht« von Prof. Max
        Keller, ISBN 3-7913-2093-9. Es sollte auch in jeder
        Universitätsbibliothek im Bereich Architektur zu finden sein.
      </P>

      <P>
        Etwas ungewöhnliche Lektüre ist der Mietkatalog der Procon MultiMedia
        AG, Deutschlands grösstem Anbieter für Beleuchtungs-und Bühnentechnik.
        Hier drin findet ihr alles, was ihr je zum Beleuchten brauchen werdet,
        und lehrreich ist er dazu.{" "}
        <Link href="http://www.procon-online.de/">
          Den Katalog gibt es kostenlos auf der Homepage
        </Link>
        .
      </P>

      <P>
        Ideen für Lichtdesign bekommt ihr auf jeder Homepage von
        Veranstaltungstechnik- Betrieben, die immer eine kleine Galerie
        unterhalten, wo man sich mal anschauen kann, wie die beleuchten. Es ist
        immer gut, sich von überall her Anregungen zu holen… auch Konzerte,
        Shows, Musicals, Theater, Opern und andere kleine Bühnenauftritte bieten
        immer wieder die Chance, dazuzulernen.
      </P>
    </Layout>
  )
}
