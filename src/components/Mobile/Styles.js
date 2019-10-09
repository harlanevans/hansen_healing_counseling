import styled from "styled-components";

/* TITLE */
// font-family: 'Cormorant SC', serif;
/* TEXT */
// font-family: 'Cormorant Garamond', serif;

/* #EFEAE4 #FBFAF2 #F1E7DA #C0D5D4 #384734*/


export const MobTitle = styled.h3`
font-family: "Cormorant SC", serif;
color: black;
font-size: 2em;
letter-spacing: 1px;
`;

export const MobText = styled.p`
  font-family: "Cormorant Garamond", serif;
  color: black;
  font-size: 1em;
  letter-spacing: 1px;
  line-height: 2em;
  `;

export const MobileButton = styled.button`
  font-family: "Cormorant SC", serif;
  padding: 0.5em 2em;
  color: black;
  border: solid 1px black;
  background-color: transparent;
  border-radius: 2px;
  font-size: 1em;
  &:hover {
    background-color: #c0d5d4 !important;
    transition: 1s;
  }
`;

export const ButtonDivMob = styled.div`
  padding: 0em;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;


  export const SmallerText = styled.p`
  font-family: "Cormorant Garamond", serif;
  color: black;
  font-size: 1.25em;
  letter-spacing: 1px;
  line-height: 2em;
  `;
  
  export const LandingTitle = styled.h1` 
  font-family: "Cormorant SC", serif;
  color: black;
  font-size: 2em;
  `;
  
  export const LandingSubTitle = styled.h3`
  font-family: "Cormorant Garamond", serif;
  color: black;
  font-size: 1.15em;
  background-color: rgba(0, 0, 0, 0.2)
  border-radius: 5px;
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 2em;
  `;
  
  export const MobileLandingText = styled.p`
  font-family: "Cormorant Garamond", serif;
  color: black;
  letter-spacing: 1.5px;
  line-height: 1.5em;
  `
  
  export const ModalButton = styled.button `
  background-color: rgba(255, 255, 255, 1);
  font-family: "Cormorant Garamond", serif;
  color: black !important;
  border-radius: 2px;
  font-size: 1.25em;
  padding: .25em;
  width: 10em; 
  `
  
  export const WhiteBGGlobal = styled.div`
  background-color: white;
  background-position: center;
  height: 50vh;
  background-size: cover;
  width: 100vw;
  z-index: -500;
  `;
  
  export const CaptionText = styled.h3`
  font-family: "Open Sans", sans-serif;
  text-shadow: 0.5px 0.5px black;
  letter-spacing: 1px;
  background-color: rgba(29, 76, 75, 0.5);
  border-radius: 5px;
  padding: 1em;
  width: 100%
  font-size: 1em;
  `;
  
  export const FooterText = styled.h3`
  font-family: "Cormorant SC", serif;
  color: white;
  padding: .5em;
  margin: 0em;
  font-size: 1em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  `
  
  export const ServicesText = styled.p`
  font-family: "Quicksand", sans-serif;
  letter-spacing: 1px;
  color: #1d4c4b;
  `
  
  export const QuoteMain = styled.h3`
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 5px;
  color: black;
  letter-spacing: 1.5px;
  line-height: 1.5em;
  `;
  export const QuoteAuthor = styled.h3`
  font-family: "Cormorant SC", serif;
  font-size: 1em;
  color: black;
  `;