import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
const AboutusComponent = () => {
    return (
        <>
            <Box sx={{ width: "100%", float: "left", padding: "80px 0px 0px 0px" }} id={"pageId1"}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <Grid container spacing={2}>
                            <Grid size={{md:6,sm:12,xs:12}}>
                                <Box>
                                    <Typography variant="h3" color="#fff" style={{ fontWeight: 900, textShadow: "10px 30px #1a1a1a",borderTop: "5px dashed #ffbd39",width:"fit-content" }}>About Me</Typography>
                                    <Box sx={{ padding: "30px 0px" }}>
                                        <Typography variant="subtitle1" color="#999">{`Currently, I Senior react developer initiatives at foundever, specializing in AI-powered application, chatbots, and predictive analytics. My expertise spans building Generative AI applications, Retrieval-Augmented Generation (RAG), and deploying custom LLM solutions tailored to business needs.`}</Typography>
                                    </Box>
                                </Box>
                                <Grid container spacing={2}>
                                    <Grid size={{md:4,sm:6, xs:6}}>
                                        <Typography variant="subtitle1" color="#fff" style={{ fontWeight: 600 }}>Name:</Typography>
                                    </Grid>
                                    <Grid size={{md:8,sm:6,xs:6}}>
                                        <Typography variant="subtitle1" color="#999">Vimalkumar R</Typography>
                                    </Grid>
                                    <Grid size={{md:4,sm:6, xs:6}}>
                                        <Typography variant="subtitle1" color="#fff" style={{ fontWeight: 600 }}>Date of birth:</Typography>
                                    </Grid>
                                    <Grid size={{md:8,sm:6,xs:6}}>
                                        <Typography variant="subtitle1" color="#999">April 16, 1997</Typography>
                                    </Grid>
                                      <Grid size={{md:4,sm:6, xs:6}}>
                                        <Typography variant="subtitle1" color="#fff" style={{ fontWeight: 600 }}>Address</Typography>
                                    </Grid>
                                    <Grid size={{md:8,sm:6,xs:6}}>
                                        <Typography variant="subtitle1" color="#999">Madurai, Tamilnadu, India</Typography>
                                    </Grid>
                                    <Grid size={{md:4,sm:6, xs:6}}>
                                        <Typography variant="subtitle1" color="#fff" style={{ fontWeight: 600 }}>Zip code:</Typography>
                                    </Grid>
                                    <Grid size={{md:8,sm:6,xs:6}}>
                                        <Typography variant="subtitle1" color="#999">625009</Typography>
                                    </Grid>
                                   <Grid size={{md:4,sm:6, xs:6}}>
                                        <Typography variant="subtitle1" color="#fff" style={{ fontWeight: 600 }}>Email:</Typography>
                                    </Grid>
                                    <Grid size={{md:8,sm:6,xs:6}}>
                                        <Typography variant="subtitle1" color="#999">smartvimalkumar1997@gmail.com</Typography>
                                    </Grid>
                                    <Grid size={{md:4,sm:6, xs:6}}>
                                        <Typography variant="subtitle1" color="#fff" style={{ fontWeight: 600 }}>Phone:</Typography>
                                    </Grid>
                                    <Grid size={{md:8,sm:6,xs:6}}>
                                        <Typography variant="subtitle1" color="#999">+91-7094-22-9636</Typography>
                                    </Grid>
                                </Grid>
                                <Grid size={{md:12}}>
                                 <Typography variant="subtitle1" color="#fff" style={{ fontWeight: 600,fontSize: "24px",marginTop: "20px" }}><span style={{color: "#ffbd39"}}>200</span> Project complete</Typography>
                            </Grid>
                             <Grid size={{md:12}}>
                                <Button variant="contained" size="large" sx={{backgroundColor: "#ffbd39",color: "#000",margin: "20px 0px"}}>Download CV</Button>
                             </Grid>
                            </Grid>
                            <Grid size={{md: 6}}>
                                <img src="/images/profile-vimal.png" style={{width: "100%", marginTop: "-50px"}}/>
                            </Grid>
                        </Grid>
                       
                    </Toolbar>
                </Container>
            </Box>

        </>
    )
}


export default AboutusComponent;