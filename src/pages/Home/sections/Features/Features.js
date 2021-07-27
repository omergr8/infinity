import classes from "./Features.module.css";
import Grid from "@material-ui/core/Grid";
import f1 from "../../../../assets/Home/features/f1.svg";
import f2 from "../../../../assets/Home/features/f2.svg";
import f3 from "../../../../assets/Home/features/f3.svg";
import f4 from "../../../../assets/Home/features/f4.svg";
import f5 from "../../../../assets/Home/features/f5.svg";
import f6 from "../../../../assets/Home/features/f6.svg";
const data = [
  {
    id: 1,
    heading: "8% Redistribution In BNB",
    text: "8% from every buy/sell is taken and redistributed to all INFINITY holders. Hold INFINITY tokens, earn BNB.",
    image: f1,
  },
  {
    id: 2,
    heading: "4% Staking Station",
    text: "4% from every buy/sell is taken and placed in staking cake and is distributed to all holders every week (Monday or Friday)",
    image: f2,
  },
  {
    id: 3,
    heading: "Autopay every 2 hours",
    text: "you don’t need to claim your earned BNB. It’s automatically sent to your wallet every 2 hours.",
    image: f3,
  },
  {
    id: 4,
    heading: "6% to Liquidity Pool",
    text: "6% from every transaction is transformed into liquidity for Pancakeswap. It's automatic and helps create a price floor (stability) Initial Liquidity Provided will be locked with DXSALE for 1 year.",
    image: f4,
  },
  {
    id: 5,
    heading: "Team Lead, Community Driven",
    text: "We set up a marketing wallet (5% of supply) to ensure our capability in supporting the team and marketing expenses in the upcoming months.",
    image: f5,
  },
  {
    id: 6,
    heading: "Anti-Dump Lock & 3% Sell Fee",
    text: "Sales are restricted to less than 0.1% of the total supply + an extra 3% fee is applied to all sells. ‍This will allow us to reduce swing-trading and break whales' control.",
    image: f6,
  },
];
const Features = () => {
  return (
    <div>
      <div className={classes.featureMain}>
        <h2 className={classes.mainHeading}>Features worth knowing</h2>
        <div className={classes.container}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={6}
          >
            {data.map((dt) => (
              <Grid item key={dt.id} lg={4} md={6} sm={6} xs={12}>
                <div className={classes.featureContent}>
                  <img src={dt.image} alt="f1" width="70px" />
                  <h3>{dt.heading}</h3>
                  <p>{dt.text}</p>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default Features;
