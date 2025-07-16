import React from 'react';
import Box from '@mui/material/Box';

import ChatBotmainComponent from "./ChatBot/ChatBotmainComponent";
import { MessageCircle } from 'lucide-react';
// const ChatBotCustomer = () => {
interface ChatBotCustomerProps {
    isChatOpen:boolean
    setIsChatOpen?: (show: boolean) => void;
}
const ChatBotCustomer: React.FC<ChatBotCustomerProps> = ({ isChatOpen,setIsChatOpen, }) => {
   
    return (

        <>

            <Box sx={{ position: "relative" }}>


                <Box
                    sx={{ position: "fixed", bottom: 20, right: 20, width: "50px", height: "50px", backgroundColor: "#c9f31d", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}
                    onClick={() => {if (setIsChatOpen) setIsChatOpen(!isChatOpen);}}
                >

                    <MessageCircle  />
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