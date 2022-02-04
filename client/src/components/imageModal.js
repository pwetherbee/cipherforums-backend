import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

function ImageModal({ src, onClose, open }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* <Box
          sx={{
            // position: "absolute",
            top: 0,
            right: 0,
            transform: "translate(200%, 50%)",
          }}
          onClick={onClose}
        >
          <CloseIcon
            sx={{
              cursor: "pointer",
              position: "absolute",
              right: 50,
              top: 50,
              transform: "scale(1.8)",
            }}
          />
        </Box> */}
        <img
          style={{
            maxHeight: "90vh",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 40,
          }}
          src={src}
        />
      </Box>
    </Modal>
  );
}

export default ImageModal;
