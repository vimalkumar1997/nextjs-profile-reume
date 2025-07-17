import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { MapPin, Phone, Rocket, Earth } from 'lucide-react';
import Container from '@mui/material/Container';
interface ContactMe {
    header: string;

    para: string;
    // Add other properties as needed
}

const ContactMeComponent = () => {
    const [contactMe] = useState<ContactMe[]>([
        {
            header: "Address",
            para: "Madurai, Tamilnadu, India"
        },
        {
            header: "Contact Number",
            para: "+91 7094-22-9636"
        },
        {
            header: "Email Address",
            para: "smartvimalkumar1997@gmail.com"
        },
        {
            header: "Website",
            para: "https://vimalkumar1997.github.io/nextjs-profile-reume/"
        },

    ])
    return (
        <Box sx={{ width: "100%", float: "left", padding: "80px 0px 0px 0px", }} id={"pageId5"}>
            <Container maxWidth="lg">
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ textAlign: "center" }}>
                        <Box sx={{ textAlign: "center", width: "100%", float: "left", display: "flex", justifyContent: "center" }}>
                            <Typography variant="h3" color="#fff" style={{ fontWeight: 900, textShadow: "10px 30px #1a1a1a", borderTop: "5px dashed #c9f31d", width: "fit-content", }}>Contact Me</Typography>
                        </Box>
                        <Box sx={{ width: "100%", float: "left", marginTop: "30px", }}>
                            <Typography variant="subtitle1" color="#999">{`Please reach me for more informations`}</Typography>
                        </Box>
                    </Box>
                </Box>
                <Grid container spacing={2} mt={2}>
                    {contactMe.map((item, index) => {
                        return (
                            <>

                                <Grid size={{ xs: 6, sm: 3, md: 3 }} sx={{ display: "flex", justifyContent: "center" }} mt={3}>
                                    <Box key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "120px", height: "120px", borderRadius: "50%", backgroundColor: "#ffffff1a" }}>
                                        {index === 0 && <MapPin style={{ color: "#c9f31d", }} size={30} />}
                                        {index === 1 && <Phone style={{ color: "#c9f31d", }} size={30} />}
                                        {index === 2 && <Rocket style={{ color: "#c9f31d", }} size={30} />}
                                        {index === 3 && <Earth style={{ color: "#c9f31d", }} size={30} />}
                                        {/* <MapPin style={{color: "#c9f31d",}} size={30}/> */}
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 6, sm: 3, md: 3 }} sx={{ margin: "auto" }}>
                                    <Box key={index} sx={{}}>
                                        <Typography variant="h5" color="#c9f31d" style={{ fontWeight: 600, marginTop: "20px" }}>{item.header}</Typography>
                                        <Typography variant="subtitle1" color="#fff" style={{ fontWeight: 400, marginTop: "10px", wordBreak: "break-all" }}>{item.para}</Typography>
                                    </Box>
                                </Grid>
                            </>
                        )
                    })}
                </Grid>

                <Grid container mt={4}>
                    <Grid size={{ xs: 6, sm: 6, md: 6 }} className="contact-profile-remove-mobile">
                        <Box className="parent" sx={{ backgroundImage: `url(${"images/background-profileimage.jpg"})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative", backgroundAttachment: "fixed" }}>
                            <img src="images/profile-vimal.png" style={{ width: "100%", height: "100vh" }} />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                        <Box className="parent_mobile" sx={{ backgroundColor: `#fff`, backgroundSize: "cover", backgroundPosition: "center", position: "relative", backgroundAttachment: "fixed", height: "100vh" }}>

                        </Box>
                    </Grid>
                </Grid>

            </Container>


        </Box>
    )
}


export default ContactMeComponent;