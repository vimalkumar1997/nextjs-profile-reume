import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
interface Projects {
    experience: string;
    count: string;
}
const ProjectsComponent = () => {
    const [projectData] = useState<Projects[]>([
        {
            experience: "Awards",
            count: "2",
        },
        {
            experience: "Complete projects",
            count: "223",
        },
        {
            experience: "Happy customers",
            count: "478",
        },
        {
            experience: "Courses completed",
            count: "1",
        }
    ])
    return (
        <>
            <Box sx={{ width: "100%", float: "left", padding: "70px 0px 60px 0px", }} id={"pageId4"}>
                <Container maxWidth="md">
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ textAlign: "center" }}>
                            <Box sx={{ textAlign: "center", width: "100%", float: "left", display: "flex", justifyContent: "center" }}>
                                <Typography variant="h3" color="#fff" style={{ fontWeight: 900, textShadow: "10px 30px #1a1a1a", borderTop: "5px dashed #ffbd39", width: "fit-content", }}>My Projects</Typography>
                            </Box>
                            <Box sx={{ width: "100%", float: "left", marginTop: "30px", }}>
                                <Typography variant="subtitle1" color="#999">Below are my few of the projects and explanation.</Typography>
                            </Box>
                        </Box>
                    </Box>

                </Container>


                <Container maxWidth="lg">
                    <Box mt={4}>
                        <Grid container spacing={2}>
                            {projectData.map((ival, index) => {
                                return (
                                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                                        <Box className="projectback_rount" sx={{ cursor: ival.experience === "Awards" || ival.experience === "Courses completed" ? "pointer" : "unset" }}>
                                            <Typography variant="h4" color="#ffbd39" sx={{ fontWeight: 900, textAlign: "center" }}>{ival.count}</Typography>
                                            <Typography variant="subtitle1" color="#fff" mt={1} sx={{ textAlign: "center" }}>{ival.experience}</Typography>
                                        </Box>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                </Container>
                <Box sx={{ position: "relative", width: "100%", float: "left" }}>
                    <Image
                        src={"images/project-banner-image.jpg"}
                        alt={`Profile image of `}
                        width={500}
                        height={230}
                        style={{ width: "100%",}}
                        className="projectmobile_content"
                        unoptimized={true}
                    />
                    <Box className="projectmobile_content" sx={{ position: "absolute", top: 0, backgroundColor: "#000", width: "100%", height: "-webkit-fill-available", opacity: 0.7 }}>

                    </Box>
                    <Box sx={{ position: "absolute", bottom: 40, width: "100%", textAlign: "center" }} className="projecttopchange">
                        <Box sx={{ width: "100%", textAlign: "center" }}>
                            <Typography variant="h4" style={{ fontWeight: 900, }} className="projectopentowork"><span style={{ color: "#fff" }}>I&apos;m</span> <span style={{ color: "#ffbd39" }}> Open</span>  <span style={{ color: "#fff" }}>to work</span></Typography>
                        </Box>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                backgroundColor: "#ffbf39",
                                color: "#000",
                                margin: "20px 0px",
                                cursor: "pointer",
                                '&:hover': {
                                    backgroundColor: "#e5a832"
                                }
                            }}
                            className="buttonsize_small"
                        >Go my personal projects</Button>
                    </Box>
                </Box>
                

            </Box>

        </>
    )
}


export default ProjectsComponent;