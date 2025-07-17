import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
const FooterComponent = () => {

    return (
        <>
        <Box sx={{width: "100%", float: "left"}}>
            <Container maxWidth="lg">
                 <Box p={2} textAlign="center">
                <Typography variant="subtitle1" color="#999" mt={1}>{"Copyright ©2025 All rights reserved | This template is made with ❤︎ by Vimal"}</Typography>
                </Box>
            </Container>
            </Box>
        </>
    )
}


export default FooterComponent;