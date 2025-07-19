import React, { useState, useEffect, useRef } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Modal from '@mui/material/Modal';

interface Projects {
    experience: string;
    count: string;
    value: string;
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "auto",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
};

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "auto",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
}

// Custom hook for counter animation
const useCounterAnimation = (targetValue: number, isVisible: boolean, duration: number = 2000) => {
    const [currentValue, setCurrentValue] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isVisible && !hasAnimated) {
            setHasAnimated(true);
            const startTime = Date.now();
            const startValue = 0;
            
            const animateCounter = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const newValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart);
                
                setCurrentValue(newValue);
                
                if (progress < 1) {
                    requestAnimationFrame(animateCounter);
                } else {
                    setCurrentValue(targetValue);
                }
            };
            
            requestAnimationFrame(animateCounter);
        }
    }, [isVisible, targetValue, duration, hasAnimated]);

    return currentValue;
};

// Custom hook for intersection observer
const useIntersectionObserver = (threshold: number = 0.3) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [threshold]);

    return [elementRef, isVisible] as const;
};

const ProjectsComponent = () => {
    const [projectData] = useState<Projects[]>([
        {
            experience: "Awards click",
            count: "2",
            value: "awards",
        },
        {
            experience: "Complete projects",
            count: "223",
            value: "complete_projects",
        },
        {
            experience: "Happy customers",
            count: "478",
            value: "happy_customers"
        },
        {
            experience: "Courses completed click",
            count: "1",
            value: "courses_completed"
        }
    ]);

    const [open, setOpen] = useState<boolean>(false);
    const [courseModal, setcourseModal] = useState<boolean>(false);
    
    // Hook for intersection observer
    const [statsRef, isStatsVisible] = useIntersectionObserver(0.3);

    function handleClose() {
        setOpen(false)
    }
    
    function handleCloseModal() {
        setcourseModal(false);
    }

    // Counter component for individual project cards
    const CounterCard = ({ project, index }: { project: Projects, index: number }) => {
        const targetCount = parseInt(project.count);
        const animatedCount = useCounterAnimation(targetCount, isStatsVisible, 2000 + (index * 200));

        return (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Box 
                    className="projectback_rount" 
                    sx={{ 
                        cursor: project.value === "awards" || project.value === "courses_completed" ? "pointer" : "unset",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                            transform: "scale(1.05)"
                        }
                    }} 
                    onClick={
                        project.value === "awards" 
                            ? () => setOpen(true) 
                            : project.value === "courses_completed" 
                                ? () => setcourseModal(true) 
                                : undefined
                    }
                >
                    <Typography 
                        variant="h4" 
                        color="#c9f31d" 
                        sx={{ 
                            fontWeight: 900, 
                            textAlign: "center",
                            minHeight: "48px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        {animatedCount}
                        {project.count.includes('+') && '+'}
                    </Typography>
                    <Typography 
                        variant="subtitle1" 
                        color="#fff" 
                        mt={1} 
                        sx={{ textAlign: "center" }}
                    >
                        {project.experience}
                    </Typography>
                </Box>
            </Grid>
        );
    };

    return (
        <>
             <Box sx={{ width: "100%", float: "left", padding: "100px 0px 0px 0px", }} id={"pageId4"}>
                <Container maxWidth="md">
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ textAlign: "center" }}>
                            <Box sx={{ textAlign: "center", width: "100%", float: "left", display: "flex", justifyContent: "center" }}>
                                <Typography variant="h3" color="#fff" style={{ fontWeight: 900, textShadow: "10px 30px #1a1a1a", borderTop: "5px dashed #c9f31d", width: "fit-content", }}>My Projects</Typography>
                            </Box>
                            <Box sx={{ width: "100%", float: "left", marginTop: "30px", }}>
                                <Typography variant="subtitle1" color="#999"></Typography>
                            </Box>
                        </Box>
                    </Box>
                </Container>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="mobilemodel"
                >
                    <>
                        <Box sx={style} className="mobileshowCertification">
                            <Grid container>
                                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                                    <Image
                                        src={"images/sportlight1.png"}
                                        alt={`Profile image of `}
                                        width={500}
                                        height={430}
                                        style={{ width: "400px", height: "400px" }}
                                        className="projectmobile_content_awards"
                                        unoptimized={true}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                                    <Image
                                        src={"images/sportlight2.jpg"}
                                        alt={`Profile image of `}
                                        width={500}
                                        height={230}
                                        style={{ width: "400px", height: "400px" }}
                                        className="projectmobile_content_awards"
                                        unoptimized={true}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </>
                </Modal>

                <Modal
                    open={courseModal}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="mobilemodel"
                >
                    <Box sx={styleModal} className="mobileshowCertification">
                        <Image
                            src={"images/course_completion.png"}
                            alt={`Profile image of `}
                            width={500}
                            height={430}
                            style={{ width: "400px", height: "400px" }}
                            className="projectmobile_content_awards"
                            unoptimized={true}
                        />
                    </Box>
                </Modal>

                <Container maxWidth="lg">
                    <Box mt={4} ref={statsRef}>
                        <Grid container spacing={2}>
                            {projectData.map((project, index) => (
                                <CounterCard key={index} project={project} index={index} />
                            ))}
                        </Grid>
                    </Box>
                </Container>

                <Box sx={{ position: "relative", width: "100%", float: "left", backgroundImage: `url(${"images/project-banner-image.jpg"})`, backgroundSize: "cover", backgroundPosition: "center",  backgroundAttachment:"fixed",height:"230px" }} className="ImagefixedMobilesizechange">
                    {/* <Image
                        src={"images/project-banner-image.jpg"}
                        alt={`Profile image of `}
                        width={500}
                        height={230}
                        style={{ width: "100%"}}
                        className="projectmobile_content_img"
                        unoptimized={true}
                    /> */}
                    <Box className="projectmobile_content" sx={{ position: "absolute", top: 0, backgroundColor: "#000", width: "100%", height: "-webkit-fill-available", opacity: 0.7 }}>
                    </Box>
                    <Box sx={{ position: "absolute", bottom: 40, width: "100%", textAlign: "center" }} className="projecttopchange">
                        <Box sx={{ width: "100%", textAlign: "center" }}>
                            <Typography variant="h4" style={{ fontWeight: 900, }} className="projectopentowork">
                                <span style={{ color: "#fff" }}>I&apos;m</span> 
                                <span style={{ color: "#c9f31d" }}> Open</span>  
                                <span style={{ color: "#fff" }}>to work</span>
                            </Typography>
                        </Box>
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
                            Go my personal projects
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ProjectsComponent;