// Skills Section Logo's
import htmlLogo from '../assets/Tech_Logo/html.png';
import cssLogo from '../assets/Tech_Logo/css.png';
import sassLogo from '../assets/Tech_Logo/sass.png';
import javascriptLogo from '../assets/Tech_Logo/Javascript.png';
import reactjsLogo from '../assets/Tech_Logo/reactjs.png';
import reduxLogo from '../assets/Tech_Logo/redux.png';
import nextjsLogo from '../assets/Tech_Logo/nextjs.png';
import tailwindcssLogo from '../assets/Tech_Logo/tailwindcss.png';
import materialuiLogo from '../assets/Tech_Logo/materialui.png';
import bootstrapLogo from '../assets/Tech_Logo/bootstrap.png';
import nodejsLogo from '../assets/Tech_Logo/nodejs.png';
import expressjsLogo from '../assets/Tech_Logo/express.png';
import mongodbLogo from '../assets/Tech_Logo/mc.png';
import cLogo from '../assets/Tech_Logo/c.png';
import cppLogo from '../assets/Tech_Logo/cpp.png';
import pythonLogo from '../assets/Tech_Logo/python.png';
import typescriptLogo from '../assets/Tech_Logo/typescript.png';
import gitLogo from '../assets/Tech_Logo/git.png';
import githubLogo from '../assets/Tech_Logo/github.png';
import vscodeLogo from '../assets/Tech_Logo/vscode.png';
import postmanLogo from '../assets/Tech_Logo/postman.png';
import figmaLogo from '../assets/Tech_Logo/figma.png';
import vercelLogo from '../assets/Tech_Logo/vercel.png';
import postgreLogo from '../assets/Tech_Logo/postgre.png';

// Experience Section Logo's
import companyLogo1 from '../assets/Company_Logo/companyLogo1.png';
import companyLogo2 from '../assets/Company_Logo/companyLogo2.svg';


// Project Section Logo's

import personalPortfollio from '../assets/job_portal_practice.png';
import jobPortal from '../assets/portfolio_Personal.png';



export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'SASS', logo: sassLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            { name: 'Redux', logo: reduxLogo },
            { name: 'Next JS', logo: nextjsLogo },
            { name: 'Tailwind CSS', logo: tailwindcssLogo },
            { name: 'Material UI', logo: materialuiLogo },
            { name: 'Bootstrap', logo: bootstrapLogo },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node JS', logo: nodejsLogo },
            { name: 'Express JS', logo: expressjsLogo },
            { name: 'MongoDB', logo: mongodbLogo },
            { name: 'PostgreSQL', logo: postgreLogo },
        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'C', logo: cLogo },
            { name: 'C++', logo: cppLogo },
            { name: 'Python', logo: pythonLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'TypeScript', logo: typescriptLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Postman', logo: postmanLogo },
            { name: 'Vercel', logo: vercelLogo },
            { name: 'Figma', logo: figmaLogo },
        ],
    },
];


export const experiences = [
    {
        id: 0,
        img: companyLogo2,
        role: "Fullstack Developer",
        company: "DivTech System Devs",
        date: "Jan 2023 - Apr 2025",
        desc: "Built responsive React.js applications with reusable and optimized components, Integrated REST APIs using Axios/Fetch and managed state with Redux Toolkit, Developed pixel-perfect UI from Figma designs using Tailwind CSS, Implemented routing, form validation, authentication, and custom hooks.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "TypeScript",
            "Node JS",
            "Tailwind CSS",
            "MongoDb",
            "Redux",
            " Next Js",
            "Postman",
            "Figma",
            "GitHub",
            "Material-UI",
            "Redux Toolkit"
        ],
    },
    {
        id: 1,
        img: companyLogo1,
        role: "Junior Frontend Developer",
        company: "Success Innovative Technologies",
        date: "July 2021 - jan 2023",
        desc: "Developed responsive websites using HTML, CSS, Bootstrap, and jQuery, Improved UI/UX and ensured smooth frontend-backend integration, Fixed UI bugs and enhanced cross-browser compatibility.",
        skills: [
            "JavaScript",
            "HTML",
            "CSS",
            "SQL",
            "Bootstrap",
            "GIT",
            "Figma"
        ],
    },

];

export const education = [

    {
        id: 1,
        //   img: bsaLogo,
        school: "BSA College, Mathura",
        date: "Sept 2018 - Aug 2021",
        grade: "73.2%",
        desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
        degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
        id: 2,
        //   img: vpsLogo,
        school: "Vatsalya Public School Govardhan, Mathura",
        date: "Apr 2017 - March 2018",
        grade: "78%",
        desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
        degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
        id: 3,
        //   img: vpsLogo,
        school: "Vatsalya Public School Govardhan, Mathura",
        date: "Apr 2015 - March 2016",
        grade: "87.5%",
        desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
        degree: "CBSE(X), Science with Computer Application",
    },
];

export const projects = [
    {
        id: 0,
        title: "Job Portal Application (MERN Stack)",
        description:
            "Designed and developed a full-stack Job Portal web application using the MERN stack,Implemented user authentication and authorization using JWT (Job Seeker, Recruiter/Admin roles), Developed RESTful APIs for users, jobs, companies, and applications, Integrated frontend with backend APIs and managed global state using Redux Toolkit.",
        image: personalPortfollio,
        tags: ["React JS", "Node.js", "Redux Toolkit", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Git", "GitHub"],
        github: "#",

    },

    {
        id: 1,
        title: " Personal Portfolio Website ",
        description:
            "Built a modern, responsive, and animated personal portfolio website to showcase skills, projects, and experience, Implemented smooth UI animations, responsive layouts, and reusable components, Designed clean sections for About, Skills, Projects, and Contact, Created using industry best practices by following a professional portfolio build tutorial. ",
        image: jobPortal,
        tags: ["React JS", "Vite", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Git"],
        github: "#",

    },

    // {
    //     id: 3,
    //     title: "Employee Management System (EMS)",
    //     description:
    //         "Developed a complete HR/Admin web application for managing employees, attendance, leave, and roles,Implemented JWT-based authentication with role-based access control, Built dashboards with search, filters, and full CRUD operations.",
    //     //   image: githubdetLogo,
    //     tags: ["JavaScript", "React JS", "API", "Redux Toolkit", "Material Ui", "Node.js", "MongoDB", "Express.js"],
    //     github: "#",

    // },
    // {
    //     id: 2,
    //     title: "Task Management Application (Trello-Style)",
    //     description:
    //         " Developed a task and board management system with drag-and-drop functionality, Implemented JWT authentication with role-based access control, Developed dashboards with search, filters, and full CRUD operations. ",
    //     //   image: csprepLogo,
    //     tags: ["React JS", "Node.js", "MongoDB", "Express", "Material Ui", "JavaScript"],
    //     github: "#",

    // },




];  