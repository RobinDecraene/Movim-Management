import React from 'react';
import style from './home.module.css';
import Page from '../../Components/Page/page';
import Title from '../../Components/Title/title';
import Button from '../../Components/Button/button';
import Section from '../../Components/Section/section';

const Home = () => {
  return (
    <Page>
      <Section>
        <h1>Op zoek naar een nieuw evenwicht in je organisatie?</h1>
        <p>Verandering als uitdaging, meerwaarde als resultaat</p>
      </Section>

      <Section>
        <Title>Waarom Movim management?</Title>
        <p>
          Soms staat een organisatie voor een uitdaging die extra energie, expertise en leiderschap vraagt. Ik bied je deze
          extra’s aan als freelance interim manager. Al mijn aandacht gaat naar jouw uitdaging en de meerwaarde die deze
          moet opleveren, de aanpak is hierop afgestemd.
        </p>
        <p>
          Geen kant-en-klare oplossing of blind te volgen methode dus. Wel een goede mix van jouw organisatie en omgeving
          met mijn analytische ingesteldheid, oprechte en onafhankelijke kijk, en ervaring. Ook al is deze mix tijdelijk,
          toch zet ik door tot er een duurzaam effect valt op te merken - blijvend resultaat, verankerd in de gewoontes van
          jouw organisatie. Want pas dan is het nieuwe evenwicht bereikt, een evenwicht dat stabiel genoeg is om te kunnen
          uitkijken naar een volgende uitdaging.
        </p>
      </Section>

      <Section>
        <div>
          <Title>Focus Op Meerwaarde</Title>
          <p>
            Hoe ziet jouw uitdaging eruit, welke stap wil je zetten? Welke bedrijfsoptimalisatie heb je voor ogen en wat wil 
            je dat dit betekent voor jouw organisatie en haar omgeving? Misschien is jouw organisatie nogal snel gegroeid, al 
            dan niet door een fusie, en is de werkorganisatie uit balans. Misschien kan het werk wat eenvoudiger georganiseerd 
            worden, of is een berg informatie wel beschikbaar maar niet toegankelijk om nuttig te gebruiken. Misschien zit je 
            in een innovatieve fase met nieuwe activiteiten, of vragen bestaande operationele processen een kortere doorlooptijd 
            of een meer klantgerichte insteek. Of misschien geeft je buikgevoel aan dat er uitdagingen zijn, alleen kan je deze 
            nog niet concreet benoemen.
          </p>
        </div>

        <div>
          <Title>Goede Mix</Title>
          <p>
            Ik nodig je uit om jouw verhaal te delen en de uitdaging samen aan te gaan. Dankzij mijn analytische ingesteldheid 
            vorm ik me snel een goed beeld en kan ik je enkele mogelijkheden om de weg richting oplossingen aan te vatten voorleggen. 
            Ik duik daarbij gericht in de beschikbare data en nuttige informatiebronnen, aangevuld met gesprekken op de werkvloer. 
            Dat beeld deel ik zonder franjes vanuit mijn oprechte ingesteldheid. Stel je hierbij geen kant-en-klare oplossing voor, 
            ook geen grote theorieën of abstracte methodieken. Wel mogelijkheden voor een passend plan van aanpak gebaseerd op mijn 
            ervaring van wat kan werken. Dit mixen we met jouw mening over wat werkbaar en realistisch is om te komen tot een 
            begaanbaar pad richting de gewenste meerwaarde voor jouw organisatie.
          </p>
        </div>

        <div>
          <Title>Duurzaam Effect</Title>
          <p>
            Eenmaal op weg, ben ik op mijn best als tijdelijk en volwaardig onderdeel van jouw organisatie. Zo zetten we de tijdelijke 
            mix verder en kan er vanuit de realiteit van de dag gewerkt worden richting de toekomst. Stap per stap, rekening houdend 
            met de draagkracht van jouw organisatie. Hierbij kan je rekenen op mijn doorzettingsvermogen en motivatie om voor elke stap 
            te gaan. Een motivatie die aanstekelijk werkt en energie geeft aan anderen om mee te bewegen. En bewegen zorgt voor een betere 
            conditie, ook voor jouw organisatie, waardoor wat eerst moeizaam gaat, steeds vlotter verloopt. Zo houden we onze tijdelijke 
            mix aan tot we de gevraagde meerwaarde vaststellen. En als de nieuwe werkwijzen routine zijn geworden, heeft onze goede mix 
            zijn werk gedaan.
          </p>
          <Button>Deel jouw uitdaging in een vrijblijvend gesprek</Button>
        </div>
      </Section>


    </Page>
  );
};

export default Home;