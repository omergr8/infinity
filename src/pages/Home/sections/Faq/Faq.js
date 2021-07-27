import classes2 from "./Faq.module.css";
import React from "react";
import Grid from "@material-ui/core/Grid";
import AccordionC from "./Components/AccordionC";
import { leftFaq, rightFaq } from "./data";
const Faq = () => {
  return (
    <div>
      <div className={classes2.faqMain}>
        <h2 className={classes2.heading}> faq </h2>
        <div className={classes2.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <AccordionC faq={leftFaq} />
            </Grid>
            <Grid item xs={12} lg={6}>
              <AccordionC faq={rightFaq} />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default Faq;
