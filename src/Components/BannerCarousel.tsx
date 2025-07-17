import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import PdfDownloadbtnComponent from "./PdfDownloadbtnComponent";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 1,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 767, min: 264 },
        items: 1,
        slidesToSlide: 1,
    },
};

interface BannerData {
    url: string;
    common: string;
    stage: string;
    name: string;
    position: string;
}

const BannerCarousel: React.FC = () => {
    const sliderImageUrl: BannerData[] = [
        {
            // Use relative path without leading slash for GitHub Pages
            url: "images/profile-vimal.png",
            common: "Hello!",
            stage: "I'm a",
            name: "Vimalkumar R",
            position: "Senior- React developer",
        },
        {
            url: "images/profile-vimal.png",
            common: "Hello!",
            stage: "I'm a",
            name: "Vimalkumar R",
            position: "Senior- React developer",
        },
    ];

    return (
        <>
            <Box className="parent" id="pageId0" sx={{ backgroundImage: `url(${"images/background-banner.png"})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative", backgroundAttachment:"fixed" }}>
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    infinite={true}
                    partialVisible={false}
                    dotListClass="custom-dot-list-style"
                >
                    {sliderImageUrl.map((imageUrl: BannerData, index: number) => {
                        return (
                            <Box className="slider" key={index} sx={{ height: "100vh", position: "relative", display: "flex", }}>
                                <Image
                                    src={imageUrl.url}
                                    alt={`Profile image of ${imageUrl.name}`}
                                    width={500}
                                    height={500}
                                    className="mobile_image"
                                    style={{ marginTop: "30px", width: "500px", height: "auto" }}
                                    // Add these props for GitHub Pages compatibility
                                    unoptimized={true}
                                    priority={index === 0}
                                />
                                <Box sx={{ flex: "1" }} />
                                <Box sx={{ margin: "auto 0px" }}>
                                    <Box sx={{ padding: "33px", marginTop: "60px" }} className="Mobile_text_slightly">
                                        <Typography variant="subtitle2" sx={{ my: 2 }} color="#c9f31d" style={{ fontWeight: "500", fontSize: "22px" }}>
                                            {imageUrl.common}
                                        </Typography>
                                        <Typography variant="h3" sx={{ my: 2 }} color="#fff" style={{ fontWeight: "900" }} className="mobilesizesmall">
                                            {imageUrl.stage}
                                        </Typography>
                                        <Typography variant="h3" sx={{ my: 2 }} color="#c9f31d" style={{ fontWeight: "900" }} className="mobilesizesmall">
                                            {imageUrl.name}
                                        </Typography>
                                        <Typography variant="h4" sx={{ my: 2 }} color="#fff" style={{ fontWeight: "700" }} className="mobilesizesmall">
                                            {imageUrl.position}
                                        </Typography>

                                        <PdfDownloadbtnComponent />
                                    </Box>
                                </Box>
                                <Box sx={{ flex: "1" }} />
                            </Box>
                        );
                    })}
                </Carousel>
               
            </Box>
        </>
    );
};

export default BannerCarousel;