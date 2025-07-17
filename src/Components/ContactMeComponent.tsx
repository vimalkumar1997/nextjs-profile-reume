import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { MapPin, Phone, Rocket, Earth } from 'lucide-react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import { TextareaAutosize } from '@mui/material';
import { styled } from '@mui/material/styles';
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

    ]);

    const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
        backgroundColor: 'transparent', // No background color
        border: `1px solid #0000003b`, // Red border using theme
        borderRadius: '4px',
        padding: '8px 12px',
        fontSize: '14px',
        fontFamily: 'inherit',
        resize: 'vertical',
        outline: 'none',
        color: "#000",
        '&:focus': {
            borderColor: "#c9f31d", // Darker red on focus
            boxShadow: `0 0 0 2px ${theme.palette.primary.main}25`, // Subtle red glow
        },

        '&::placeholder': {
            color: theme.palette.text.secondary,
            opacity: 0.7,
        },
    }));

    // Alternative: Direct inline styles

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

                                <Grid size={{ xs: 4, sm: 3, md: 3 }} sx={{ display: "flex", justifyContent: "center" }} mt={3}>
                                    <Box key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "120px", height: "120px", borderRadius: "50%", backgroundColor: "#ffffff1a" }} className="mobileroundchange-contact">
                                        {index === 0 && <MapPin style={{ color: "#c9f31d", }} size={30} />}
                                        {index === 1 && <Phone style={{ color: "#c9f31d", }} size={30} />}
                                        {index === 2 && <Rocket style={{ color: "#c9f31d", }} size={30} />}
                                        {index === 3 && <Earth style={{ color: "#c9f31d", }} size={30} />}
                                        {/* <MapPin style={{color: "#c9f31d",}} size={30}/> */}
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 8, sm: 3, md: 3 }} sx={{ margin: "auto" }}>
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
                        <Box className="parent" sx={{ backgroundImage: `url(${"images/background-profileimage.jpg"})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative", backgroundAttachment: "fixed", height: "100vh" }}>
                            <img src="images/profile-vimal.png" style={{ width: "fit-content", height: "fit-content", position: "absolute", bottom: 0, }} />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 6 }} sx={{ backgroundColor: "#fff", }}>
                        {/* <Box className="parent_mobile" sx={{ backgroundColor: `#fff`, backgroundSize: "cover", backgroundPosition: "center", position: "relative", backgroundAttachment: "fixed", height: "100vh" }}>

                        </Box> */}
                        <Box p={5}>
                            <TextField id="outlined-basic" label="Your Name" variant="outlined" sx={{ width: "100%", marginTop: "20px", }} />
                            <TextField id="outlined-basic" label="Your Email" variant="outlined" sx={{ width: "100%", marginTop: "20px", }} />
                            <TextField id="outlined-basic" label="Subject" variant="outlined" sx={{ width: "100%", marginTop: "20px", }} />
                            <StyledTextarea
                                minRows={5}
                                placeholder="Message"
                                style={{ width: '100%', marginTop: '20px' }}
                            />
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    backgroundColor: "#c9f31d",
                                    color: "#000",
                                    margin: "20px 0px",
                                    cursor: "pointer",
                                    fontWeight: 700,
                                    '&:hover': {
                                        backgroundColor: "#c9f31d"
                                    }
                                }}
                                className="buttonsize_small"
                            >
                                Send Message
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

            </Container>


        </Box>
    )
}


export default ContactMeComponent;