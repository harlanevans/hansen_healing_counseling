import styled from "styled-components";

export const LandingTitle = styled.h1`
  font-family: "Quicksand", sans-serif;
  color: white;
  font-size: 3em;
  text-shadow: 1px 1px #1D4C4B;
`;

export const LandingSubTitle = styled.h3`
font-family: "Open Sans", sans-serif;
color: white;
font-size: 2em;
`

export const LandingText = styled.p`
font-family: "Open Sans", sans-serif;
color: white;
letter-spacing: 1px;
line-height: 1.5em;
`

export const SubTitle = styled.h1`
  font-family: "Open Sans", sans-serif;
  color: #1d4c4b;
  padding: 1em;
  font-size: 2em;
  text-shadow: 0.5px 0.5px white;
`;



export const SubTitleAbout = styled.h1`
  font-family: "Quicksand", sans-serif;
  color: #1d4c4b;
  padding: 1em 2em;
  font-size: 2em;
  text-shadow: 0.5px 0.5px white;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const AboutText = styled.p`
  font-family: "Quicksand", sans-serif;
  color: #1d4c4b;
  padding: 0.5em 2em;
  text-shadow: 0.5px 0.5px white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 1em;
  letter-spacing: 1px;
  line-height: 2.25em;
`;

export const WhiteBGGlobal = styled.div`
  background-color: white;
  background-position: center;
  height: 100vh;
  background-size: cover;
  width: 100vw;
  z-index: -500;
`;

export const WhiteSpace = styled.div`
  background-color: white;
  background-position: center;
  height: 25vh;
  width: 100vw;
  z-index: -500;
`;

export const CaptionText = styled.h3`
  font-family: "Open Sans", sans-serif;
  text-shadow: 0.5px 0.5px black;
  letter-spacing: 1px;
  background-color: rgba(29, 76, 75, 0.5);
  border-radius: 5px;
  padding: 0.5em;
`;

export const FooterText = styled.h3`
  font-family: "Quicksand", sans-serif;
  color: white;
  padding: 0em;
  font-size: 1em;
  margin: 1em;
`;
