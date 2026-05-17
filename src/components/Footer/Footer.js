import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiLeetcode } from "react-icons/si";
import { DiCssdeck } from 'react-icons/di';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:8678915880">8678915880</LinkItem>
      </LinkList>
      <LinkList>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:karthikgrsk@gmail.com">karthikgrsk@gmail.com</LinkItem>
      </LinkList>

      <SocialContainer>
        <SocialIcons href='https://github.com/karthikgrsk'>
        <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/karthik-grsk/'>
        <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href='https://leetcode.com/u/karthikgrsk/'>
        <SiLeetcode size="3rem"/>
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
