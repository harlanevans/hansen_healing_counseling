import React from "react";
import { Fade } from "react-reveal";
import { QuoteMain, QuoteAuthor } from "./Global";

const Quote = () => {
  return (
    <div className="quote-wrapper">
      <div className="quote-row">
        <i>
          <Fade duration={3000}>
            <QuoteMain>
              <span className="quotation-marks">&#8220;</span>To touch is to give life 
              <span className="quotation-marks">&#8221;</span>
            </QuoteMain>
          </Fade>
          <br />
        </i>
      </div>
      <div className="quote-row">
        <Fade duration={3000}>
          <QuoteAuthor>- Michelangelo</QuoteAuthor>
        </Fade>
      </div>
    </div>
  );
};

export default Quote;
