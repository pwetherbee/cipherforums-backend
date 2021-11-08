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
              This website uses encryption and obfuscation to provide privacy,
              scarcity, and secrecy to content. The goal of Cipherforums is to
              allow individuals to choose what degree of accessibility they
              would like their social content on the internet to have. This is
              achieved with the implementation of two different processes.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              XOR (logic gate)
            </Typography>
            <Typography gutterBottom>
              Providing thorough obfuscation, or could be considered extremely
              light “encryption”
            </Typography>
            <Typography variant="h5" gutterBottom>
              AES (encryption)
            </Typography>
            <Typography gutterBottom>
              Providing 256 bit military grade encryption
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3" gutterBottom>
              XOR
            </Typography>
            <Typography>
              Xor is a simple logic gate that creates a binary output from two
              binary inputs. The rules of the logic gate are as follows.
            </Typography>
            <div>
              <br />
            </div>
            <Typography>
              If the two inputs have the same value, a 0 is generated.
            </Typography>
            <Typography>
              If the two inputs have a different value, a 1 is generated.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Example
            </Typography>
            <Typography>
              Compare each digit with the digit of the string below it
            </Typography>
            <div>
              <br />
            </div>
            <Typography variant="h5">1 0 0 1 0 1 - String #1</Typography>
            <Typography variant="h5">0 1 0 0 0 1 - String #3</Typography>
            <Typography variant="h5">___________</Typography>
            <Typography variant="h5">
              1 1 0 1 1 0 - Result of the two strings XORed against eachother
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography>* XOR JAVASCIPT DEMO *</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              How is XOR used?
            </Typography>
            <Typography>
              Both messages and keys are contained in 256 bit chucks (equivalent
              to 64 characters). Keys are derived through the SHA256 hash of the
              input key text. (Search SHA256 to understand key derivation
              better). Message chunks are padded with random letters to make
              sure that their length always equals 64 characters, and are Xored
              with the 64 character key (a SHA256 hash). This website converts
              the data to utf-8 text in the browser, but the data itself will
              always be strings of hex that are interpreted client side.
            </Typography>
            <div>
              <br />
            </div>
            <Typography>
              When text is entered, this text is converted into hex numbers, and
              then XORed against the hex key to produce cipher hex. Doing this
              enables cipher text to be public, and the original message can
              only be recovered by XORing the cipher against its corresponding
              key.
            </Typography>
            <div>
              <br />
            </div>
            <Typography>
              However, this process is not considered encryption. When a XOR key
              is repeated more than once, cryptographers can use consistencies
              in the cipher text to derive the key. Because of this, the XOR
              technique is only considered obfuscation, meaning you are hiding
              and obscuring the text, rather than encrypting it. Xor should be
              used for information that needs to be hidden now, but ok if it is
              discovered later. You are essentially creating a financial barrier
              between the individual trying to decrypt your message, and the
              original message. In order for this individual to retrieve the
              original message, they would have to use cryptanalysis, time,
              money, or all 3. This process creates an environment where your
              data is hidden by default, and work has to be done to retrieve the
              original message. If encryption is your goal, you will want to use
              AES.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3" gutterBottom>
              AES
            </Typography>
            <Typography>
              AES is a symmetric-key encryption technique developed by the
              United States National Security Agency, and is military grade.
              With AES, you are thoroughly encrypting your data. AES is
              considered to be practically irreversible, and can be used to
              encrypt sensitive information.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              How is AES used?
            </Typography>
            <Typography>
              On Cipherforums, using AES encryption will not change the user
              experience much, but will allow for incredibly strong encryption.
              Direct messaging will always use AES, and user posts and comments
              can be AES encrypted if the user chooses to do so.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </div>
  );
}
