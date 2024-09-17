"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "IETech",
    duration: "10/2021 - 12/2021",
    description: "A Web application that provide IT solutions for businesses and individuals.",
    work: ["Frontend Developer", "Performance Optimization"],
    image: "/IETech.png",
    techs: ["NextJS", "Node", "Docker", "TailwindCSS", "MySQL"],
    github: "https://github.com/TienDat02/IE303-HotelManagement",
  },
  {
    num: "02",
    title: "Room Master",
    duration: "10/2022 - 12/2022",
    description: "A hotel management application that allows users to manage rooms, bookings, services and customers.",
    work: ["Fullstack Developer", "UI/UX Design, Leader"],
    image: "/RoomMaster.png",
    techs: ["JavaFX", "Figma", "MySQL"],
    github: "https://github.com/TienDat02/IE303-HotelManagement",
  },
  {
    num: "03",
    title: "Serch Engine Optimization for herd shop",
    duration: "10/2023 - 12/2023",
    description: "A project that aims to improve the search engine ranking of a herd shop.",
    work: ["Content Writer", "Backlink Building"],
    image: "/VinaHealth.png",
    techs: ["Wordpress", "Google Analytics"],
  },
  {
    num: "04",
    title: "Speed Food",
    duration: "10/2025 - 12/2025",
    description: "A food delivery application that allows users to order food from local restaurants.",
    work: ["UI/UX Designer"],
    image: "/SpeedFood.png",
    techs: ["Figma"]
  },
  {
    num: "05",
    title: "Ticket Booking Website for Immaculate Conception Cathedral Basilica",
    duration: "10/2025 - 12/2025",
    description: "A Web application that intergrates with 3D Geographic Information System allows users to book tickets for visiting the Immaculate Conception Cathedral Basilica.",
    work: ["Frontend Developer", "UI/UX Design", "3D Model Builder"],
    image: "/nhathoducba.png",
    techs: ["Figma", "React", "ArcGIS"],
    github: "https://github.com/Khang283/Ticket_Shop",
  }
];

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="container px-4 py-16 mx-auto bg-primary rounded-xl shadow-lg">
      <h2 className="mb-12 text-5xl font-bold text-center text-accent">My Work</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[activeIndex].num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#282828] p-6 rounded-lg shadow-md"
            >
              <h3 className="mb-3 text-3xl font-semibold text-accent">{projects[activeIndex].title}</h3>
              <p className="mb-3 text-sm text-white">{projects[activeIndex].duration}</p>
              <p className="mb-4 text-white leading-relaxed">{projects[activeIndex].description}</p>
              {projects[activeIndex].work && (
                <div className="mb-4">
                  <h4 className="mb-2 font-semibold text-white">My Role:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {projects[activeIndex].work.map((role, index) => (
                      <li key={index} className="text-white">{role}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[activeIndex].techs.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm text-white bg-black rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              {projects[activeIndex].github && (
                <a
                  href={projects[activeIndex].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-[#080808] bg-[#1dc7e6] rounded-md transition-colors hover:bg-[#00ffff] hover:scale-110"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </a>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="md:w-1/2">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Swiper
              ref={swiperRef}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="h-full mySwiper"
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.num} className="h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex justify-center mt-4 gap-4">
            <button
              onClick={handlePrev}
              className="p-2 bg-white rounded-full shadow-md transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-white rounded-full shadow-md transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}