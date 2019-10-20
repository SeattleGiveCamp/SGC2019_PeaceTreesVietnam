import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 8, 6),
  },
}));

export default function Terms() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen} style={{fontSize: "20px",  backgroundColor: "transparent", border: "none", color: "white"}}>
        Terms and Conditions
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Terms & Conditions</h2>
            <p id="transition-modal-description">
              <span style={{fontWeight: 800, fontSize: "20px"}}>Donation Refund Policy</span>
              <br/><span>We are grateful for your donation and support of our organization. If you have made an error in making your donation or change your mind about contributing to our organization please contact us. Refunds are returned using the original method of payment. If you made your donation by credit card, your refund will be credited to that same credit card.</span>
              <br/><span style={{fontWeight: 800, fontSize: "20px"}}>Automated Recurring Donation Cancellation</span><br/>
              <span>Ongoing support is important to enabling projects to continue their work, so we encourage donors to continue to contribute to projects over time. But if you must cancel your recurring donation, please notify us.</span>
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
