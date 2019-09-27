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
              <span className="quotation-m-marks">&#8220;</span>If you want to
              conquer the anxiety of life, live in the moment, live in the
              breath.
              <span className="quotation-m-marks">&#8221;</span>
            </QuoteMain>
          </Fade>
          <br />
        </i>
      </div>
      <div className="quote-m-row">
        <Fade duration={3000}>
          <QuoteAuthor>– Amit Ray</QuoteAuthor>
        </Fade>
      </div>
    </div>
  );
};

export default QuoteMobile;
