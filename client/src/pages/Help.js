import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: -20,
    padding: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              What is this website?
            </Typography>
            <Typography>
              This website uses encryption and obfuscation to provide privacy
              and scarcity to content. The goal of Cipherforums is to allow
              individuals to choose what degree of accessibility they would like
              their social internet content to have. This is achieved with the
              implementation of two different processes.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              XOR (logic gate) - Providing through obfuscation or very
              lightweight “encryption”
            </Typography>
            <Typography variant="h5" gutterBottom>
              AES (encryption) - Providing 256 bit military grade encryption
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              XOR
            </Typography>
            <Typography>
              Xor is a simple logic gate that creates a binary output from two
              binary inputs. These two input strings are compared to each other
              character by character, with one binary string above the other.
            </Typography>
            <Typography>------</Typography>
            <Typography>
              If the two input strings have the same value, a 0 is generated.
            </Typography>
            <Typography>
              An example of this would be: the first digit of both strings is a
              zero - generating a 0
            </Typography>
            <Typography>------</Typography>
            <Typography>
              If the two inputs have a different value a 1 is generated.
            </Typography>
            <Typography>
              An example of this would be: the first digit of one string is a
              zero, and the first digit of the other string is a one -
              generating a 1.
            </Typography>
          </Paper>
        </Grid>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography>User message:</Typography>
            <Typography>
              Hello, here is an example message.
              <Typography></Typography>
              -------
              <Typography></Typography>
              User key:
              <Typography></Typography>
              Here is an example key
              <Typography></Typography>
              -------
              <Typography></Typography>
              64 character message with padding letters:
              <Typography></Typography>
              QPrJSuIcrZRZqzfOIwwZnWwgqOoI|Hello, here is an example message.|
              <Typography></Typography>
              -------
              <Typography></Typography>
              64 character SHA256 hash of key:
              <Typography></Typography>
              51cc40047e7d5476fcab371037b385a86ce5e64cbe7ebc2a11bb271d8db08558
            </Typography>
          </Paper>
        </Grid> */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              How is XOR used?
            </Typography>
            <Typography>
              Both messages and keys are contained in 256 bit chucks (equalling
              64 characters). Keys are derived by generating the SHA256 hash of
              the input key text. Message chunks are padded with random letters
              to make sure that their length always equals 64 characters, and
              are Xored with the 64 character SHA256 hash of the chosen key.
              This website styles these inputs in the browser, but the data
              itself will always be strings of hex values that are interpreted
              client side.
            </Typography>
            <Typography>------</Typography>
            <Typography>
              When text is entered, this text is converted into hex numbers, and
              then Xored against the hex key to produce cipher text. Doing this
              enables cipher text to be public, and the original message can
              only be recovered by Xoring the cipher text against its key.
            </Typography>
            <Typography>------</Typography>
            <Typography>
              However, this process is not considered encryption. This is
              because if this key is repeated more than once, cryptographers can
              use consistencies in the cipher text to derive the key. Because of
              this, the XOR technique is considered obfuscation, meaning you are
              hiding and obscuring the text, rather than encrypting it. Xor
              should be used for information that needs to be hidden now, but
              can be discovered later. You are essentially creating a financial
              barrier between the individual trying to decrypt your message, and
              the original message. In order for this individual to retrieve the
              original message, they would have to use cryptanalysis, time,
              money, or all 3. This process creates an environment where your
              data is hidden by default, and work has to be done to retrieve the
              original message.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              AES
            </Typography>
            <Typography>Advanced Encryption Standard</Typography>
            <Typography>
              A symmetric-key encryption technique developed by the United
              States National Security Agency, and is military grade. With AES,
              you are thoroughly encrypting your data. AES is considered to be
              practically irreversible, and can be used to encrypt sensitive
              information.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              How is AES used?
            </Typography>
            <Typography>...</Typography>
            <Typography>...</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              * Disclaimer *
            </Typography>
            <Typography>
              This website is not to be used for criminal activity. This website
              should not be used to store password data, financial data, or any
              sensitive records. While Xor encryption is strong in a vacuum,
              government authorities or advanced cyber security professionals
              could make use of keyloggers, surveillance, inference, endpoint
              breaches, etc. to obtain sensitive information. While these
              methods do require quite a bit of effort, they are not impossible.
            </Typography>
          </Paper> */}
        </Grid>
      </Grid>
    </div>
  );
}
