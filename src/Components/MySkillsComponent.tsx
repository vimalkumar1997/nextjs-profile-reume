import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PdfDownloadbtnComponent from "./PdfDownloadbtnComponent";

import Slider from '@mui/material/Slider';
interface Skill {
  skill: string;
  value: number;
  // Add other properties as needed
}

const MySkillsComponent = () => {
    const [skillsdata] = useState<Skill[]>([
        {
            skill: "HTML",
            value: 98,
        },
        {
            skill: "CSS ",
            value: 99,
        },
        {
            skill: "Javascript ",
            value: 95,
        },
        {
            skill: "React ",
            value: 100,
        },
        {
            skill: "Next js ",
            value: 100,
        },
        {
            skill: "Redux and RTK Query",
            value: 83,
        },
        {
            skill: "Python",
            value: 40,
        },
        {
            skill: "post gress SQL",
            value: 40,
        },
        {
            skill: "Front end",
            value: 100,
        },
        {
            skill: "Backend",
            value: 50,
        },
        {
            skill: "Figma",
            value: 80,
        },
        {
            skill: "Adobe xd",
            value: 80,
        },
    ]);
    return (
        <Box sx={{ width: "100%", float: "left", padding: "80px 0px 60px 0px", }} id={"pageId3"}>
            <Container maxWidth="md">
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ textAlign: "center" }}>
                        <Box sx={{ textAlign: "center", width: "100%", float: "left", display: "flex", justifyContent: "center" }}>
                            <Typography variant="h3" color="#fff" style={{ fontWeight: 900, textShadow: "10px 30px #1a1a1a", borderTop: "5px dashed #ffbd39", width: "fit-content", }}>My Skills</Typography>
                        </Box>
                        <Box sx={{ width: "100%", float: "left", marginTop: "30px", }}>
                            <Typography variant="subtitle1" color="#999">{`Process engineering, Hyperautomation, Chatbots, React and Next js and Vitel js Developer, AI innovation`}</Typography>
                        </Box>
                    </Box>
                </Box>
                <Grid container spacing={2}>
                    {skillsdata.map((ival, index) => {
                        return (
                            <Grid  key={index}size={{ md: 6, sm: 12, xs: 12 }} mt={3} sx={{
                                "& .MuiSlider-colorPrimary": {
                                    color: "#ffbd39 !important"
                                }
                            }}>
                                <Box mr={2}>
                                    <Box sx={{ display: "flex" }}>
                                        <Typography variant="h6" color="#fff" sx={{ maxWidth: "300px" }}>{ival.skill}</Typography>
                                        <Box sx={{ flex: 1 }} />
                                        <Typography variant="h6" color="#fff" sx={{ width: "60px" }}>{ival.value + "%"}</Typography>
                                    </Box>
                                    <Slider
                                        defaultValue={ival.value}
                                        disabled={true}
                                        size="medium"
                                        aria-label="medium"
                                        valueLabelDisplay="auto"

                                    // color="#ffbd39"
                                    />
                                </Box>
                            </Grid>
                        )
                    })}
                    <Grid size={{ md: 12 }}>
                        <Box sx={{ textAlign: "center" }}>
                           <PdfDownloadbtnComponent/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>


        </Box>
    )
}


export default MySkillsComponent;