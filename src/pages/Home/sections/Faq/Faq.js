import classes2 from "./Faq.module.css";
import React from "react";
import AccordionC from "./Components/AccordionC";
import { faqData } from "./data";
const Faq = () => {
  return (
    <div>
      <div className={classes2.faqMain}>
        <h2 className={classes2.heading}> faq </h2>
        <div className={classes2.container}>
          <AccordionC faq={faqData} />
        </div>
      </div>
    </div>
  );
};
export default Faq;
