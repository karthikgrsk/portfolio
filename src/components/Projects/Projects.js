import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// const projectsDemo = [
//   {
//     'title': 'AI Inventory Management System',
//     'description' : 'Interactive inventory management'
//   }
// ];


const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map( ({id,title,description,visit,source,tags,image}) => (
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map( (tag,i) =>(
              <Tag key={i}>{tag}</Tag>
              ) )}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={source}>Code</ExternalLinks>
            <ExternalLinks href={visit}>visit</ExternalLinks>
          </UtilityList>
          </BlogCard>
          
      ) )}
    </GridContainer>
  </Section>
);

export default Projects;