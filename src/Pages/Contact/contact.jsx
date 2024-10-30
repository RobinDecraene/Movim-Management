import React from 'react';
import style from './contact.module.css';
import Page from '../../Components/Page/page';
import Section from '../../Components/Section/section';
import Title from '../../Components/Title/title';

import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import Button from '../../Components/Button/button';
import Input from '../../Components/Input/input';
import Text from '../../Components/Input/text';

const Contact = () => {
    return (
        <Page>
          <Section>
            <div>
                <span>
                    <Title>Neem contact op met Movim management!</Title>
                    <p>Stel gerust je vraag of zeg gewoon even hallo</p>
                </span>
                <div>
                    <span>
                        <FaLocationDot />
                        <p>Gelegen in Gent, werkzaam in Vlaanderen</p>
                    </span>

                    <span>
                        <MdEmail />
                        <p>email@movim.com</p>
                    </span>

                    <span>
                        <FaLinkedin />
                        <p>https://www.linkedin.com/in/bastiensarah/</p>
                    </span>
                </div>
            </div>

            <div>
                <Input placeholder={'naam'}/>
                <Input placeholder={'voornaam'}/>
                <Input placeholder={'email'}/>
                <Input placeholder={'telefoonnummer'}/>
                <Text placeholder={'bericht'}/>
                <Button>Verstuur</Button>
            </div>
          </Section>
        </Page>
    );
};

export default Contact;