import classes2 from "./Navbar.module.css";
import { HashLink } from "react-router-hash-link";
import Button from "@material-ui/core/Button";
import SideDrawer from "./Components/SideDrawer";
import logo from "../../../assets/common/logo.png";
const Navbar = () => {
  const buyButton = (
    <Button className={classes2.buyButton} variant="outlined">
      BUY INFINITY
    </Button>
  );
  return (
    <>
      <nav className={classes2.main}>
        <div className={classes2.header}>
          <div className={classes2.navFlex}>
            <div className={classes2.logo}>
              <img src={logo} alt="logo" width="90%" />
            </div>
            <div className={classes2.navLinks}>
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
                  <HashLink to="/#roadmap" className={classes2.anchorList2}>
                    <p>Roadmap</p>
                  </HashLink>
                </li>
                <li>
                  <a href="!#">Whitepaper</a>
                </li>
              </ul>
            </div>
            <div className={classes2.buyButtonDiv}>{buyButton}</div>
            <div className={classes2.hamIcon}>
              <SideDrawer />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
