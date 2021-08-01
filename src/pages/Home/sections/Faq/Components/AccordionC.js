import classes2 from "../Faq.module.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: "500",
    flexBasis: "90.33%",
    flexShrink: 0,
  },
}));

const AccordionC = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Grid container spacing={3}>
        {props.faq !== undefined &&
          props.faq.map((f) => (
            <Grid item xs={12} lg={6}>
              <Accordion
                expanded={expanded === f.panel}
                onChange={handleChange(f.panel)}
                className={classes2.accordion}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon className={classes2.expandIcon} />
                  }
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  className={classes2.accordionSum}
                >
                  <Typography className={classes.heading}>
                    {f.heading}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes2.accordionDetail}>
                  <Typography>{f.text}</Typography>
                </AccordionDetails>
                <AccordionDetails className={classes2.accordionDetail}>
                  <Typography>{f.text2}</Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
      </Grid>
    </>
  );
};
export default AccordionC;
