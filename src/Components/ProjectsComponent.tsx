import React, { useState } from "react";
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
const styleModal={
      position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "auto",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
}

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
    ])
    const [open, setOpen] = useState<boolean>(false);
    const [courseModal, setcourseModal] = useState<boolean>(false);

    function handleClose() {
        setOpen(false)
    }
    function handleCloseModal() {
        setcourseModal(false);
    }
    return (
        <>
            <Box sx={{ width: "100%", float: "left", padding: "70px 0px 60px 0px", }} id={"pageId4"}>
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
                            {/* <Box
                                sx={{ display: "flex" }} className="certificate_mobile"> */}
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
                    <Box mt={4}>
                        <Grid container spacing={2}>
                            {projectData.map((ival, index) => {
                                return (
                                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                                        <Box className="projectback_rount" sx={{ cursor: ival.value === "awards" || ival.value === "courses_completed" ? "pointer" : "unset" }} onClick={ival.value === "awards" ? () => setOpen(true) : ival.value === "courses_completed" ? () => setcourseModal(true) : undefined}>
                                            <Typography variant="h4" color="#c9f31d" sx={{ fontWeight: 900, textAlign: "center" }}>{ival.count}</Typography>
                                            <Typography variant="subtitle1" color="#fff" mt={1} sx={{ textAlign: "center" }}>{ival.experience}</Typography>
                                        </Box>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                </Container>
                <Box sx={{ position: "relative", width: "100%", float: "left" }}>
                    <Image
                        src={"images/project-banner-image.jpg"}
                        alt={`Profile image of `}
                        width={500}
                        height={230}
                        style={{ width: "100%", }}
                        className="projectmobile_content_img"
                        unoptimized={true}
                    />
                    <Box className="projectmobile_content" sx={{ position: "absolute", top: 0, backgroundColor: "#000", width: "100%", height: "-webkit-fill-available", opacity: 0.7 }}>

                    </Box>
                    <Box sx={{ position: "absolute", bottom: 40, width: "100%", textAlign: "center" }} className="projecttopchange">
                        <Box sx={{ width: "100%", textAlign: "center" }}>
                            <Typography variant="h4" style={{ fontWeight: 900, }} className="projectopentowork"><span style={{ color: "#fff" }}>I&apos;m</span> <span style={{ color: "#c9f31d" }}> Open</span>  <span style={{ color: "#fff" }}>to work</span></Typography>
                        </Box>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                backgroundColor: "#c9f31d",
                                color: "#000",
                                margin: "20px 0px",
                                cursor: "pointer",
                                fontWeight:700,
                                '&:hover': {
                                    backgroundColor: "#c9f31d"
                                }
                            }}
                            className="buttonsize_small"
                        >Go my personal projects</Button>
                    </Box>
                </Box>


            </Box>

        </>
    )
}


export default ProjectsComponent;