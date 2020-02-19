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
      dimmer: file(relativePath: { eq: "dimmer.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 276) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      truss: file(relativePath: { eq: "truss.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 552) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout title="Technik">
      <P>
        Mit Scheinwerfern alleine habt ihr noch kein Licht gemacht. Deswegen
        kommt in diesem Kapitel eine Auflistung der Dinge, die man sonst noch
        braucht. Natürlich gibt es noch deutlich mehr, was man zum Basteln so
        benötigt, aber ich werde hier einmal die grundlegenen Begriffe und
        Geräte erläutern.
      </P>

      <H2>Dimmer</H2>
      <Image
        fixed={data.dimmer.childImageSharp.fixed}
        alt="Ein Dimmer-Rack"
        float="left"
      />
      <P>
        Der{" "}
        <Tooltip title="engl. »to dim« bedeutet »abdunkeln«" arrow interactive>
          <abbr>Dimmer</abbr>
        </Tooltip>{" "}
        ist das Herzstück der ganzen Lichtanlage. Er regelt die 230V
        Netzspannung herunter auf gerade so viel Prozent, wie man vom Pult aus
        einstellt. Das funktioniert durch sogenannten Phasenanschnitt. Der am
        Ausgang angehängte Scheinwerfer erhält eine Spannung, die bei jeder
        Halbwelle der sinusförmigen Eingangsspannung um einen einstellbaren
        Phasenwinkel vor dem Nulldurchgang eingeschaltet und beim Nulldurchgang
        wieder ausgeschaltet wird. Dadurch kommt bei einem eingestellten Winkel
        von 180° 100% der Eingansspannung an, bei 0° kommt genau nichts an. Der
        Nachteil dieser Art der Spannungsverminderung ist, dass durch das
        Abhacken der Schwingung viele{" "}
        <Tooltip
          title="Hochfrequente Wellen, die der normalen 50Hz-Netzfrequenz überlagert werden. Für eine nähere Betrachtung empfiehlt sich die Theorie der Fouriertransformation."
          arrow
        >
          <abbr>Oberwellen</abbr>
        </Tooltip>{" "}
        entstehen, die von den Elektrizitätswerken überhaupt nicht gerne gesehen
        werden. Bei Anlagen mit weniger als 100kW spielt das praktisch keine
        Rolle. Wird mehr Leistung verbraucht, gibt es Dimmer, die mit
        Phasenabschnitt arbeiten, also dem entgegengesetzten Prinzip zum
        Phasenanschnitt. Durch geschicktes Mischen dieser beiden Dimmerarten
        kann man die Oberwellenbelastung minimieren. Übrigens: Wenn du von
        diesem Absatz absolut nichts verstanden hast, ist das auch nicht
        schlimm. Man muss kein Elektroingenieur sein, um Licht zu machen. Dies
        war nur ein kleiner Exkurs für den geneigten Leser…
      </P>

      <H2>Drehstrom</H2>

      <P>
        Das wichtigste überhaupt: Ohne Strom geht gar nichts. Und weil wir mit
        hohen Leistungen und Strömen arbeiten, reicht ein kleiner{" "}
        <Tooltip
          title="Schutzkontakt, die normalen Stecker für den Haushalt."
          arrow
        >
          <abbr>Schuko</abbr>
        </Tooltip>
        -Stecker nicht aus. Wir brauchen also Drehstrom, Starkstrom,
        Dreiphasenstrom oder wie man ihn auch immer nennen mag. Das sind die
        dicken Kabel mit den fünfpoligen rot-orangenen Steckern dran. Wieviel
        Strom man braucht, kann man sich einfach ausrechnen: Addiere alle
        angehängten Lasten (Scheinwerfer) in Watt und teile durch 230V, dann
        erhälst du grob den Maximalstrom in Ampere, der fliessen kann. Natürlich
        ist das nur eine kleine Überschlagsrechnung, aber wenn du so viel Strom
        zur Verfügung stellst, kann nicht viel schief gehen. Wichtig: Bei
        Wechselströmen werden für die Spannung Durchschnittswerte angegeben. Da
        die Spannung aber sinusförmig ist, ist der Maximalwert um den Faktor
        <Tooltip
          title="Bei sinusförmigen Spannungen berechnet sich der Maximalwert aus dem Effektivwert durch Multiplikation mit √2."
          arrow
        >
          <abbr>1,41</abbr>
        </Tooltip>{" "}
        höher, also 324V bei 230V Netzspannung.
      </P>

      <H2>Lastkabel</H2>

      <P>
        Sie transportieren, ähnlich dem Multicore beim Ton, in einem dicken
        Kabel mehrere dünnere Kabel auf ein Stativ, um zum Beispiel 6
        Scheinwerfer mit einem einzigen Kabel zu versorgen. Von den
        Tontechnikern wegen ihrer einstreuenden Oberwellen oft »Schweinekabel«
        genannt. Angeschlossen werden sie meist über sogenannte Harting-Stecker,
        schwere Metallsteckverbindungen mit Sicherheitsverriegelung. Vorsicht:
        In manchen Nationen wird im Stecker die Masse auf einen Pin gelegt, der
        hier in Deutschland nach DIN einen Kanal (also Strom) führt. Diese nette
        Kurzschlussschaltung wird liebevoll{" "}
        <Tooltip
          title="FI = Fehlstrohmschaltung, die den Strom abschaltet, sobald weniger Strom in die Steckdose zurückkommt als rausgeschickt wurde, was bedeutet, dass irgendwo Strom auf die Erdung geleitet wird. Der Schwellwert beträgt meistens zwischen 10mA und 30mA."
          arrow
        >
          <abbr>»FI booster«</abbr>
        </Tooltip>{" "}
        genannt.
      </P>

      <H2>Lichtpult</H2>

      <P>
        Von hier aus steuert der Lichttechniker die Anlage. Wird auch
        »Stellwerk« (im Theater) oder in Österreich »Regulierung« genannt. Der
        Ort, an dem die Ton- und Lichtpulte stehen, wird von den Tontechnikern
        <Tooltip title="»Front Of House«, oft auch einfach »Frontplatz«" arrow>
          <abbr>FoH</abbr>
        </Tooltip>
        genannt, dieser Begriff hat sich auch beim Licht weitgehend
        durchgesetzt. Näheres folgt im Kapitel »Das Lichtpult«.
      </P>

      <H2>Rigging</H2>

      <P>
        Rigging ist der Überbegriff für alles, woran man Dinge aufhängt. Streng
        genommen zählen Stative nicht dazu, aber wer wird schon so kleinlich
        sein… Im Normalfall wird man Scheinwerfer an Aluminium-Röhren aufhängen,
        die dann quer auf ein Stativ geschraubt werden. Bei grösseren Anlässen
        benutzt man Traversen. Das sind mehrere durch Diagonalstreben versteifte
        Aluröhren, meist drei oder vier. Diese haben eine deutlich höhere
        Traglast, vor allem kann man damit grosse Strecken überwinden und mitten
        über die Bühne Scheinwerfer aufhängen, wo Stative recht fehl am Platz
        wären. Auf grossen Bühnen sieht man kein einziges Stativ, alle Leuchten
        sind an Traversen, die hoch über der Bühne kreuz und quer hängen,
        »geflogen«, sprich oben aufgehängt. Gleiches gilt übrigens für den Ton:
        Es ist sicherlich nicht verboten, Longthrows am Rigg aufzuhängen!
      </P>

      <Image
        fluid={data.truss.childImageSharp.fluid}
        alt="Diverse Trusse in verschiedenen Größen"
      />

      <P>
        Bei grossen Events werden die Traversen selber an der Decke mit Hilfe
        von Kettenaufzügen befestigt. Kleinere Events bauen eine Art Brücke mit
        den Traversen, da kleine Hallen oft keine Möglichkeit bieten,
        tonnenweise Material an die Decke zu hängen. Letzte und unschönste
        Variante sind Bodenlifte, die ähnlich aussehen und funktionieren wie
        Gabelstapler ohne Auto drunter. Vorteil der Varianten eins und drei ist,
        dass man das Truss knapp über dem Boden aufbauen, bestücken und
        verkabeln kann und es dann komplett hochzufahren. Bei der mittleren
        Variante des starren Truss muss man von einer Leiter aus die
        Scheinwerfer hängen und verkabeln, was etwa dreimal so lange dauert und
        zudem gefährlicher und anstrengender ist.
      </P>

      <H2>Verkabelung</H2>

      <P>
        Der Dimmer wird vom Pult aus gesteuert über ein klassisches XLR-Kabel,
        nennt sich beim Licht DMX-Kabel (toll, oder?). Leider wurde mal
        festgelegt, dass der Standard für DMX fünfpolige XLR-Stecker sein
        sollen, obwohl nur drei Pins benutzt werden. Benutzt werden also normale
        XLR-Kabel, an die man an jedem Ende einen Adapter auf 5poliges DMX
        anstöpselt. Man kann also einfach einen Kanal am Multicore nehmen und
        von der Stagebox zu den Dimmern eine XLR-Strippe legen. Einige Leute
        werden mir jetzt aufs Dach steigen, da die Leitungsimpedanz von DMX- und
        XLR-Kabeln nicht identisch ist und durch die Fehlanpassung Reflexionen
        und damit Signalverfälschungen entstehen. Meine Meinung ist, dass man
        diese Effekte kaum bemerkt.
      </P>

      <P>
        Die Platzierung der Dimmer ist ein heikles Thema. Ein idealer Standort
        ist unter oder seitlich neben der Bühne mit unter der Bühne verlegten
        Lastkabeln, da die Tonkabel normalerweise auf der Bühne verlaufen. Jetzt
        noch die Kabel zu den Stativen gezogen, in Mehrfachsteckdosen oder
        direkt in die Bars eingesteckt, Leuchten in die passenden Steckdosen
        einstöpseln – fertig. Werden Traversen benutzt, stellt man die Dimmer in
        die Nähe eines Stativs und zieht von dort alle Kabel auf das Truss.
      </P>
    </Layout>
  )
}
