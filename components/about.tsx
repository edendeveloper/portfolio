"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Code, Palette, Layout, Globe, Zap, Layers } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
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

    // Floating icons class
    class FloatingIcon {
      constructor(x, y, icon) {
        this.x = x;
        this.y = y;
        this.icon = icon;
        this.size = Math.random() * 20 + 15;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // Bounce off edges
        if (this.x > canvas.width - this.size || this.x < this.size)
          this.speedX *= -1;
        if (this.y > canvas.height - this.size || this.y < this.size)
          this.speedY *= -1;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.globalAlpha = this.opacity;

        // Draw icon (simplified representation)
        ctx.fillStyle = "#9333EA";

        // Different shapes for different icons
        if (this.icon === "react") {
          // React-like atom
          const outerRadius = this.size;
          const innerRadius = this.size / 3;

          for (let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.ellipse(
              0,
              0,
              outerRadius,
              innerRadius,
              (i * 120 * Math.PI) / 180,
              0,
              2 * Math.PI
            );
            ctx.stroke();
          }

          ctx.beginPath();
          ctx.arc(0, 0, innerRadius / 2, 0, 2 * Math.PI);
          ctx.fill();
        } else if (this.icon === "code") {
          // Code brackets
          ctx.beginPath();
          ctx.moveTo(-this.size / 2, -this.size / 3);
          ctx.lineTo(-this.size, 0);
          ctx.lineTo(-this.size / 2, this.size / 3);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(this.size / 2, -this.size / 3);
          ctx.lineTo(this.size, 0);
          ctx.lineTo(this.size / 2, this.size / 3);
          ctx.stroke();
        } else if (this.icon === "ui") {
          // UI element
          ctx.beginPath();
          ctx.roundRect(
            -this.size / 2,
            -this.size / 2,
            this.size,
            this.size,
            this.size / 5
          );
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(-this.size / 3, -this.size / 6);
          ctx.lineTo(this.size / 3, -this.size / 6);
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(0, this.size / 6, this.size / 6, 0, 2 * Math.PI);
          ctx.fill();
        } else if (this.icon === "responsive") {
          // Responsive design
          ctx.beginPath();
          ctx.roundRect(
            -this.size / 2,
            -this.size / 3,
            this.size,
            this.size / 1.5,
            this.size / 10
          );
          ctx.stroke();

          ctx.beginPath();
          ctx.roundRect(
            -this.size / 4,
            this.size / 4,
            this.size / 2,
            this.size / 4,
            this.size / 20
          );
          ctx.fill();
        } else {
          // Default: hexagon for other tech
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i * 60 * Math.PI) / 180;
            const x = this.size * Math.cos(angle);
            const y = this.size * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.stroke();

          // Inner dot
          ctx.beginPath();
          ctx.arc(0, 0, this.size / 4, 0, 2 * Math.PI);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    // Create floating icons
    const icons = [];
    const iconTypes = ["react", "code", "ui", "responsive", "tech"];
    const numberOfIcons = 15;

    for (let i = 0; i < numberOfIcons; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const icon = iconTypes[Math.floor(Math.random() * iconTypes.length)];
      icons.push(new FloatingIcon(x, y, icon));
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw icons
      for (let i = 0; i < icons.length; i++) {
        icons[i].update();
        icons[i].draw();
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

  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      name: "Clean Code",
      description: "Writing maintainable, efficient code",
    },
    {
      icon: <Layout className="h-8 w-8" />,
      name: "Responsive Design",
      description: "Creating layouts that work on all devices",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      name: "UI/UX Design",
      description: "Crafting intuitive user experiences",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      name: "Web Performance",
      description: "Optimizing for speed and efficiency",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      name: "Animation",
      description: "Adding life to interfaces with motion",
    },
    {
      icon: <Layers className="h-8 w-8" />,
      name: "Architecture",
      description: "Building scalable application structures",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              About{" "}
              <span className="text-purple-600 dark:text-purple-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-purple-200 dark:bg-purple-900 rounded-lg transform rotate-3"></div>
                <div className="relative z-10 rounded-lg w-full h-full flex items-center justify-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                  {/* Canvas for floating icons animation */}
                  <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                  />

                  {/* Skill icons with animations */}
                  <div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-xs">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-white dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center text-center shadow-md border border-purple-100 dark:border-purple-900"
                      >
                        <div className="text-purple-600 dark:text-purple-400 mb-2">
                          {skill.icon}
                        </div>
                        <h3 className="font-medium text-gray-800 dark:text-white text-sm">
                          {skill.name}
                        </h3>
                      </motion.div>
                    ))}
                  </div>

                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none"></div>

                  {/* Animated pulse effect */}
                  <motion.div
                    className="absolute inset-0 bg-purple-400/5 dark:bg-purple-500/10 rounded-lg"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(147, 51, 234, 0.2)",
                        "0 0 0 20px rgba(147, 51, 234, 0)",
                        "0 0 0 0 rgba(147, 51, 234, 0)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-400 dark:bg-purple-700 rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-600 dark:bg-purple-500 rounded-full opacity-20"></div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                Frontend Developer & UI/UX Enthusiast
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a passionate frontend developer with 3 years of experience
                creating engaging and responsive web applications. I specialize
                in modern JavaScript frameworks like React and Next.js, with a
                strong focus on creating intuitive user interfaces and smooth
                animations.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                My journey in web development began when I started tweaking
                Minecraft mods, which sparked my passion for coding. That
                curiosity led me to frontend development, where I honed my
                skills and eventually joined a consultancy. Since then, I've
                tackled diverse challenges, always striving to deliver the best
                solutions and ensure client satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-gray-700 dark:text-gray-200 font-medium">
                    Name:
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Welington Manfrim
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-200 font-medium">
                    Email:
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    welington.robertodev@gmail.com
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-200 font-medium">
                    Location:
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Americana, SP - Brazil
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-200 font-medium">
                    Availability:
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Freelance & Full-time
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
