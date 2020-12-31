
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Nhan Tran Dev 96",
  title: "Hi all, I'm Nhan",
  subTitle: emoji("A passionate Web Developer 🚀 I had over 5 years of professional experience in website design, website application, landing page, e-commerce, management systems and more with skills: PHP, Laravel, MySQL, HTML5, CSS3, Bootstrap, Tailwind, Javascript, jQuery, VueJs, Github, PSD to HTML. If you don't know how to start to build your website, please contact me via inbox to get started."),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/nhantrandev96",
  linkedin: "https://www.linkedin.com/in/trần-nhân-b5559b18a",
  gmail: "tranvannhan100896@gmail.com",
  gitlab: "https://gitlab.com/nhantrandev96",
  // facebook: "https://www.facebook.com/tranvannhan100896",
  medium: "https://medium.com/@nhnvntrn",
  stackoverflow: "https://stackoverflow.com/users/10371414/tran-nhan"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "BELOW IS A LIST OF THE TECHNOLOGIES THAT I HAVE LEARNED, RESEARCHED AND REGULARLY APPLIED IN REAL PROJECTS",
  skills: [
    emoji("⚡ Expert in website design and development with years of experience."),
    emoji("⚡ High quality, affordable and work until satisfaction."),
    emoji("⚡ Finish the product in the fastest time."),
    emoji("⚡ 100% customer satisfaction."),
    emoji("⚡ Best in price range."),
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "VueJS",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "NodeJs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "Shopify",
      fontAwesomeClassname: "fab fa-shopify"
    },
    {
      skillName: "Wix",
      fontAwesomeClassname: "fab fa-wix"
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "CentOS",
      fontAwesomeClassname: "fab fa-centos"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend/CMS(PHP Laravel, NodeJs)",  //Insert stack or technology you have experience in
      progressPercentage: "100%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design (HTML, CSS, JavaScript, Bootstrap, Tailwind, jQuery, VueJS)",
      progressPercentage: "100%"
    },
    {
      Stack: "Wordpress",
      progressPercentage: "90%"
    },
    {
      Stack: "Shopify Platform",
      progressPercentage: "90%"
    },
    {
      Stack: "Wix Platform",
      progressPercentage: "90%"
    },
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Developer",  
      company: "3Forcom",
      date: "Aug 2016 - Dec 2018",
      desc: "3FORCOM is an international IT partner. We can start from analyzing your actual business requirements for a web solution or a multi-platforms solution, continue with a great web design, web development, third-party integration and mobile development. Since 2008, we have provided effective design and development solutions for our corporate and startup clients.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Fullstack Developer",   
      company: "Digivision",
      date: "Jan 2019 - Feb 2020",
      desc: "Digivision is an enterprise producing products related to application software and games for mobile 2D in Hanoi. (Among the top 30 leading game development companies in Vietnam for many years)."
    },
    {
      role: "Fullstack Developer (Shopify Platform)",  
      company: "Succulents Box",
      companylogo: require("./assets/images/succulentsbox.png"),
      date: "Mar 2020 – Present",
      desc: "Succulents Box currently offers more than 200 varieties of succulents (both popular and rare ones) along with 5 monthly subscription boxes. Sales on the Shopify platform."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      name: "SSI",
      image: require("./assets/images/ssi.png"),
      link: "https://www.ssi.com.vn/en"
    },
    {
      name: "Easycredit",
      image: require("./assets/images/easycredit.png"),
      link: "https://easycredit.vn/"
    },
    {
      name: "Healthy & Happy",
      image: require("./assets/images/hnh.png"),
      link: "https://www.hnhmedi.com/en/"
    },
    {
      name: "SucculentsBox",
      image: require("./assets/images/succulentsbox.jpg"),
      link: "https://succulentsbox.com/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+84-988140885",
  email_address: "tranvannhan100896@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
