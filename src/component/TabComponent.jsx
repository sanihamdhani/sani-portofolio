import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LaunchIcon from "@mui/icons-material/Launch";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import * as React from "react";

import "./style.css";

export default function LabTabs({ linkEx }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className="experience">
      <h3 ref={linkEx}>My Experience</h3>
      <TabContext
        value={value}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        className="section-tab"
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {/* <Tab label="Experiences" value="1" /> */}
            <Tab label="Training Bootcamp" value="1" />
            <Tab label="Propessional Certification" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Timeline
            className="timeline"
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h4>Bangkit Academy 2022 by Google, GoTo, Traveloka</h4>

                <p>
                  <b>Dicoding Academy</b> | February 2022 - July 2022
                </p>
                <a
                  href="https://drive.google.com/file/d/1FJf6QF6TMLAUFQRuvIjmOmn1xGX2nQc6/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate <LaunchIcon />
                </a>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h4>Digital Leadership Trough Coding (Kampus Merdeka)</h4>
                <p>
                  <b>Progate Global Indonesia</b> | September 2021 - December
                  2021
                </p>
                <a
                  href="https://drive.google.com/file/d/1-8oRu9YbHQsDySWZqze4AXy8nz0b8njg/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate <LaunchIcon />
                </a>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </TabPanel>
        <TabPanel value="2">
          <Timeline
            className="timeline"
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h4>Belajar Membuat Aplikasi Web dengan React</h4>
                <p>
                  <b> Dicoding Academy</b> |
                  <CalendarMonthIcon /> July 2022
                </p>
                <a
                  href="https://www.dicoding.com/certificates/1OP864G4LXQK"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate
                  <LaunchIcon />
                </a>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h4>Belajar Membuat Front-End Web untuk Pemula</h4>
                <p>
                  <b> Dicoding Academy</b> |
                  <CalendarMonthIcon /> Juni 2022 |
                </p>
                <a
                  href="https://www.dicoding.com/certificates/GRX5LO66RP0M"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate
                  <LaunchIcon />
                </a>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h4>Belajar Dasar Pemograman Javascript</h4>
                <p>
                  <b> Dicoding Academy</b> |
                  <CalendarMonthIcon /> Juni 2022
                </p>
                <a
                  href="https://www.dicoding.com/certificates/1OP8L9M2QZQK"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate
                  <LaunchIcon />
                </a>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h4>Belajar Dasar Pemograman Web</h4>
                <p>
                  <b> Dicoding Academy</b> |
                  <CalendarMonthIcon /> Mei 2022
                </p>

                <a
                  href="https://www.dicoding.com/certificates/07Z65YMMMXQR"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate
                  <LaunchIcon />
                </a>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </TabPanel>
      </TabContext>
    </Container>
  );
}
