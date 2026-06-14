import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle>
        Welcome to my <br />Personal Portfolio
      </SectionTitle>
      <SectionText>
         Hi, I'm Karthik <br />
         Software Developer
        , Turning Ideas Into Real Applications
      </SectionText>
      <Button onClick={ () => {window.location = 'https://drive.google.com/file/d/1mpf5BQESUPfVLVZmX484mVHDqlnfwXPx/view'}}>DownLoad Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
