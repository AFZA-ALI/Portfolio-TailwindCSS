import { title } from 'process'
import React from 'react'
import Heading from './Heading'
import Card from './Card'


const data = [
    {
        id: 0,
        title: "Shareable Resume Builder",
        desc: "A shareable resume builder is an online tool that allows users to create, customize, and download professional resumes, with options to easily share via a link or as a PDF.",
        img: "/project1.jpg",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },
    {
      id: 1,
      title: "E-commerce Website",
      desc: "An e-commerce website is an online platform that enables users to browse, select, and purchase products or services directly over the internet.",
      img: "/project2.jpg",
      tags: ["React", "Node", "TailwindCSS", "Typescript"],
    },
    {
        id: 2,
        title: "Static Interactive Resume",
        desc: "A static interactive resume is a visually engaging, single-page resume with clickable sections, built with HTML, CSS, and JavaScript, without server-side interactivity.",
        img: "/project3.jpg",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },
]

const Project = () => {
  return (
    <div id='projects'className='container pt-32'>
      <Heading title="My Projects" />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Project
