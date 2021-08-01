import classes from "./Footer.module.css";
import logo from "../../../assets/common/footerLogo2.svg";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className={classes.footerMain}>
        <div className={classes.topRow}>
          <img src={logo} alt="logo" width="180px" />
          <div className={classes.logoDiv}>
            <div className={classes.icons}>
              <a
                href="https://t.me/infinitytok"
                rel="noreferrer"
                target="_blank"
              >
                <FaTelegramPlane />
              </a>
            </div>
            <div className={classes.icons}>
              <a
                href="https://twitter.com/InfinityTokenO1"
                rel="noreferrer"
                target="_blank"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.divider} />
        <div className={classes.bottomRow}>
          <div className={classes.footerLinks}>
            <ul>
              <li>
                <a href="!#">Home</a>
              </li>
              <li>
                <a href="!#">Presale</a>
              </li>
              <li>
                <a href="!#">Tokenomics</a>
              </li>
              <li>
                <a href="!#">Roadmap</a>
              </li>
              <li>
                <a href="!#">Whitepaper</a>
              </li>
            </ul>
          </div>
          <div className={classes.copyrightText}>
            <p>Copyright © Infinity, 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
