import classes from "./Participate.module.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import bot from "../../../../assets/Home/participate/bot.png";
import { FaTelegramPlane } from "react-icons/fa";
const data = [
  {
    no: 1,
    heading: "Download & setup MetaMask or TrustWallet.",
    text: "Download MetaMask (a crypto wallet in form of a browser extension or an app for your phone) or TrustWallet (an app for your phone). After that, you will have to add the Binance Smart Chain to your network list. (click here for a step-by-step tutorial)",
  },
  {
    no: 2,
    heading:
      "Buy and send BNB to MetaMask or Buy BNB directly through Trust Wallet!",
    text: "Buy BNB on an exchange (i.e. Binance, Kraken, Coinbase, etc.), Or buy through Trust Wallet. Transfer the tokens to your MetaMask wallet address. BEP-20 addresses start with a “0x”,",
  },
  {
    no: 3,
    heading: "Send BNB to Our Contract Address.",
    text: "use the contract address below 👇",
    text2:
      "0x130F9cb605c31b89D649958095A6A7F79271cD17 to send BNB and get $INFINITY in exchange",
  },
];
const Participate = () => {
  return (
    <div>
      <div className={classes.participateMain}>
        <div className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <div className={classes.image}>
                <img src={bot} alt="bot" width="90%" />
              </div>
              <div className={classes.imageText}>
                <p>Only use address provided on website and telegram.</p>
                <p>If you need help with purchase ask in group chat.</p>
                <p>
                  If someone dms you first and offers you help 99% it is a scam!
                  Do not get fooled!
                </p>
              </div>
            </Grid>
            <Grid item xs={12} lg={6}>
              <h2 className={classes.heading}>Participate in Private Sale</h2>
              {data.map((dt) => (
                <div className={classes.rowFlex} key={dt.no}>
                  <div className={classes.number}>{dt.no}</div>
                  <div className={classes.colFlex}>
                    <h2>{dt.heading}</h2>
                    <p>{dt.text}</p>
                    {dt.text2 && (
                      <p className={classes.overflowText}>{dt.text2}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className={classes.joinButtonDiv}>
                <Button
                  variant="contained"
                  startIcon={<FaTelegramPlane />}
                  className={classes.joinButton}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://t.me/infinitytok", "_blank");
                  }}
                >
                  Join Telegram Group
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default Participate;
