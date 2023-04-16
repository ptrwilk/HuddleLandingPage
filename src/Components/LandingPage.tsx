import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import styles from "./styles.module.css";
import Logo from "../assets/logo.svg";
import IllustrationMockups from "../assets/illustration-mockups.svg";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingPage = () => {
  return (
    <Box className={styles["container"]}>
      <img className={styles["img-logo"]} src={Logo} />
      <img className={styles["img-illustration"]} src={IllustrationMockups} />
      <Box className={styles["content"]}>
        <Typography className={styles["text"]} variant="h1">
          Build The Community Your Fans Will Love
        </Typography>
        <Typography className={styles["text"]}>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </Typography>
        <Button className={styles["btn"]}>Register</Button>
      </Box>
      <Box className={styles["icons"]}>
        <IconButton className={styles["btn-icon"]}>
          <FontAwesomeIcon icon={faFacebookF} />
        </IconButton>
        <IconButton className={styles["btn-icon"]}>
          <FontAwesomeIcon icon={faTwitter} />
        </IconButton>
        <IconButton className={styles["btn-icon"]}>
          <FontAwesomeIcon icon={faInstagram} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default LandingPage;
