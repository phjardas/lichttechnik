import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import H2 from "../components/H2"
import Image from "../components/image"
import Layout from "../components/layout"
import P from "../components/P"

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      frontlicht: file(relativePath: { eq: "frontlicht.jpg" }) {
        childImageSharp {
          fixed(width: 371, height: 304) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      frontal_seitlich: file(relativePath: { eq: "frontal_seitlich.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 552) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      effekt_frontlicht: file(relativePath: { eq: "effekt_frontlicht.jpg" }) {
        childImageSharp {
          fixed(width: 253, height: 189) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      akteure: file(relativePath: { eq: "akteure.jpg" }) {
        childImageSharp {
          fixed(width: 228, height: 178) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      buehne01: file(relativePath: { eq: "buehne01.png" }) {
        childImageSharp {
          fixed(width: 307, height: 202) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      einleuchten: file(relativePath: { eq: "einleuchten.png" }) {
        childImageSharp {
          fixed(width: 298, height: 211) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      safety: file(relativePath: { eq: "safety.png" }) {
        childImageSharp {
          fixed(width: 126, height: 149) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout title="Beleuchtungstechniken">
      <P>
        Beleuchtung kommt aus dem Theater, woher auch sonst. Alle guten
        Beleuchter haben mal im Theater gearbeitet, oder zumindest mal ein
        Praktikum dort gemacht. Wenn einer noch nie ein Theater von innen
        gesehen hat, sieht man das auch sofort am Lichtdesign. Es lohnt sich,
        ein paar mal in die Oper oder ins Theater zu gehen und sich auf das
        Lichtdesign zu konzentrieren. Vielleicht kannst du auch mal ein ein-
        oder zweiwöchiges Praktikum im Schauspielhaus machen. Ich garantiere
        dir: Danach hast du plötzlich immens mehr Ahnung von Licht als du dir
        jemals hast träumen lassen. Zur Erinnerung: Die hier vorgestellten
        Beleuchtungskonzepte treffen so nur für kleine Showbühnen zu. Ich
        unterteile in Front- und Effektlicht, was übrigens von mir erfundene
        Begriffe sind. Im Theater unterscheidet man Hauptlicht, Grundlicht,
        Führungslicht, Aufhelllicht, Baunzlicht, Dreiviertelgegenlicht,
        Ergänzungslicht, Fülllicht, Akzentlicht, Spitzlicht, Reflexlicht und
        noch einige Lichtarten mehr.
      </P>
      <H2>Frontlicht</H2>
      <Image
        fixed={data.frontlicht.childImageSharp.fixed}
        alt="Unsere Beispielbühne, nur mit Frontlicht"
      />
      <P>
        Ziel Nummer eins der Beleuchtung ist: Man soll was sehen. Effekte und
        Selbstdarstellung des Beleuchters kommen weit später. Nochmal: Das
        wichtigste überhaupt ist, dass man das Bühnengeschehen mitbekommt,
        gerade bei TEN SING, wo der Zuschauer noch viel mehr an den einzelnen
        Idividuen interessiert ist. Deswegen erlasse ich hiermit ein
        kaiserliches Dekret, das allen Lichttechnikern fortan verbietet, farbige
        Scheinwerfer von vorne aufzuhängen (Ausnahmen bedürfen schriftlicher
        Genehmigung mit dreifachem Durchschlag mit vierwöchiger Vorlauffrist und
        erheblicher Bearbeitungsgebühr, einzuwerfen an der grünen Tonne am
        Eingang). Es ist ganz einfach: Ich will keine grünen oder blauen
        Gesichter sehen. Weisse T-Shirts sind weiss, nicht rot. Die Dekoration
        hat nicht umsonst Farben. Also ist das Licht, das von vorne kommt
        schlicht und ergreifend weiss. Um die Farbe kümmern wir uns im nächsten
        Kapitel.
      </P>
      <P>
        Was ist einer der grössten Unterschiede zwischen Porträt-Aufnahmen
        daheim gemacht und Porträt-Aufnahmen im Fotostudio gemacht? Die
        Beleuchtung. Ganz genau die Rich- tung, aus der das Licht kommt.
        Beleuchtet man ein Gesicht frontal, hat man keine Schatten, da das Licht
        aus derselben Richtung kommt, aus der man blickt. Das Gesicht (und auch
        Körper und Kleidung und alle anderen Objekte) wirken flach und
        unplastisch. Das Gegenrezept: Von der Seite beleuchten. Dadurch bekommen
        Objekte Schattierungen und gewinnen dadurch an Plastizität. Richtlinie
        sind die berühmten 45°: Einfallende Lichtstrahlen sollten stets einen
        Winkel von 35°-45° zum Beobachter haben. Der ideale Standort für
        Scheinwerfer wäre ein Halbkreis über der Bühne, um 45° nach vorne
        gekippt (kann sich das jetzt jemand vorstellen?). Meist ist es aber
        schwierig, so etwas zu konstruieren, deswegen wird Frontlicht meist auf
        Stativen schräg von vorne oder an Traversen vorne über der Bühne
        platziert. Lieber etwas zu weit aussen als zu weit innen und so hoch wie
        möglich. Je höher die Scheinwerfer, desto besser kann man Personen
        ausleuchten, ohne den Hintergrund unnötigerweise auzuhellen. Dadurch
        setzen sich Objekte auf der Bühne deutlich vom normalerweise unwichtigen
        Hintergrund ab.
      </P>
      <Image
        fluid={data.frontal_seitlich.childImageSharp.fluid}
        alt="Links frontal beleuchtet, rechts seitlich mit zwei Scheinwerfern"
      />
      <H2>Effektlicht</H2>
      <Image
        fixed={data.effekt_frontlicht.childImageSharp.fixed}
        alt="Unsere Beispielbühne mit Front- und Effektlicht"
        float="left"
      />
      <P>
        Ziel Nummer zwei der Beleuchtung ist: Show machen. Das Prinzip von
        Effektlicht ist einfach: Bei beleuchtendem Licht ist die Stelle von
        Bedeutung, an der der Lichtstrahl auf Objekte auftrifft, da diese
        schlussendlich hell werden. Bei Effektlicht hingegen spielt der
        Auftreffpunkt keine Rolle, vielmehr interessiert der Strahl selber. Und
        das ist auch die einzige Aufgabe, die Nebel auf der Bühne hat:
        Lichtstrahlen sichtbar machen. Einnebeln im herkömmlichen Sinne macht
        man beim Militär, aber nicht auf einer Bühne auf der auch noch ein Chor
        steht. Schwacher Nebel ist unheimlich freundlich, denn man sieht im
        Dunst nur diejenigen Lichtstrahlen, die in Richtung des Beobachters
        zeigen.
      </P>
      <Image
        fixed={data.akteure.childImageSharp.fixed}
        alt="So sieht das dann für die Akteure aus"
        float="right"
      />
      <P>
        Und hier sind wir bei Effektlicht: Farbige Scheinwerfer werden
        prinzipiell hinter der Bühne aufgestellt und zeigen in Richtung des
        Publikums. So sieht man die Strahlen im Nebel, während das weisse
        Frontlicht vom Beobachter wegzeigt und seine Strahlen somit unsichtbar
        sind. Umgekehrt für die Akteure auf der Bühne, sie sehen normalerweise
        nur eine weisse Wand vor sich, ob des starken weissen Lichts, das auf
        sie leuchtet. Aber die Show ist ja für das Publikum und nicht für die
        Akteure.
      </P>
      <H2>Nebel</H2>
      <P>
        … ist eigentlich der falsche Ausdruck, »Dunst« würde viel besser passen.
        Der Nebel als solches interessiert ja gar nicht. Im Idealfall wäre der
        Nebel vollkommen unsichtbar und würde nur da aufleuchten, wo er von
        einem Lichtstrahl durchkreuzt wird. Dies kann man am besten durch eine
        regelbare Nebelmaschine realisieren, die im Gegensatz zu
        Discokomplettzuneblern einen kontinuierlichen schwachen Ausstoss haben,
        nicht viel mehr, als drei oder vier Zigaretten produzieren. Darüber
        kommt ein Ventilator, der den Nebel auf der Bühne verteilt.
      </P>
      <H2>Ein Beispiel</H2>
      <Image fixed={data.buehne01.childImageSharp.fixed} float="right" />
      <P>
        Wir nehmen als Mindestausstattung zwei Stative mit je zwei
        1000W-Stufenlinsen dran und zwei Stative mit je einem 6bar PAR64
        Raylight oder CP60. Die Aufstellung kannst du der Skizze entnehmen, das
        Publikum sitzt auf dieser Skizze unten. Wichtige Punkte: Das Frontlicht
        kommt eher von der Seite als von vorne. Das Effektlicht ist im hinteren
        Teil und zeigt Richtung Publikum, idealerweise steht es hinter der
        Bühne, ansonsten seitlich daneben. Auch das Effektlicht sollte so hoch
        wie möglich gekurbelt werden. Und wenns sein muss, darf man auch die
        leidigen Fluter statt der Stufenlinsen nehmen.
      </P>
      <H2>Ausleuchten</H2>
      <P>
        Beim Frontlicht gilt: Je weiter innen ein Scheinwerfer steht, desto
        weiter auf die entgegengesetzte Seite muss er leuchten. Leuchten, die
        ganz aussen stehen, beleuchten die eigene Bühnenhälfte; Leuchten, die
        innen stehen, beleuchten die entgegengesetzte Bühnenhälfte. Grafisch
        lässt sich das wohl am besten illustrieren, siehe Skizze. Hat man mehr
        als zwei Scheinwerfer pro Seite, wird die Bühne in dementsprechend viele
        Teile unterteilt. Wichtig ist, dass eine Person, egal wo sie im Innern
        der Bühne steht, mit in allen Richtungen ausgestreckten Armen gut
        sichtbar ist. So leuchte ich auch normalerweise ein: Ich stelle eine
        grosse Person mit seitlich ausgestreckten Armen an alle kritischen
        Punkte der Bühne (vor allem an die Vorderkante!) und stelle die
        Torblenden dementsprechend ein. Währenddessen sitzt jemand am Pult und
        macht die von mir gewünschten Leuchten an. Zum Schluss werden alle
        Frontleuchten voll aufgedreht und man sucht nach »Löchern« in der
        Ausleuchtung, die dann noch korrigiert werden müssen.
      </P>
      <Image
        fixed={data.einleuchten.childImageSharp.fixed}
        alt="Skizze zum Einleuchten des Frontlichtes"
        float="left"
      />
      <P>
        Hat man genügend Scheinwerfer, kann man alternativ nach Funktionen
        beleuchten. Ein Paar Leuchten für den Chor, ein Paar für die Band und so
        weiter. Die restlichen werden dann fürs Löcherstopfen hergenommen, da
        insbesondere der Tanz meist die ganze Bühne benutzt.
      </P>
      <P>
        Das Effektlicht wird nach Ästhetik eingeleuchtet. Hier hat der
        Lichtdesigner freie Hand zu tun was er will. Ich lasse die Scheinwerfer
        an einem Bar normalerweise eine Art Fächer bilden, der von der
        gegenüberliegenden Seite symmetrisch nachgebildet wird. Bei einer
        kleinen Bühne wie der im Beispiel kann man als Richtlinie alle
        Scheinwerfer auf die vordere Bühnenkante oder noch ein Stückchen in
        Richtung Publikum strahlen lassen. Hier klettert einer auf eine Leiter
        und richtet die Scheinwerfer aus, während du selber am Mischpult sitzt
        und Anweisungen gibst, idealerweise haben beide zur Stimmschonung ein
        Mikrofon oder noch besser Funkgerät.
      </P>
      <H2>Sicherheit</H2>
      <Image
        fixed={data.safety.childImageSharp.fixed}
        alt="Safety zur Sicherung geflogenen Materials"
        float="left"
      />
      <P>
        Zentrales Stichwort an dieser Stelle: Die Versammlungsstättenverordnung
        (VStättV). Jeder Techniker muss diese schon mal gelesen haben.
        Normalerweise wird keiner von der Bauaufsicht kommen, um eure Bühnen
        abzunehmen. Wenn aber mal ein Feuer ausbricht oder ein Scheinwerfer
        runterfällt und ihr auch nur die kleinste Vorschrift nicht beachtet
        habt, könnt ihr persönlich dafür haftbar gemacht werden. Lasst euch also
        von keinem einreden, dass man keine Rettungswege braucht und die
        Scheinwerfer auch nicht gesichert werden brauchen, weil ja eh nichts
        passieren wird. Am Schluss seid nämlich ihr für alles, was mit Licht und
        Rigg zu tun hat, verantwortlich. Für TEN SING sind die Abschnitte 2 bis
        4 von Bedeutung, insbesondere die §§ 31-34, 80, 81, 103-105, 107-111,
        114-120. Besorgt euch ein Exemplar, nehmt es auf jeden Auftritt mit und
        schenkt dem Orgateam auch gleich noch eins, um sie mal vor den Kopf zu
        stossen, was man normalerweise so alles falsch macht. Der Versicherung
        und der Staatsanwaltschaft ist es nämlich ziemlich egal, ob TEN SING
        einen guten Zweck verfolgt oder nicht.
      </P>
    </Layout>
  )
}
