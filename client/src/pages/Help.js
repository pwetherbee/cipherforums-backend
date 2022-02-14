import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useEffect, useState } from "react";

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
  tab: {
    marginLeft: 20,
  },
}));

function TabPanel(props) {
  const { children, value, index } = props;
  return <div hidden={value !== index}>{children}</div>;
}

export default function FullWidthGrid() {
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  const handleChangeTab = (e, newTab) => {
    setTab(newTab);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              What is this website?
            </Typography>
            <Typography>
              This website utilizes two intertwined technologies. The first is
              encryption, and the second is the blockchain. Use the slider below
              to learn more about how each technology is implemented in this
              website.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Tabs
          value={tab}
          onChange={handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Encryption"></Tab>
          <Tab label="Blockchain"></Tab>
        </Tabs>
      </Grid>
      <TabPanel value={tab} index={0}>
        <Grid container spacing={3} className={classes.tab}>
          <Grid item xs={11}>
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom>
                Why use data modification?
              </Typography>
              <Typography>
                This website uses encryption and obfuscation to provide privacy,
                scarcity, and secrecy for digital content. The goal of
                Cipherforums is to allow individuals to choose what degree of
                accessibility they would like their social content to have on
                the internet. This is achieved with the implementation of two
                different processes.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={11}>
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom>
                XOR (logic gate)
              </Typography>
              <Typography gutterBottom>
                Providing thorough obfuscation, to prevent ad targeting, online
                indexing, or censorship.
              </Typography>
              <Typography variant="h5" gutterBottom>
                AES (encryption)
              </Typography>
              <Typography gutterBottom>
                Providing 256 bit military grade encryption.
              </Typography>
            </Paper>
          </Grid>
          <Paper className={classes.paper}>
            <Typography>
              All encryption and decryption operations are done client side. Our
              code is open source and freely auditable and available at
              ____________.
            </Typography>
          </Paper>
          <Grid item xs={11}>
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
          <Grid item xs={11}>
            <Paper className={classes.paper}>
              <Typography variant="h6" gutterBottom>
                Example
              </Typography>
              <Typography>
                Compare each digit with the digit below it.
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
          {/* <Grid item xs={11}>
          <Paper className={classes.paper}>
            <Typography>* XOR JAVASCIPT DEMO *</Typography>
          </Paper>
        </Grid> */}
          <Grid item xs={11}>
            <Paper className={classes.paper}>
              <Typography variant="h4" gutterBottom>
                How is XOR used?
              </Typography>
              <Typography>
                Both messages and keys are contained in 256 bit chucks
                (equivalent to 64 characters). Keys are derived using the SHA256
                hash of the text entered into the key input field. Message
                chunks are padded with random letters to make sure that their
                length always equals 64 characters, and are XORed against the 64
                character key (a SHA256 hash). This website converts the data to
                utf-8 text in the browser, but the data itself will always be
                strings of hex that are interpreted client side.
              </Typography>
              <div>
                <br />
              </div>
              <Typography>
                When text is entered, all text is converted into hex numbers.
                The hex for the message is XORed against the hex key to produce
                cipher hex. This cipher hex is the only thing sent to
                cipherforums servers, and is the only thing visable to search
                engines. Doing this enables cipher text to be public, while the
                original message can only be recovered by XORing the cipher
                against its corresponding key.
              </Typography>
              <div>
                <br />
              </div>
              <Typography>
                However, this process is not considered encryption. When a XOR
                key is repeated more than once, cryptographers can use
                consistencies in the cipher text to derive the key, without
                knowing it beforehand. Because of this, the XOR technique is
                only considered obfuscation, meaning you are hiding and
                obscuring the text, not encrypting it. In order for this
                individual to retrieve the original message, they would have to
                use cryptanalysis, time, money, or all 3. This process creates
                an environment where your data is hidden by default, and work
                has to be done to retrieve the original message. If strong data
                security is your goal, then AES is a much more suitable tool.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={11}>
            <Paper className={classes.paper}>
              <Typography variant="h3" gutterBottom>
                AES
              </Typography>
              <Typography>
                AES is a symmetric-key encryption technique developed by the
                United States National Security Agency, and is considered to be
                military grade. With AES, you are thoroughly encrypting your
                data. AES is considered to be practically irreversible, and can
                be used to encrypt sensitive information. It should be noted
                however, that while encryption is an incredibly powerful tool,
                it still requires responsible key security.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={11}>
            <Paper className={classes.paper}>
              <Typography variant="h4" gutterBottom>
                How is AES used?
              </Typography>
              <Typography>
                On Cipherforums, using AES encryption will not change the user
                experience much, but will do very different things to your data.
                While changing methods is the simple flip of a switch, XOR will
                obscure your data while AES will thoroughly encrypt it. These
                are two very different things. Direct messaging will always use
                AES, and user posts and comments can be AES encrypted if the
                user chooses to do so.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={11}></Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <Grid container spacing={3} className={classes.tab}>
          <Grid item xs={11}>
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom>
                Why use blockchains?
              </Typography>
              <Typography>
                This website uses blockchains to store data in an immutable and
                decentralized manner. While blockchains are not nescessary to
                use any part of Cipherforums, their durability of data storage
                allows users to decide how immutable they want their data to be.
                If willing to pay the network fees on a users chain of choice, a
                user could hypothetically store all their data on chain.
                Blockchains allow for universal accessible data, that could be
                accessed even if Cipherforum's servers were down. Say for
                instance, a user wanted to bundle up all of the comments their
                profile had ever made, and publish them to a blockchain. If the
                Ethereum chain was used for example, the user's Cipherforums
                data could only be lost if the entire Ethereum network was
                destroyed, and all backups of the chain were erased. Once
                published, this data could even be accessed and implemented on
                another forums website.
              </Typography>
            </Paper>
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom>
                How are blockchains used to store Cipherforums data?
              </Typography>
              <Typography>
                Cipherforums allows data to be bundled and published to
                blockchains, even if it is encrypted. The combination of
                Cipherforums AES implementation with on chain storage allows for
                data to be securely stored, while also being universally
                accessible.
              </Typography>
            </Paper>
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom>
                How are blockchains used to store digital art?
              </Typography>
              <Typography>
                Cipherforums takes advantage of art that already exists on
                various blockchains. This data has already been published to the
                chain in an immutable fashion, so it is trivial for Cipherforums
                to access and display it. The Cipherforums data pertaining to
                this art is stored on servers by default, but can be published
                to the network at the cost of network fees. wyeiduyb
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
}
