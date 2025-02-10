import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import { Button, ListItemText } from "@mui/material";
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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "comfortaa,cursive",
};

const EventModal = ({ open, setOpen, event }) => {
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            {event?.rules.length > 0 &&
                <Box
                    // sx={{
                    //     display: "flex",
                    //     justifyContent: "space-between",
                    //     alignItems: "center",
                    // }}
                >
                    <Box sx={style} style={{ maxHeight: "80vh", overflowY: "auto" }}>

                        {event?.rules.map(ruleCategory => (
                            <div key={ruleCategory.rule_name} className="rule-category">
                                <Typography variant="h5" gutterBottom sx={{ fontWeight: "400", padding: 0, color: "#378fbe" }}>
                                    {ruleCategory.rule_name}
                                </Typography>

                                <ul style={{ color: "white" }}>
                                    {ruleCategory.rules.map(rule => (
                                        <li key={rule.rule} style={{ color: "white", padding: "4px" }}>{rule.rule}</li>
                                    ))}
                                </ul>
                                <br />
                            </div>
                        ))}
                        <Button onClick={() => setOpen(false)}>
                        <CloseIcon sx={{ color: "white" }} />
                    </Button>
                    </Box>
                </Box>
            }

        </Modal>
    );
};

export default EventModal;