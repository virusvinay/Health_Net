import React from "react";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk"; // Icon for emergency
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Left Column */}
      <div className={styles.leftColumn}>
        <p className={styles.heading}>
          <span className={styles.p1}>Health</span>{" "}
          <span className={styles.p2}>Net</span>
        </p>
        <p className={styles.subHeading}>jo pasine se nhayega vo itihas rachega</p>
        <div className={styles.authBtns}>
          <Link className={styles.linkBtn} to="/signup">
            <Button
              variant="outlined"
              color="warning"
              startIcon={<PersonAddIcon />}
            >
              Sign Up
            </Button>
          </Link>
          <Link className={styles.linkBtn} to="/signin">
            <Button variant="contained" color="success" endIcon={<LoginIcon />}>
              Sign In
            </Button>
          </Link> 
          {/* Emergency Button */}
          <Link className={styles.linkBtn} to="/view-location">
            <Button
              variant="outlined"
              color="error"
              startIcon={<PhoneInTalkIcon />}
            >
              Emergency
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Column */}
      <div className={styles.rightColumn}>
        {/* <img src="/health.png" alt="" draggable="false" /> */}
      </div>
    </div>
  );
}
