"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const skills = [
  {
    id: 1,
    image: "/images/skills/tailwind.svg",
    title: "",
    description: "",
    tag: ["", ""],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    image: "/images/skills/react.png",
    title: "",
    description: "",
    tag: ["", ""],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    image: "/images/skills/next-js.svg",
    title: "",
    description: "",
    tag: ["", ""],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    image: "/images/skills/node.svg",
    title: "",
    description: "",
    tag: ["", ""],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    image: "/images/skills/mongodb.png",
    title: "",
    description: "",
    tag: ["", ""],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const projectsData = [
  {
    id: 1,
    title: "Land Registration System Using Blockchain Technology",
    description:
      "The elimination of middlemen or brokers makes the process of land registration less expensive.",
    image: "/images/projects/blockchain.png",
    tag: ["All", "Web"],
    gitUrl: "github.com/aakashshrestha-22/Land_Registration",
    previewUrl: "/",
  },
];

const certifications = [
  {
    id: 1,
    title: "IRJET Research Paper Certificate",
    description:
      "Published my research paper on Land Registration System Using Blockchain Technology",
    image: "/images/certificate/IRJET.jpg",
    tag: "",
    gitUrl: "github.com/aakashshrestha-22/Land_Registration",
    previewUrl: "https://www.irjet.net/archives/V10/i4/IRJET-V10I4177.pdf",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Skills");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // const filteredProjects = projectsData.filter((project) =>
  //   project.tag.includes(tag)
  // );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-10 mb-8 ">
        Achievements
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Skills"
          isSelected={tag === "Skills"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Projects"
          isSelected={tag === "Projects"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Certificates"
          isSelected={tag === "Certificate"}
        />
      </div>
      {/* <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12"> */}
      <div ref={ref}>
        {tag === "Projects" ? (
          projectsData.map((project, index) => (
            <ul key={index} className="grid md:grid-cols-3 gap-8 md:gap-12 ">
              <motion.li
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                />
              </motion.li>
            </ul>
          ))
        ) : tag === "Skills" ? (
          <div className="flex justify-center md:gap-0  items-center">
            <ul className=" md:flex grid grid-cols-3 gap-5 justify-evenly  md:mt-10  md:gap-10   md:w-[80%] ">
              {skills.map((skill, index) => {
                return (
                  <motion.li
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                  >
                    <div className="">
                      <Image
                        height={100}
                        width={100}
                        alt="skills"
                        src={skill.image}
                        className={` hover:scale-125 duration-300 ease-in-out transition ${
                          skill.id === 3 ? "bg-white rounded-full" : ""
                        }`}
                      />
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        ) : (
          <ul className=" grid md:grid-cols-3 gap-8 md:gap-12   ">
            {certifications.map((items, index) => {
              return (
                <motion.li
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                  <div className="">
                    <ProjectCard
                      key={items.id}
                      title={items.title}
                      description={items.description}
                      imgUrl={items.image}
                      gitUrl={items.gitUrl}
                      previewUrl={items.previewUrl}
                    />
                  </div>
                </motion.li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
