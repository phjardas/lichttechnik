import React from "react"
import H2 from "../components/H2"
import Layout from "../components/layout"
import P from "../components/P"
import { Link } from "@material-ui/core"

export default function IndexPage() {
  return (
    <Layout title="Dankeschön!">
      <P>
        Viele Bilder aus diesem Turorial stammen aus dem Mietkatalog der{" "}
        <Link href="http://www.procon-online.de/">Procon MultiMedia AG</Link>,
        praktisch alle Abbildungen von Scheinwerfern und viele Fotos von Bühnen.
      </P>

      <P>
        Zusätzliche Bühnenfotos stammen von der{" "}
        <Link href="http://www.brasser.ch/">Firma Brasser</Link> in Zitzers,
        Schweiz.
      </P>

      <P>
        Die gerenderten Bühnen habei ich teilweise mit{" "}
        <Link href="http://www.povray.org/">POV-Ray</Link> modelliert und
        gerendert. Die CAD-Zeichnungen und einige gerenderte Bühnen wurden mit{" "}
        <Link href="http://www.prolight.com.pl/_en/projekty_wysiwyg.php">
          WYSIWYG
        </Link>{" "}
        erstellt.
      </P>

      <P>
        Das Glossar ist stark an dasjenige von Prof. Max Keller aus seinem Buch{" "}
        <Link href="http://www.amazon.de/Faszination-Licht-Max-Keller/dp/379133235X/">
          »Faszination Licht«
        </Link>{" "}
        angelehnt. Aus demselben Buch stammen auch die meisten meiner
        theoretischen Kenntnisse über Beleuchtung und einige wenige Bilder.
      </P>

      <H2>Das Ende</H2>

      <P>
        Vielen Dank fürs Durchhalten bis hierher. Für Fragen, Anregungen und
        Kritik bin ich selbstverständlich immer zu haben.
      </P>

      <P>
        Wie man untenstehender Creative-Commons-Lizenz entnehmen kann, darf
        dieses Tutorial frei verwendet und verbreitet werden, sofern es sich
        nicht um eine kommerzielle Anwendung handelt. Inhaltliche Veränderungen
        wie zum Beispiel Auszüge oder Veränderungen des Textes sind hingegen
        nicht gestattet. Für Bildungseinrichtungen vergebe ich diese Genehmigung
        im Allgemeinen nach einer kurzen Anfrage an{" "}
        <Link href="mailto:philipp@jardas.de">philipp@jardas.de</Link>.
      </P>

      <P>Möge dir ein Licht aufgehen!</P>
    </Layout>
  )
}
