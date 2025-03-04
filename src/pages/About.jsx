import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-black text-white font-poppins">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[100vh] bg-gradient-to-r from-yellow-900/70 to-black">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/hero-about.jpg"
            alt="Shamurr Cooperative Team"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-400 text-sm font-medium tracking-wider uppercase mb-6">
              About Shamurr Cooperative
            </span>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent leading-tight">
              Building Wealth Together
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mx-auto">
              Founded in 2020, Shamurr Cooperative emerged from a vision to
              transform how communities access financial resources. We believe
              in the power of collective growth and sustainable wealth building
              through cooperation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-500/20 transition-all"
              >
                Join Our Community
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400/10 transition-all"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* History Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-yellow-500/10 rounded-full">
              <span className="text-yellow-400 text-sm font-medium tracking-wider uppercase">
                Our Journey
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mt-4">
              Our History
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Founded in 2024 Shamurr Cooperative Savings and Loans by a group
                of visionary individuals committed to community development seek
                to provide innovative and flexible financial services to their
                community. We are founded on the basic principles of mutual
                assistance, cooperation and upliftment of society. We are
                gradually expanding our membership as we strive to build trust,
                meet the changing needs of our community and focused on our
                principles of providing innovative financial services as well as
                promoting financial inclusion and economic empowerment.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mt-4">
              Value
            </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We remain guided by our key values and work culture: To our
                members we always aspire to meet the needs and interests of our
                members by providing personalized services and well thought-out
                financial solutions and believing in the gains of cooperation,
                mutual interests and working as partners to achieve common
                aspirations. We strive to uphold our integrity, leveraging on
                technology to continue to be creative and innovative and as well
                as open to learning. We seek to drive excellence through quality
                customer service delivery and above all create opportunities for
                financial inclusivity with flexible products and service
                offerings for socio-economic empowerment and general development
                of the society.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-yellow-500/20">
              <img
                src="/images/history.jpg"
                alt="Shamurr History"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-yellow-500/10 rounded-full">
              <span className="text-yellow-400 text-sm font-medium tracking-wider uppercase">
                Our People
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mt-4">
              Leadership Team
            </h2>
            <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
              Meet the dedicated professionals who guide our cooperative towards
              its mission.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-xl bg-yellow-500/5 hover:bg-yellow-500/10 transition-all duration-300"
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-xl font-bold text-white">
                    {member.name}
                  </h4>
                  <p className="text-yellow-400 mb-2">{member.position}</p>
                  <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.bio}
                  </p>
                  <div className="flex space-x-3">
                    {member.social.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        className="text-gray-300 hover:text-yellow-400"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision & Mission Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-24"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-yellow-500/5 rounded-xl p-8 backdrop-blur-sm border border-yellow-500/10">
              <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-300">
                To be the leading cooperative in Africa, transforming
                communities through financial empowerment and sustainable
                development.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-yellow-500/5 rounded-xl p-8 backdrop-blur-sm border border-yellow-500/10">
              <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-300">
                To provide accessible financial services and education that
                empower our members to achieve their financial goals and build
                stronger communities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

// Team members data
const teamMembers = [
  {
    name: "Sarah Johnson",
    position: "Chief Executive Officer",
    bio: "With 15+ years in community finance, Sarah leads our cooperative with passion and strategic vision.",
    image: "/images/team-1.jpg",
    social: [
      {
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        ),
        url: "#",
      },
      {
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
        url: "#",
      },
    ],
  },
  {
    name: "David Okonkwo",
    position: "Chief Financial Officer",
    bio: "David brings over a decade of experience in sustainable finance and community development banking.",
    image: "/images/team-2.jpg",
    social: [
      {
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        ),
        url: "#",
      },
      {
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
        url: "#",
      },
    ],
  },
  {
    name: "Maya Patel",
    position: "Community Relations Director",
    bio: "Maya builds strategic partnerships that strengthen our impact and expand our community reach.",
    image: "/images/team-3.jpg",
    social: [
      {
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        ),
        url: "#",
      },
      {
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
        url: "#",
      },
    ],
  },
];

export default About;
