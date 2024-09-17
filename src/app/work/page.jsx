"use client";

import {motion} from "framer-motion";
import React, {useState, useRef} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

const projects = [
    {
        num:"01",
        title: "IETech",
        duration: "10-2021-12-2021",
        description: "A Web application that provide IT solutions for businesses and individuals.",
        work: ["Frontend Developer", "Performance Optimization"],
        image: "/IETech.png",
        techs: ["NextJS", "Node", "Express"],
        github:"https://github.com/TienDat02/IE303-HotelManagement",
    },
    {
        num:"02",
        title: "Room Master",
        duration: "10-2022-12-2022",
        description: "A hotel management application that allows users to manage rooms, bookings, services and customers.",
        work: ["Fullstack Developer", "UI/UX Design, Leader"],
        image: "/RoomMaster.png",
        techs: ["React", "Figma", "Express"],
        github:"https://github.com/TienDat02/IE303-HotelManagement",
    },
    {
        num:"03",
        title: "Serch Engine Optimization for herd shop",
        duration: "10-2023-12-2023",
        description: "A project that aims to improve the search engine ranking of a herd shop.",
        work: ["Content Writer", "Backlink Building"],
        image: "/VinaHealth.png",
        techs: ["Wordpress", "Google Analytics"],
        github:"https://github.com/TienDat02/IE303-HotelManagement",
    },
    {
        num:"04",
        title: "Speed Food",
        duration: "10-2025-12-2025",
        description: "A food delivery application that allows users to order food from local restaurants.",
        work: ["UI/UX Designer"],
        image: "/SpeedFood.png",
        techs: ["Figma"],
        github:"",
    },
    {
        num:"05",
        title: "Ticket Booking Website for Immaculate Conception Cathedral Basilica",
        duration: "10-2025-12-2025",
        description: "A Web application that intergrates with 3D Geographic Information System allows users to book tickets for visiting the Immaculate Conception Cathedral Basilica.",
        work: ["Frontend Developer", "UI/UX Design","3D Model Builder"],
        image: "/nhathoducba.png",
        techs: ["Figma", "React", "ArcGIS"],
        github:"",
    }
];

const Work = () => {
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
        <div className="container px-4 py-16 mx-auto">
            <h2 className="mb-8 text-4xl font-bold">My Work</h2>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-6">
                    <motion.div
                        key={projects[activeIndex].num}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="mb-2 text-2xl font-semibold text-accent">{projects[activeIndex].title}</h3>
                        <p className="mb-2 text-sm text-gray-500">{projects[activeIndex].duration}</p>
                        <p className="mb-4 text-gray-600">{projects[activeIndex].description}</p>
                        {projects[activeIndex].work && (
                            <div className="mb-4">
                                <h4 className="mb-2 font-semibold">My Role:</h4>
                                <ul className="list-disc list-inside">
                                    {projects[activeIndex].work.map((role, index) => (
                                        <li key={index} className="text-gray-600">{role}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {projects[activeIndex].techs.map((tech) => (
                                <span key={tech} className="px-2 py-1 text-sm text-gray-700 bg-gray-200 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {projects[activeIndex].github && (
                            <a
                                href={projects[activeIndex].github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 text-white bg-blue-500 rounded transition-colors hover:bg-blue-600"
                            >
                                View on GitHub
                            </a>
                        )}
                    </motion.div>
                </div>
                <div className="mt-4 md:w-1/2 md:mt-0">
                    <div className="relative h-72"> {/* Set a fixed height */}
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
                                        className="object-contain w-full h-full rounded" 
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="flex gap-2 justify-end mt-2">
                        <button onClick={handlePrev} className="p-2 bg-white rounded-full border border-black transition-all hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button onClick={handleNext} className="p-2 bg-white rounded-full border border-gray-300 transition-all hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;