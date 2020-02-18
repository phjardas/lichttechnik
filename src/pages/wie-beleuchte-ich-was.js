import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import H2 from "../components/H2"
import Image from "../components/image"
import Layout from "../components/layout"
import P from "../components/P"

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      effektlicht: file(relativePath: { eq: "effektlicht.jpg" }) {
        childImageSharp {
          fixed(width: 228, height: 187) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout title="Wie beleuchte ich was?">
      <P>
        Verlass dich hier auf deinen gesunden Menschenverstand. Ein langsames
        Lied wird mit wenig Licht bearbeitet, schnelle Lieder dürfen gerne etwas
        hektischer sein. Abwechslung zählt. Und immer im Hinterkopf behalten,
        was deine Aufgabe ist: Das Geschehen auf der Bühne unterstützen, nicht
        zeigen, wie toll die Lichtanlage ist.
      </P>
      <P>
        Das Frontlicht heisst auch Grundlicht und so sollte es auch benutzt
        werden. Die weissen Leuchten sind praktisch immer an, mal dunkler, mal
        heller. Ohne sie sieht man nur schwarze Umrisse vor dem Effektlicht
        (kann mal ganz reizvoll sein. Aber eben nur manchmal).
      </P>
      <H2>Theater</H2>
      <P>
        Das ist bei TEN SING recht einfach. Frontlicht voll aufdrehen, kein
        Effektlicht, höchstens weises. Kein Spot. Fertig. Manchmal erwartet die
        Regie von dir Kunststücke, wie Überblendungen oder ähnliches. Weigere
        dich, wenn du nicht ein Skript (»Haha« bei Spontantheater…) oder eine
        Regieassistenz hast und ihr das vorher mal probiert habt, sonst
        funktioniert das eh nicht.
      </P>
      <H2>Ruhige Musik</H2>
      <P>
        Hier bietet sich an, mit wenigen Farben zu arbeiten. Halte das komplette
        Lied in nur ein oder zwei Farben. Es tut nicht weh, einmal ein ganzes
        Lied lang nur zwei rote und zwei blaue Scheinwerfer aufzuziehen und
        stehen zu lassen bis zum Ende des Lieds, auch wenn dir dann schnell
        langweilig wird. Mit dem Licht kannst du zusätzlich zu Lautstärke und
        Tempo ein weiteres Element einbauen, das einen Kontrast zwischen ruhiger
        und hektischer Musik schafft. Nutze dies aus. Und nicht vergessen:
        Frontlicht!
      </P>
      <H2>Schnelle Musik</H2>
      <P>
        Auch bei hektischer Musik darf man einem Lied ein Farben-Design
        verpassen, solange man genug Scheinwerfer hat. Mit vier 4bars kann man
        sogar schnelle Lieder mit nur zwei Farben beleuchten. Ansonsten gilt:
        Lauflichter was das Zeug hält, am besten im Takt der Musik. Und nicht
        vergessen: Frontlicht!
      </P>
      <H2>Tänze</H2>
      <Image
        fixed={data.effektlicht.childImageSharp.fixed}
        alt="So nicht! Effektlicht ohne Frontlicht"
        float="right"
      />
      <P>
        Entgegen jeder Vorstellung darf ein Lichttechniker auch bei Tänzen nicht
        einfach blind die Sau rauslassen. Hier ist das Frontlicht z.B. wichtiger
        als bei normalen Songs, da ja nicht die Musik sondern Bewegungen
        interessieren. Ich verstehe nicht, wie es manche Techniker schaffen, bei
        einem Tanz das Frontlicht auszumachen, um es nach dem Tanz wieder
        anzumachen… Hier gilt es, den Wünschen der Tänzer 100%ig zu gehorchen.
        Wenn sie an einer bestimmten Stelle ein bestimmtes Licht haben wollen,
        wird das schon seinen Sinn machen. Und nicht vergessen: Frontlicht!
        Hatte ich das eigentlich schon mal erwähnt?
      </P>
    </Layout>
  )
}
