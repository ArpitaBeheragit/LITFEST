import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 350,
  bgcolor: "#313131",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  fontFamily: "comfortaa,cursive",
};

const CommitteeModal = ({ open, setOpen, committee }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} style={{ maxHeight: "80vh", overflowY: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ color: "#4E9F3D" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {committee?.name}
          </Typography>
          <Button onClick={() => setOpen(false)}>
            <CloseIcon sx={{ color: "white" }} />
          </Button>
        </Box>
        <Typography id="modal-modal-description" sx={{ mt: 2, color: "#fff" }}>
          {committee?.body}
        </Typography>
        {committee?.agenda && (
          <Accordion
            sx={{ bgcolor: "#313131", color: "#fff", boxShadow: "none" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ fontWeight: "600", padding: 0, color: "#4E9F3D" }}
            >
              AGENDA
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              {committee?.agenda}
            </AccordionDetails>
          </Accordion>
        )}
        {committee?.ebs.length>0 && <Accordion
          sx={{ bgcolor: "#313131", color: "#fff", boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ fontWeight: "600", padding: 0, color: "#4E9F3D" }}
          >
            EBs
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
          <Stack direction="row" spacing={2}>
            {committee?.ebs.map((eb) => (
              <div style={{textAlign: 'center'}}>
                <Avatar
                  alt="Remy Sharp"
                  src={eb.profilePic}
                  sx={{ width: 108, height: 108, margin: '12px auto' }}
                />
                <h3 style={{fontWeight: 'bold'}}>{eb.name}</h3>
                <p>{eb.designation}</p>
              </div>
            ))}
          </Stack>
          </AccordionDetails>
        </Accordion>}
      </Box>
    </Modal>
  );
};

export default CommitteeModal;