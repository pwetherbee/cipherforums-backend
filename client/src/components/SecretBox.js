import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      // margin: theme.spacing(1),
      margin: "auto",
      paddingBottom: 0,
      width: "25ch",
      marginLeft: 0,
    },
  },
}));

export default function SecretBox({ updateSecret, secret }) {
  const classes = useStyles();
  // const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    // setValue(event.target.value);
    // console.log(value);
    updateSecret(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          transitionDuration={50}
          inputProps={{ spellCheck: "false" }}
          id="outlined-textarea"
          label="Secret Key"
          placeholder="Secret Key"
          multiline
          // variant="outlined"
          value={secret}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
