import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { Box, Container, Stack } from "@mui/material";
import Heading from "../../shared/Heading";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   customTimelineUi: {
//     '&.MuiTimelineItem-missingOppositeContent': {
//       flexGrow: 0,
//     },
//   }
// }))
import "../../../styles/SUMUN/circles.css"
import "../../../styles/SUMUN/Timeline.css"

const TimelineView = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5vh 0",
        background: "#000",
        position: 'relative',

        "& .MuiTimelineItem-root::before" : {
          padding: '0'
        }
      }}
    >
      <Container maxWidth="lg" sx={{
        zIndex: 10
      }}>
        <Stack spacing={5}>
          {/* <Typography
            variant="h2"
            fontFamily={"Marcellus"}
            textAlign={"center"}
          >
            SITMUN 2024 TIMELINE
          </Typography> */}
          <Heading heading={"TIMELINE"} />
          <Box display={{ sm: "flex", xs: "none" }}>
            <CustomizedTimeline />
          </Box>
          <Box display={{ sm: "none", xs: "flex" }}>
            <CustomizedTimelineMobile />
          </Box>
        </Stack>
      </Container>
      {/* <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> */}
    </Box>
  );
};

export default TimelineView;

const eventTimeline = [
  {
    date: "1st January, 2024",
    heading: " Early Bird Application",
    details:
      "Early bird Registration was live. The Conference got Overwhelming response of Registration."
  },
  {
    date: "17th January, 2024",
    heading: "Dates Revealed",
    details:
      "Official dates for SITMUN 2023 are declared now that starts from 28th March 2024 - 30th March,2024",
  },
  {
    date: "20th January, 2024",
    heading: "Committee Declaration",
    details:
      "Committees were declared for the 2024 edition that include SDG Summit ,UNHRC,DISEC,IP",
  },
  {
    date: "9th February, 2024",
    heading: "First Round Application",
    details:
      "First Round Registration is Live Now. Hurry up!,Book your seats now.",
  },
  {
    date: "16th February, 2024",
    heading: "EB Reveal",
    details:
      "Magnificent EB Panels  came On board for the Conference of the Year.",
  },
  {
    date: "TBD",
    heading: "To Be Revealed Soon!!!",
    details:
      "Other event dates will be disclosed soon. Stay tuned to the website or follow our Instagram page to stay updated.",
  },
  {
    date: "28th March - 30th March ,2024",
    heading: "Event Dates",
    details:
      "Official dates of SITMUN 2023 are 28th of March to 30th of March, 2024.",
  },
];

function CustomizedTimeline() {
  return (
    <Timeline>
      {eventTimeline.map((item, i) => (
        <TimelineItem position="alternate" key={i}>
          <TimelineOppositeContent>
            <Typography color="#ffffff">{item.date}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector color="blue" />
          </TimelineSeparator>
          <EventDetail heading={item.heading} details={item.details} odd={i} />
        </TimelineItem>
      ))}
    </Timeline>
  );
}

function CustomizedTimelineMobile() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
        '& .MuiTimelineItem-root::before': {
          flex: 0,
        },
      }}
    >
      {eventTimeline.map((item, i) => (
        <TimelineItem key={i}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector color="blue" />
          </TimelineSeparator>
          <EventDetailMobile heading={item.heading} details={item.details} odd={i} date={item.date} />
        </TimelineItem>
      ))}
    </Timeline>
  );
}

function EventDetail({ heading, details, odd }) {
  return (
    <TimelineContent>
      <Box
        sx={{
          // background: '#4d9f3d89',
          padding: "1vh 4vw 4vh",
          borderBottom: "3px solid rgba(78,159,61,1)",
          borderRight: odd % 2 != 0 ? "0" : "3px solid rgba(78,159,61,1)",
          borderLeft: odd % 2 == 0 ? "0" : "3px solid rgba(78,159,61,1)",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
        className="timel"
      >
        <Typography
          variant="h5"
          textAlign={"center"}
          paddingBottom={"2vh"}
          fontFamily={"comfortaa, cursive"}
          fontWeight={700}
          color={"#cce5ff"}
        >
          {heading}
        </Typography>
        <Typography
          textAlign={"center"}
          fontFamily={"comfortaa, cursive"}
          color={"#f5f5dc"}
          fontWeight={200}
        >
          {details}
        </Typography>
      </Box>
    </TimelineContent>
  );
}

function EventDetailMobile({ heading, details, odd, date }) {
  return (
    <TimelineContent>
      <Box
        sx={{
          // background: '#4d9f3d89',
          padding: "1vh 4vw 4vh",
          borderBottom: "3px solid rgba(78,159,61,1)",
          borderRight: odd % 2 != 0 ? "0" : "3px solid rgba(78,159,61,1)",
          borderLeft: odd % 2 == 0 ? "0" : "3px solid rgba(78,159,61,1)",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            width: '100%'
        }}
        className="timel"
      >
        <Typography
          variant="h5"
          textAlign={"center"}
          paddingBottom={"2vh"}
          fontFamily={"comfortaa, cursive"}
          fontWeight={700}
          color={"#cce5ff"}
        >
          {heading}
        </Typography>
        <Typography
          textAlign={"center"}
          fontFamily={"comfortaa, cursive"}
          color={"#bababa"}
          fontWeight={200}
        >
          {date}
        </Typography>
        <Typography
          textAlign={"center"}
          fontFamily={"comfortaa, cursive"}
          color={"#f5f5dc"}
          fontWeight={200}
        >
          {details}
        </Typography>
      </Box>
    </TimelineContent>
  );
}
