import classes from "./Roadmap.module.css";
import clsx from "clsx";
const Roadmap = () => {
  return (
    <div>
      <div className={classes.roadMain}>
        <h2 className={classes.mainHeading}>Roadmap</h2>
        <div className={classes.main}>
          <ul className={classes.timeline}>
            <li>
              <div className={classes.directionL}>
                <div className={classes.flagWrapper}>
                  <div className={classes.flag}>
                    <h2>Launch</h2>
                    <p>
                      Highest reward tokenomics ever SEEN before, With
                      experienced, smart, and motivated group of developers
                      behind it!
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className={classes.directionR}>
                <div className={classes.flagWrapper}>
                  <div className={clsx(classes.flag, classes.list)}>
                    <h2>INITIAL EXPOSURE</h2>
                    <p>The initial push to build community Content</p>
                    <p>5,000 Holders</p>
                    <p>5,000 Telegram Members</p>
                    <p>Continue To Develop</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className={classes.directionL}>
                <div className={classes.flagWrapper}>
                  <div className={clsx(classes.flag, classes.list)}>
                    <h2>FURTHER EXPOSURE</h2>
                    <p>Influencer Marketing Push </p>
                    <p>Listing On Coin Gecko</p>
                    <p>Listing On CoinMarketCap</p>
                    <p>15,000 Telegram Members</p>
                    <p>15,000 Holders</p>
                    <p>Third-Party Audit</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Roadmap;
