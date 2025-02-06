import React, { useState, useRef } from "react";
import styles from "../../../styles/SUMUN/Feedback.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { feedbackdata } from "../../../data/feedback";
import Heading from "../../shared/Heading";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

const Feedback = () => {
  const sliderRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const openModal = (feedback) => {
    setSelectedFeedback(feedback);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    maxWidth: { xs: 300, sm: 500, md: 500 },
    bgcolor: "#0148006a",
    backdropFilter: "blur(30px)",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    maxHeight: "70vh",
    overflowY: { sm: "hidden", xs: "scroll" },
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    focusOnSelect: true,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: false,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.feedback_wrapper}>
      <div className={styles.main}>
        <Heading heading={"Previous Edition Insights"} />
        <Slider {...settings} ref={sliderRef} className={styles.slider}>
          {feedbackdata?.map((item, id) => (
            <div key={id} className={styles.testimonial}>
              <div className={styles.testimonial_bubble}>
                <div className={styles.quotes}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
                    <path
                      fill="currentColor"
                      d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179m10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179"
                      style={{
                        color: "rgb(27 77 96)",
                      }}
                    />
                  </svg>
                </div>
                <div className={styles.testimonial_text}>
                  <p>
                    {item.text.length > 310 ? (
                      <>
                        {window.innerWidth > 375 ? (
                          <>
                            {item.text.substring(0, 310)}
                            <a
                              href="#"
                              onClick={() => openModal(item)}
                              style={{
                                color: "rgb(40 133 168)",
                                textDecoration: "underline",
                              }}
                            >
                              &nbsp;See More
                            </a>
                          </>
                        ) : (
                          <>
                            {item.text.substring(0, 120)}
                            <a
                              href="#"
                              onClick={() => openModal(item)}
                              style={{
                                color: "#4E9F3D",
                                textDecoration: "underline",
                              }}
                            >
                              &nbsp;See More
                            </a>
                          </>
                        )}
                      </>
                    ) : (
                      <>{item.text}</>
                    )}
                  </p>
                </div>
                <div className={styles.testimonial_author}>
                  <img src={item.url} alt={`Image ${id}`} />
                </div>
                <div className={styles.desc}>
                  <Typography variant="h6" gutterBottom fontFamily={"comfortaa,cursive"}>
                  {item.auth}
                      </Typography>
                      <Typography fontFamily={"comfortaa,cursive"} fontSize={"15px"}>
                      {item.desc}
                      </Typography>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <Modal
          open={modalOpen}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {/* <img style={{width:"100%", maxHeight: "200px", objectFit: "cover"}} src={selectedFeedback && selectedFeedback.url} alt={`Image`} /> */}
            <Button onClick={closeModal} sx={{ margin: "1rem 0" }}>
              <CloseIcon sx={{ color: "white" }} />
            </Button>
            <Typography
              sx={{ color: "white", overflowWrap: "break-word" }}
              variant="body1"
            >
              {selectedFeedback && selectedFeedback.text}
            </Typography>
            <Typography
              sx={{ overflowWrap: "break-word" }}
              variant="subtitle2"
              component="p"
              style={{ margin: "15px 0px 0px 0px", textAlign: "right" }}
            >
              {selectedFeedback && selectedFeedback.auth}
            </Typography>
            <Typography
              sx={{ overflowWrap: "break-word" }}
              variant="subtitle2"
              component="p"
              style={{ margin: "0px 0px 0px 0px", textAlign: "right" }}
            >
              {selectedFeedback && selectedFeedback.desc}
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Feedback;
