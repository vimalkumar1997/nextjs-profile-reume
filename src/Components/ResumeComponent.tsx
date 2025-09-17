import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PdfDownloadbtnComponent from "./PdfDownloadbtnComponent";
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
            explanation: "Specialized in building AI-integrated applications tailored for chat and customerservice platforms, improving customer engagement and operational efficiency. Builtan intelligent system to analyze sentiment across key call phases (beginning, middle,and end), enabling comprehensive assessment of call quality and customersatisfaction. Designed and implemented automation workflows to streamline callcenter operations, significantly enhancing customer service across multiple industries.Architected robust backend service using Python, integrating seamlessly with AI andanalytics modules. Utilized PostgreSQL for structured data storage, including calllogs, sentiment scores, agent metrics, and customer feedback, ensuring efficientquerying and scalability. Delivered scalable, modular solutions supporting rapidintegration with existing CRM and support platforms.",
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
                            <Typography variant="h3" color="#fff" style={{ fontWeight: 900, textShadow: "10px 30px #1a1a1a", borderTop: "5px dashed #c9f31d", width: "fit-content" }}>Resume</Typography>
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
                                    <Typography variant="h4" color="#c9f31d" style={{ fontWeight: 900 }}>{workItem.year}</Typography>
                                    <Typography variant="h5" color="#fff" mt={1}>{workItem.position}</Typography>
                                    <Box sx={{ display: "flex", alignItems: "center" }} mt={1}>
                                        <BusinessCenterIcon sx={{ color: "#999", fontSize: "18px" }} />
                                        <Typography variant="subtitle1" color="#999" ml={1}>{workItem.company}</Typography>
                                    </Box>
                                    <Typography variant="subtitle1" color="#999" mt={1}>{workItem.explanation}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ textAlign: "center" }}>
                        <PdfDownloadbtnComponent />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default ResumeComponent;