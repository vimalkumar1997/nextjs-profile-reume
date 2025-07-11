import React from "react";
import Head from "next/head";
import NavbarComponent from "@/Components/NavbarComponent";
import BannerCarousel from "@/Components/BannerCarousel";
import AboutusComponent from "@/Components/AboutusComponent";
import ResumeComponent from "@/Components/ResumeComponent";
import MySkillsComponent from "@/Components/MySkillsComponent";
import ProjectsComponent from "@/Components/ProjectsComponent";
export default function Home() {

  return (
    <>
      <Head>
        <title>Vimalkumar.R Profile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <div>
        <NavbarComponent />
        <BannerCarousel />
        <AboutusComponent/>
        <ResumeComponent/>
        <MySkillsComponent/>
        <ProjectsComponent/>
      </div>
    </>
  );
}
