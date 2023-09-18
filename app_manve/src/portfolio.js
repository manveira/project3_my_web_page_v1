/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Jesus Veira",
  title: "Hi all, I'm Jesus",
  subTitle: emoji(
    "A passionate Cloud DevOps Engineer having an experience of building infrastructure and cloud environments with Docker / Kubernetes / ci-cd / Aws /"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1rKg11G7ZJa79pz6dedliPfOqzVNuAX9M/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/manveira",
  linkedin: "https://www.linkedin.com/in/j-veira",
  gmail: "manveira159@gmail.com",
  medium: "https://cristiancasis.com/blog",

  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DEVOPS WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Code-based infrastructure development on public and hybrid cloud platforms"
    ),
    emoji("⚡ Organization of teams and large projects using agile / SCRUM methodologies"),
    emoji(
      "⚡ Development and integration of highly scalable projects using kubernetes together with continuous integration"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Corporación Universitaria Autónoma de Nariño",
      logo: require("./assets/images/riojaLogo.png"),
      subHeader: "ELECTRONIC ENGINEER",
      duration: "January 2013 - June 2020"
    },
    {
      schoolName: "Platzi",
      logo: require("./assets/images/riojaLogo.png"),
      subHeader: "DEVOPS AND SERVER ADMINISTRATION",
      duration: "February 2022 - August 2022"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "DevOps",
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Teaching / Couching",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front Integral Technical Support Engineer",
      company: "Telemark",
      companylogo: require("./assets/images/ackstormLogo.png"),
      date: "Jun 2021 – Nov 2021",
      descBullets: [
        "Linux Server Administration from command line (CLI) and remote connection by SH or Putty to configuration and management.",
        "Creation and management about Bash scripts to automation of tasks and executions.",
        "Generate Incidents, massive failures, reports, escalations and solution of support cases."
      ]
    },
    {
      role: "System Administrator",
      company: "Cafeto Software",
      companylogo: require("./assets/images/ebcontLogo.png"),
      date: "Nov 2021 – Sept 2022",
      descBullets: [
          "Cloud computing Amazon Web Services (AWS) and Google Cloud Platform (GCP)",
          "Version control such as GIT, GitHub and GitLab",
          "Containers using Docker",
          "Orchestrators such as Kubernetes",
          "CI/CD Automation Servers such as Jenkins and Circle CI",
          "Infrastructure as a code using Terraform"
        ]  
    },
    {
      role: "DevOps Engineer",
      company: "Lulobank",
      companylogo: require("./assets/images/viesureLogo.png"),
      date: "Sept 2022 – Present",
      descBullets: [
          "AWS", 
          "Terraform",
          "Circle CI",
          "GitHub",
          "Kubernetes",
          "Jfrog",
          "Docker",
          "SonarQube",
          "Jira"
      ]  
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/viesureLogo.png"),
      projectName: "Viesure",
      projectDesc: "Deploy different services on Kubernetes to have a highly scalable platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://viesure.io/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/zalandoLogo.jpg"),
      projectName: "Zalando",
      projectDesc: "Implement an API that communicates with various Zalando services all deployed in Docker",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/zalando"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Solutions Architect",
      subtitle:
        "AWS solutions architect course and certification in 2021",
      image: require("./assets/images/awsLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1rKg11G7ZJa79pz6dedliPfOqzVNuAX9M/view?usp=sharing"
        },
        
        {
          name: "Code in Blog",
          url:
            "https://cristiancasis.com/certificate-en-aws-facilmente-explicado/"
        }
      ]
    },
    {
      title: "AWS Cloud Practictioner",
      subtitle:
        "AWS Cloud Practictioner course and certification",
      image: require("./assets/images/awsCloud.png"),
      footerLink: [
        {
          name: "View AWS Cloud Practictioner certification",
          url:
            "https://drive.google.com/file/d/1ykR7S6GE4ptHBL1yKd4xBMcr_9OT7AY9/view?usp=sharing"
        }
      ]
    },

    {
      title: "SysOps / Jenkins / Linux Certification",
      subtitle: "Other courses and certifications",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {name: "LPI000383635 - Verification: eepdr2j3s3", url: "https://cs.lpi.org/caf/Xamman/certification"},
        {
          name: "Linux certification",
          url: "https://cs.lpi.org/caf/Xamman/certification"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://cristiancasis.com/crypto-exchange-deployment-con-opendax/",
      title: "Deploy a crypto exchange platform open-source",
      description:
        "Open-Source Cloud-Native Digital Asset & Cryptocurrency Exchange Platform"
    },
    {
      url: "https://cristiancasis.com/vpn-con-wireguard-la-vpn-del-futuro/",
      title: "VPN with Wireguard",
      description:
        "WireGuard is a security-focused virtual private network (VPN) known for its simplicity and ease of use."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "SCHEDULE A DATE",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Book a time",
      subtitle: "Let's speak about the project",
      slides_url: "https://cristiancasis.com/contrataciones/",
      event_url: "https://cristiancasis.com/reservar-consultoria/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://www.ivoox.com/player_ej_66701015_4_1.html?c1=ff6600&fromPopup=true"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+43 6601557847",
  email_address: "info@cristiancasis.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};
 


export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
