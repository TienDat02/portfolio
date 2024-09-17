'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    num: '01',
    title: 'Application Development',
    description: 'I am capable of developing web and desktop applications for businesses and individuals.',
    href: '#',
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: 'I can design modern user interfaces and user experiences for web and mobile applications.',
    href: '#',
  },
  {
    num: '03',
    title: 'SEO',
    description: 'I can help you improve the search engine ranking of your website.',
    href: '#',
  },
  {
    num: '04',
    title: 'Business Analysis',
    description: 'I can help you analyze your business and provide solutions to improve it.',
    href: '#',
  },
]

export default function Services() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-primary to-[#141414] py-12 sm:py-16 lg:py-20">
      <div className="container px-4 mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r to-[#a9edff] sm:text-5xl lg:text-6xl from-accent"
        >
          My Services
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-lg bg-[#282828] shadow-lg shadow-[#545454] transition-all duration-300 hover:shadow-xl hover:shadow-[#545454]"
            >
              <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full transition-all duration-300 bg-accent group-hover:-scale-150" />
              <div className="relative p-6">
                <span className="inline-block mb-2 text-4xl font-bold text-white">{service.num}</span>
                <h3 className="mb-3 text-3xl font-semibold text-white">{service.title}</h3>
                <p className="mb-4 text-white">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-white transition-colors hover:text-accent/80"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}