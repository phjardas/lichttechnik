import { Tooltip } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import H2 from "../components/H2"
import Image from "../components/image"
import Layout from "../components/layout"
import P from "../components/P"

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      par64: file(relativePath: { eq: "par64.png" }) {
        childImageSharp {
          fixed(width: 108, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      vergenz: file(relativePath: { eq: "vergenz.png" }) {
        childImageSharp {
          fixed(width: 207, height: 130) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sixbar: file(relativePath: { eq: "par64-6bar.png" }) {
        childImageSharp {
          fixed(width: 261, height: 67) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      strahlengaenge_par: file(relativePath: { eq: "strahlengaenge_par.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 552) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leonardo: file(relativePath: { eq: "leonardo.png" }) {
        childImageSharp {
          fixed(width: 110, height: 161) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      source4: file(relativePath: { eq: "source4.png" }) {
        childImageSharp {
          fixed(width: 147, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      strahlengaenge_stufe_profil: file(
        relativePath: { eq: "strahlengaenge_stufe_profil.jpg" }
      ) {
        childImageSharp {
          fixed(width: 204, height: 389) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      kobold: file(relativePath: { eq: "kobold.png" }) {
        childImageSharp {
          fixed(width: 211, height: 176) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mk5: file(relativePath: { eq: "mk5.png" }) {
        childImageSharp {
          fixed(width: 94, height: 174) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mac2k: file(relativePath: { eq: "mac2k.png" }) {
        childImageSharp {
          fixed(width: 128, height: 179) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      curtain: file(relativePath: { eq: "curtain.png" }) {
        childImageSharp {
          fixed(width: 128, height: 268) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      blinder: file(relativePath: { eq: "blinder.png" }) {
        childImageSharp {
          fixed(width: 120, height: 233) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      led: file(relativePath: { eq: "led.png" }) {
        childImageSharp {
          fixed(width: 120, height: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout title="Scheinwerfer">
      <P>
        Es gibt viele Arten von{" "}
        <Tooltip title="engl. »fixture«" arrow>
          <abbr>Scheinwerfern</abbr>
        </Tooltip>
        . Ich will hier nur einen kurzen Abriss über diejenigen geben, die bei
        Showproduktionen am häufigsten Verwendung finden. Erstmal ein bisschen
        Nomenklatur zum Angeben: Nur ein Laie nennt einen Scheinwerfer »Lampe«,
        im Fachchinesisch heisst das »Leuchte«. »Lampe« hingegen meint das
        Leuchtmittel, also die Glühbirne oder Entladungsröhre.
      </P>

      <P>
        Zu jedem Scheinwerfertypus werde ich einige klassische Vertreter
        angeben, was natürlich nicht bedeuten soll, dass das die einzigen oder
        besten sind. Jeder hat seine Lieblinge, mit denen er am liebsten
        arbeitet – das hier sind meine für kleine Produktionen. Dass ich
        persönlich lieber mit Martin Scannern und Movingheads arbeite, heisst
        nicht, dass andere schlechter oder besser sind.
      </P>

      <H2>Parabolscheinwerfer (PAR)</H2>

      <Image
        fixed={data.par64.childImageSharp.fixed}
        alt="PAR64, 2,9 kg"
        float="left"
      />

      <P>
        Die Standardleuchte überhaupt für Showbühnen. Ihr grösster Vorteil:
        billig, billig, hell, leicht, billig, billig. Das Gehäuse ist aus
        Aluminium, silber oder schwarz, im Innern brennt eine Pressglaslampe mit
        Parabolspiegel als{" "}
        <Tooltip
          title="engl. »parabolic aluminized reflector«, deswegen PAR"
          arrow
        >
          <abbr>Reflektor</abbr>
        </Tooltip>
        , die Lichtstrahlen verlassen die Lampe je nach Lampentyp fast parallel
        bis breit gestreut. Verschiedene Ausführungen sind erhältlich, die sich
        durch Grösse, Leistung und Abstrahlwinkel unterscheiden. Am
        gebräuchlichsten sind die grössten PAR64 und der kleinere Bruder PAR56.
      </P>

      <Image
        fixed={data.vergenz.childImageSharp.fixed}
        alt="Vergenz: CPC62, CPC61, CPC60, ACL"
        float="right"
      />

      <P>
        Der PAR64 ist so beliebt, dass er von den Technikern liebevoll »Kanne«
        getauft wurde. Er ist in vielen Varianten erhältlich: Mit 1000W-Lampe
        gibt es sie als CP60, CP61 und CP62, mit steigender{" "}
        <Tooltip title="Abstrahlwinkel" arrow>
          <abbr>Vergenz</abbr>
        </Tooltip>
        . In 500W gibt es nur das »raylight« mit kleiner Vergenz, das in
        Deutschland (leider) meistens ausgegeben wird. Aus Preisgründen werden
        meist Raylights verwendet. Wenn ihr aber die Möglichkeit habt, an CP60
        ranzukommen, ist das die Wahl schlechthin – immerhin gibt es doppelte
        Leistung auf gleichem Winkel. Aufpassen beim Mieten, dass ihr auch die
        Kannen bekommt, die ihr bestellt habt und dass alle das gleiche
        Leuchtmittel drin haben! Speziell gibt es noch sogenannte{" "}
        <Tooltip
          title="engl. »aicraft landing light« – Flugzeug-Landescheinferfer"
          arrow
        >
          <abbr>ACLs</abbr>
        </Tooltip>{" "}
        mit einer Vergenz von unter 3°.
      </P>

      <Image
        fixed={data.sixbar.childImageSharp.fixed}
        alt="6-Bar PAR64, 20 kg"
      />

      <P>
        PARs werden meist zu viert oder zu sechst an eine{" "}
        <Tooltip title="engl. »pipe«" arrow>
          <abbr>Aluminiumröhre</abbr>
        </Tooltip>{" "}
        gehängt, fertig verkabelt und dann auf ein Stativ gepackt oder an eine{" "}
        <Tooltip title="engl. »truss«" arrow>
          <abbr>Traverse</abbr>
        </Tooltip>{" "}
        gehängt. Das nennt sich dann 4-Bar PAR64, bzw. 6-Bar PAR64. Vorteil: Die
        Bars werden fertig ausgeliefert, so hat man mit einem Handgriff sechs
        Leuchten aufgehängt. Da die Kannen aus Aluminium bestehen, sind sie
        unheimlich leicht (4bar ~13kg, 6bar ~20kg) und man kann ein Truss
        praktisch unbeschränkt mit ihnen behängen. Versteckert wird das Ganze
        meist mit Sokapexoder Harting-Steckern, zu denen ihr am Dimmer das
        passende Pendant braucht.
      </P>

      <Image
        fluid={data.strahlengaenge_par.childImageSharp.fluid}
        alt="Strahlengänge verschiedener PAR64 Lampen. Von links nach rechts:
        Raylight, CP60, CP61, CP62"
      />

      <H2>Stufenlinsenscheinwerfer (SL)</H2>

      <Image
        fixed={data.leonardo.childImageSharp.fixed}
        alt="Desisti Leonardo 1 kW, 6,4 kg"
        float="right"
      />

      <P>
        Das ist die Standardleuchte fürs Theater, deswegen von vielen auch als
        Theaterleuchte bezeichnet. Korrekte Bezeichnung ist
        »Fresnellinsenscheinwerfer«, da vorne drin eine Fresnellinse (oder eben
        Stufenlinse) drinsteckt. Sie sind vor allem für Frontlicht und
        Seitenlicht geeignet. Normalerweise steckt vorne drauf eine{" "}
        <Tooltip title="engl. »barn door«" arrow>
          <abbr>Torblende</abbr>
        </Tooltip>
        , das ist ein drehbares Gestell mit vier Flügeln dran. Damit lässt sich
        der Lichtkegel ziemlich gut einstellen, um nicht zu viel zu beleuchten.
        Die Brennweite und damit die Grösse des Lichtkegels und die Schärfe des
        Randes lässt sich bequem einstellen. Sie gibt es in Tausenden von
        Varianten, von 250W bis 20kW ist alles vorhanden. Am häufigsten sind
        500W, 1kW und 2kW anzutreffen.
      </P>

      <H2>Profilscheinwerfer</H2>

      <Image
        fixed={data.source4.childImageSharp.fixed}
        alt="Source Four ETC, 7 kg"
        float="left"
      />

      <P>
        Das, was man landläufig als »Spot« bezeichnet. Korrekte Bezeichnung:
        Ellipsenspiegel-Scheinwerfer oder Kondensoroptik-Scheinwerfer. Beim
        Ellipsenspiegelscheinwerfer ist – im Gegensatz zum parabolischen Spiegel
        – der Lichtaustritt aus dem Reflektor nicht (fast) parallel, sondern
        wird auf einen zweiten Brennpunkt fokussiert, an dem eine Irisblende
        oder ein Blendenschieber angebracht ist, mit denen man die Form des
        Lichtstrahls verändern kann.
      </P>

      <P>
        Davor und danach befindet sich ein Linsensystem mit geringer Vergenz.
        Beim Scheinwerfer mit Kondensoroptik befindet sich im Strahlengang ein
        kompliziertes Linsensystem ähnlich dem einer Kamera. Das Resultat bei
        beiden ist ein scharf begrenzter, enger Lichtkegel. Benutzt wird der
        Profiler als Beleuchtung von statischen Objekten, wie z.B. Keyboards,
        Schlagzeugen oder Rednerpulten.
      </P>

      <Image
        fixed={data.strahlengaenge_stufe_profil.childImageSharp.fixed}
        alt="Strahlengang einer Stufenlinse geringer Vergenz (oben) und eines Profilscheinwerfers (unten)"
      />

      <P>
        Eine weitere Verwendung ist der Einsatz als Verfolgerscheinwerfer.
        Dieser wird im hinteren Zuschauerraum auf ein Stativ gestellt und von
        einer Person bedient. Verfolger haben meist erweiterte Funktionen, wie
        eine Irisblende, mit der sich der Lichtstrahl verkleinern lässt, eine
        Fokussierung, um den Rand des Kegels weich oder scharf zu machen und
        leider oft auch Farbfilter.
      </P>

      <H2>Fluter</H2>

      <Image
        fixed={data.kobold.childImageSharp.fixed}
        alt="Kobold 1 kW, 4,1 kg"
        float="right"
      />
      <P>
        Ein ziemlicher Vorschlaghammer. Eigentlich das, was man im Baumarkt als
        Halogenfluter bekommt, wird auch »Strahler« genannt. Ohne Torblenden
        unbenutzbar, allerdings haben nur die wenigsten billigen eine
        Möglichkeit, selbige anzubringen. Problematisch ist, dass der
        Lichtaustritt nicht parallel und die Leuchtfläche relativ gross ist, so
        kann man selbst mit Torblenden nicht viel ausrichten. Fluter tun genau
        das, was ihr Name sagt: Einen möglichst grossen Bereich mit möglichst
        viel Licht zu überfluten. Nicht gerade die subtilste Variante, wenn auch
        die billigste. Im Theater werden sie meist zur Beleuchtung des
        Hintergrundes verwendet (Horizontleuchten). Leider sind viele TEN SINGs
        darauf angewiesen, aus finanziellen Gründen von Stufenlinsen auf Fluter
        auszuweichen – meiner Meinung nach eine bedauerliche Tatsache, zumal
        Stufenlinsen gar nicht so viel mehr kosten. Lieber 4bars statt 6bars
        nehmen und die nervigen Fluter durch SL-Leuchten ersetzen.
      </P>

      <P>
        Beispiel: 500W oder 1000W aus dem Baumarkt. Professioneller: Kobold FL
        1000W mit absolut gleichmässiger Ausleuchtung und Torblenden.
      </P>

      <H2>Multifunktionsscheinwerfer</H2>

      <Image
        fixed={data.mk5.childImageSharp.fixed}
        alt="Martin Mk V, 35 kg"
        float="left"
      />
      <P>
        Die neueste Generation der Beleuchtung. Unterschieden wird zwischen
        spiegelabgelenkten Scheinwerfern (»Scanner«) und kopfbewegten
        Scheinwerfern (»Moving Heads«). Zusammengefasst wird diese Art von Licht
        unter »intelligentes Licht« (etwas irreführend, noch kann Licht nicht
        denken). Die Funktionalität ist eigentlich bei beiden die gleiche. Die
        Idee ist, einen Profil- oder Stufenlinsenscheinwerfer mit wechselbaren
        Farbfiltern, Effekten und sonstigem Krimskrams auszustatten, die
        komplett fernbedienbar sind. Und als Extra-Gimmick gibt es noch die
        Möglichkeit dazu, die Richtung des Strahls fernzusteuern.
      </P>

      <Image
        fixed={data.mac2k.childImageSharp.fixed}
        alt="Martin MAC2000 Profile"
        float="right"
      />

      <P>
        Bei Scannern ist das Gehäuse mit Lampen, Farbrädern und Effekten starr
        im Gehäuse und der Lichtstrahl wird über einen beweglichen Spiegel
        abgelenkt (schnell). Bei Moving Heads ist der komplette Scheinwerfer auf
        ein bewegliches Gestell montiert und wird als ganzes bewegt (präzise und
        mehr Effekte). Ein wunderbares Spielzeug und mit Sicherheit die
        Erfindung des Jahrhunderts, aber noch zu teuer, um eine komplette TEN
        SING-Show damit zu fahren.
      </P>

      <P>
        Beispiel Scanner: Martin PAL 1200 FX, vergleichbare Modelle von Clay
        Paky und HighEndSystems.
      </P>

      <P>
        Beispiel Moving Head: Martin MAC500 profile (= Profiler) und MAC600 wash
        (= Stufenlinse), vergleichbare Modelle von Controlite, Starlight und
        HighEndSystems.
      </P>

      <H2>Effekte</H2>

      <Image
        fixed={data.curtain.childImageSharp.fixed}
        alt="Strahlen eines Thomas Curtain (9x240W)"
        float="left"
      />

      <P>
        Es gibt Unmengen an kleinen und grossen Lichteffekten. Zu den
        gebräuchlichsten zählen wohl Stroboskope und UV-Röhren.{" "}
        <Tooltip title="engl. »strobe«" arrow>
          <abbr>Stroboskope</abbr>
        </Tooltip>{" "}
        sollte man auf Live-Bühnen vorsichtig einsetzen, da sie schnell als
        störend empfunden werden. Hier zählt: Stroboskope gehören in den
        hinteren Teil der Bühne oder auf die Seite, so dass sie in Richtung
        Publikum blitzen, nicht aber direkt in deren Augen. Ist schwierig, ich
        weiss, aber auch wichtig. Der Effekt sollte aber nicht blitzende
        Menschen und Bühne sein, sondern blitzende Luft (Nebel!), so kann man
        mit einem 500W-Strobe schon mächtig »Lärm« machen.
      </P>

      <P>
        UV-Röhren (Schwarzlicht) werden von Tänzern geliebt, sollten aber den
        Rest der Show nicht verwendet werden, ausser zu speziellen Zwecken.
        Insbesondere musst du darauf achten, dass die Röhren vom Publikum nicht
        zu sehen sind, da viele die Röhren selber als unangenehm empfinden.
        Hierfür eignen sich schwarz lackierte Bretter, auf die die Röhren
        montiert werden, die man dann an der Bühnenvorderkante anbringt, so dass
        das Publikum nur die Bretter sieht. Ausserdem gibt es viele
        Abdeckstifte, Schminken und Fussel, die fluoreszieren und dadurch
        Menschen in Schwarzlicht nicht grade schön aussehen lassen.
      </P>

      <Image
        fixed={data.blinder.childImageSharp.fixed}
        alt="Blinder 8xPAR36 (8x650W)"
        float="right"
      />

      <P>
        Interessant sind Effektgeräte wie Moonflowers, die bunte Strahlen in die
        Menge werfen. Da diese Geräte allerdings oft auch ein paar Euro kosten,
        sollte man sich schon die Miete eines Scanners oder Movingheads
        überlegen, der dann fünfmal so viele Effekte bietet und nur das
        dreifache kostet.
      </P>

      <P>
        Ganz nett sind auch sogenannte Blinder. Helle weisse Scheinwerferblöcke,
        die in Richtung Publikum zeigen und zwei Funktionen haben. Einerseits
        das Publikum für kurze Momente zu blenden und andererseits den Akteuren
        mal die Chance zu geben, das Publikum zu sehen. Diesen ziemlich
        praktischen Effekt sollte man mit Bedacht einsetzen, nach einem Blinder
        sieht man für einige Sekunden nichts von der Bühne, da diese ja wieder
        dunkel ist. Alternativ zu den normalen Blindern kann man auch einfach
        klassische Scheinwerfer an der Vorderkante der Bühne in Richtung
        Publikum aufhängen und diese hernehmen.
      </P>

      <H2>LED</H2>

      <Image
        fixed={data.led.childImageSharp.fixed}
        alt="LED PAR 64 shortnose: 153 LEDs, total 15 W"
        float="left"
      />

      <P>
        Die neueste Entwicklung bei Scheinwerfern ist die Einführung von
        Leuchtdioden. In LED-Scheinwerfern erfolgt die Lichtproduktion nicht mit
        Entladungs- oder Glühlampen sondern mit vielen kleinen Leuchtdioden.
        Diese haben den großen Vorteil, dass sie einen deutlich höheren
        Wirkungsgrad besitzen, also einen viel größeren Anteil des
        hineingeschickten Stromes tatsächlich in Licht statt in Wärme umwandeln.
        Außerdem bestechen sie durch ihre kleine Bauweise, sozusagen "mehr Licht
        pro Gramm".
      </P>

      <P>
        In ein Gehäuse der Größe eines PAR64 kann man gut einhundert dieser
        kleinen Dioden unterbringen. Verteilt man nun Dioden der drei
        Grundfarben rot, grün und blau gleichmäßig auf der Scheinwerferfläche
        und baut separate Ansteuerungen für diese drei Kanäle, kann man jede
        beliebige Farbe erzeugen, ähnlich wie mit Washlights (s.o.). Die
        Leistungsaufnahme eines solchen Scheinwerfers wird 50 Watt nicht
        übersteigen, bei einem zu einem CPC 60 (1000 W) vergleichbarem
        Lichtaustritt. Letztendlich sind LED-Scheinwerfer auch noch sehr
        preiswert.
      </P>
    </Layout>
  )
}
