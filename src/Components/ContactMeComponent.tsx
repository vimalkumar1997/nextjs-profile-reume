import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { MapPin, Phone, Rocket, Earth } from 'lucide-react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface ContactMe {
    header: string;
    para: string;
}

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name: string;
    email: string;
    subject: string;
    message: string;
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

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Simple textarea styling without styled-components to avoid typing issues
    const textareaStyles = {
        width: '100%',
        backgroundColor: 'transparent',
        border: '1px solid #0000003b',
        borderRadius: '4px',
        padding: '8px 12px',
        fontSize: '14px',
        fontFamily: 'inherit',
        resize: 'vertical' as const,
        outline: 'none',
        color: '#000',
        minHeight: '120px',
    };

    // Email validation function
    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Form validation function
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Subject validation
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);

        // Return true if no errors
        return Object.values(newErrors).every(error => error === '');
    };

    // Handle input changes
    const handleInputChange = (field: keyof FormData) => (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const value = event.target.value;
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ''
            }));
        }
    };

    // Handle form submission
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Here you would typically send the data to your backend
            console.log('Form submitted:', formData);
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            
            // Show thank you modal
            setIsModalOpen(true);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Handle modal close
    const handleModalClose = () => {
        setIsModalOpen(false);
    };

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
                            <React.Fragment key={index}>
                                <Grid size={{ xs: 4, sm: 3, md: 3 }} sx={{ display: "flex", justifyContent: "center" }} mt={3}>
                                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "120px", height: "120px", borderRadius: "50%", backgroundColor: "#ffffff1a" }} className="mobileroundchange-contact">
                                        {index === 0 && <MapPin style={{ color: "#c9f31d", }} size={30} />}
                                        {index === 1 && <Phone style={{ color: "#c9f31d", }} size={30} />}
                                        {index === 2 && <Rocket style={{ color: "#c9f31d", }} size={30} />}
                                        {index === 3 && <Earth style={{ color: "#c9f31d", }} size={30} />}
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 8, sm: 3, md: 3 }} sx={{ margin: "auto" }}>
                                    <Box>
                                        <Typography variant="h5" color="#c9f31d" style={{ fontWeight: 600, marginTop: "20px" }}>{item.header}</Typography>
                                        <Typography variant="subtitle1" color="#fff" style={{ fontWeight: 400, marginTop: "10px", wordBreak: "break-all" }}>{item.para}</Typography>
                                    </Box>
                                </Grid>
                            </React.Fragment>
                        )
                    })}
                </Grid>

                <Grid container mt={4}>
                    <Grid size={{ xs: 6, sm: 6, md: 6 }} className="contact-profile-remove-mobile">
                        <Box className="parent" sx={{ backgroundImage: `url(${"images/background-profileimage.jpg"})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative", backgroundAttachment: "fixed", height: "100vh" }}>
                            <img src="images/profile-vimal.png" style={{ width: "fit-content", height: "fit-content", position: "absolute", bottom: 0, }} alt="Profile" />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 6 }} sx={{ backgroundColor: "#fff", }}>
                        <Box p={5}>
                            <form onSubmit={handleSubmit}>
                                <TextField 
                                    label="Your Name" 
                                    variant="outlined" 
                                    value={formData.name}
                                    onChange={handleInputChange('name')}
                                    error={!!errors.name}
                                    helperText={errors.name}
                                    required
                                    sx={{ width: "100%", marginTop: "20px" }} 
                                />
                                <TextField 
                                    label="Your Email" 
                                    variant="outlined" 
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange('email')}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                    required
                                    sx={{ width: "100%", marginTop: "20px" }} 
                                />
                                <TextField 
                                    label="Subject" 
                                    variant="outlined" 
                                    value={formData.subject}
                                    onChange={handleInputChange('subject')}
                                    error={!!errors.subject}
                                    helperText={errors.subject}
                                    required
                                    sx={{ width: "100%", marginTop: "20px" }} 
                                />
                                <Box sx={{ position: 'relative', width: '100%', marginTop: '20px' }}>
                                    <textarea
                                        rows={5}
                                        placeholder="Message*"
                                        value={formData.message}
                                        onChange={handleInputChange('message')}
                                        style={{
                                            ...textareaStyles,
                                            borderColor: errors.message ? '#d32f2f' : '#0000003b',
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = '#c9f31d';
                                            e.target.style.boxShadow = '0 0 0 2px rgba(201, 243, 29, 0.25)';
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = errors.message ? '#d32f2f' : '#0000003b';
                                            e.target.style.boxShadow = 'none';
                                        }}
                                    />
                                    {errors.message && (
                                        <Typography 
                                            variant="caption" 
                                            color="error" 
                                            sx={{ 
                                                position: 'absolute', 
                                                bottom: '-20px', 
                                                left: '14px',
                                                fontSize: '0.75rem'
                                            }}
                                        >
                                            {errors.message}
                                        </Typography>
                                    )}
                                </Box>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    disabled={isSubmitting}
                                    sx={{
                                        backgroundColor: "#c9f31d",
                                        color: "#000",
                                        margin: "30px 0px 20px 0px",
                                        cursor: "pointer",
                                        fontWeight: 700,
                                        '&:hover': {
                                            backgroundColor: "#b8e01a"
                                        },
                                        '&:disabled': {
                                            backgroundColor: "#cccccc",
                                            color: "#666666"
                                        }
                                    }}
                                    className="buttonsize_small"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Thank You Modal */}
            <Dialog 
                open={isModalOpen} 
                onClose={handleModalClose}
                maxWidth="sm"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: '12px',
                        padding: '20px'
                    }
                }}
            >
                <DialogTitle sx={{ textAlign: 'center', paddingBottom: '10px' }}>
                    <CheckCircleIcon 
                        sx={{ 
                            fontSize: '64px', 
                            color: '#c9f31d', 
                            marginBottom: '16px',
                            display: 'block',
                            margin: '0 auto 16px auto'
                        }} 
                    />
                    <Typography variant="h4" sx={{ fontWeight: 600, color: '#333' }}>
                        Thank You!
                    </Typography>
                </DialogTitle>
                <DialogContent sx={{ textAlign: 'center', paddingTop: '10px' }}>
                    <Typography variant="h6" sx={{ marginBottom: '16px', color: '#666' }}>
                        Your message has been sent successfully!
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#888', lineHeight: 1.6 }}>
                        I have received your message and will get back to you as soon as possible at{' '}
                        <strong style={{ color: '#c9f31d' }}>{formData.email || 'your email address'}</strong>.
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#999', marginTop: '16px' }}>
                        Thank you for reaching out!
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center', paddingTop: '20px' }}>
                    <Button 
                        onClick={handleModalClose}
                        variant="contained"
                        sx={{
                            backgroundColor: '#c9f31d',
                            color: '#000',
                            fontWeight: 600,
                            padding: '10px 30px',
                            borderRadius: '6px',
                            '&:hover': {
                                backgroundColor: '#b8e01a'
                            }
                        }}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default ContactMeComponent;