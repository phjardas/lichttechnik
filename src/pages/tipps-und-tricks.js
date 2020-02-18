import React from "react"
import H2 from "../components/H2"
import Layout from "../components/layout"
import P from "../components/P"

export default function IndexPage() {
  return (
    <Layout title="Tipps und Tricks">
      <P>
        Dieses Kapitel soll zu einem Art Nachschlagewerk werden für Probleme und
        Fehler aller Art, die auftreten können. Wenn ihr Vorschläge habt, lasst
        es mich sofort wissen!
      </P>

      <H2>Nebel</H2>

      <P>
        Nebel ist im Allgemeinen nur dazu da, um Lichtstrahlen sichtbar zu
        machen. Sein Sinn ist nicht, die Bühne wirklich einzunebeln, ausser in
        speziellen Fällen. Für gewöhnlich stört zu viel Nebel, da durch ihn der
        Chor an Stimme verliert und an Husten gewinnt. Ausserdem machen hohe
        Dichten das Frontlicht sichtbar, was normalerweise nicht gewünscht wird.
        Wenn ihr keine regelbare Nebelmaschine habt, heisst die Devise: Sobald
        ein Lied zu Ende ist, wieder ein wenig auf die Taste drücken. Vor dem
        Anfang des nächsten Liedes ist Ruhe. Einerseits, um dem Nebel Zeit zum
        Verteilen und dem Chor zum Durchatmen zu geben, andererseits, weil das
        Nebelzischen sich sehr schlecht auf Aufnahmen macht und schon so manches
        Recording unbrauchbar gemacht hat. Ein kleiner Trick, um Bodennebel zu
        erzeugen: Bohre in eine Plastikwanne zwei grosse Löcher, so dass du eine
        Metallröhre durchstecken kannst. Das Ganze abdichten und kaltes Wasser
        einfüllen. Wenn du jetzt am einen Ende mit der Nebelmaschine
        reinpustest, bekommst du schweren, wattigen Nebel.
      </P>

      <P>
        Besser als jede Nebelmaschine sind sogenannte »Hazer«, also
        Dunstmaschinen. Diese erzeugen einen kaum sichtbaren Dunst, der genau
        den richtigen Effekt hat.
      </P>

      <H2>Farbiges Frontlicht</H2>

      <P>
        Heikles Thema. Eigentlich ist das bei TEN SING der meistgesehene Fehler
        überhaupt. Grüne Gesichter sind einfach hässlich. Blau bringt sowieso
        keine Lichtleistung (nichtmal 15% gegenüber weiss). Bleiben nur noch
        Rot- und Gelbtöne. Das sind auch die einzigen Farben, die von vorne Sinn
        machen. Warme Farben kommen allerdings automatisch, wenn ihr
        Kunstlichtscheinwerfer (alle oben beschriebenen ausser
        Multifunktionsleuchten) mit unter 80% Leistung fahrt. Ich bin
        prinzipiell gegen jede Farbfolie vor Frontlichtscheinwerfern, aber viele
        werden mir hier widersprechen…
      </P>

      <P>
        Selten kann man farbiges Licht gut gebrauchen, um eben gerade obige
        Effekte zu erreichen: Den Solisten weiss beleuchten und den Rest (Band
        und Chor) in rotes Licht eintauchen. Mir persönlich gefällt die Variante
        besser, bei der man alle von vorne weiss anleuchtet und von hinten die
        Farben gibt. Hat denselben Effekt, ausser dass man die Gesichter und
        Körper von Band und Chor noch erkennen kann.
      </P>

      <P>
        Im Theater wird manchmal farbiges Frontlicht gewünscht. In diesem Falle
        würde ich aber stets eine Kombination anwenden, beispielsweise steil von
        rechts und links grünes Licht, um den Farbeffekt zu erzielen, von vorne
        oben aber weisser Spot, um dem Gesicht Kontraste zu geben.
      </P>

      <H2>Umbaulicht</H2>

      <P>
        Während den Pausen zwischen den Liedern absolute Dunkelheit herrschen zu
        lassen kann zu lustigen unfreiwilligen Showeinlagen der Requisiteure
        führen. Um das zu verhindern benutzt man während den Umbaupausen ein
        Umbaulicht, das dezent und dunkel sein sollte. Hierfür eignen sich zwei
        hellblaue Scheinwerfer von vorne, die auf 50% aufgedreht werden.
        Alternativ kann man auch die blauen Scheinwerfer von hinten ein bisschen
        aufziehen.
      </P>

      <H2>Summen auf den Tonkabeln</H2>

      <P>
        Das kommt von gedimmten Lastkabeln, die parallel zu Tonkabeln verlegt
        wurden. Durch die Oberwellen, die von den Dimmerpacks beim
        Phasenanschnitt erzeugt werden, gelangen Einstreuungen in die Tonkabel.
        Dieser Effekt tritt nur bei Leuchten auf, die gedimmt werden, nicht aber
        bei normalen Stromkabeln, Starkstromkabeln oder DMX-Leitungen. Eine
        Lösung ist die Platzierung der Dimmer und der Lastkabel unter der Bühne,
        währen die Tonkabel auf der Bühne liegen. Müssen Leitungen doch einmal
        gekreuzt werden, verhindert ein Winkel von 90° das Schlimmste.
      </P>

      <H2>Hot Patching</H2>

      <P>
        Unsere Standardbühne verwendet vier Stative mit jeweils vier Leuchten
        (2x 4bar und 4x Stufenlinse). Dafür verwenden wir einen 12-Kanal-Dimmer,
        der normalerweise zwei Harting- Ausgänge hat mit je vier Kanälen. Wie
        bringen wir das nun auf die vier Lastkabel, die dann zu den
        entsprechenden Stativen führen? Die Lösung heisst Hot Patching. In
        unserem Falle hätten wir ein Rack mit zwei Harting-Eingängen und vier
        Harting-Ausgängen. Effektiv haben wir also die zwölf Eingangskanäle, die
        wir auf die vier mal sechs Ausgangskanäle »patchen« müssen. Dazu ziehen
        wir an einem Art Steckbrett von jedem Eingangskanal eine Verbindung zu
        dem Ausgangskanal, der von diesem Kanal bedient werden soll. Es ist auch
        möglich, einen Eingang mit mehreren Ausgängen zu verbinden, um Kanäle zu
        sparen. So können wir zum Beispiel Einganskanal 1-4 jeweils auf Kanal
        1-4 der Frontstative, Kanäle 5-8 auf das linke Effektstativ und 9-12 auf
        das rechte Effektstativ legen.
      </P>

      <H2>Verfolger</H2>

      <P>
        Die Bedienung eines Verfolgerscheinwerfers ist nicht annähernd so
        einfach und intuitiv, wie es den meisten scheint. Hier braucht man eine
        Menge Übung und vor allem Kenntnis der Show! Einige Richtlinien: Den
        Lichtkegel lieber etwas zu gross als zu klein machen, auf keinen Fall
        die Füsse abschneiden, das Zentrum des Strahls ist nicht der Kopf
        sondern der Oberkörper. Bei Theater, Tänzen und Chorliedern hat der Spot
        nichts zu suchen. Finger weg von den Farbscheiben! Ein Spotlight ist
        immer und absolut immer weiss. Halt die Kiste ruhig – wenn sich der
        Solist viel auf der Stelle bewegt, gib ihm einen grösseren Kegel und
        lass den Spot einfach stehen.
      </P>

      <H2>Tricks aus dem Theater</H2>

      <P>
        Wenn ihr eine Bühne habt, die nach oben viel Freiraum und dort auch
        Aufhängemöglichkeiten bitet, solltet ihr Oberlicht unbedingt in Erwägung
        ziehen. Zwei starke Stufenlinsen oder HMI-Fluter leuchten senkrecht von
        oben auf die komplette Bühne. Der Vorteil ist, dass sie nur den Boden
        beleuchten, wenn keiner da steht. Wenn jemand da steht, bietet das
        Oberlicht eine perfekte Ergänzung zum Frontlicht.
      </P>

      <P>
        Um einen geheimnisvollen oder gruseligen Effekt zu erzielen, blast
        gekühlten auf die Bühne, der dann mehr oder weniger am Boden bleibt.
        Dann arbeitet ihr mit zweilagigem Licht, zum Beispiel unten weiss, oben
        rot.
      </P>

      <P>
        Habt ihr Mädchen mit langen Haaren (hat ja wohl jeder Ten Sing), kommen
        selbige – insbesondere bei Locken – am besten zur Geltung, wenn sie von
        hinten mit weissem Licht zusätzlich aufgehellt werden. In Verbindung mit
        Nebel ergibt das einen wunderschönen Engel-Effekt. Generell ist weisses
        Licht von hinten, oben und der Seite gerade beim Theater nie falsch.
      </P>
    </Layout>
  )
}
