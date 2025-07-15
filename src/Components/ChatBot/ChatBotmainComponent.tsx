import React, { useState, useRef, useEffect, CSSProperties } from 'react';
import {Bot, User, Info, CircleX } from 'lucide-react';
import PdfDownloadResume from "./PdfDownloadResume";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';

interface Message {
    id: number;
    text: string;
    isUser: boolean;
    timestamp: string;
    showChips: boolean;
}

type ConversationStage = 'start' | 'initial_options' | 'about_clicked' | 'resume_clicked' | 'endchat' | 'goodbye';

interface StylesType {
    [key: string]: CSSProperties;
}
interface ChatBotmainComponentProps {
    setIsChatOpen?: (show: boolean) => void;
}

// const ChatBotmainComponent: React.FC = (setIsChatOpen:any) => {
const ChatBotmainComponent: React.FC<ChatBotmainComponentProps> = ({ setIsChatOpen, }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [showAboutChip, setShowAboutChip] = useState<boolean>(false);
    const [showResumeChip, setShowResumeChip] = useState<boolean>(false);
    const [showEndChatChip, setShowEndChatChip] = useState<boolean>(false);
    const [conversationStage, setConversationStage] = useState<ConversationStage>('start');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = (): void => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const addMessage = (text: string, isUser: boolean = false, showChips: boolean = false): void => {
        const newMessage: Message = {
            id: Date.now(),
            text,
            isUser,
            timestamp: new Date().toLocaleTimeString(),
            showChips
        };
        setMessages(prev => [...prev, newMessage]);
    };

    const handleSendMessage = (): void => {
        if (!inputValue.trim()) return;

        const userMessage = inputValue.trim();
        addMessage(userMessage, true);
        setInputValue('');

        // Process the conversation flow
        setTimeout(() => {
            if (conversationStage === 'start' && userMessage.toLowerCase().includes('hello')) {
                addMessage("Hi Nice to meet you! I am currently looking for the job change. If your interested about my profile call me.", false, true);
                setShowAboutChip(true);
                setShowResumeChip(true);
                setConversationStage('initial_options');
            } else if (conversationStage === 'initial_options') {
                addMessage("Thank you for your message! Please use the buttons below to explore more about me.", false, true);
                setShowAboutChip(true);
                setShowResumeChip(true);
            } else if (conversationStage === 'about_clicked' || conversationStage === 'resume_clicked') {
                addMessage("Would you like to continue chatting or end our conversation?", false, true);
                setShowEndChatChip(true);
                setConversationStage('endchat');
            } else if (conversationStage === 'endchat') {
                addMessage("Please use the Yes or No buttons to continue.", false, true);
                setShowEndChatChip(true);
            } else {
                addMessage("Hello! I'm here to help you. Please start with a greeting!", false);
            }
        }, 1000);
    };

    const handleAboutClick = (): void => {
        addMessage("About Us", true);
        setShowAboutChip(false);
        setShowResumeChip(false);
        setTimeout(() => {
            addMessage("Currently, I'm a Senior React developer at Foundever, specializing in AI-powered applications, chatbots, and predictive analytics. My expertise spans building Generative AI applications.", false, true);
            setShowEndChatChip(true);
            setConversationStage('about_clicked');
        }, 800);
    };
    const handleYesClick = (): void => {
        addMessage("Yes", true);
        setShowEndChatChip(false);
        setTimeout(() => {
            addMessage("Great! Let's continue our conversation. Feel free to ask me anything or explore more about me!", false, true);
            setShowAboutChip(true);
            setShowResumeChip(true);
            setConversationStage('initial_options');
        }, 800);
    };

    const handleNoClick = (): void => {
        addMessage("No", true);
        setShowEndChatChip(false);
        setTimeout(() => {
            addMessage("Thank you for chatting with me! It was great talking to you. Have a wonderful day! Goodbye! 👋", false);
            setConversationStage('goodbye');
        }, 800);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>, hoverColor: string): void => {
        (e.target as HTMLButtonElement).style.backgroundColor = hoverColor;
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>): void => {
        (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
    };

    return (
        <div style={styles.container} className="chatbot-container">
            {/* Header */}
            <div style={styles.header}>
                <div style={styles.headerContent}>
                    <Image
                        src={"images/profile-vimal.png"}
                        alt={`Profile image`}
                        width={40}
                        height={40}
                        style={{ borderRadius: '50%', backgroundColor: '#000' }}
                        unoptimized={true}
                    />
                    <Box sx={{ position: "relative" }}>
                        <h1 style={styles.headerTitle}>Vimal Agent</h1>
                        <Typography variant="subtitle1" sx={{ fontSize: "12px", color: "#333", marginLeft: '8px' }}>Please use my chatbot to inquire about my professional background</Typography>
                        <Box sx={{ position: "absolute", top: 0, right: 10 }}  onClick={() => {if (setIsChatOpen) setIsChatOpen(false);}}>
                            <CircleX
                                style={{ cursor: 'pointer', color: '#000' }}
                                size={24}
                               
                            />
                        </Box>
                    </Box>
                </div>
            </div>

            {/* Chat Container */}
            <div style={styles.chatContainer}>
                {/* Messages Area */}
                <div style={styles.messagesArea}>
                    {messages.length === 0 && (
                        <div style={styles.welcomeMessage}>
                            <Bot style={styles.welcomeIcon} size={60} />
                            <h2 style={styles.welcomeTitle}>Welcome!</h2>
                            <p style={styles.welcomeText}>Start by saying hello with Vimalkumar R.</p>
                        </div>
                    )}

                    {messages.map((message, index) => (
                        <div key={message.id} style={styles.messageContainer}>
                            <div style={{
                                ...styles.messageWrapper,
                                justifyContent: message.isUser ? 'flex-end' : 'flex-start'
                            }}>
                                {!message.isUser && (
                                    <div style={styles.botAvatar}>
                                        <Bot style={styles.avatarIcon} size={16} />
                                    </div>
                                )}

                                <div style={{
                                    ...styles.messageBubble,
                                    ...(message.isUser ? styles.userMessage : styles.botMessage)
                                }}>
                                    <p style={{ ...styles.messageText, color: message.isUser ? '#000' : '#000' }}>{message.text}</p>
                                    <p style={{
                                        ...styles.timestamp,
                                        color: message.isUser ? '#000' : '#666'
                                    }}>
                                        {message.timestamp}
                                    </p>
                                </div>

                                {message.isUser && (
                                    <div style={styles.userAvatar}>
                                        <User style={styles.avatarIcon} size={16} />
                                    </div>
                                )}
                            </div>

                            {message.showChips && (
                                <div style={styles.chipsContainer}>
                                    {showAboutChip && (
                                        <button
                                            onClick={handleAboutClick}
                                            style={styles.chipButton}
                                            onMouseEnter={(e) => handleMouseEnter(e, '#e3f2fd')}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <Info style={styles.chipIcon} size={14} />
                                            About Us
                                        </button>
                                    )}
                                    {showResumeChip && (
                                        <PdfDownloadResume addMessage={addMessage} setShowAboutChip={setShowAboutChip} setShowResumeChip={setShowResumeChip} setShowEndChatChip={setShowEndChatChip} />
                                    )}
                                    {showEndChatChip && (
                                        <>
                                            {index === messages.length - 1 && (
                                                <>
                                                    <button
                                                        onClick={handleYesClick}
                                                        style={{ ...styles.chipButton, borderColor: '#4caf50', color: '#4caf50' }}
                                                        onMouseEnter={(e) => handleMouseEnter(e, '#e8f5e8')}
                                                        onMouseLeave={handleMouseLeave}
                                                    >
                                                        Yes
                                                    </button>
                                                    <button
                                                        onClick={handleNoClick}
                                                        style={{ ...styles.chipButton, borderColor: '#f44336', color: '#f44336' }}
                                                        onMouseEnter={(e) => handleMouseEnter(e, '#ffebee')}
                                                        onMouseLeave={handleMouseLeave}
                                                    >
                                                        No
                                                    </button>
                                                </>
                                            )}
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div style={styles.inputArea}>
                    <div style={styles.inputContainer}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message here..."
                            style={styles.textInput}
                            disabled={conversationStage === 'goodbye'}
                        />
                        {/* <button
                            onClick={handleSendMessage}
                            disabled={!inputValue.trim() || conversationStage === 'goodbye'}
                            style={{
                                ...styles.sendButton,
                                opacity: (!inputValue.trim() || conversationStage === 'goodbye') ? 0.5 : 1,
                                cursor: (!inputValue.trim() || conversationStage === 'goodbye') ? 'not-allowed' : 'pointer'
                            }}
                        >
                            <Send size={20} />
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles: StylesType = {
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
        fontFamily: 'Arial, sans-serif'
    },
    header: {
        backgroundColor: '#c9f31d',
        color: 'white',
        padding: '16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    },
    headerContent: {
        display: 'flex',
        alignItems: 'center'
    },
    headerIcon: {
        marginRight: '12px',
        color: "#000",
    },
    headerTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: "#000",
        marginLeft: '8px',
    },
    chatContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        maxWidth: '900px',
        margin: '0 auto',
        backgroundColor: "#333",
        width: '100%'
    },
    messagesArea: {
        flex: 1,
        overflowY: 'auto',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
    },
    welcomeMessage: {
        textAlign: 'center',
        marginTop: '32px',
    },
    welcomeIcon: {
        color: '#c9f31d',
        marginBottom: '16px'
    },
    welcomeTitle: {
        fontSize: '24px',
        fontWeight: '600',
        color: '#fff',
        marginBottom: '8px'
    },
    welcomeText: {
        color: '#999',
        fontSize: '16px'
    },
    messageContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    },
    messageWrapper: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '8px'
    },
    botAvatar: {
        width: '32px',
        height: '32px',
        backgroundColor: '#c9f31d',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    userAvatar: {
        width: '32px',
        height: '32px',
        backgroundColor: '#4caf50',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarIcon: {
        color: '#000'
    },
    messageBubble: {
        maxWidth: '300px',
        padding: '12px 16px',
        borderRadius: '12px',
        fontSize: '14px'
    },
    userMessage: {
        backgroundColor: '#c9f31d',
        color: 'white',
        borderBottomRightRadius: '4px'
    },
    botMessage: {
        backgroundColor: 'white',
        color: '#333',
        borderBottomLeftRadius: '4px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    },
    messageText: {
        margin: 0,
        marginBottom: '4px'
    },
    timestamp: {
        fontSize: '12px',
        margin: 0
    },
    chipsContainer: {
        display: 'flex',
        gap: '8px',
        marginLeft: '40px'
    },
    chipButton: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '6px 12px',
        border: '1px solid #c9f31d',
        color: '#c9f31d',
        borderRadius: '20px',
        fontSize: '14px',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        transition: 'background-color 0.2s'
    },
    chipIcon: {
        marginRight: '4px'
    },
    inputArea: {
        backgroundColor: '#333',
        borderTop: '1px solid #e0e0e0',
        padding: '16px',
        width: "100%",
    },
    inputContainer: {
        display: 'flex',
        gap: '8px'
    },
    textInput: {
        flex: 1,
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '12px 16px',
        fontSize: '14px',
        outline: 'none',
        transition: 'border-color 0.2s'
    },
    sendButton: {
        backgroundColor: '#c9f31d',
        color: '#000',
        border: 'none',
        borderRadius: '8px',
        padding: '12px 16px',
        cursor: 'pointer',
        transition: 'background-color 0.2s'
    }
};

export default ChatBotmainComponent;