import React from "react";
import { Fade } from "react-reveal";
import { QuoteMain, QuoteAuthor } from "./Styles";

const QuoteMobile = () => {
  return (
    <div className="quote-m-wrapper">
      <div className="quote-m-row">
        <i>
          <Fade duration={3000}>
            <QuoteMain>
              <span className="quotation-m-marks">&#8220;</span>To touch is to give life 
              <span className="quotation-m-marks">&#8221;</span>
            </QuoteMain>
          </Fade>
          <br />
        </i>
      </div>
      <div className="quote-m-row">
        <Fade duration={3000}>
          <QuoteAuthor>- Michelangelo</QuoteAuthor>
        </Fade>
      </div>
    </div>
  );
};

export default QuoteMobile;
