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
          <Section customClass={style.sectionRow}>
            <div className={style.contact}>
                <div className={style.titleContact}>
                    <Title customClass={style.whiteTitle}>Neem contact op met Movim management!</Title>
                    <p>Stel gerust je vraag of zeg gewoon even hallo</p>
                </div>
                <div>
                    <span className={style.contactInfo}>
                        <FaLocationDot size={25} />
                        <p>Gelegen in Gent, werkzaam in Vlaanderen</p>
                    </span>

                    <span className={style.contactInfo}>
                        <MdEmail size={25}/>
                        <p>email@movim.com</p>
                    </span>

                    <span className={style.contactInfo}>
                        <FaLinkedin size={25}/>
                        <a href='https://www.linkedin.com/in/bastiensarah/' target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/bastiensarah/</a>
                    </span>
                </div>
            </div>

            <div className={style.form}>
                <span>
                    <Input placeholder={'naam'} customClass={style.marginInput}/>
                    <Input placeholder={'voornaam'}/>
                </span>
                <span>
                    <Input placeholder={'email'} customClass={style.marginInput}/>
                    <Input placeholder={'telefoonnummer'}/>
                </span>
                <Text placeholder={'bericht'}/>
                <Button>Verstuur</Button>
            </div>
          </Section>
        </Page>
    );
};

export default Contact;