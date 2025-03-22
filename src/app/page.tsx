"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaSearch,
  FaBriefcase,
  FaUsers,
  FaChartLine,
  FaMapMarkerAlt,
  FaClock,
  FaRupeeSign,
  FaBars,
  FaTimes,
  FaStar,
  FaRegLightbulb,
} from "react-icons/fa";

// Define types
interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  // Scroll animation for sections
  const FadeInSection = ({ children, delay = 0, className }: FadeInSectionProps) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    useEffect(() => {
      if (inView) {
        controls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 0.8, delay: delay },
        });
      }
    }, [controls, inView, delay]);

    return (
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={controls}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Animated Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full mix-blend-screen filter blur-sm"
            style={{
              background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.15)`,
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [1, Math.random() * 0.5 + 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-40 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.1, 0.9, 1],
            x: [0, 30, -20, 0],
            y: [0, -50, 20, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-0 right-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 0.9, 1.1, 1],
            x: [0, -30, 20, 0],
            y: [0, 50, -20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 0.8, 1],
            x: [0, 20, -30, 0],
            y: [0, -20, 50, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Header with Glass Effect */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
        <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-6">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-lg">
              <span className="font-bold text-xl">Job</span>
              <span className="font-light">Portal</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["features", "jobs", "testimonials", "contact"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className="font-medium hover:text-cyan-300 transition-colors"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              )
            )}
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="hidden md:flex space-x-4">
            <motion.button
              className="border border-white/30 hover:bg-white/10 px-4 py-2 rounded-full transition-all"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              Login
            </motion.button>
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-5 py-2 rounded-full shadow-lg transition-all"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              Sign Up
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: mobileMenuOpen ? "auto" : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 py-4 bg-white/10 backdrop-blur-md border-b border-white/20">
            <nav className="flex flex-col space-y-3">
              {["features", "jobs", "testimonials", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="font-medium hover:text-cyan-300 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
              <div className="flex space-x-2 pt-3">
                <button className="flex-1 border border-white/30 hover:bg-white/10 px-4 py-2 rounded-full transition-all">
                  Login
                </button>
                <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-5 py-2 rounded-full shadow-lg transition-all">
                  Sign Up
                </button>
              </div>
            </nav>
          </div>
        </motion.div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-1 text-center px-4 py-20 md:py-32 relative">
        {/* 3D Rotating Element */}
        <div className="absolute right-10 top-10 md:right-32 md:top-32 hidden md:block">
          <motion.div
            className="w-32 h-32 relative"
            animate={{ rotateY: 360, rotateX: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 w-full h-full border-2 border-cyan-400 rounded-lg transform rotate-45 opacity-60" />
            <div className="absolute inset-0 w-full h-full border-2 border-pink-400 rounded-lg transform rotate-90 opacity-60" />
            <div className="absolute inset-0 w-full h-full border-2 border-purple-400 rounded-lg transform -rotate-45 opacity-60" />
          </motion.div>
        </div>

        <FadeInSection className="w-full">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover Your Dream Career
          </motion.h1>
        </FadeInSection>

        <FadeInSection delay={0.2} className="w-full">
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Connect with top employers and find the perfect job opportunity that
            matches your skills and aspirations.
          </motion.p>
        </FadeInSection>

        {/* Search Bar */}
        <FadeInSection delay={0.4} className="w-full max-w-3xl">
          <motion.div
            className="bg-white/10 backdrop-blur-md p-4 rounded-2xl mb-12 border border-white/20 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
              y: -5,
            }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow group">
                <FaSearch className="absolute left-4 top-3.5 text-gray-300 group-hover:text-cyan-300 transition-colors" />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all group-hover:border-cyan-300/50"
                />
              </div>
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Search Jobs</span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
              </motion.button>
            </div>
          </motion.div>
        </FadeInSection>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl">
          {[
            { number: "10,000+", text: "Active Jobs" },
            { number: "5,000+", text: "Companies" },
            { number: "20M+", text: "Job Seekers" },
          ].map((stat, index) => (
            <FadeInSection
              key={index}
              delay={0.6 + index * 0.2}
              className="w-full"
            >
              <motion.div
                className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
              >
                <motion.p
                  className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                >
                  {stat.number}
                </motion.p>
                <p className="text-gray-300">{stat.text}</p>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </main>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 bg-gradient-to-b from-indigo-900 to-violet-950"
      >
        <div className="container mx-auto px-4">
          <FadeInSection className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                Why Choose Us
              </span>
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.2} className="w-full">
            <p className="text-xl text-center max-w-2xl mx-auto mb-16 text-gray-300">
              Our platform offers the best features to help you find your dream
              job quickly and efficiently.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBriefcase className="text-2xl" />,
                title: "Smart Job Matching",
                description:
                  "Our AI-powered algorithm matches your skills and experience with the perfect job opportunities.",
                gradient: "from-cyan-500 to-blue-500",
              },
              {
                icon: <FaUsers className="text-2xl" />,
                title: "Direct Employer Contact",
                description:
                  "Connect directly with hiring managers and recruiters without intermediaries.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: <FaChartLine className="text-2xl" />,
                title: "Career Growth Tools",
                description:
                  "Access resources, courses, and tools to help you advance in your career journey.",
                gradient: "from-amber-500 to-red-500",
              },
              {
                icon: <FaRegLightbulb className="text-2xl" />,
                title: "Personalized Insights",
                description:
                  "Get customized recommendations and industry insights tailored to your career goals.",
                gradient: "from-green-500 to-teal-500",
              },
              {
                icon: <FaStar className="text-2xl" />,
                title: "Premium Job Alerts",
                description:
                  "Receive instant notifications for high-demand positions that match your profile.",
                gradient: "from-blue-500 to-indigo-500",
              },
              {
                icon: <FaMapMarkerAlt className="text-2xl" />,
                title: "Location Flexibility",
                description:
                  "Find opportunities with flexible work arrangements including remote and hybrid options.",
                gradient: "from-pink-500 to-rose-500",
              },
            ].map((feature, index) => (
              <FadeInSection
                key={index}
                delay={0.4 + index * 0.1}
                className="w-full"
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all hover:shadow-xl group h-full relative"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {/* Glowing effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity`}></div>
                  
                  <motion.div
                    className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative`}
                    whileHover={{ rotate: 5 }}
                  >
                    {/* Animated halo effect */}
                    <motion.div 
                      className="absolute inset-0 rounded-xl opacity-60"
                      animate={{
                        boxShadow: ['0 0 0 0px rgba(255,255,255,0)', '0 0 0 10px rgba(255,255,255,0)'],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-4 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 relative z-10">{feature.description}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section
        id="jobs"
        className="py-20 bg-gradient-to-b from-violet-950 to-purple-950"
      >
        <div className="container mx-auto px-4">
          <FadeInSection className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                Featured Jobs
              </span>
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.2} className="w-full">
            <p className="text-xl text-center max-w-2xl mx-auto mb-16 text-gray-300">
              Explore our handpicked selection of top job opportunities from
              leading companies.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Job Cards */}
            {[
              {
                color: "from-blue-600 to-cyan-600",
                hoverColor: "text-cyan-300",
                buttonGradient:
                  "from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
                company: "MS",
                jobType: "Full-time",
                jobTypeColor: "text-cyan-300",
                title: "Senior Frontend Developer",
                companyName: "Microsoft Corporation",
                skills: ["React", "TypeScript", "Redux"],
                location: "Bangalore, India",
                posted: "Posted 2 days ago",
                salary: "₹25-35 LPA",
              },
              {
                color: "from-purple-600 to-pink-600",
                hoverColor: "text-purple-300",
                buttonGradient:
                  "from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
                company: "AM",
                jobType: "Remote",
                jobTypeColor: "text-purple-300",
                title: "Data Scientist",
                companyName: "Amazon Web Services",
                skills: ["Python", "Machine Learning", "SQL"],
                location: "Remote (India)",
                posted: "Posted 5 days ago",
                salary: "₹20-30 LPA",
              },
              {
                color: "from-amber-500 to-orange-600",
                hoverColor: "text-orange-300",
                buttonGradient:
                  "from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600",
                company: "GP",
                jobType: "Hybrid",
                jobTypeColor: "text-orange-300",
                title: "Product Manager",
                companyName: "Google",
                skills: ["Agile", "UX", "Analytics"],
                location: "Hyderabad, India",
                posted: "Posted 1 week ago",
                salary: "₹30-45 LPA",
              },
            ].map((job, index) => (
              <FadeInSection
                key={index}
                delay={0.4 + index * 0.2}
                className="w-full"
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:shadow-2xl transition-all group relative"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {/* Glowing effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${job.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity`}></div>
                  
                  <div className={`bg-gradient-to-r ${job.color} h-3`}></div>
                  <div className="p-6 relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <motion.div
                        className={`bg-gradient-to-r ${job.color} w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <span className="text-xl font-bold">{job.company}</span>
                      </motion.div>
                      <span
                        className={`bg-white/10 ${job.jobTypeColor} text-sm py-1 px-3 rounded-full`}
                      >
                        {job.jobType}
                      </span>
                    </div>

                    <h3
                      className={`text-2xl font-semibold mb-2 group-hover:${job.hoverColor} transition-colors`}
                    >
                      {job.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{job.companyName}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {job.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          className={`bg-white/5 text-sm py-1 px-3 rounded-full border border-white/5 group-hover:border-${job.color.split('-')[2]}-400/30 transition-colors`}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(255, 255, 255, 0.15)",
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="flex items-center text-gray-300">
                        <FaMapMarkerAlt className={`mr-2 text-gray-400 group-hover:${job.hoverColor} transition-colors`} />
                        {job.location}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <FaClock className={`mr-2 text-gray-400 group-hover:${job.hoverColor} transition-colors`} />
                        {job.posted}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <FaRupeeSign className={`mr-2 text-gray-400 group-hover:${job.hoverColor} transition-colors`} />
                        {job.salary}
                      </div>
                    </div>

                    <motion.button
                      className={`w-full bg-gradient-to-r ${job.buttonGradient} text-white font-semibold py-3 rounded-xl transition-all relative overflow-hidden group`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span className="relative z-10">Apply Now</span>
                      <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                    </motion.button>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <FadeInSection delay={1} className="inline-block">
              <motion.a
                href="#"
                className="inline-flex items-center bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-3 rounded-full transition-all"
                whileHover={{ scale: 1.05, x: 5 }}
              >
                View All Jobs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.a>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-b from-purple-950 to-pink-950"
      >
        <div className="container mx-auto px-4">
          <FadeInSection className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Success Stories
              </span>
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.2} className="w-full">
            <p className="text-xl text-center max-w-2xl mx-auto mb-16 text-gray-300">
              Hear from people who found their dream jobs through our platform.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "I found my dream job as a Senior Developer at a great company within just 2 weeks of using this platform. The job matching algorithm is truly impressive!",
                name: "Rahul Sharma",
                role: "Senior Developer",
                gradient: "from-purple-500 to-pink-500",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                quote:
                  "As a recent graduate, I was worried about finding a good job. This platform not only helped me land a great role but also provided valuable resources for interview preparation.",
                name: "Priya Patel",
                role: "UX Designer",
                gradient: "from-cyan-500 to-blue-500",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                quote:
                  "After struggling with job searches for months, I found three great offers within a week using this portal. The direct contact with employers made the process so much smoother.",
                name: "Arjun Mehta",
                role: "Product Manager",
                gradient: "from-amber-500 to-red-500",
                avatar: "https://randomuser.me/api/portraits/men/67.jpg",
              },
            ].map((testimonial, index) => (
              <FadeInSection
                key={index}
                delay={0.4 + index * 0.2}
                className="w-full"
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 relative h-full group"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
                  }}
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity, 
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: index * 2,
                  }}
                >
                  <motion.div
                    className={`absolute -top-5 left-8 bg-gradient-to-r ${testimonial.gradient} w-10 h-10 rounded-full flex items-center justify-center text-2xl`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {'"'}
                  </motion.div>
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl`}></div>
                  <p className="text-gray-300 mb-8 pt-4 italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    {testimonial.avatar ? (
                      <motion.div 
                        className="w-12 h-12 rounded-full mr-4 overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <Image 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          width={48} 
                          height={48}
                          className="object-cover"
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full mr-4`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      ></motion.div>
                    )}
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-pink-950 to-indigo-900 relative overflow-hidden">
        {/* Animated Floating Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
                rotate: Math.random() * 180,
              }}
              animate={{
                y: [0, Math.random() * 30 - 15],
                rotate: [0, Math.random() * 20 - 10],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4">
          <FadeInSection className="w-full">
            <motion.div
              className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl text-center max-w-4xl mx-auto relative overflow-hidden"
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
            >
              {/* Dynamic Background */}
              <div className="absolute inset-0 overflow-hidden opacity-30">
                <motion.div
                  className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                ></motion.div>
                <motion.div
                  className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl"
                  animate={{
                    x: [0, -20, 10, 0],
                    y: [0, 20, -10, 0],
                    scale: [1, 1.1, 0.9, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.div>
                <motion.div
                  className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl"
                  animate={{
                    x: [0, 20, -10, 0],
                    y: [0, -20, 10, 0],
                    scale: [1, 0.9, 1.1, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5,
                  }}
                ></motion.div>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
                Ready to Find Your Dream Job?
              </h2>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-gray-300 relative z-10">
                Join thousands of job seekers who have successfully found their
                perfect career match with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <motion.button
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Create Your Profile</span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                </motion.button>
                <motion.button
                  className="bg-white/10 hover:bg-white/20 border border-white/20 font-semibold px-8 py-4 rounded-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Jobs
                </motion.button>
              </div>
            </motion.div>
          </FadeInSection>
        </div>
      </section>

      {/* Footer with animations */}
      <footer
        id="contact"
        className="pt-20 pb-10 bg-gradient-to-b from-indigo-900 to-indigo-950 relative overflow-hidden"
      >
        {/* Glowing footer effect */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-lg shadow-lg relative group">
                  <motion.div 
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-70 bg-white mix-blend-overlay"
                    animate={{ 
                      opacity: [0, 0.5, 0] 
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="font-bold text-xl">Job</span>
                  <span className="font-light">Portal</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Connecting talent with opportunity. Find your dream job with us.
              </p>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "linkedin"].map((social, index) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all relative group"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <motion.span 
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity"
                    />
                    <svg
                      className="w-5 h-5 relative z-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      {social === "facebook" && (
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        ></path>
                      )}
                      {social === "twitter" && (
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      )}
                      {social === "instagram" && (
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        ></path>
                      )}
                      {social === "linkedin" && (
                        <path
                          fillRule="evenodd"
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                          clipRule="evenodd"
                        ></path>
                      )}
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Job Seekers</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Career Advice
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Resume Builder
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Salary Calculator
                  </a>
                </li>
              </ul>
            </div>{" "}
            <div>
              <h3 className="text-lg font-semibold mb-4">For Employers</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Post a Job
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Talent Search
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing Plans
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Recruitment Solutions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">
                  <span className="block">Email:</span>
                  <a
                    href="mailto:contact@jobportal.com"
                    className="hover:text-white transition-colors"
                  >
                    contact@jobportal.com
                  </a>
                </li>
                <li className="text-gray-400">
                  <span className="block">Phone:</span>
                  <a
                    href="tel:+911234567890"
                    className="hover:text-white transition-colors"
                  >
                    +91 123 456 7890
                  </a>
                </li>
                <li className="text-gray-400">
                  <span className="block">Address:</span>
                  <address className="not-italic">
                    Tech Park, Whitefield
                    <br />
                    Bangalore, Karnataka 560066
                  </address>
                </li>
              </ul>{" "}
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              © 2025 Job Portal. All rights reserved.
            </motion.p>
          </div>
        </div>
      </footer>
      {/* Style for blob animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
