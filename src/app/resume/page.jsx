"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaJava,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaLanguage,
    FaFlag,
    FaArrowRight
} from "react-icons/fa";
import {
    SiTailwindcss, SiNextdotjs, SiOdoo, SiSpringboot
} from "react-icons/si";
import Link from 'next/link';

import GradientText from '@/components/ui/GradientText';

const about = {
    title: "About Me",
    description: "I am an aspiring full-stack developer with a good foundation in building web applications.",
    info: [
        {
            title: "Name",
            value: "Tran Tien Dat",
            icon: <FaUser />
        },
        {
            title: "Email",
            value: "tien03dat@gmail.com",
            icon: <FaEnvelope />
        },
        {
            title: "Phone",
            value: "0328950020",
            icon: <FaPhone />
        },
        {
            title: "Address",
            value: "Ho Chi Minh, Vietnam",
            icon: <FaMapMarkerAlt />
        },
        {
            title: "Languages",
            value: "English, Vietnamese",
            icon: <FaLanguage />
        },
        {
            title: "Nationality",
            value: "Vietnamese",
            icon: <FaFlag />
        }
    ]
}

const skills = {
    title: "My Skills",
    description: "I have acquired proficiency in various technologies throughout my studies and projects.",
    info: [
        {
            icon: <FaHtml5 />,
            name: "HTML 5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React.js",
        },   
        {
            icon: <SiTailwindcss />,
            name: "TailwindCSS",
        },   
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },   
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },   
        {
            icon: <FaFigma />,
            name: "Figma",
        },
        {
            icon: <SiOdoo />,
            name: "Odoo",
        },
        {
            icon: <FaJava />,
            name: "Java",
        },
        {
            icon: <SiSpringboot />,
            name: "Spring Boot",
        },

    ]
}
const experience = {
    title: "My Experience",
    description: "While I'm at the beginning of my professional journey, I've gained valuable experience through internships and projects.",
    info: [
        {
            company: "University of Information Technology",
            position: "Student",
            duration: "2020 - 2024"
        },
        {
            company: "HDBank",
            position: "Back-end Developer Intern",
            duration: "August 2024 - Now"
        },

    ]
}
const education = {
    title: "My Education",
    description: "I recently graduated from the University of Information Technology in November 2024.",
    info: [
        {
            school: "University of Information Technology",
            specialization: "Information Technology",
            duration: "2020 - 2024",
            softSkills: "Teamwork, Communication, Problem-solving, Time management, Project management, Business Analyst"
        }, 
    ]
}



const Resume = () => {
    const [activeTab, setActiveTab] = useState('about');

    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return (
                    <div>
                        <h2 className="mb-4 text-accent">{about.title}</h2>
                        <p className="mb-4">{about.description}</p>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {about.info.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-card p-4 rounded-lg shadow-md"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <div className="flex items-center mb-2">
                                        <div className="flex justify-center items-center mr-2 w-6 h-6 text-xl text-accent">
                                            {item.icon}
                                        </div>
                                        <strong className="text-accent">{item.title}</strong>
                                    </div>
                                    <p className="ml-8 text-lg">{item.value}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                );
                case 'education':
                    return (
                        <div>
                            <h2 className="mb-4 text-accent">{education.title}</h2>
                            <p className="mb-4">{education.description}</p>
                            {education.info.map((item, index) => (
                                <div key={index} className="flex flex-col mb-8">
                                    <div className="flex items-start mb-2">
                                        <img 
                                            src="/Logo_UIT.png" 
                                            alt={`${item.school} logo`} 
                                            className="object-contain mr-4 w-16 h-16 md:w-24 md:h-24"
                                        />
                                        <div>
                                            <h3 className="font-semibold">{item.school}</h3>
                                            <p>{item.specialization}</p>
                                            <p className="text-gray-600">{item.duration}</p>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <strong>Soft skills:</strong>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {item.softSkills.split(', ').map((skill, skillIndex) => (
                                                <span 
                                                    key={skillIndex} 
                                                    className="px-3 py-1 text-sm bg-card text-white rounded-full animate-fadeIn hover:scale-110"
                                                    style={{ animationDelay: `${skillIndex * 100}ms` }}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    );
                case 'skills':
                    return (
                        <div>
                            <h2 className="mb-4 text-accent">{skills.title}</h2>
                            <p className="mb-4">{skills.description}</p>
                            <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
                                {skills.info.map((skill, index) => (
                                    <div key={index} className="flex flex-col items-center justify-center p-4 bg-card aspect-square rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-110 hover:bg-[#181818]">
                                        <div className="mb-2 text-4xl md:text-7xl">{skill.icon}</div>
                                        <span className="text-sm text-center">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                    case 'experience':
                        return (
                            <div>
                                <h2 className="mb-4 text-accent">{experience.title}</h2>
                                <p className="mb-4">{experience.description}</p>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    {experience.info.map((item, index) => (
                                        <div key={index} className="p-4 bg-card rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
                                            <h3 className="md:text-2xl text-accent">{item.company}</h3>
                                            <p className="text-lg">{item.position}</p>
                                            <p className="text-gray-400">{item.duration}</p>
                                        </div>
                                    ))}
                                </div>
                                <Link href="/work" className="inline-block mt-6">
                                    <div className='flex items-center transition-colors duration-300 group text-accent hover:text-accent-light'>
                                        <span className="mr-2 text-lg font-semibold">See more work</span>
                                        <FaArrowRight className="transition-transform duration-300 transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            </div>
                        );
            default:
                return <div>Select a tab to view content</div>;
        }
    };

    return (
        <div className="flex flex-col mx-auto max-w-7xl lg:flex-row">
            {/* Tabs */}
            <div className="p-6 w-full lg:w-1/3 lg:sticky lg:top-0 lg:h-screen">
                <GradientText text= "Why Consider Me?"/>
                <p className="mb-6 md:text-lg text-[#a1a1a1]">As a recent graduate, I am eager to learn and grow. I am committed to continuously improving my skills to contribute value to you company.</p>
                <ul className="flex flex-wrap gap-1 text-sm lg:flex-col md:text-base">
                    {['about', 'education', 'skills', 'experience'].map((tab) => (
                        <motion.li
                            key={tab}
                            className={`cursor-pointer rounded-full px-4 py-2 text-center transition-all
                                ${activeTab === tab 
                                    ? 'bg-accent text-primary font-semibold' 
                                    : 'bg-primary hover:bg-[#383838]'}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </motion.li>
                    ))}
                </ul>
            </div>
            
            {/* Content area */}
            <div className="p-6 w-full lg:w-2/3">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 rounded-lg shadow-lg bg-primary"
                    >
                        {renderContent()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Resume