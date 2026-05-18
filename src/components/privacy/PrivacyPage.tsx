import { CookieNotice } from '../layout/CookieNotice'
import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'
import { InnerPageHero } from '../layout/InnerPageHero'

const heroImage = '/images/university-student-1872810_1280.jpg'

export function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <InnerPageHero title="Privatlivspolitik" heroImage={heroImage} />
        <section className="policy-content">
          <div className="gym-container">
            <article className="policy-article">
              <p>Senest opdateret: 1. maj 2026</p>

              <h2>Hvem er vi?</h2>
              <p>
                Vores hjemmeside er <a href="/">www.gymgpt.dk</a> og drives som en læringstjeneste af
                Bjørn la Cour Poulsen, som er dataansvarlig.
              </p>
              <p>
                Du kan kontakte den dataansvarlige på:{' '}
                <strong>
                  <a href="mailto:bcp@selvstudier.dk">bcp@selvstudier.dk</a>
                </strong>
              </p>

              <h2>Kort fortalt</h2>
              <p>
                GymGPT er en digital læringsassistent for gymnasieelever, hvor du kan stille spørgsmål
                til en chatbot inden for forskellige fag. Vi har bevidst designet tjenesten, så vi
                indsamler så få oplysninger om dig som muligt:
              </p>
              <ul>
                <li>
                  Du behøver <strong>ikke</strong> at oprette konto eller logge ind.
                </li>
                <li>
                  Vi gemmer <strong>ikke</strong> dine samtaler med chatbotten.
                </li>
                <li>Vi sender ikke nyhedsbreve eller markedsføring.</li>
                <li>Vi modtager ingen betalingsoplysninger.</li>
                <li>Al databehandling sker hos leverandører i EU.</li>
              </ul>

              <h2>Hvilke personoplysninger behandler vi?</h2>
              <h5>Chatbotten</h5>
              <p>
                Når du skriver til chatbotten, sendes din besked til Google Cloud Vertex AI (Gemini),
                som genererer et svar og returnerer det til dig. Hverken vi eller Google gemmer din
                samtale efter svaret er leveret, og indholdet bruges <strong>ikke</strong> til træning
                af AI-modeller. Det følger af vores aftale med Google Cloud (Vertex AI), hvor kundedata
                ikke anvendes til at træne Googles modeller.
              </p>
              <p>
                <strong>Vores anbefaling:</strong> Selvom samtaler ikke gemmes, bør du af
                forsigtighedshensyn ikke skrive personoplysninger som dit fulde navn, adresse,
                CPR-nummer, helbredsoplysninger eller andre følsomme oplysninger til chatbotten. Skriv
                kun det, der er nødvendigt for at få hjælp til dit faglige spørgsmål.
              </p>

              <h5>Cookies</h5>
              <p>
                Hjemmesiden anvender cookies, som er nødvendige for, at den kan fungere korrekt. Disse
                cookies indsamler ikke personoplysninger om dig og bruges ikke til markedsføring eller
                analyse.
              </p>

              <h5>Privatlivspolitik</h5>
              <p>
                Når du besøger hjemmesiden, behandler vores webhotel og AI-server tekniske oplysninger
                som din IP-adresse, browsertype og tidspunkt for besøget. Disse oplysninger anvendes
                til drift, sikkerhed og fejlfinding og opbevares i en kort periode i serverlogs.
              </p>

              <h2>Retsgrundlag</h2>
              <p>Vi behandler dine oplysninger på følgende grundlag:</p>
              <ul>
                <li>
                  <strong>Levering af tjenesten</strong> (din besked sendes til Gemini for at give dig
                  et svar): Behandlingen er nødvendig for at opfylde det, du har bedt om, jf.
                  Databeskyttelsesforordningens (GDPR) artikel 6, stk. 1, litra b.
                </li>
                <li>
                  <strong>Drift, sikkerhed og fejlfinding</strong> (tekniske logs og nødvendige
                  cookies): Vores legitime interesse i at drive en stabil og sikker hjemmeside, jf.
                  Databeskyttelsesforordningens (GDPR) artikel 6, stk. 1, litra f.
                </li>
              </ul>

              <h2>Hvor behandles og opbevares dine data?</h2>
              <p>
                Al behandling foregår hos leverandører i EU/EØS, og der er indgået
                databehandleraftaler (DPA) med dem alle:
              </p>
              <div className="policy-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Leverandør</th>
                      <th>Funktion</th>
                      <th>Placering</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AzeHosting ApS</td>
                      <td>Hosting af hjemmesiden</td>
                      <td>Danmark</td>
                    </tr>
                    <tr>
                      <td>Hetzner Online GmbH</td>
                      <td>Server til at håndtere AI-anmodninger</td>
                      <td>Tyskland</td>
                    </tr>
                    <tr>
                      <td>Gemini Enterprise Agent Platform</td>
                      <td>Selve sprogmodellen, der genererer svar</td>
                      <td>Belgien</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>Da al behandling sker inden for EU/EØS, overføres dine data ikke til lande uden for EU.</p>

              <h2>Hvor længe opbevares dine data?</h2>
              <ul>
                <li>
                  <strong>Chatbot-samtaler:</strong> Gemmes ikke. Din besked og chatbottens svar
                  slettes, så snart svaret er leveret.
                </li>
                <li>
                  <strong>Serverlogs:</strong> Opbevares i en kort periode (typisk få uger og højst 1
                  år) til drifts- og sikkerhedsformål.
                </li>
                <li>
                  <strong>Cookies:</strong> Slettes efter de tidsrum, der er fastsat af hjemmesiden
                  (typisk når du lukker browseren eller efter højst 1 år for funktionelle cookies).
                </li>
              </ul>

              <h2>Dine rettigheder</h2>
              <p>Du har efter databeskyttelsesforordningen følgende rettigheder:</p>
              <ul>
                <li>
                  Ret til <strong>indsigt</strong> i, hvilke oplysninger vi behandler om dig.
                </li>
                <li>
                  Ret til <strong>berigtigelse</strong> af urigtige oplysninger.
                </li>
                <li>
                  Ret til <strong>sletning</strong> ("retten til at blive glemt").
                </li>
                <li>Ret til begrænsning af behandlingen.</li>
                <li>Ret til dataportabilitet.</li>
                <li>
                  Ret til at gøre <strong>indsigelse</strong> mod behandlingen.
                </li>
              </ul>
              <p>
                Da vi ikke gemmer samtaler, brugerkonti eller andre personhenførbare oplysninger om dig
                som besøgende, vil vi i mange tilfælde ikke have nogen oplysninger at udlevere eller
                slette ud over kortvarige tekniske logs. Du er dog altid velkommen til at kontakte os
                på{' '}
                <strong>
                  <a href="mailto:bcp@selvstudier.dk">bcp@selvstudier.dk</a>
                </strong>
                , hvis du vil gøre brug af dine rettigheder.
              </p>

              <h2>Klage</h2>
              <p>Hvis du er utilfreds med, hvordan vi behandler dine oplysninger, kan du klage til Datatilsynet:</p>
              <ul>
                <li>
                  <strong>Datatilsynet</strong> Carl Jacobsens Vej 35 2500 Valby,{' '}
                  <a href="http://www.datatilsynet.dk">www.datatilsynet.dk</a>,{' '}
                  <a href="mailto:dt@datatilsynet.dk">dt@datatilsynet.dk</a>
                </li>
              </ul>

              <h2>Ændringer i privatlivspolitikken</h2>
              <p>
                Vi kan løbende opdatere denne privatlivspolitik, f.eks. hvis tjenesten ændres, eller
                lovgivningen kræver det. Den til enhver tid gældende version vil være tilgængelig på
                denne side med dato for seneste opdatering øverst.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
      <CookieNotice />
    </>
  )
}
