import React from "react";



import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello , Welcome To <br />
          My Portfolio
        </SectionTitle>
        <SectionText>
          I create Websites interfaces for different goals , for different
          people
        </SectionText>
        <Button onClick={props.handleClick} >
            <a href="https://drive.google.com/file/d/1RUW81VxG43hnnYWPtUB4GnqeWC5-iBrB/view?usp=sharing" target="_blank">Find My CV Here</a>
          
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
