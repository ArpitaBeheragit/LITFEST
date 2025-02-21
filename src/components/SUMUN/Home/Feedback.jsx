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
import { Padding } from "@mui/icons-material";

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
    maxHeight: "80vh",
    bgcolor: "rgb(0 115 225 / 15%)",
    backdropFilter: "blur(30px)",
    border: "2px solid #000",
    boxShadow: 24,
    p: "0px 34px 34px 34px",
    // maxHeight: "70vh",
    overflowY: "auto",
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
                                color: "rgb(40 133 168)",
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
                  <Typography variant="p" gutterBottom fontFamily={"comfortaa,cursive"} mb={0} mt={4}>
                  {item.auth}
                      </Typography>
                      <Typography fontFamily={"comfortaa,cursive"} variant="subtitle2">
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
            <Button onClick={closeModal} sx={{ alignSelf: "flex-end", mr: "-1rem", mt: "0.5rem" }}>
              <CloseIcon sx={{ color: "white",fontSize: "1.8rem" }} />
            </Button>
            <Typography
              sx={{ color: "white", overflowWrap: "break-word" ,fontSize: "0.9rem"}}
              variant="body1"
              fontFamily={"comfortaa,cursive"}
            >
              {selectedFeedback && selectedFeedback.text}
            </Typography>
            <Typography
            fontFamily={"comfortaa,cursive"}
              sx={{ overflowWrap: "break-word" ,color:"white", fontSize: "0.8rem"}}
              variant="body1"
              component="p"
              style={{ margin: "15px 0px 0px 0px", textAlign: "right" }}
            >
              {selectedFeedback && selectedFeedback.auth}
            </Typography>
            <Typography
            fontFamily={"comfortaa,cursive"}
              sx={{ overflowWrap: "break-word" ,color:"white",fontSize: "0.75rem" }}
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
