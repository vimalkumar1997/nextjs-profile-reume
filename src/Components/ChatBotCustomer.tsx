import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ChatBotmainComponent from "./ChatBot/ChatBotmainComponent";

const ChatBotCustomer = () => {
    const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
    return (

        <>

            <Box sx={{ position: "relative" }}>


                <Box
                    sx={{ position: "fixed", bottom: 20, right: 20, width: "50px", height: "50px", backgroundColor: "#c9f31d", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}
                    onClick={() => setIsChatOpen(!isChatOpen)}
                >

                    <SmartToyIcon sx={{ fontSize: "40px" }} />
                </Box>
                {isChatOpen?(
                <Box sx={{ position: "fixed", bottom: 0, right: 80, zIndex: 10002 }} className="chatbot-mobile-container">
                    <ChatBotmainComponent setIsChatOpen={setIsChatOpen}/>
                </Box>
                ):null}
            </Box>
        </>

    )
}


export default ChatBotCustomer;