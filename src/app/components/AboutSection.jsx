"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React/Next js</li>
        <li>Tailwind</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>Node Js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Visvesvaraya Technological University</li>
        <li>The Times Higher Secondary School</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:flex justify-between   py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div>
          <Image
            src="/images/aakash.jpg"
            alt="images"
            width={500}
            height={300}
            className="md:h-[550px] md:w-[400px] rounded-lg shadow-sm "
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col md:w-1/2   h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          {/* <div className="  rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[170px] lg:h-[170px] relative overflow-hidden">
            <Image
              src="/images/myimg.png"
              alt="hero image"
              className="absolute h-[200px] w-[500px]  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              width={500}
              height={500}
            />
          </div> */}
          <p className="text-base lg:text-lg md:text-justify">
            As a graduate in Computer Science and Engineering, specializing in
            front-end development, I bring a versatile skill set to the table.
            With expertise in React.js, Next.js, and Tailwind CSS, I craft
            engaging and responsive user interfaces that elevate digital
            experiences. My proficiency extends beyond the front end,
            encompassing Node.js and MongoDB for robust back-end development.
            Additionally, my knowledge of Python and blockchain basics adds
            depth to my technical toolkit, enabling me to tackle a diverse range
            of projects with creativity and precision. Passionate about staying
            at the forefront of technology, I am committed to continuous
            learning and innovation in the ever-evolving landscape of web
            development.
          </p>

          {/* <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div> */}
          <div className="mt-5">
            <h1 className="font-bold text-xl">Education:</h1>
            <table>
              <tr>
                <td>Visvesvaraya Technological University</td>
                <td className="pl-10 py-3">
                  BE Computer Science and Engineering
                </td>
              </tr>
              <tr>
                <td>The Times H.S.S</td>
                <td className="pl-10 ">+2 Science</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
