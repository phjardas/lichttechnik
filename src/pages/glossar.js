import { makeStyles, Typography } from "@material-ui/core"
import React from "react"
import Layout from "../components/layout"
import P from "../components/P"

export default function IndexPage() {
  return (
    <Layout title="Glossar">
      <P>
        In diesem Stichwortverzeichnis werden einige der wichtigsten Begriffe
        der Beleuchtungstechnik beschrieben.
      </P>

      <dl>
        <DT>Achromatische Farben</DT>
        <DD>Farben ohne Buntwerte, also Schwarz, Weiss und alle Grautöne</DD>

        <DT>ACL</DT>
        <DD>»aircraft landing light« – PAR64-Lampe mit Vergenz von 2°.</DD>

        <DT>Babyspot</DT>
        <DD>Kleiner Punktscheinwerfer, z.B. PAR36.</DD>

        <DT>Additive Farbmischung</DT>
        <DD>
          Mischung von unterschiedlich farbigem Licht mit mindestens zwei
          Lichtquellen.
        </DD>

        <DT>Black Out</DT>
        <DD>Alles Licht aus.</DD>

        <DT>Blendenschieber</DT>
        <DD>
          Metallschieber in Profilscheinwerfern und Verfogern, mit denen der
          Lichtstrahl beschnitten werden kann.
        </DD>

        <DT>Brennpunkt</DT>
        <DD>
          Der Punkt, an dem sich bei einer Linse oder einem Reflektor parallel
          einfallende Lichtstrahlen schneiden.
        </DD>

        <DT>Brennebene</DT>
        <DD>
          Die Ebene senkrecht zur optischen Achse, in der der Brennpunkt liegt.
          Blendenschieber, Gobos und Iris befinden sich hier (es kann auch
          mehrere Brennebenen geben).
        </DD>

        <DT>Brennweite</DT>
        <DD>Abstand der Linse oder des Reflektors zum Brennpunkt.</DD>

        <DT>Chaser</DT>
        <DD>Lauflicht.</DD>

        <DT>Dichroitische Filter</DT>
        <DD>
          Interferenzfilter, die im Gegensatz zu normalen Filtern das nicht
          durchgelassene Licht nicht absorbieren, sondern reflektieren. Sie
          werden nicht so heiss und liefern schärfere Farben.
        </DD>

        <DT>Diffusionsfilter</DT>
        <DD>
          Tüllgewebe, das zur Zerstreuung des Lichts in den Strahl eingebracht
          wird. Auf der Bühne meistens Frostfilter genannt.
        </DD>

        <DT>Dimmer</DT>
        <DD>
          Gerät zur Verstellung der Helligkeit von elektrischen Lichtquellen.
          Wird normalerweise digital über das DMX-Protokoll gesteuert.
        </DD>

        <DT>DIN</DT>
        <DD>Deutsches Institut für Normung e.V.</DD>

        <DT>DMX 512</DT>
        <DD>
          »Digital MultipleXing« – International anerkannter Standard zur
          digitalen Übermittlung von Steuersignalen. Über ein 5poliges XLR-Kabel
          werden bis zu 512 Werte digital und daher verzögerungsfrei übertragen.
          Die Aulösung beträgt 8 Bit pro Kanal, das entspricht 256
          Helligkeitsstufen. DMX wird auch zur Steuerung von Moving Heads,
          Scannern, Farbwechslern und allerlei anderen Dingen verwendet.
          Wichtig: Obwohl das Standard-DMX-Kabel 5polig ist, sind nur drei Adern
          belegt. Es kann also über einen Adapter auf ein 3poliges XLR-Kabel
          gepatcht werden, von denen normalerweise genügend rumliegen.
          Insbesondere kann zur Übertragung vom Pult zur Bühne das Ton-Multicore
          benutzt werden.
        </DD>

        <DT>Ellipsenspiegelscheinwerfer</DT>
        <DD>Bezeichnung für einen Profilscheinwerfer.</DD>

        <DT>EVG</DT>
        <DD>Bezeichnung für Elektrisches VorschaltGerät.</DD>

        <DT>Farbenlehre</DT>
        <DD>
          Theorie über das Verstehen der Farben. Angefangen von Newton über
          Goethe ist die heute allgemein akzeptierte Theorie diejenige von
          Harald Küpper.
        </DD>

        <DT>Farbenraum</DT>
        <DD>
          Definition von Farben nach Farbton (»hue«), Sättigung (»saturation«)
          und Helligkeit (»brightness«).
        </DD>

        <DT>Farbfilter</DT>
        <DD>
          Meistens aus Kunststoff gefertigte, farbige Folie, die in den
          Strahlengang montiert wird, um das austretende Licht einzufärben.
        </DD>

        <DT>Farbort</DT>
        <DD>
          Farbort einer Lichquelle, bezogen auf den Planckschen Kurvenzug mit
          den Juddschen Geraden und den x-und y- Koordinaten. (sorry, das musste
          einfach rein)
        </DD>

        <DT>Farbperspektive</DT>
        <DD>
          Einfluss von Farben in bezug auf die Tiefenwirkung: Dunkle und kalte
          Farben bestimmen die Tiefe, helle und warme Farben den Vordergrund.
        </DD>

        <DT>Farbtemperatur</DT>
        <DD>
          Wird in Kelvin gemessen. Bezeichnet allgemein die Helligkeit und
          Weissfarbe einer Lampe. Kunstlichtlampen brennen unter 5000K,
          Tageslichtlampen darüber. Je heisser eine Lampe brennt, desto weisser
          ist ihr Licht. Kälteres Licht wirkt rötlicher (Glühen).
        </DD>

        <DT>Fluter</DT>
        <DD>
          Auch Strahler. Einfachster Scheinwerfer, meist ein Rinnenspiegel mit
          einem Halogenbrennstab.
        </DD>

        <DT>Fokussieren</DT>
        <DD>Die Schärfe einstellen.</DD>

        <DT>Fresnel-Linse</DT>
        <DD>
          Auch Stufenlinse. Linse, bei der die Brechung der Lichtstrahlen auf
          einzelne, sägezahnförmig angeordnete Ringe aufgeteilt ist.
        </DD>

        <DT>Fussrampe</DT>
        <DD>Lichposition vorne an der Bühnenvorderkante.</DD>

        <DT>Gaffer</DT>
        <DD>
          Verantwortlicher Beleuchter für Aufbau und Betrieb und Chef der
          Mannschaft. Jetzt wisst ihr endlich auch, woher der Name des berühmten
          Gaffer-Tapes kommt.
        </DD>

        <DT>Gobo</DT>
        <DD>
          Auch Vignette. Aus hitzefestem Blech oder Glas hergestellte Scheibe,
          mit der jede Form von Lichtbegrenzung zu erzielen ist. Werden
          hauptächlich in Scannern und Moving Heads verwendet.
        </DD>

        <DT>Grundfarben</DT>
        <DD>
          Elementare Farben. Man unterscheidet drei Arten von Grundarten.
          Urfarben: Violettblau, Grün, Orangerot (Farben der Sehzapfen im Auge).
          Additive Grundfarben: Orangerot, Grün, Violettblau (RGB). Subtraktive
          Grundfarben: Cyanblau, Magentarot, Gelb (CMY).
        </DD>

        <DT>Harting</DT>
        <DD>
          Herstellerfirma einer mehrpoligen Steckerverbindung, bei der mehrere
          Lastkabel in einem Multicore geführt werden.
        </DD>

        <DT>Intercom</DT>
        <DD>
          Hör- und Sprechverbindung zwischen einzelnen Bedienpositionen, z.B.
          zwischen Beleuchter, Tontechniker, Inspizienz und Regie.
        </DD>

        <DT>Interferenz</DT>
        <DD>Verstärken oder Verschlucken von Wellen einer Frequenz.</DD>

        <DT>Irisblende</DT>
        <DD>
          Mechanische Lamellen, die einen Öffnungswinkel stufenlos verkleinern
          oder vergössern.
        </DD>

        <DT>Kalte Farben</DT>
        <DD>Blau mit allen Zwischentönen bis zu Violett.</DD>

        <DT>Komplementärfarben</DT>
        <DD>
          Farbe und ihre Ergänzungsfarbe, die beim Mischen Weiss oder Schwarz
          ergeben.
        </DD>

        <DT>Konversionsfilter</DT>
        <DD>Folien, die künstliches Tageslicht dem Glühlicht anpassen.</DD>

        <DT>Kunstlicht</DT>
        <DD>Künstliches Licht mit Farbtemperatur unter 5000K.</DD>

        <DT>Magazin</DT>
        <DD>Halterung vor dem Scheinwerfer für Filter und Torblenden.</DD>

        <DT>Moving Head</DT>
        <DD>
          Multifunktionsscheinwerfer, bei dem das gesamte Gehäuse auf einem
          beweglichen Gestell montiert ist.
        </DD>

        <DT>Optische Achse</DT>
        <DD>
          Mittelachse einer optischen Anordnung, z.B. Glühfaden – Irisblende –
          Linsenmitte.
        </DD>

        <DT>PAR-Lampe</DT>
        <DD>
          »parabolic aluminized reflector« – Lampe, die mit einem parabolischen
          Reflektor fest verbunden ist. Robust und billig, in unterschiedlichen
          Leistungs- und Vergenzvarianten erhältlich.
        </DD>

        <DT>Shutter</DT>
        <DD>
          Auch Jalousie. Gerät zur Verdunkelung des Lichtstrahls, wird bei nicht
          dimmbaren Scheinwerfern verwendet, insbesondere bei Moving Heads und
          Scannern.
        </DD>

        <DT>Spotlight</DT>
        <DD>Konzentrierter Lichtstrahl.</DD>

        <DT>Stufenlinse</DT>
        <DD>Fresnellinse.</DD>

        <DT>Subtraktive Farbmischung</DT>
        <DD>Mischung von Licht mit nur einer Lichtquelle.</DD>

        <DT>Tageslicht</DT>
        <DD>
          Künstliches Licht, welches dem natürlichem Licht ähnlich ist mit
          Farbtemperatur über 5000K.
        </DD>

        <DT>Thyristor</DT>
        <DD>Halbleiterbauelement zum Schalten starker elektrischer Ströme.</DD>

        <DT>Torblende</DT>
        <DD>
          Zwei- oder vierflügelige schwenkbare Metallflächen, die in einem
          Rahmen zusammengefasst sind und in das Magazin eines Scheinwerfers
          geschoben werden.
        </DD>

        <DT>Tüll</DT>
        <DD>Feinmaschiges Drahtgeflecht zur Lichtreduzierung.</DD>

        <DT>VDE</DT>
        <DD>
          Verband Deutscher Elektrotechniker. Verband zur Erstellung von
          gesetzlich anerkannten elektrischen Sicherheitsvorschriften
        </DD>

        <DT>Vergenz</DT>
        <DD>Öffnungswinkel von optischen Strahlen.</DD>

        <DT>VStättV</DT>
        <DD>
          Versammlungsstättenverordnung – Bauaufsichtliche Vorschriften für
          Theater, Versammlungsstätten und ähnliche bauliche Anlagen.
          Zusammengefasst unter DIN 18600.
        </DD>
      </dl>
    </Layout>
  )
}

const useStyles = makeStyles(({ spacing }) => ({
  dt: {
    marginTop: spacing(2),
    fontWeight: 500,
  },
  dd: {
    paddingLeft: spacing(4),
  },
}))

function DT({ children }) {
  const classes = useStyles()
  return (
    <Typography component="dt" className={classes.dt}>
      {children}
    </Typography>
  )
}

function DD({ children }) {
  const classes = useStyles()
  return (
    <Typography variant="body2" component="dd" className={classes.dd}>
      {children}
    </Typography>
  )
}
