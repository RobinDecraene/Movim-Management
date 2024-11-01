import React from 'react';
import style from './aboutme.module.css';
import Page from '../../Components/Page/page';
import Section from '../../Components/Section/section';
import Title from '../../Components/Title/title';
import Button from '../../Components/Button/button';
import SmallTitle from '../../Components/SmallTitle/smalltitle';
import SmallestTitle from '../../Components/SmallestTitle/smallesttitle';

const AboutMe = () => {
    return (
      <Page>
        <Section>
          <div>
            <Title>Laten we kennis maken</Title>
            <p>
              Ik ben Sarah Bastien, nieuwsgierig en leergierig, steeds bereid om nieuwe werelden en mensen te leren
              kennen. Ooit afgestudeerd als bioloog en gefascineerd door natuurlijke ecosystemen, een interesse die
              ik - dankzij hooikoorts - geheroriënteerd heb naar het ecosysteem van organisaties. Energiek en
              gemotiveerd om uitdagende doelstellingen te realiseren, grenzen af te tasten en - waarom niet? - ook
              eens te verleggen. Daarbij komt mijn doorzettingsvermogen goed van pas. Iets wat ook terugkomt in mijn
              hobby als duursporter.
            </p>

            <p>
              En daar komen werk en hobby voor mij samen: in mijn ogen is elke organisatie een levend organisme.
              Sportieve prestaties komen er niet zomaar: ze vragen een goed plan, structuur om het plan uit te voeren
              en bijsturing waar nodig, om op het juiste moment een mooie prestatie te kunnen neerzetten. Ook een
              organisatie vraagt vaak een plan om in vorm te geraken en stappen vooruit te zetten.
              Ondertussen ben ik ruim 25 jaar aan de slag en is zorgen voor verandering vrij snel een rode draad in
              mijn carrière geworden.
            </p>

            <p>
              Door mijn ervaring ben ik een generalist die vanuit strategische vraagstukken de puzzel
              weet te leggen, ook al is die complex. Zowel digitalisering, aanpassen van de
              werkorganisatie, procesoptimalisatie, data-analyse, draagkracht van de organisatie,
              organisatieontwikkeling, teams motiveren om te veranderen, en ga zo maar door ... komen
              hierbij kijken. Bij al dat puzzelen stel ik steeds de waarden proactief - energiek -
              daadkrachtig - oprecht voorop.
            </p>
          </div>
          <div>
            <img src='' alt='profielfoto'/>
            <Button>Download mijn CV</Button>
          </div>
        </Section>

        <Section>
          <div>
            <SmallTitle>Vanuit Operationele Invalshoek</SmallTitle>
            <p>
              Als teamleider van pas gevormde teams in een technologische omgeving.
            </p>
            <p>
              Vb. opstarten van het nieuwe Team Kwaliteitscontrole waarin topografen, fotogrammeters en GIS-operatoren
               samenwerken aan een geïntegreerd kwaliteitsrapport voor aangeleverde datasets.
            </p>
          </div>

          <div>
            <SmallTitle>Vanuit Projectmatige Invalshoek</SmallTitle>
            <p>
              Als business analist, projectleider en facilitator van verandertrajecten.
            </p>
            <p>
              Vb. reduceren van de doorlooptijd met 3 maanden voor het volledige proces van contracteren van een hotel 
              tot het voor de klant boekbaar zijn van een pakketreis.
            </p>
          </div>

          <div>
            <SmallTitle>Op Programmaniveau</SmallTitle>
            <p>
              Door alle nodige projecten en activiteiten op te starten en te managen om de strategische doelen te bereiken.
            </p>
            <p>
              Vb. uitbouwen van een meetsysteem doorheen de volledige organisatie om zowel management- als operationele 
              rapportering mogelijk te maken.
            </p>
          </div>

          <div>
            <SmallTitle>Op Directieniveau</SmallTitle>
            <p>
              Met de volle verantwoordelijkheid om strategische doelen te bepalen en alle nodige te ondernemen om deze te 
              realiseren terwijl de dagelijkse werking blijft draaien.
            </p>
            <p>
              Vb. Verhogen van de samenwerking tussen de Gentse musea voor ondersteunende domeinen, zoals een gezamenlijke 
              depotwerking waarbij meer dan 30.000 objecten schoongemaakt, geregistreerd en verpakt zijn om te verhuizen 
              naar 2 nieuwe, gedeelde depots met een gezamenlijke werking.
            </p>
          </div>
        </Section>
        <Section>
          <p>
            Door mijn ervaring ben ik een generalist die vanuit strategische vraagstukken de puzzel weet te leggen, ook al is die complex. 
            Zowel digitalisering, aanpassen van de werkorganisatie, procesoptimalisatie, data-analyse, draagkracht van de organisatie, 
            organisatieontwikkeling, teams motiveren om te veranderen, en ga zo maar door ... komen hierbij kijken. Tot nu toe heb ik vooral 
            vertoefd in dienstverlenende en administratieve omgevingen. Ik ben ervan overtuigd dat ik met mijn ervaring, nieuwsgierigheid 
            en analytische ingesteldheid ook meerwaarde kan betekenen voor andere omgevingen. Ik sta alvast klaar om deze te verkennen!
          </p>
        </Section>

        <Section>
          <div>
            <SmallestTitle>Proactief</SmallestTitle>
            <p>
              Oplossingen maken we voor morgen, met de nodige flexibiliteit zodat onvoorziene wendingen en nieuwe opportuniteiten 
              benut kunnen worden.
            </p>
          </div>

          <div>
            <SmallestTitle>Energiek</SmallestTitle>
            <p>
              Met positieve energie motiveer ik mensen vanuit het verhaal van de organisatie. Energie zorgt voor blijvende beweging,
               zowel mentaal als fysiek, voor mensen én organisaties.
            </p>
          </div>

          <div>
            <SmallestTitle>Daadkrachtig</SmallestTitle>
            <p>
              Vooruitgang vraagt duidelijkheid en durf om te springen. Resultaten zichtbaar maken is daarbij van groot belang, of 
              ze nu succesvol of leerrijk zijn. Dat zorgt voor energie om de volgende stap te kunnen zetten.
            </p>
          </div>

          <div>
            <SmallestTitle>Oprecht</SmallestTitle>
            <p>
              Het doel van de organisatie staat voorop en wil ik volledig kunnen onderschrijven. Ik werk transparant, met een 
              oprecht engagement en eerlijke communicatie over voortgang, eigen inzet en wederzijdse verwachtingen.
            </p>
          </div>
        </Section>
        
      </Page>
    );
};

export default AboutMe;