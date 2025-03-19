"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import CustomButton from "./custom-button"

const projects = [
  {
    title: "Habits",
    description:
      "A simple habits tracker made in a rocketseat bootcamp event.",
    image: "/habits.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://edendeveloper.github.io/nlw-setup/",
    githubUrl: "https://github.com/edendeveloper/nlw-setup",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              My <span className="text-purple-600 dark:text-purple-400">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects. Each one was built with a focus on user experience, performance, and
              clean code.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <CustomButton
                      href={project.githubUrl}
                      variant="outline"
                      size="sm"
                      className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-950"
                    >
                      <span className="flex items-center justify-center gap-1">
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </span>
                    </CustomButton>
                    <CustomButton
                      href={project.liveUrl}
                      size="sm"
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      <span className="flex items-center justify-center gap-1">
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </span>
                    </CustomButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <CustomButton
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-950"
              href={"https://github.com/edendeveloper"}
            >
              View All Projects
            </CustomButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

