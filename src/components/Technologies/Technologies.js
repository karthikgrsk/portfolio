import React from 'react';
import { DiJava , DiReact,DiJavascript  } from 'react-icons/di';
import { SiSpring,SiMongodb } from 'react-icons/si';
import { FaAws } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
       Full-stack developer focused on backend engineering, cloud integration,
      responsive frontend development, and scalable software architecture.
    </SectionText>

    <List>
      <ListItem style={{ order: 2 }}>
        <DiJava size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience with Core Java</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem style={{ order: 1 }}>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience with React.js</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem style={{ order: 3 }}>
        <SiSpring size="3rem" />
        <ListContainer>
          <ListTitle>Framework</ListTitle>
          <ListParagraph>Experience with Spring-boot</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem style={{ order: 6 }}>
        <FaAws size="3rem"/>
        <ListContainer>
          <ListTitle>Cloud</ListTitle>
          <ListParagraph>Experience with AWS</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem style={{ order: 4 }}>
        <SiMysql size="3rem"/>
        <ListContainer>
          <ListTitle>SQL Database</ListTitle>
          <ListParagraph>Experience with MySQL and Sql Queries</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem style={{ order: 5 }}>
        <SiMongodb size="3rem"/>
        <ListContainer>
          <ListTitle>NoSQL Database</ListTitle>
          <ListParagraph>Experience with MongoDB</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
