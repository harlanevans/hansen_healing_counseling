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

export const LandingTitle = styled.h1`
  font-family: "Cormorant SC", serif;
  color: black;
  font-size: 3em;
`;

export const LandingTitleText = styled.h1`
  font-family: "Cormorant Garamond", serif;
  color: black;
  font-size: 2em;
  font-weight: 100;
  letter-spacing: 1px;
  line-height: 1.75em;
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

export const SubTitle = styled.h1`
  font-family: "Open Sans", sans-serif;
  color: #425e4f;
  padding: 1em;
  font-size: 2.5em;
  text-shadow: 0.5px 0.5px #fae3d9;
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
  font-family: "Cormorant SC", serif;
  color: white;
  padding: 0em;
  font-size: 1.1em;
  margin: 1em;
`;

export const QuoteMain = styled.h3`
  font-family: "Cormorant SC", serif;
  font-size: 3em;
  color: black;
  font-weight: 200 !important;
`;
export const QuoteAuthor = styled.h3`
  font-family: "Cormorant Garamond", serif;
  font-size: 2.5em;
  color: black;
  font-weight: 200 !important;
`;
