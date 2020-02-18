import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import H2 from "../components/H2"
import Image from "../components/image"
import Layout from "../components/layout"
import P from "../components/P"

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      tse: file(relativePath: { eq: "tse.jpg" }) {
        childImageSharp {
          fixed(width: 301, height: 219) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      buehne02: file(relativePath: { eq: "buehne02.png" }) {
        childImageSharp {
          fixed(width: 259, height: 191) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      buehne03: file(relativePath: { eq: "buehne03.png" }) {
        childImageSharp {
          fixed(width: 297, height: 190) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      buehne04: file(relativePath: { eq: "buehne04.png" }) {
        childImageSharp {
          fixed(width: 216, height: 179) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      beispiel01: file(relativePath: { eq: "beispiel01.jpg" }) {
        childImageSharp {
          fixed(width: 309, height: 187) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      beispiel02: file(relativePath: { eq: "beispiel02.jpg" }) {
        childImageSharp {
          fixed(width: 353, height: 188) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      beispiel03: file(relativePath: { eq: "beispiel03.jpg" }) {
        childImageSharp {
          fixed(width: 361, height: 182) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      beispiel04: file(relativePath: { eq: "beispiel04.jpg" }) {
        childImageSharp {
          fixed(width: 278, height: 210) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      beispiel05: file(relativePath: { eq: "beispiel05.jpg" }) {
        childImageSharp {
          fixed(width: 444, height: 197) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      beispiel06: file(relativePath: { eq: "beispiel06.jpg" }) {
        childImageSharp {
          fixed(width: 301, height: 146) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      beispiel07: file(relativePath: { eq: "beispiel07.jpg" }) {
        childImageSharp {
          fixed(width: 145, height: 144) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      beispiel08: file(relativePath: { eq: "beispiel08.jpg" }) {
        childImageSharp {
          fixed(width: 144, height: 144) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      floorspot: file(relativePath: { eq: "floorspot.png" }) {
        childImageSharp {
          fixed(width: 114, height: 124) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      backdrop: file(relativePath: { eq: "backdrop.jpg" }) {
        childImageSharp {
          fixed(width: 253, height: 207) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout title="Beispiele">
      <P>
        Als Lichttechniker stehst du nicht über der Show, du stehst auch nicht
        neben oder vor der Show. Vielmehr bist du Teil der Show. Eine gut
        durchdachte Aufführung wird schon in der Konzeption Lichtdesign
        beinhalten, insbesondere bei Tänzen, Theater und speziellen Liedern. Das
        Licht sollte nicht einfach planlos draufgesetzt wirken, sondern als Teil
        der Gestaltung wirken. Soviel zur Theorie, klappt ja eh nicht…
      </P>
      <H2>Positionierung</H2>
      <Image
        fixed={data.tse.childImageSharp.fixed}
        alt="Mit wenig Material einiges erreichen: Zwei 4bars, zwei Fluter und ein Moonflower (TEN SING Ebdorf)"
        float="right"
      />
      <P>
        Lichtdesign besteht aus zwei Teilen: Einerseits der Positionierung der
        Scheinwerfer, andererseits der Konzeptionierung der Show. Beides geht
        bei grossen Shows Hand in Hand, bei TEN SING hast du bei beiden Punkten
        jedoch wenig Möglichkeiten. Hast du das Material unserer Beispielbühne
        (4x SL, 8x PAR64), bleiben dir nicht viele Alternativen ausser der schon
        beschriebenen. Kannst du jedoch aufgrund ausgiebiger finanzieller
        Unterstützung auf mehr Leuchten umsteigen, gibt es doch einige nette
        Dinge, wie man kreativ Licht aufstellen kann. Ich werde jetzt
        progressive eine grössere Bühne aufbauen und zeigen, wo man neue
        Scheinwerfer sinnvoll unterbringt. Zu manchen gibts als Extra-Gimmick
        noch ein paar gerenderte Bildchen dazu.
      </P>
      <H2>Bühne 1</H2>
      <P>
        2 Stative mit je 2 1kW-Stufenlinsen
        <br />
        2 Stative mit je 1 6bar PAR64
        <br />
        Insgesamt 12 Leuchten
      </P>
      <P>
        Diese Bühne kennt ihr schon. Jetzt wollen wir mal ein bisschen was
        dazupacken.
      </P>
      <H2>Bühne 2</H2>
      <Image fixed={data.beispiel01.childImageSharp.fixed} float="right" />
      <P>
        10m Truss
        <br />
        2x Kurbelstativ
        <br />
        3x 6bar PAR64
        <br />
        Frontlicht s.o.
        <br />
        Insgesamt 22 Leuchten
      </P>
      <P>
        Jetzt haben wir statt den Stativen hinten eine Traverse hingestellt und
        drei 6bars dran, macht 18 Leuchten hinten. Ein 6bar ist 3.05m lang,
        sollte also auf 10m Traverse passen. Das Frontlicht bleibt vorerst
        gleich wie bisher.
      </P>
      <P>
        An dem gerenderten Bild kann man auch erkennen, dass ich – obwohl hinten
        18 Leuchten hängen – nur zwei Farben verwende. Das ist Geschmackssache,
        allerdings macht es deutlich mehr Effekt, mit wenigen Farben zu
        arbeiten, die die Bühne dafür aber komplett in Licht tauchen können.
      </P>
      <P>
        Jetzt wäre es an der Zeit, ein grösseres Lichtpult mit 24 Kanälen
        aufzufahren.
      </P>
      <H2>Bühne 3</H2>
      <P>
        Wie oben, zusätzlich
        <br />
        18x Scroller
        <br />
        Insgesamt 22 Leuchten
      </P>
      <P>
        Jetzt fahren wir neue Gechütze auf. Bevor wir die Bühne mit mehr
        Scheinerfern zustopfen, leisten wir uns 18 sogennante Scroller. Das sind
        Magazine, in denen im Normalfall 20 Farbfilter aneinandergeklebt auf
        zwei Rollen gewickelt sind. Diese kann man dann per DMX ansteuern,
        wodurch jede unserer 18 Leuchten 20 mögliche Farben bekommt. Damit kann
        man schon richtig gutes Design machen, da man bei jeder Farbstimmung die
        volle Anzahl Scheinwerfer benutzen kann.
      </P>
      <P>
        Eine sehr preiswerte alternative zu Farbwechslern bieten die in letzter
        Zeit immer beliebter werdenden LED-Scheinwerfer. Zwei 4-Bars solcher
        Scheinwerfer versorgen eine Bühne so effizient wie acht Kannen mit
        Scrollern. Mit einigen zusätzlichen Vorteilen. Die Leistungsaufnahme der
        kompletten acht LED-Scheinwerfer ist nicht einmal so hoch wie die eines
        einzelnen PAR 64. Die LEDs strahlen kaum Hitze ab, es wird also nicht so
        heiß auf der Bühne. Die Lebensdauer von Leuchtdioden übersteigt
        diejenige von Glühlampen um Größenordnungen, es entstehen also kaum
        Wartungskosten. Zu guter Letzt spart man sich den Dimmer, da die
        Scheinwerfer selbst direkt über DMX angesprochen werden. Alles in allem
        werden LEDs die Arbeitstiere der Zukunft sein.
      </P>
      <P>
        Sollte dein TEN SING in nächster Zeit die Anschaffung von Licht erwägen,
        sind LEDs mit Sicherheit die Investition der Wahl. Zumal man mit
        fertigen Paketen noch einiges mehr sparen kann. Eine showtaugliche
        Ausrüstung mit zwei 4-Bars mit je einem Stativ, acht LED-Scheinwerfern,
        Steuerpult und Verkabelung bekommt man schon für deutlich unter EUR
        500,-.
      </P>
      <H2>Bühne 4</H2>
      <Image fixed={data.buehne02.childImageSharp.fixed} float="right" />
      <P>
        2x 10m Truss
        <br />
        4x 6bar PAR64 (mit oder ohne Scroller)
        <br />
        6-8x Stufenlinse 500W
      </P>
      <P>
        Vorne ziehen wir jetzt auch noch eine Traverse entlang, an der wir
        doppelt so viele Stufenlinsen aufhängen wie vorher, dafür etwas
        schwächere. Diese Bühne eignet sich hervorragend für ausgefeilte
        Theaterstücke, die viel mit dem Raum der Bühne und verschiedenen
        Stimmungen arbeiten. Auch kann man jetzt gezielt den Chor, die Band und
        den Raum der Solisten beleuchten. Vorteil: bei Instrumentalstücken ist
        nur die Band beleuchtet, bei Stücken a capella bekommt nur der Chor sein
        Licht. Präzision beim Einleuchten wird wichtiger, auch eine gute Planung
        der Funktion der Scheinwerfer. Hier würde ich zwei für den Chor, zwei
        für die Band hernehmen und mit den restlichen Leuchten den restlichen
        Bühnenbereich abdecken. Zusätzlich hängen wir hinten noch ein viertes
        6bar rein, ist aber mit Scrollern absolut nicht notwendig.
      </P>
      <Image fixed={data.beispiel02.childImageSharp.fixed} float="right" />
      <P>
        Das ist eigentlich die perfekte kleine TEN SING-Bühne. Viel mehr braucht
        es eigentlich nicht, weniger ist Anmassung für jeden anspruchsvollen
        Techniker. Wichtiger als Scanner oder sonstigen Firlefanz aufzuhängen
        ist es, diesen Standard zu erreichen, der bei grösseren Bühnen natürlich
        dementsprechend angepasst werden muss.
      </P>
      <H2>Bühne 5</H2>
      <P>
        wie oben, zusätzlich:
        <br />
        1x 4bar PAR64
        <br />
        div. einzelne PAR64
      </P>
      <Image
        fixed={data.floorspot.childImageSharp.fixed}
        alt="PAR64 shortnose floormount"
        float="right"
      />
      <P>
        Schon sind wir bei den Feinheiten. Das neue 4bar wird auf den Boden
        hinten an der Rückseite der Bühne gestellt und ein Fächer an die Wand
        gebildet. Die Farbe sollte sich nach der Beschaffenheit und Farbe des
        Hintergrunds richten, besonders schön sieht diese Konstruktion auf
        Vorhängen aus, die grosse Falten werfen. Die einzelnen PAR64 kann man
        mit floor-mount ausgerüstet (ein zweiter Bügel zum
        Auf-den-Boden-Stellen) an verschiedenen Plätzen zum Einsatz bringen.
      </P>
      <Image fixed={data.backdrop.childImageSharp.fixed} float="left" />
      <P>
        Eine andere Verwendungsmöglichkeit ist, die PAR64 am Boden die Wände
        entlang zu verteilen, um einen ähnlichen Effekt wie beim 4bar zu
        erreichen. Man kann aber auch das Schlagzeug chique einfärben und
        beblinken.
      </P>
      <P>
        Zwei Folien kann man mit Kreppklebeband (nicht Gaffer)
        nebeneinanderkleben und vor einen Fluter montieren, der dann vom Boden
        aus die Rückwand beleuchtet. Ganz elegant wäre es, das mit Scrollern zu
        realisieren, so dass man die Rückwand auch in diverse Farben tauchen
        kann.
      </P>
      <P>
        Wie wärs noch mit PAR36 Pinspots? Kosten fast nichts, machen aber
        geniales Spitzlicht!. Entdecke die Möglichkeiten!
      </P>
      <H2>Bühne 6</H2>
      <Image fixed={data.buehne03.childImageSharp.fixed} float="right" />
      <Image fixed={data.beispiel03.childImageSharp.fixed} float="right" />
      <P>
        Frontlicht s.o.
        <br />
        3x 3m Truss
        <br />
        2x 2m Truss
        <br />
        2x T-Stück
        <br />
        2x Kettenlift
        <br />
        3x 6bar PAR64
        <br />
        2x 4bar PAR64
      </P>
      <P>
        Licht, das von der Mitte der Bühne kommt, ist immer ein guter Effekt.
        Dafür bauen wir mit unserem Traversenmaterial eine Konstruktion, die
        Aufhängung in mittlerer Höhe erlaubt. Um diese Bühne anständig aufbauen
        zu können, sollten wir spätestens jetzt auf Kettenlifte umsteigen und
        das Material fliegen. Kettenlifte werden an der Oberseite der Traverse
        befestigt, das Ende ihrer Ketten an einem stabilen Aufhängepunkt an der
        Decke festgemacht. So kann man das Material am Boden aufbauen, -hängen
        und verkabeln und dann am Stück hochfahren. Für unsere Grössenordnung
        muss man keine motorisierten Aufzüge nehmen sondern kann die billigeren
        muskelgetriebenen Varianten benutzen.
      </P>
      <H2>Bühne 7</H2>
      <P>
        Frontlicht s.o.
        <br />
        1x 12m Truss
        <br />
        3x 6bar PAR64
        <br />
        4x MAC500
      </P>
      <Image
        fixed={data.beispiel04.childImageSharp.fixed}
        alt="Solistenbeleuchtung: vier Profiler und ein Verfolger"
        float="left"
      />
      <P>
        Wir gehen ganz andere Wege. Euer TEN SING hat aus einem schweizer
        Schwarzgeldkonto einen dicken Zustupf bekommen und ihr beschliesst, der
        neuen Technik ihren Tribut zu zollen. Das hintere Truss wird neu
        bestückt: drei 6bars und vier Moving Head Profile, beispielsweise Martin
        MAC500 oder die billigeren und kleineren und leichteren MAC250,
        alternativ auch Scanner. Mit diesen Multifunktionsscheinwerfern kann man
        dann endlich richtig schönes Lichtdesign machen. Moving head profile
        sind grob gesagt auf drehbare Gestelle montierte Profilscheinwerfer.
        Zusätzlich bekommen sie einen Farbwechler einmontiert; eine Iris, mit
        der man den Strahl verkleinern kann; dazu sogennante »Gobos« oder
        »Vignetten«, kleine Metallscheiben, in die man Muster einstanzen kann,
        die dem Strahl dann eine entsprechende Form geben. Und weils so schön
        ist, ist das alles noch (incl. der beweglichen Halterung) per
        Fernsteuerung bedienbar, was eigentlich den besonderen Reiz ausmacht.
        Das alles zusammen rechtfertigt durchaus den Namen
        »Multifunktionsscheinwerfer« und eröffnet vollkommen neue Möglichkeiten,
        insbesondere ist es jetzt möglich, Lichtstrahlen zu bewegen.
      </P>
      <Image fixed={data.beispiel05.childImageSharp.fixed} />
      <P>
        Mit einem normalen Lichtpult lassen sich Multifunktionsscheinwerfer nur
        sehr mühsam bewältigen; es muss ein neues her, z.B. ein MA
        Scancommander, auch einer der meistbenutzten kleinen Controller. Jeder
        MAC500 braucht normalerweise 14 Kanäle zur Steuerung, wir wären jetzt
        also (mit 18 Scrollern) bei 92 benutzten Kanälen. Ein DMX-Kabel kann
        aber bis zu 512 Kanäle übertragen, es besteht also noch keine Gefahr zur
        Überlastung.
      </P>
      <H2>Bühne 8</H2>
      <Image fixed={data.buehne04.childImageSharp.fixed} float="left" />
      <P>
        Frontlicht s.o.
        <br />
        Halber Traversenkreis, Durchmesser 6m
        <br />
        8x MAC500
        <br />
        5x MAC600
      </P>
      <P>
        Nun kommen wir zur letzten Bühne, die auch eher experimentellen
        Charakter hat. Neben den moving head profile Leuchten gibt es auch
        moving head wash. Das sind - wieder grob gesagt - Stufenlinsen statt
        Profiler. Sie geben also einen breiten, weich begrenzten Strahl ab und
        sind vor allem als Ergänzung / Ersatz für die PAR64 gedacht. Während die
        MAC500 ein Farbrad mit neun verschiedenen Farben besitzen, ist es in
        MAC600 dank subtraktiver Mischung möglich, über 16 Millionen (sic!)
        Farben zu mischen. Man kann eine komplett rot eingefärbte Bühne innert
        fünf Minuten in eine blaue Bühne übergehen lassen, ohne dass jemand
        etwas merkt.
      </P>
      <Image fixed={data.beispiel06.childImageSharp.fixed} />
      <P>
        Wir stellen eine runde Traverse hin, die man sehr gut verankern muss
        (nicht gezeichnet), und hängen einige Leuchten rein, zusätzlich noch
        drei auf den Boden, was für Moving Heads eine äusserst gute Position
        ist.
      </P>
      <Image fixed={data.beispiel07.childImageSharp.fixed} float="right" />
      <Image fixed={data.beispiel08.childImageSharp.fixed} float="right" />
      <P>
        Zur Steuerung kann man hier noch den Scancommander nehmen, bei mehr als
        16 Moving Heads gibt der aber den Geist auf und man muss auf schwereres
        Gerät ausweichen.
      </P>
      <H2>Intelligentes vs. konventionelles Licht</H2>
      <P>
        Wie ihr seht, habe ich die Bühne erst mit PAR64 von oben bis unten
        vollgestopft, bevor ich mit Moving Heads angekommen bin. Das hat seinen
        Grund, da man für den Wert eines einzelnen Moving Heads mindestens sechs
        normale Kannen bekommt, wenn nicht mehr. Bevor eure Bühne also in
        Dunkelheit verschwindet, nur weil ihr euch unbedingt vier MACs besorgen
        musstet, sorg dafür, dass ihr genug Licht im Hintergrund habt. Hier geht
        es nicht um die Anzahl Scheinwerfer total, sondern pro Farbe. Um ein
        anständiges Lichtdesign machen zu können, braucht man mehr als zwei
        Kannen pro Farbe, damit man die Bühne einfärben kann.
      </P>{" "}
    </Layout>
  )
}
