import React from "react";
import useStyles from "./masterLayoutStyles";
import TopHeather from "../components/topheather/index";
import DesktopMenu from "../components/menu/desktopMenu/index";
import { Container } from "@mui/material";
import Footer from "../components/Footer/index";
function MasterLayout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopHeather />
      <Container maxWidth="lg">
        <DesktopMenu />
      </Container>
      <Footer />
    </div>
  );
}
export default MasterLayout;
