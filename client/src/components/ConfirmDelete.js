import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
const ConfirmDelete = ({ open, data, handleDecision, handleClose }) => {
  return (
    <div>
      {/* Button to trigger the opening of the dialog */}
      {/* <Button onClick={this.handleClickOpen}>Delete this</Button> */}
      {/* Dialog that is displayed if the state open is true */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDecision("disagree")} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDecision("agree")} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmDelete;
