"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Kumulus",
    location: "Campinas, SP - Brazil",
    period: "Jun 2024 - Present",
    description:
      "I worked on multiple projects, gaining experience in frontend development, UI/UX design, and system integration. Some of my key contributions include:  ",

    project1:
      " - Developing a system to simplify partogram creation, using React, Redux, and integrating APIs. I designed UI screens in Figma, implemented business rules, and managed the project using Scrum and Azure DevOps.",
    project2:
      " - Designing and integrating various chatbots, leveraging Figma for UI/UX, Next.js for development, and Azure DevOps for CI/CD.",
    skills: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
  },
  {
    title: "Frontend Developer Intern",
    company: "Kumulus",
    location: "Campinas, SP - Brazil",
    period: "Mar 2023 - Jun 2024",
    description:
      "During my internship, I focused on studying frontend technologies such as React, TypeScript, and CSS, deepening my understanding of modern web development. I worked closely with mentors, receiving guidance and feedback while actively contributing to projects. Through hands-on tasks, I gained practical experience, improved my problem-solving skills, and strengthened my ability to build scalable and maintainable applications.",
    skills: ["React", "TypeScript", "Redux", "Tailwind CSS"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const canvasRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Create flowing lines
    class FlowLine {
      constructor() {
        this.startX = Math.random() * canvas.width;
        this.startY = 0;
        this.endX = this.startX + (Math.random() * 200 - 100);
        this.endY = canvas.height;
        this.controlX1 = this.startX + (Math.random() * 200 - 100);
        this.controlY1 = canvas.height * 0.3;
        this.controlX2 = this.endX + (Math.random() * 200 - 100);
        this.controlY2 = canvas.height * 0.7;
        this.lineWidth = Math.random() * 2 + 0.5;
        this.opacity = Math.random() * 0.07 + 0.03;
        this.color = `rgba(147, 51, 234, ${this.opacity})`;
        this.speed = Math.random() * 0.5 + 0.2;
        this.offset = 0;
      }

      update() {
        this.offset += this.speed;
        if (this.offset > canvas.height * 2) {
          this.offset = 0;
        }
      }

      draw() {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.beginPath();

        // Create a flowing curve that moves upward
        ctx.moveTo(this.startX, (this.startY + this.offset) % canvas.height);
        ctx.bezierCurveTo(
          this.controlX1,
          (this.controlY1 + this.offset) % canvas.height,
          this.controlX2,
          (this.controlY2 + this.offset) % canvas.height,
          this.endX,
          (this.endY + this.offset) % canvas.height
        );

        ctx.stroke();
      }
    }

    // Initialize flow lines
    const flowLines = [];
    const lineCount = Math.min(30, Math.floor(canvas.width / 50));

    for (let i = 0; i < lineCount; i++) {
      flowLines.push(new FlowLine());
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < flowLines.length; i++) {
        flowLines[i].update();
        flowLines[i].draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background animation canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-purple-200/30 dark:bg-purple-800/20 rounded-full"
          animate={{
            y: [0, 30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 -right-20 w-60 h-60 bg-purple-300/20 dark:bg-purple-700/10 rounded-full"
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-indigo-200/20 dark:bg-indigo-700/10 rounded-full"
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut",
          }}
        />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Work{" "}
              <span className="text-purple-600 dark:text-purple-400">
                Experience
              </span>
            </h2>
            <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional journey and the companies I've had the pleasure to
              work with.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line with animation */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-purple-200 dark:bg-purple-900/50">
              <motion.div
                className="absolute top-0 left-0 w-full bg-purple-500 dark:bg-purple-400"
                initial={{ height: 0 }}
                animate={isInView ? { height: "100%" } : { height: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </div>

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot with pulse animation */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-purple-600 dark:bg-purple-500 border-4 border-white dark:border-gray-900 z-10">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-purple-400 dark:bg-purple-300"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 0, 0.7],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        delay: index * 0.5,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                    <motion.div
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-100/50 dark:border-gray-700/50 hover:shadow-lg transition-shadow"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-purple-100 dark:bg-purple-900/40 p-3 rounded-full mr-4">
                          <Briefcase className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                            {exp.title}
                          </h3>
                          <p className="text-purple-600 dark:text-purple-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4 text-sm">
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {exp.project1}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {exp.project2}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            className="text-xs bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full"
                            whileHover={{ scale: 1.1 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
