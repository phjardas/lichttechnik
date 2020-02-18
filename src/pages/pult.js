import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import H2 from "../components/H2"
import Image from "../components/image"
import Layout from "../components/layout"
import P from "../components/P"

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      pult: file(relativePath: { eq: "pult.jpg" }) {
        childImageSharp {
          fixed(width: 349, height: 311) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout title="Das Lichtpult">
      <P>
        Es gibt viele Arten von Pulten. Für kleinere Produktionen ist die
        geläufigste Familie der MA Lightcommander. Beispielsweise der MA
        Lightcommander 12/2 mit zwei mal zwölf Kanälen. Nach oben hin ist die
        Anzahl der Kanäle praktisch unbeschränkt, ein häufig anzutreffender
        Verwante des LC12/2 ist der LC48 mit 48 Kanälen. Wie die Pulte genau
        funktionieren, entnehmt ihr am besten der jeweiligen
        Bedienungsanleitung. Im Prinzip funktionieren aber alle Pulte gleich. Es
        gibt zwei Arten, eine Show zu fahren: Über sogenannte Presets oder über
        programmierte Szenen.
      </P>
      <Image
        fixed={data.pult.childImageSharp.fixed}
        alt="Ein analoges Licht-Pult mit 12 Kanälen"
      />
      <H2>Presets</H2>
      <P>
        Auf der linken Seite des Pultes gibt es zwei waagrecht unterteilte
        Sektionen, die identisch aussehen und je 12 Fader (das sind die
        Schieberegler) haben. Oben bzw. unten wird Preset A bzw. B genannt. Auf
        jedem Fader liegt ein Kanal – normalerweise ein Scheinwerfer. Das
        Prinzip läuft so, dass man während Preset A auf der Bühne gerade
        angezeigt wird Preset B nach seinen Wünschen vorbereitet. Dann blendet
        man von A nach B über und B wird auf der Bühne gezeigt. Nun kann man A
        für die nächste Szene vorbereiten, wieder zurückblenden und so weiter.
      </P>
      <H2>Szenen (Bilder)</H2>
      <P>
        Alternativ dazu kann man sich, statt jede Szene von Hand einzustellen,
        jede Szene separat speichern. Dann hat man für jede Szene einen eigenen
        Regler und kann so einfach von einer zur nächsten gehen und sogar
        mehrere Szenen gleichzeitig laufen lassen. Die Fader von Preset B werden
        zu den Szenen-Fadern (also Szene 4 auf Fader 4), während die Fader von
        Preset A weiterhin den jeweiligen Kanälen zugeordnet sind. Man kann nun
        im unteren Bereich die gewünschte Szene am Fader hochziehen und parallel
        oben einzelne Scheinwerfer separat fahren. Wie genau man Szenen
        programmiert, entnehmt ihr bitte dem jeweiligen Handbuch eures Pultes.
      </P>
      <H2>Chase</H2>
      <P>
        Zum Schluss gibt es noch die Lauflichter, »Chase« genannt. Hier werden
        nicht einzelne Szenen sondern zeitliche Abfolgen von Szenen gespeichert.
        So kann man eine beliebige Folge von Scheinwerfen in beliebiger
        Reihenfolge aufleuchten lassen, wenn's sein darf auch im Takt der Musik.
        Dazu kann man ein Kabel vom Mischpult (z.B. als Aux-Send oder Direct
        Out) zum Lichtpult ziehen, auf dem vorzugsweise CD und Bassdrum liegen.
        Auch hier bitte im Handbuch nachschauen, wie's geht. Theoretisch könnte
        man so eine Show komplett automatisch als ultralanges Lauflicht mit
        variablen Überblendzeiten fahren. Wird auch so gemacht – aber für eine
        einzige Show lohnt sich das kaum, erst recht nicht für TEN SING, das ja
        vor Spontaneität platzt...
      </P>
    </Layout>
  )
}
