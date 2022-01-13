import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const style = {
  position: "absolute",
  top: "5%",
  left: "5%",
  display: "inline-flex",
  // marginLeft: "auto",
  // marginRight: "auto",
  justifyContent: "space-around",
  outline: "none",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  width: "90%",
  // bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();

  return (
    <div>
      <Button onClick={handleOpen}><img
            className={classes.desc}
            src="https://i.imgur.com/jlZySn6.jpeg"
          ></img></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            className={classes.desc}
            src="https://i.imgur.com/jlZySn6.jpeg"
          ></img>
        </Box>
      </Modal>
    </div>
  );
}
