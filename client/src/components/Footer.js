import { Container, Grid, Typography, withStyles } from "@material-ui/core";
import logo from "../logo.svg";
const WhiteText = withStyles({
  root: {
    color: "white",
    opacity: 0.9,
  },
})(Typography);

const Footer = () => {
  return (
    <div
      style={{
        height: "500px",
        width: "100%",

        position: "absolute",
        bottom: 0,
      }}
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <br />
            <img src={logo} style={{ height: 70 }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container>
              <WhiteText variant="h6">
                A forum designed with a novel, cryptographically secure
                communication platform.
              </WhiteText>
              <WhiteText variant="subtitle1">
                This website uses encryption and obfuscation to provide privacy,
                scarcity, and secrecy to content. The goal of Cipherforums is to
                allow individuals to choose what degree of accessibility they
                would like their social content on the internet to have.
              </WhiteText>
            </Container>
          </Grid>
          <Grid item xs={12} sm={6}>
            <WhiteText variant="h6" align="right">
              Contact Us
            </WhiteText>
          </Grid>
          <Grid xs={12}>
            <WhiteText align="center">
              Cipherforums.com © Copyright 2021. All Rights Reserved.
            </WhiteText>
          </Grid>
        </Grid>
      </Container>
      <br />
    </div>
  );
};

export default Footer;
