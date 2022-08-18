import emoji from "react-easy-emoji";

export const greetings = {
	name: "Joseph Mena Lopez",
	title: "Hi all, I'm Joseph",
	description:
		"I'm passionate Full Stack developer having an experience of web applications with Python, React.js, Next.js, Node.js. As well as standalone applications with Java, C, and C++. I am currently working on refining my skills and knowledge of cloud development through AWS as well as Google Cloud Platform. ",
	resumeLink:
		"https://drive.google.com/file/d/1KxXx6GdJf5AiE1wvg4kZrVqEoRRgM-2g/view?usp=sharing",
};

export const openSource = {
	githubUserName: "Jmena413",
};

export const contact = {};

export const socialLinks = {
	github: "https://github.com/Jmena413",
	linkedin: "https://www.linkedin.com/in/joseph-mena-lopez-2837b31a3/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"Full stack developer who wants to learn new technologies and improve my skills.",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),

				emoji("⚡ Building Standalone Applications in Java, C, C++, and Python"),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Vuejs",
					fontAwesomeClassname: "logos:vue",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Nodejs",
					fontAwesomeClassname: "logos:nodejs",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Java",
					fontAwesomeClassname: "logos:java",
				},
				{
					skillName: "C",
					fontAwesomeClassname: "logos:c",
				},
				{
					skillName: "Cplusplus",
					fontAwesomeClassname: "logos:c-plusplus",
				},
				{
					skillName: "R",
					fontAwesomeClassname: "logos:r-lang",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "60", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
	{
		Stack: "Cloud Development",
		progressPercentage: "50",
	},
];

export const educationInfo = [
	{
		schoolName: "Macalester College",
		subHeader: "Bachelor of Arts in Computer Science, Minor in Data Science - Bioinformatics",
		duration: "August 2019 - May 2023",
		grade: "GPA: 3.72",
		descBullets: [
			"Relevant Coursework: Object Oriented Programming, Data Structures, Algorithm Design and Analysis, Statistical Machine Learning, Computational Biology, Software Development and Design, Computer Sytems and Organization, Parallel and Distributed Programming, Introduction to Artificial Intelligence"
		],
	},
];

export const experience = [
	{
		role: "Software Engineer Program Intern",
		company: "JPMorgan Chase & Co.",
		companylogo: "/img/icons/common/images.jpg",
		date: "Jun 2022 – Aug 2022",
		desc: "I worked as a frontend developer on an internal JPMorgan Chase & Co. project. I was a part of an Agile development team following the Scrum framework.  This was done through a microservice architecture and a React.js frontend. I was responsible for creating various web pages and unit tests with Jest as well.",
	},
];

export const projects = [
	{
		name: "Typing-based Multiplayer BattleShip",
		desc: "An online multiplayer game where players can play against each other in a typing-based battle ship game without any turns created with a Vue.js frontend and a Node.js backend. This web application also allows for real time spectators to watch the game. The game is hosted through heroku.",
		github: "https://github.com/Spatel1217/MovingBattleship",
		link: "https://battleship225.herokuapp.com/",
	},
	{
		name: "Simple Cipher and Decipher Program",
		desc: "A simple program that encrypts and decrypts text using a few common ciphers. The program is written in Java.",
		github: "https://github.com/Jmena413/COMP128-Cipher-Final-Project",
	},
	{
		name: "Simple Hangman Game",
		desc: "Hangman game where the user has to guess the word. The game was created in Java and includes a window that shows the progress of the game. The words are guessed through the console.",
		github: "https://github.com/lizjac/COMP127_Project",
	},
	{
		name: "DualSPHysics - Code Analysis of CPU and GPU Parallelization Implementations",
		desc: "This project was an analysis of the performance of different implementations of the DualSPHysics library. The CPU implementaiong is implemented in C++, and the GPU implementation is implemented in CUDA. This analysis was done to show how GPUs can be leveraged towards faster computation especially for large simulations.",
		github: "https://github.com/mac-comp445-s22/project-team1-dino-joseph",
	},
];

// export const feedbacks = [
// 	{
// 		name: "John Smith",
// 		feedback:
// 			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
// 	},
// 	{
// 		name: "John Smith",
// 		feedback:
// 			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
// 	},
// ];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Joseph Mena Lopez",
	description:
		"A passionate Full Stack Developer.",
	author: "Joseph Mena Lopez",
	image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
	url: "https://developer-portfolio-1hanzla100.vercel.app",
	keywords: [
		"Joseph",
		"Joseph Mena Lopez",
		"@Jmena413",
		"Portfolio",
		"Joseph Portfolio ",
		"Joseph Mena Lopez Portfolio",
	],
}