import { EducationSection } from "../interfaces/education.interface";
import { ExternalSite } from "../interfaces/external-site.interface"
import { ProjectSection } from "../interfaces/project.interface";
import { SkillSection } from "../interfaces/skill-section.interface";
import { ExperienceSection } from "../interfaces/work-experience.interface";
import { AssetPaths } from "./asset-paths.enum";

// Social media links to show
const SocialMediaLinks: ExternalSite[] = [
    {
        name: "Github",
        link: "https://github.com/bhargavjulaganti",
        simpleIconName: "github",
        backgroundColor: "#181717",
    },
    {
        name: "Gmail",
        link: "mailto:bhargavjulaganti@gmail.com",
        simpleIconName: "gmail",
        backgroundColor: "#EA4335",
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/bhargav-julaganti-61851016/",
        simpleIconName: "linkedin", // this icon is not available in simple icon v14
        backgroundColor: "#0066c8", // manually checked
    },
    // {
    //     name: "LeetCode",
    //     link: "https://leetcode.com/dhruvilrathod/",
    //     simpleIconName: "leetcode",
    //     backgroundColor: "#FFA116",
    // },
]

// Fullstack skills
const FullstackSkills: ExternalSite[] = [
    {
        name: "Angular",
        link: "https://angular.dev/",
        simpleIconName: "angular",
        backgroundColor: "#ea2848",
    },
    {
        name: "HTML5",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        simpleIconName: "html5",
        backgroundColor: "#E34F26",
    },
    {
        name: "CSS3",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        simpleIconName: "css3",
        backgroundColor: "#1572B6",
    },
    {
        name: "Sass",
        link: "https://sass-lang.com/",
        simpleIconName: "sass",
        backgroundColor: "#CC6699",
    },
    {
        name: "NodeJS",
        link: "https://nodejs.org/",
        simpleIconName: "nodedotjs",
        backgroundColor: "#5FA04E",
    },
    {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        simpleIconName: "javascript",
        backgroundColor: "#F7DF1E",
    },
    {
        name: "ExpressJS",
        link: "https://expressjs.com/",
        simpleIconName: "express",
        backgroundColor: "#000000",
    },
    {
        name: "ThreeJS",
        link: "https://threejs.org/",
        simpleIconName: "threedotjs",
        backgroundColor: "#000000",
    },
    {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
        simpleIconName: "tailwindcss",
        backgroundColor: "#06B6D4",
    },
    {
        name: "Bootstrap",
        link: "https://getbootstrap.com/",
        simpleIconName: "bootstrap",
        backgroundColor: "#7952B3",
    },
    {
        name: "PrimeNG",
        link: "https://primeng.org/",
        simpleIconName: "primeng",
        backgroundColor: "#DD0031",
    },
];

// Fullstack section
const FullstackSection: SkillSection = {
    sectionTitle: "Fullstack Development",
    imagePath: AssetPaths.FULL_STACK_DEVELOPMENT_SVG,
    skillLinks: [],//FullstackSkills,
    skillsList: [
        "Experienced in building front-end and back-end applications from start to finish, delivering robust and user-friendly solutions.",
        "Fostered an enhanced testing environment within the stream, leading numerous demos and guides to assist in upholding automation standards.",
        "Designed and built testing frameworks for both front-end and back-end automation."
    ]
}

// Could skills
const CloudSkills: ExternalSite[] = [
    {
        name: "GCP",
        link: "https://cloud.google.com/",
        simpleIconName: "googlecloud",
        backgroundColor: "#4285F4",
    },
    {
        name: "AWS",
        link: "https://aws.amazon.com/",
        simpleIconName: "amazonwebservices",
        backgroundColor: "#232F3E",
    },
    {
        name: "Firebase",
        link: "https://firebase.google.com/",
        simpleIconName: "firebase",
        backgroundColor: "#FFCA28",
    },
    {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
        simpleIconName: "postgresql",
        backgroundColor: "#336791",
    },
    {
        name: "MongoDB",
        link: "https://www.mongodb.com/",
        simpleIconName: "mongodb",
        backgroundColor: "#47A248",
    },
    {
        name: "Docker",
        link: "https://www.docker.com/",
        simpleIconName: "docker",
        backgroundColor: "#1488C6",
    },
    {
        name: "Render",
        link: "https://render.com/",
        simpleIconName: "render",
        backgroundColor: "#000000",
    },
    {
        name: "Heroku",
        link: "https://www.heroku.com/",
        simpleIconName: "heroku",
        backgroundColor: "#430098",
    },
];

// Could section
// const CloudSection: SkillSection = {
//     sectionTitle: "Cloud Infra-Architecture",
//     imagePath: AssetPaths.CLOUD_INFRASTRUCTURE_SVG,
//     skillLinks: CloudSkills,
//     skillsList: [
//         "Experience working on multiple cloud platforms including GCP, AWS, FireBase, and Render",
//         "Hosting and maintaining websites on FireBase hosting and GoDaddy along with integration of databases",
//         "Setting up email triggers and Googlesheet integration for streamline client inquiry",
//     ]
// }

// Design skills
const DesignSkills: ExternalSite[] = [
    {
        name: "Adobe XD",
        link: "https://adobexdplatform.com/",
        simpleIconName: "adobexd",
        backgroundColor: "#FF2BC2",
    },
    {
        name: "Figma",
        link: "https://figma.com/",
        simpleIconName: "figma",
        backgroundColor: "#F24E1E",
    },
    {
        name: "Adobe Illustrator",
        link: "https://www.adobe.com/au/products/illustrator.html/",
        simpleIconName: "adobeillustrator",
        backgroundColor: "#FF7C00",
    },
    {
        name: "Adobe Photoshop",
        link: "https://www.adobe.com/products/photoshop.html/",
        simpleIconName: "adobephotoshop",
        backgroundColor: "#001e36",
    },
];

// Design section
const TechnologyandToolsSection: SkillSection = {
    sectionTitle: "Technologies and Tools",
    imagePath: AssetPaths.UI_UX_DESIGN_SVG,
    skillLinks: DesignSkills,
    skillsList: [
        "Designing highly attractive and responsive user interface for web applications",
        "Customizing logo designs, creating visiting cards and virtual cards from scratch",
        "Creating the flow of application functionalities to optimize user experience",
    ]
}

// Design skills
const DigitalSolutionSkills: ExternalSite[] = [

];

// Design section
const DigitalSolutionSection: SkillSection = {
    sectionTitle: "Digital Solutions & Consultancy",
    imagePath: AssetPaths.DIGITAL_SOLUTIONS_SVG,
    skillLinks: DigitalSolutionSkills,
    skillsList: [
        "Streamlining business operations with tools like Jira, offering automated workflows, and data-driven insights.",
        "Centralizing business data within secure, interconnected platforms to facilitate informed decision-making",
        "Helping local businesses enable real-time communication and task coordination through MS Teams and Outlook",
    ]
}


// Job experience
const JobExperience: ExperienceSection = {
    experienceSectionTitle: "Work Experience",
    experiences: [
        {
            orgLink: "https://acquireconveyancing.com.au/",
            orgLogoPath: AssetPaths.WORK_BARNESANDNOBLE_LOGO,
            orgName: "Barnes & Noble",
            positions: [
                {
                    positionName: "Lead Automation Engineer",
                    duration: "Sep 2017 – Mar 2018",
                    location: "Manhattan, NY",
                    locationType: "On-Site",
                    jobType: "Full-time",
                    workPoints: [
                        "Led an automation team to develop end-to-end UI regression tests for Barnes & Noble using Selenium and Cucumber.",
                        "Helped the team replicate production performance issues in lower environments.",
                        "Worked on creating Test estimations for the automation projects"
                    ]
                }
            ]
        },
        {
            orgLink: "", //"https://www.asite.com/",
            orgLogoPath: AssetPaths.WORK_MEIJER_LOGO,
            orgName: "Meijer",
            positions: [
                {
                    positionName: "Lead Automation Engineer",
                    duration: "June 2016 – Sep 2017",
                    location: "Grand Rapids, MI",
                    locationType: "On-Site",
                    jobType: "Full-time",
                    workPoints: [
                        "Led the development of an automation framework using Coded UI for point-of-sale systems, reducing testing time by 60% (from 5 days to 2 days) and improving efficiency.",
                        "Assisted multiple teams in setting up their initial automated tests for WPF applications",
                        // "Debugged and unit-tested code using Karma & Jasmine, achieving an impressive 96% coverage. 🐞✅",
                    ]
                }
            ]
        },
        {
            orgLink: "", //"https://www.asite.com/",
            orgLogoPath: AssetPaths.WORK_TARGET_LOGO,
            orgName: "Meijer",
            positions: [
                {
                    positionName: "QA Automation Lead & Tester",
                    duration: "Jan 2015 – June 2016",
                    location: "Minneapolis, MN",
                    locationType: "On-Site",
                    jobType: "Full-time",
                    workPoints: [
                        "Involved in creating end-to-end regression tests using HP UFT & Selenium.",
                        "Led teams in offshore onsite model in delivering regression automation for multiple projects.",
                        // "Debugged and unit-tested code using Karma & Jasmine, achieving an impressive 96% coverage. 🐞✅",
                    ]
                }
            ]
        }
    ]
}

// Freenacing Experience
// const FreelancingExperience: ExperienceSection = {
//     experienceSectionTitle: "Freelancing",
//     experiences: [
//         {
//             orgLink: "https://kiwifinance.com.au/",
//             orgLogoPath: AssetPaths.WORK_KIWI_LOGO,
//             orgName: "Kiwi Finance",
//             positions: [
//                 {
//                     positionName: "Professional Freelancer",
//                     duration: "2025",
//                     location: "Perth, WA",
//                     locationType: "Remote",
//                     jobType: "Contract",
//                     workPoints: [
//                         "Designed and developed an SEO-friendly website with financial calculators, and a custom contact form tailored to Astute Financial's requirements. 🌐📊",
//                         "Streamlined data collection and client inquiries by integrating the contact form with Google Sheets and Gmail. 📋",
//                     ]
//                 }
//             ]
//         },
//         {
//             orgLink: "https://rasfinance.com.au/",
//             orgLogoPath: AssetPaths.WORK_RAS_LOGO,
//             orgName: "RAS Finance",
//             positions: [
//                 {
//                     positionName: "Professional Freelancer",
//                     duration: "2024",
//                     location: "Adelaide, SA",
//                     locationType: "Hybrid",
//                     jobType: "Contract",
//                     workPoints: [
//                         "Built a dynamic website featuring financial calculators, a CMS for articles, and a sleek contact form. 📊📝",
//                         "Streamlined client inquiries by integrating the contact form with Google Sheets and Gmail. 📧📋✨",
//                     ]
//                 }
//             ]
//         },
//         {
//             orgLink: "https://acquireconveyancing.com.au/",
//             orgLogoPath: AssetPaths.WORK_BARNESANDNOBLE_LOGO,
//             orgName: "Acquire Conveyancing",
//             positions: [
//                 {
//                     positionName: "Professional Freelancer",
//                     duration: "2023",
//                     location: "Adelaide, SA",
//                     locationType: "Remote",
//                     jobType: "Contract",
//                     workPoints: [
//                         "Crafted a professional logo, business cards, and responsive website using Illustrator. 🎨💼",
//                         "Set up a custom domain email and Office 365 with SharePoint for seamless operations. 📧🔗",
//                         "Developed and hosted an SEO-friendly website with a contact form to boost online presence. 🌐📈",
//                     ]
//                 }
//             ]
//         },
//     ]
// }

// Internships Experience
const InternshipExperience: ExperienceSection = {
    experienceSectionTitle: "Internships",
    experiences: [
        {
            orgLink: "https://asite.com/",
            orgLogoPath: AssetPaths.WORK_ASITE_LOGO,
            orgName: "Asite Solution",
            positions: [
                {
                    positionName: "UI Developer Intern",
                    duration: "Feb 2023 - May 2023",
                    location: "Ahmedabad, India",
                    locationType: "Hybrid",
                    jobType: "Full-time",
                    workPoints: [
                        "Led an 11-member team to design and implement the frontend architecture of an LMS using Angular, following the latest methodologies and best practices. 🚀💻",
                        "Gained expertise in Angular, jQuery, SCSS, and DSA through personalized training and hands-on assignments during the internship. 🌟📊✨",
                    ]
                },
                {
                    positionName: "Software Engineering Intern",
                    duration: "Jun 2022 — Jul 2022",
                    location: "Ahmedabad, India",
                    locationType: "On-Site",
                    jobType: "Full-time",
                    workPoints: [
                        "Developed an innovative 3D IFC file viewer using Three.js, applying DSA concepts to create a tree-like structure for exploring model internals. 🌐🌳📐",
                        "Deployed the Node.js backend on Heroku and hosted the frontend on GitHub Pages for seamless accessibility. 🚀💻✨",
                    ]
                }
            ]
        },
        {
            orgLink: "https://workxmate.com/",
            orgLogoPath: AssetPaths.WORK_WORKXMATE_LOGO,
            orgName: "WorkXMate Technologies Pvt. Ltd.",
            positions: [
                {
                    positionName: "Angular Developer Internship",
                    duration: "Feb 2022 — Mar 2022",
                    location: "Noida, India",
                    locationType: "Remote",
                    jobType: "Part-time",
                    workPoints: [
                        "Designed and implemented an optimized, cross-browser-compatible Attendance Management Module. 🌐✔️",
                        "Built a RESTful Node.js server integrated with Oracle DB for seamless code migration. 🚀📊",
                        "Developed intuitive web forms with robust validation and error handling for a smooth user experience. 🖋️⚙️✨",
                    ]
                }
            ]
        },
    ]
}

// Community Involvement
const CommunityInvolvement: ExperienceSection = {
    experienceSectionTitle: "Community Involvement",
    experiences: [
        {
            orgLink: "https://adventofcode.com/",
            orgLogoPath: AssetPaths.WORK_ADVENT_OF_CODE_LOGO,
            orgName: "Advent of Code",
            positions: [
                {
                    positionName: "Problem Solver",
                    duration: "Dec 2024",
                    workPoints: [
                        "Completed all Advent of Code 2024 problems within a personal deadline of 1 day each, showcasing strong DSA and problem-solving skills. 📅🎯",
                        "Leveraged Python libraries like heapq and networkx to solve complex challenges efficiently and effectively. 🧩",
                    ]
                }
            ]
        },
    ]
}

// Degrees
const BachelorsDegree: EducationSection = {
    degreeName: "Bachelor of Engineering",
    majorName: "Electronics & Communications Engineering",
    duration: "Apr 2007 - Apr 2011",
    universityName: "Acharya Nagarjuna University",
    campusName: "ANU",
    logoImagePath: AssetPaths.EDUCATION_ANU_LOGO,
    // gpa: "6.9 / 7.0",
    websiteLink: "https://www.nagarjunauniversity.ac.in",
    studyPoints: [
        "Studied foundational subjects like Data Structures, Database Management Systems, and Operating Systems, building a strong base in computer science. 🧠💻",
        "Explored Object-Oriented Programming, Software Engineering, Computer Networks, and Microprocessor & Interfacing, bridging software development with hardware understanding. ⚙️"
    ]
}

export const AppConfig = {
    loaderSplashAnimation: false,        // enable or disable splash screen at the initialization of website
    logoName: "Bhargava Julaganti",         // Signature font logo name in header
    name: "Bhargava Julaganti",            // your name
    emailId: "bhargavajulaganti@rocketmortgage.com",  // your email id

    // Google Form Contact Link
    // googleFormContactLink: "https://docs.google.com/forms/d/e/1FAIpQLSfMOsQhl_Lci5s_qrYN-LEWlJ3NoBag-Uyf17IGktExA5KDpw/viewform?usp=header",

    // Home page
    professionalTitle: "Development | Automated Testing",
    professionalSummary: "Senior Quality Engineer with 7 years of experience in the Servicing Platform, specializing in technology implementation to enhance engineering and quality process. Started as a Quality Engineer (FOC), identifying gaps and automating processes for efficiency, leading to roles as Software Engineer and Senior Quality Engineer, driving innovation in engineering and testing spaces.",
    githubProfile: "https://git.rockfin.com/bjulaganti",              // Your github profile link
    portfolioRepository: "",        // Your portfolio repository link
    socialMedia: SocialMediaLinks,      // use from above
    aboutMe: [                          // all the sections you want to show under "What I do?". 
        FullstackSection,
        // TechnologyandToolsSection,
        // CloudSection,
        // DesignSection,
        // DigitalSolutionSection,
    ],

    // Projects page
    projectsPageTitle: "Projects & Freelancing",    // Title of projects page
    projectsPageDescription: "My projects leverage a diverse range of cutting-edge technology tools. I specialize in building data science solutions and seamlessly deploying them as web applications using robust cloud infrastructure.",
    projectSections: [                  // Define and add a custom section if needed
        // FreelancingProjects,
        // PersonalProjects,
    ],

    // Experience page
    experiencePageTitle: "Work",
    experiencePageDescription: "💼 A journey of leading innovations and challenges.",
    experienceSections: [               // Define and add a custom section if needed
        JobExperience,
        // InternshipExperience,
        // FreelancingExperience,
        // CommunityInvolvement,
    ],

    // Education page
    educationPageTitle: "Degrees and Qualifications",
    educationPageDescription: "🎓 A Journey of Continuous Learning: Building Skills, Solving Problems, and Shaping the Future 🌟",
    educationSections: [
        // MastersDegree,
        BachelorsDegree,
    ],

}
