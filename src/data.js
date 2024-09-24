import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaJava, FaDocker, FaJira, FaTrello, FaBootstrap } from 'react-icons/fa'
import { BiLogoReact, BiLogoJavascript, BiLogoNodejs, BiLogoMongodb, BiLogoPostgresql, BiLogoGit, BiLogoGithub, BiLogoPython, BiLogoDjango, BiLogoTailwindCss } from 'react-icons/bi'
import { SiExpress, SiNextdotjs, SiFlask, SiCplusplus, SiMicrosoftsqlserver, SiMysql, SiKubernetes, SiPostman, SiVisualstudiocode, SiLeetcode, SiCodeforces } from 'react-icons/si'

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
        Component: SiLeetcode,
        name: "LeetCode",
        url: "https://leetcode.com/rudra14/"
    },
    {
        Component: SiCodeforces,
        name: "Codeforces",
        url: "https://codeforces.com/profile/print_rp14"
    }
]

export const projects = [
    {
        name: 'Bankify',
        category: 'Personal',
        techStack: ['ReactJS', 'NodeJS', 'ExpressJS', 'Firebase', 'MongoDB'],
        desc: 'Created a banking app using JavaScript, ReactJS, Tailwind CSS, fortified with secure NodeJS and ExpressJS REST APIs, and utilizing Postman for API testing. Leveraged NoSQL database MongoDB for scalability and rapid data access, while offering users an insightful dashboard for a comprehensive account overview on platform.',
        isOnGithub: true,
        ghUrl: "https://github.com/Rudra1402/Bankify-BankingApp"
    },
    {
        name: 'HungerHalt',
        category: 'Academic',
        techStack: ['ReactJS', 'Python', 'NodeJS', 'ExpressJS', 'MongoDB'],
        desc: 'Developed a food waste management platform by implementing JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, and Tailwind CSS. Demonstrated the ability to create and train Python model and integrated it in the application for predictive analytics to minimize the food wastage.',
        isOnGithub: true,
        ghUrl: "https://github.com/Rudra1402/HungerHalt"
    },
    {
        name:  'E-Vehicle Depot',
        category: 'Academic',
        techStack: ['Python', 'Django(Framework)', 'JavaScript', 'SQLite3'],
        desc: 'Developed an e-vehicle marketplace application using Python, Django (Model-Template-View Architecture), OO Programming, JavaScript, HTML, and CSS, featuring an interactive UI/UX, Firebase for image storage, implemented Django Sessions and Cookies for user authentication and  authorization.',
        isOnGithub: true,
        ghUrl: "https://github.com/Rudra1402/EV-Depot"

    },
    {
        name: 'Credit Limit Optimizer',
        category: 'Personal',
        techStack: ['Python', 'Machine Learning', 'Flask'],
        desc: 'The project includes data preprocessing, model training, and deployment via a Flask web application. The process begins with loading and preparing data, followed by training a RandomForestRegressor model. The trained model and preprocessing steps are saved as pickle files.',
        isOnGithub: true,
        ghUrl: 'https://github.com/Rudra1402/Credit-Limit-Optimizer'
    },
    {
        name: 'DueDash',
        category: 'Professional',
        techStack: ['ReactJS', 'NextJS', 'Tailwind CSS'],
        desc: 'Constructed the frontend of DueDash Capital Networks leveraging JavaScript, TypeScript, ReactJS and Tailwind CSS, integrated NodeJS and ExpressJS REST APIs and Python scripts. Crafted custom reusable components in ReactJS, to improve the performance of the application, focused on mobile responsiveness of the web pages.',
        isOnGithub: false
    },
    {
        name: 'Freelance Marketplace',
        category: 'Personal',
        techStack: ['Python', 'Flask', 'SQLAlchemy', 'JavaScript'],
        desc: 'Constructed the backend of the freelance marketplace platform using Python, Flask web framework and SQLAlchemy database, integrated GCP for user authentication. Crafted the user-facing frontend of the freelance marketplace by implementing ReactJS enhancing the overall experience for both freelancers and clients seeking to connect and collaborate on projects.',
        isOnGithub: true,
        ghUrl: "https://github.com/Rudra1402/FreelanceMarketplace"
    },
    {
        name: 'Project Manager',
        category: 'Personal',
        techStack: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB'],
        desc: 'It is a projects and APIs listing platform, a great place for developers. They can post their projects and APIs on the platform as well as they can inspire from the work of other developers available on the platform. Beginners can use the APIs posted on the platform to start their development journey.',
        isOnGithub: true,
        ghUrl: "https://github.com/Rudra1402/Project-Manager"
    },
    {
        name: 'Hotel Price Analysis',
        category: 'Academic',
        techStack: ['Java', 'Selenium'],
        desc: 'Co-developed a sophisticated console-based Java application designed to efficiently scan through three distinct hotel websites using Selenium, analyze and present the best deals. Demonstrated the ability to develop an application that records the search frequency of cities, offers recommendations for popular destinations and intelligently corrects spelling errors to ensure accurate search results.',
        isOnGithub: false
    },
    {
        name: 'Communix',
        category: 'Personal',
        techStack: ['ReactJS', 'NodeJS', 'ExpressJS', 'PostgreSQL'],
        desc: 'A social media site where users can share, like, comment, and report posts on their timeline along with notifications and recent activity. There is an Admin Dashboard for the admin of the site and from there the admin can manage the users, reported posts, and contact queries. A user also has a profile page with several insights.',
        isOnGithub: true,
        ghUrl: "https://github.com/Rudra1402/Communix"
    },
    {
        name: 'Guess The Color',
        category: 'Personal',
        techStack: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB'],
        desc: 'It is a fun game where you can test your knowledge, experience and accuracy you have on the CSS property of color. You have two color formats to choose from; RGB and HEX. It consists of a leaderboard to create a competitive environment. This game will surely improve your CSS knowledge.',
        isOnGithub: true,
        ghUrl: "https://github.com/Rudra1402/gtc-game"
    },
    {
        name: 'E-Mart',
        category: 'Personal',
        techStack: ['ReactJS', 'NodeJS', 'ExpressJS', 'PostgreSQL'],
        desc: 'This is an e-commerce website specifically developed for electronic gadgets. Also, all the products are available at a discounted price with several other features. Moreover, average rating based on feedback is also visible in the footer.',
        isOnGithub: true,
        ghUrl: "https://github.com/Rudra1402/E-Mart"
    },
    {
        name: 'Gossip Corner',
        category: 'Personal',
        techStack: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB'],
        desc: 'This is a social media website which provides one of the best platforms to share your gossips with the world and have fun together with several other features and benefits. Users can post their gossips, view gossips on their timeline, or delete their gossips.',
        isOnGithub: true,
        ghUrl: "https://github.com/Rudra1402/GossipCorner"
    },
    // {
    //     name: 'QR Code Generator',
    //     category: 'Generator Tool',
    //     techStack: ['ReactJS', 'Flask'],
    //     desc: 'It is a simple QR Code Generator where you can just input any valid URL and it will generate a QR Code for that URL. Now, you can scan the QR Code and access the URL',
    //     isOnGithub: true
    // },
    // {
    //     name: 'PokéCard',
    //     category: 'Pokemon App',
    //     techStack: ['HTML', 'CSS', 'ReactJS'],
    //     desc: 'This is a Pokemon application where information of several pokemons are made available using the help of a pokemon api. Search pokemon name to access important infromation realted to that pokemon.',
    //     isOnGithub: true
    // },
    // {
    //     name: 'News Application',
    //     category: 'News App',
    //     techStack: ['React Native', 'CSS'],
    //     desc: 'Users can view news for various categories like sports, health, business, etc. By default general category is set. Users can change the category from the navbar to view news of their own choice. They can also visit the original source of the news from the provided link.',
    //     isOnGithub: true
    // },
    // {
    //     name: 'TechQuiz',
    //     category: 'Quiz Application',
    //     techStack: ['HTML', 'CSS', 'JavaScript'],
    //     desc: 'It is a technical quiz consisting of questions from different programming languages. Every correct answer will reward you 1 point, no negative point scheme. There are total 10 questions. At the end of the quiz user will get the final score.',
    //     isOnGithub: true
    // }
]

export const workExp = [
    {
        role: 'Software Developer Intern',
        company: 'Modgenics Technology Solutions Pvt. Ltd.',
        location: 'Remote',
        desc: [
            "Developed 100% of frontend of web applications using React.js, Next.js, TypeScript, and Tailwind CSS, designed custom reusable components for web UI, collaborated with cross-functional teams.", "Engineered robust application servers using Node.js and Express.js REST APIs, collaborated with crossfunctional teams, performed test driven development, leveraged AWS services for distributed systems.", "Leveraged Git and BitBucket for source code management, developed functional prototypes for the client to enhance customer relationship management, performing Agile planning every week."
        ],
        techStack: ['ReactJS', 'NextJS', 'AWS S3', 'Tailwind CSS'],
        duration: 'Jan 2023 - Jul 2023',
        certificateUrl: 'https://media.licdn.com/dms/image/D562DAQGNv0dgoAAWYg/profile-treasury-document-cover-images_480/0/1699763169649?e=1700370000&v=beta&t=HzJUHD9x9U5e_KSOghFpyJ9KGniFdEI2f9k8ev0NGas'
    },
    {
        role: 'Full-Stack Developer Intern',
        company: 'TatvaSoft',
        location: 'Remote',
        desc: [
            "Developed a comprehensive e-commerce platform using React.js, Redux, HTML5, and Tailwind CSS, creating an engaging and interactive front-end design. Implemented advanced JavaScript ES6 for DOM manipulation.", "Created 100% mobile responsive web UI/UX for cross-browser compatibility to display web content, demonstrated ability to resolve technical issues. Utilized Git and GitHub for source code management.", "Built robust backend using Node.js and Express.js REST API for server-side scripting utilizing my coding skills, troubleshooting and debugging code. Implemented Postgres for database, wrote complex SQL queries."
        ],
        techStack: ['ReactJS', 'NodeJS', 'ExpressJS', 'PostgreSQL'],
        duration: 'Jul 2022 - Dec 2022',
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
        cgpa: '3.7 / 4.0',
    },
    {
        institute: 'SVIT',
        city: 'Vasad, Gujarat, India',
        courseDegree: 'Bachelor\'s degree',
        major: 'Information Technology',
        duration: '06/2019 - 05/2023',
        cgpa: '9.02 / 10.00',
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
        sname: 'Java',
        Component: FaJava,
        category: 'lang'
    },
    {
        sname: 'ReactJS',
        Component: BiLogoReact,
        category: 'l&f'
    },
    {
        sname: 'NextJS',
        Component: SiNextdotjs,
        category: 'l&f'
    },
    {
        sname: 'Django',
        Component: BiLogoDjango,
        category: 'l&f'
    },
    {
        sname: 'NodeJS',
        Component: BiLogoNodejs,
        category: 'l&f'
    },
    {
        sname: 'ExpressJS',
        Component: SiExpress,
        category: 'l&f'
    },
    {
        sname: 'Flask',
        Component: SiFlask,
        category: 'l&f'
    },
    {
        sname: 'MongoDB',
        Component: BiLogoMongodb,
        category: 'db'
    },
    {
        sname: 'MS SQL Server',
        Component: SiMicrosoftsqlserver,
        category: 'db'
    },
    {
        sname: 'PostgreSQL',
        Component: BiLogoPostgresql,
        category: 'db'
    },
    {
        sname: 'MySQL',
        Component: SiMysql,
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
    },
    {
        sname: 'Bootstrap',
        Component: FaBootstrap,
        category: 'l&f'
    },
    {
        sname: 'Docker',
        Component: FaDocker,
        category: 'cont'
    },
    {
        sname: 'Kubernetes',
        Component: SiKubernetes,
        category: 'cont'
    },
    {
        sname: 'JIRA',
        Component: FaJira,
        category: 'tool'
    },
    {
        sname: 'Postman',
        Component: SiPostman,
        category: 'tool'
    },
    {
        sname: 'VS Code',
        Component: SiVisualstudiocode,
        category: 'tool'
    },
    {
        sname: 'Trello',
        Component: FaTrello,
        category: 'tool'
    }
]