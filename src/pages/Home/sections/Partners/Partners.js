import classes from "./Partners.module.css";
import Grid from "@material-ui/core/Grid";
import l1 from "../../../../assets/Home/partner/l1.svg";
import l2 from "../../../../assets/Home/partner/l2.svg";
import l3 from "../../../../assets/Home/partner/l3.svg";
import l4 from "../../../../assets/Home/partner/l4.svg";
const Partners = () => {
  return (
    <div>
      <div className={classes.partnerMain}>
        <div className={classes.container}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item lg={6} md={6} xs={12}>
              <div className={classes.partnerText}>
                <h2>Our Partners</h2>
                <p>More coming soon...</p>
              </div>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <Grid container className={classes.logoGrid} spacing={6}>
                <Grid item xs={6}>
                  <img src={l1} alt="l1" width="100px" />
                </Grid>
                <Grid item xs={6}>
                  <img src={l2} alt="l2" width="100px" />
                </Grid>
                <Grid item xs={6}>
                  <img src={l3} alt="l3" width="100px" />
                </Grid>
                <Grid item xs={6}>
                  <img src={l4} alt="l4" width="100px" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default Partners;
