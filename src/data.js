import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'
import { BiLogoReact, BiLogoJavascript, BiLogoNodejs, BiLogoMongodb, BiLogoPostgresql, BiLogoGit, BiLogoGithub, BiLogoPython, BiLogoDjango, BiLogoTailwindCss } from 'react-icons/bi'
import { SiExpress, SiNextdotjs, SiFlask, SiCplusplus } from 'react-icons/si'

export const socials = [
    {
        Component: FaLinkedin,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rudra14/"
    },
    {
        Component: FaGithub,
        name: "Github",
        url: "https://github.com/Rudra1402"
    },
    {
        Component: FaTwitter,
        name: "Twitter",
        url: "https://twitter.com/rp14ok"
    },
    {
        Component: FaInstagram,
        name: "Instagram",
        url: "https://www.instagram.com/rudra.patel.14/"
    }
]

export const projects = [
    {
        name: 'Project Manager',
        category: 'Projects and APIs listing platform',
        techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        desc: 'It is a projects and APIs listing platform, a great place for developers. They can post their projects and APIs on the platform as well as they can inspire from the work of other developers available on the platform. Beginners can use the APIs posted on the platform to start their development journey.',
        isOnGithub: true
    },
    {
        name: 'Bankify',
        category: 'Banking App',
        techStack: ['React.js', 'Node.js', 'Express.js', 'Firebase', 'MongoDB'],
        desc: 'A banking app where users can add accounts, add contacts, transfer funds to the contacts, access transfer history based on user\'s added accounts. Users can also view their total balance and print transfer history statements as a pdf. Users can also edit their profiles, upload their profile images from the profile section.',
        isOnGithub: true
    },
    {
        name: 'Communix',
        category: 'Social Media Platform',
        techStack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL'],
        desc: 'A social media site where users can share, like, comment, and report posts on their timeline along with notifications and recent activity. There is an Admin Dashboard for the admin of the site and from there the admin can manage the users, reported posts, and contact queries. A user also has a profile page with several insights.',
        isOnGithub: true
    },
    {
        name: 'E-Mart',
        category: 'E-Commerce Platform',
        techStack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL'],
        desc: 'This is an e-commerce website specifically developed for electronic gadgets. Also, all the products are available at a discounted price with several other features. Moreover, average rating based on feedback is also visible in the footer.',
        isOnGithub: true
    },
    {
        name: 'Gossip Corner',
        category: 'Social Media Platform',
        techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        desc: 'This is a social media website which provides one of the best platforms to share your gossips with the world and have fun together with several other features and benefits. Users can post their gossips, view gossips on their timeline, or delete their gossips.',
        isOnGithub: true
    },
    {
        name: 'QR Code Generator',
        category: 'Generator Tool',
        techStack: ['React.js', 'Flask'],
        desc: 'It is a simple QR Code Generator where you can just input any valid URL and it will generate a QR Code for that URL. Now, you can scan the QR Code and access the URL',
        isOnGithub: true
    },
    {
        name: 'PokéCard',
        category: 'Pokemon App',
        techStack: ['HTML', 'CSS', 'React.js'],
        desc: 'This is a Pokemon application where information of several pokemons are made available using the help of a pokemon api. Search pokemon name to access important infromation realted to that pokemon.',
        isOnGithub: true
    },
    {
        name: 'News Application',
        category: 'News App',
        techStack: ['React Native', 'CSS'],
        desc: 'Users can view news for various categories like sports, health, business, etc. By default general category is set. Users can change the category from the navbar to view news of their own choice. They can also visit the original source of the news from the provided link.',
        isOnGithub: true
    },
    {
        name: 'TechQuiz',
        category: 'Quiz Application',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        desc: 'It is a technical quiz consisting of questions from different programming languages. Every correct answer will reward you 1 point, no negative point scheme. There are total 10 questions. At the end of the quiz user will get the final score.',
        isOnGithub: true
    },
    {
        name: 'Guess The Color',
        category: 'CSS Game',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        desc: 'It is a fun game where you can test your knowledge, experience and accuracy you have on the CSS property of color. You have two color formats to choose from; RGB and HEX. This game will surely improve your CSS knowledge.',
        isOnGithub: true
    }
]

export const workExp = [
    {
        role: 'Software Developer Intern',
        type: 'Full-Time Internship',
        company: 'Modgenics Technology Solutions Pvt. Ltd.',
        location: 'Remote',
        desc: [
            "Worked on 2 projects. 1. DueDash, 2. EduFlip.",
            "For the first 1.5 months, worked on DueDash. Worked on developing custom and reusable components in React.js and integrating them in the main pages.",
            "For next 5 months, worked on EduFlip. By the time my internship came to an end, it was ready for its first release.",
            "Developed all the pages in Next.js from scratch using reusable components."
        ],
        techStack: ['React.js', 'Next.js', 'Tailwind CSS'],
        duration: '01/2023 - 07/2023',
        certificateUrl: 'https://media.licdn.com/dms/image/D562DAQGNv0dgoAAWYg/profile-treasury-document-cover-images_480/0/1699763169649?e=1700370000&v=beta&t=HzJUHD9x9U5e_KSOghFpyJ9KGniFdEI2f9k8ev0NGas'
    },
    {
        role: 'Full-Stack Developer Intern',
        type: 'Summer Internship',
        company: 'TatvaSoft',
        location: 'Remote',
        desc: [
            "Got to work on an individual project. Developed an online shopping store.",
            "This store contains electronic gadgets as the primary products.",
            "Everyday I had to report to the manager regarding the progress of the project."
        ],
        techStack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL'],
        duration: '06/2022 - 07/2022',
        certificateUrl: 'https://media.licdn.com/dms/image/D4D2DAQHWnJf3gOxq7w/profile-treasury-document-cover-images_480/0/1692809204396?e=1700370000&v=beta&t=-cCxgVc89b5Lq7AAQqXgAbUnmR05PU-KlNzs56m4Hi4'
    }
]

export const education = [
    {
        institute: 'University of Windsor',
        city: 'Windsor, ON, Canada',
        courseDegree: 'Master\'s degree',
        major: 'Applied Computing',
        duration: '09/2023 - Present',
        cgpa: '',
    },
    {
        institute: 'SVIT',
        city: 'Vasad, Gujarat, India',
        courseDegree: 'Bachelor\'s degree',
        major: 'Information Technology',
        duration: '06/2019 - 05/2023',
        cgpa: '9.02/10.00',
    }
]

export const techSkills = [
    {
        sname: 'JavaScript',
        Component: BiLogoJavascript,
        category: 'lang'
    },
    {
        sname: 'Python',
        Component: BiLogoPython,
        category: 'lang'
    },
    {
        sname: 'C++',
        Component: SiCplusplus,
        category: 'lang'
    },
    {
        sname: 'React.js',
        Component: BiLogoReact,
        category: 'l&f'
    },
    {
        sname: 'Next.js',
        Component: SiNextdotjs,
        category: 'l&f'
    },
    {
        sname: 'Node.js',
        Component: BiLogoNodejs,
        category: 'l&f'
    },
    {
        sname: 'Express.js',
        Component: SiExpress,
        category: 'l&f'
    },
    {
        sname: 'Flask',
        Component: SiFlask,
        category: 'l&f'
    },
    {
        sname: 'Django',
        Component: BiLogoDjango,
        category: 'l&f'
    },
    {
        sname: 'MongoDB',
        Component: BiLogoMongodb,
        category: 'db'
    },
    {
        sname: 'PostgreSQL',
        Component: BiLogoPostgresql,
        category: 'db'
    },
    {
        sname: 'Git',
        Component: BiLogoGit,
        category: 'vcs'
    },
    {
        sname: 'Github',
        Component: BiLogoGithub,
        category: 'vcs'
    },
    {
        sname: 'Tailwind CSS',
        Component: BiLogoTailwindCss,
        category: 'l&f'
    }
]