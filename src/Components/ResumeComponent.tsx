import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

// Define proper TypeScript interface for work experience
interface WorkExperience {
    year: string;
    position: string;
    company: string;
    explanation: string;
}

const ResumeComponent: React.FC = () => {
    const workingData: WorkExperience[] = [
        {
            year: "Jun 2022 - Present",
            position: "Senior React Developer",
            company: "Foundever",
            explanation: "Building AI-integrated applications for chat and customer service, Built React-based dashboards to visualize sentiment trends, agent performance, and alerts for negative interactions. Developed an intelligent system to analyze sentiment at key stages of customer-agent calls — the beginning, middle, and end — to assess overall call quality and customer satisfaction.",
        },
        {
            year: "Jun 2021 - Jun 2022",
            position: "React Developer",
            company: "Tripwerkz",
            explanation: "Tripwerkz hotel and flight and tourister booking platform i am create tripwerkz company b2b and b2c platform application working, I am using next js and matterial ui using this frent end application create and api integrate. https://tripwerkz.com/ this site using singapore and China country",
        },
        {
            year: "May 2019 - Jun 2021",
            position: "Web Designer",
            company: "CRB Innovative solutions Pvt Ltd",
            explanation: "At CRB Innovative Solution, I work as a web designer. I create custom layouts based on customer requirements using Adobe Photoshop CS6. Once the initial layout is ready, I share it with the customer for feedback. If they request any corrections, I make the necessary changes. After the customer is fully satisfied with the design, I accurately develop the website using only HTML, CSS, JavaScript, jQuery, and AJAX.",
        }
    ];

    return (
        <Box sx={{ width: "100%", float: "left", padding: "80px 0px 0px 0px" }} id="pageId2">
            <Container maxWidth="md">
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ textAlign: "center" }}>
                        <Box sx={{ textAlign: "center", width: "100%", float: "left", display: "flex", justifyContent: "center" }}>
                            <Typography variant="h3" color="#fff" style={{ fontWeight: 900, textShadow: "10px 30px #1a1a1a", borderTop: "5px dashed #ffbd39", width: "fit-content" }}>Resume</Typography>
                        </Box>
                        <Box sx={{ width: "100%", float: "left", marginTop: "30px" }}>
                            <Typography variant="subtitle1" color="#999">Hi, I have over 5.6 years of experience in front-end development. I have worked on and handled a variety of projects ranging from mid-level to high-level complexity. I also have hands-on experience working on AI-based projects.</Typography>
                        </Box>
                        <Box sx={{ width: "100%", float: "left", marginTop: "30px" }}>
                            <Typography variant="subtitle1" color="#999">Currently, I lead as a Senior React Developer on AI-driven initiatives at Foundever, focusing on AI-powered document summarization, chatbots, and predictive analytics. My expertise includes building Generative AI applications.</Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>

            <Container maxWidth="lg">
                <Box m={4}>
                    <Grid container spacing={2}>
                        {workingData.map((workItem: WorkExperience, index: number) => (
                            <Grid size={{ md: 6, sm: 12, xs: 12 }} key={index}>
                                <Box className="resume_experience_card">
                                    <Typography variant="h4" color="#ffbd39" style={{ fontWeight: 900 }}>{workItem.year}</Typography>
                                    <Typography variant="h5" color="#fff" mt={1}>{workItem.position}</Typography>
                                    <Box sx={{ display: "flex", alignItems: "center" }} mt={1}>
                                        <BusinessCenterIcon sx={{ color: "#999", fontSize: "18px" }} />
                                        <Typography variant="subtitle1" color="#999" ml={1}>{workItem.company}</Typography>
                                    </Box>
                                    <Typography variant="subtitle1" color="#999" mt={1}>{workItem.explanation}</Typography>
                                </Box>
                            </Grid>
                        ))}
                        <Grid size={{ md: 12 }}>
                            <Box sx={{ textAlign: "center" }}>
                                <Button variant="contained" size="large" sx={{ backgroundColor: "#ffbd39", color: "#000", textAlign: "center" }}>Download CV</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default ResumeComponent;