import styled from "styled-components";

/* #ffb6b9, #fae3d9 #FFFFFF #bbded6 #61c0bf #425E4F*/

export const LandingTitle = styled.h1`
  font-family: "Open Sans", sans-serif;
  color: white;
  font-size: 3em;
  text-shadow: 1px 1px 1px black;
`;
export const LandingTitleTwo = styled.h1`
  font-family: "Quicksand", sans-serif;
  color: white;
  font-size: 3em;
  text-shadow: 0.5px 0.5px 0.5px black;
`;

export const LandingSubTitle = styled.h3`
  font-family: "Open Sans", sans-serif;
  color: white;
  font-size: 2em;
`;

export const LandingText = styled.p`
  font-family: "Open Sans", sans-serif;
  color: black;
  font-size: 1.25em;
  letter-spacing: 1px;
  line-height: 2em;
`;

export const SubTitle = styled.h1`
  font-family: "Open Sans", sans-serif;
  color: #425e4f;
  padding: 1em;
  font-size: 2.5em;
  text-shadow: 0.5px 0.5px #fae3d9;
  border-left: solid 1px #bbded6;
  border-right: solid 1px #bbded6;
`;

export const SubTitleAbout = styled.h1`
  font-family: "Quicksand", sans-serif;
  color: #425e4f;
  padding: 1em 2em;
  font-size: 2em;
  text-shadow: 0.5px 0.5px white;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const AboutText = styled.p`
  font-family: "Quicksand", sans-serif;
  color: #61c0bf;
  padding: 0.5em 2em;
  font-size: 1.25em;
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
  background-color: rgba(66, 94, 79, 0.8);
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

export const QuoteMain = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-size: 3em;
  text-shadow: 0.5px 0.5px #425e4f;
  color: #61c0bf;
`;
export const QuoteAuthor = styled.h3`
  font-family: "Quicksand", sans-serif;
  font-size: 2.5em;
  text-shadow: 0.5px 0.5px #425e4f;
  color: #61c0bf;
`;
