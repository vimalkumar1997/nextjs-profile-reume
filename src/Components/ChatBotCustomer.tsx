import React from 'react';
import Box from '@mui/material/Box';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const ChatBotCustomer=()=>{

    return(
        <Box sx={{position:"fixed", bottom: 20, right: 20, width: "50px", height: "50px", backgroundColor: "#c9f31d", borderRadius: "50%", display: "flex", justifyContent: "center",alignItems:"center",cursor: "pointer"}}>
            <SmartToyIcon sx={{fontSize: "40px"}}/>
        </Box>
    )
}


export default ChatBotCustomer;