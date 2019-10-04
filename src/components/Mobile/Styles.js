import styled from "styled-components";

/* TITLE */
// font-family: 'Cormorant SC', serif;
/* TEXT */
// font-family: 'Cormorant Garamond', serif;

/* #EFEAE4 #FBFAF2 #F1E7DA #C0D5D4 #384734*/


export const GlobalButton = styled.button`
  font-family: "Cormorant Garamond", serif;
  padding: 0.5em 2em;
  color: black;
  border: solid 1px black;
  background-color: transparent;
  border-radius: 2px;
  font-size: 1.5em;
  &:hover {
    background-color: #c0d5d4 !important;
    transition: 1s;
  }
`;

export const ButtonDiv = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Text = styled.p`
  font-family: "Cormorant Garamond", serif;
  color: black;
  font-size: 1.5em;
  letter-spacing: 1px;
  line-height: 2em;
`;
export const SmallerText = styled.p`
  font-family: "Cormorant Garamond", serif;
  color: black;
  font-size: 1.25em;
  letter-spacing: 1px;
  line-height: 2em;
`;

export const CompTitle = styled.h3`
  font-family: "Cormorant SC", serif;
  color: black;
  font-size: 3em;
  letter-spacing: 1px;
  padding: 1em;
`;


export const MainTitle = styled.h1`
font-family: "Quicksand", sans-serif;
color: #FFFFFF;
font-size: 2em;
text-shadow: 1px 1px black;
`;

export const SubTitle = styled.h3`
font-family: "Open Sans", sans-serif;
color: #FFFFFF;
font-size: 1.5em;
text-shadow: 0.5px 0.5px black;
background-color: rgba(0, 0, 0, 0.2)
border-radius: 5px;
text-align: center;
letter-spacing: 1.5px;
line-height: 2em;
`;

export const MobileLandingText = styled.p`
font-family: "Open Sans", sans-serif;
color: black;
letter-spacing: 1.5px;
line-height: 1.5em;

`

export const ButtonMobile = styled.button`
padding: 1em;
border: 1px solid white;
background-color: rgba(255, 255, 255, 1);
border-radius: 5px;
font-family: "Quicksand", sans - serif !important;
color: #1d4c4b !important;
font-size: 1.25em;
`;

export const SubTitleAbout = styled.h1`
font-family: "Quicksand", sans-serif;
color: white;
font-size: 2em;
display: flex;
flex-direction: row;
justify-content: center;
`;
export const SubTitleContact = styled.h1`
  font-family: "Quicksand", sans-serif;
  color: #1d4c4b;
  padding: 1em 2em;
  font-size: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  `;
  
  export const AboutText = styled.p`
  font-family: "Quicksand", sans-serif;
  color: white;
  padding: 0em 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 1em;
  letter-spacing: 1.5px;
  line-height: 1.5em;
  z-index: 100;
  width: 100%;
  height: 100%;
  text-align: center;
  `;
  
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
  font-family: "Quicksand", sans-serif;
  color: white;
  padding: 1em;
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
  font-family: "Open Sans", sans-serif;
  font-size: 2em;
  text-shadow: 0.5px 0.5px #425e4f;
  color: #61c0bf;
`;
export const QuoteAuthor = styled.h3`
  font-family: "Quicksand", sans-serif;
  font-size: 1.5em;
  text-shadow: 0.5px 0.5px #425e4f;
  color: #61c0bf;
`;