import classes from "./Landing.module.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import bot from "../../../../assets/Home/hero/bot2.svg";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
const Landing = () => {
  return (
    <div>
      <div className={classes.landingMain}>
        {/* <img src={background} alt="vbac" /> */}
        <div className={classes.landingContent}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <div className={classes.leftText}>
                <p>Earn BNB & CAKE by holding INFINITY</p>
                <h2>Calculate your earnings in Infinity</h2>
                <div className={classes.rowFlex}>
                  <Button variant="contained" className={classes.buyButton}>
                    buy infinity
                  </Button>
                  <div className={classes.rowFlex2}>
                    <div>
                      <FaTelegramPlane />
                    </div>
                    <div>
                      <FaTwitter />
                    </div>
                    <div>
                      <FaRedditAlien />
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={6}>
              <div className={classes.rightImage}>
                <img src={bot} width="90%" alt="bot" />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default Landing;
