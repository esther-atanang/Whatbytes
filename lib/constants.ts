import { z } from 'zod';

/**FIRST SECTION */
export const HEADER_SKILL_NAME = "Hyper Text Markup Language";
export const COURSE_DURATION = "Questions: 08 | Duration: 15 mins | Submitted on 27th Feburary 2025 ";

export const SKILLS_SECTION = [
 {
    skillName:"HTML Tools, Forms, History",
    score: 80,
    textColor:"text-blue-500",
    backgroundColor:"bg-blue-300/10",
    indicatorColor:"bg-blue-400"
 },
 {
    skillName:"Tags & References in HTML",
    score: 60,
    textColor:"text-orange-500",
    backgroundColor:"bg-orange-300/10",
    indicatorColor:"bg-orange-400"
 },
 {
    skillName:"Table & References in HTML",
    score: 40,
    textColor:"text-red-500",
    backgroundColor:"bg-red-300/10",
    indicatorColor:"bg-red-400"
 },
 {
    skillName:"Tables & CSS Basics",
    score: 96,
    textColor:"text-green-500",
    backgroundColor:"bg-green-300/10",
    indicatorColor:"bg-green-400"
 },
];

export const FORMSCHEMA = z.object({
    rank: z.number({
        coerce: true,
        required_error: "Please pass a rank!",
        message: "It's required and it must be a number!"
    }),
    percentile: z.number({
        coerce: true,
        required_error: "Please pass a percentile!",
        message: "It's required and it must be a number!",
    }).lte(100, { message: "You are going over board now!" }),
    score: z.number({
        coerce: true,
        required_error: "Please pass a score!",
        message: "It's required and it must be a number!",
    }).lte(
        15,
        { message: "You can't score pass 15!" }
    )
})

export const DATA = [
    {
        developers: 2,
        grade: 0,
    },
    {
        developers: 1,
        grade: 25,
    },
    {
        developers: 2,
        grade: 35,
    },
    {
        developers: 5,
        grade: 50,
    },
    {
        developers: 3,
        grade: 75,
    },
    {
        developers: 2,
        grade: 90,
    },
    {
        developers: 1,
        grade: 100,
    },

];

export const INTERNSHIP_ROLE="Frontend Developer Intern (Remote)";
export const INTERN_PAY = "₹10,000 – ₹20,000 • No equity";

export const INTERN_ROLE_TITLE = "Role and Responsibilities:";

export const INTERN_ROLE_DESC = "s a Front End Developer Intern, you will:"

export const INTERN_ROLES = [
    "Collaborate with our development team to create user-friendly web applications",
    "Implement designs and features using React and Tailwind CSS.",
    "Ensure the technical feasibility of UI/UX designs.",
    "Optimise applications for maximum speed and scalability.",
    "articipate in code reviews and contribute to a high standard of code quality.",
    "Troubleshoot and debug issues to improve overall performance.",
    "Stay up-to-date with the latest industry trends and technologies."
]

export const COMPANY_OFFER_TITLE ="What we offer:";

export const COMPANY_OFFERS = [
    "Hands-on experience with real-world projects.",
    "Mentorship and guidance from experienced developers.",
    "Flexible work hours and remote work environment",
    "Opportunity to grow and potentially transition to a full-time role.",
];
