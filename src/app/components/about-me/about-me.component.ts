import { Component } from '@angular/core';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { CommonModule } from '@angular/common';
import { AppConfig } from '../../../enums/app-data';

@Component({
    selector: 'app-about-me',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
    public assetPaths = AssetPaths;
    public appConfig = AppConfig;
    public technologiesAndTools = [
        {
          name: 'Dotnet',
          imagePath: 'assets/TechnologyAndTools/skill-icons--dotnet.svg'
        },
        {
            name: 'Angular',
            imagePath: 'assets/TechnologyAndTools/skill-icons--angular-light.svg'
     },
        {
          name: 'AWS',
          imagePath: 'assets/TechnologyAndTools/skill-icons--aws-light.svg'
        },
        {
            name: 'Kubernetes',
            imagePath: 'assets/TechnologyAndTools/skill-icons--kubernetes.svg'
        },
        {
            name: 'Docker',
            imagePath: 'assets/TechnologyAndTools/skill-icons--docker.svg'
        },
        {
            name: 'Postman',
            imagePath: 'assets/TechnologyAndTools/skill-icons--postman.svg'
        },
        {
            name: 'Selenium',
            imagePath: 'assets/TechnologyAndTools/skill-icons--selenium.svg'
        },
        {
            name: 'Rider',
            imagePath: 'assets/TechnologyAndTools/skill-icons--rider-light.svg'
        },
        {
            name: 'Github',
            imagePath: 'assets/TechnologyAndTools/skill-icons--github-light.svg'
        },
        {
            name: 'Python',
            imagePath: 'assets/TechnologyAndTools/skill-icons--python-light.svg'
        },
        {
            name: 'Playwright',
            imagePath: 'assets/TechnologyAndTools/skill-icons--playwright.svg'
        },
        {
            name: 'CircleCi',
            imagePath: 'assets/TechnologyAndTools/circleci-icon.svg'
        },
        {
            name: 'Mysql',
            imagePath: 'assets/TechnologyAndTools/skill-icons--mysql-light.svg'
        }
        // Add more technologies and tools here
      ];

      public feedbacks = [
        {
            "testimonial": "Bhargava consistently demonstrates his dedication to delivering high-quality results and ensuring client satisfaction. His involvement in the Upgrade Assistant project, where he tackled POC for AWS Bedrock integration and client testing, reflects his commitment to addressing team and client needs.",
            "teamMember" : "Abhishek Singh Panesar",
            "role": "Staff Software Engineer"
        },
        {
            "testimonial": "Bhargava played a crucial role in building and setting up an E2E framework for Rocket Mortgage Servicing (RMS) using Playwright. He took the initiative to gather necessary stakeholders, split up the work, and demoed the setup to engineers. This demonstrates his ability to anticipate needs and work hard to ensure an incredible experience.",
            "teamMember" : "Mario Esho",
            "role": "Senior Software Engineer 1"
        },
        {
            "testimonial": "Bhargava's development of the centralized test data platform, onestop has been widely recognized by various teams for its efficiency and reliability.His contributions to tools like onestop, WireMock, and Earl have been instrumental in streamlining our testing efforts and improving overall efficiency",
            "teamMember" : "Phaneendra Bommareddy",
            "role": "Senior Software Engineer 1"
        }
        ,
        {
            "testimonial": "As a software engineer, he contributed to the RMS Consent and the Experience API. He also worked on the initial Documents API decoupling and brought a lot of that knowledge to our team when we worked on the analysis and helped to create and update infrastructure. He has both engineering and quality knowledge and has assisted on both ends wherever he is needed.",
            "teamMember" : "Gerrae Jackson (Cotton)",
            "role" : "Team Leader"
        },
        {
            "testimonial": "Bhargava stands out with his positive attitude, patience, and profound understanding of Quality Engineering and RMS. He made significant contributions to the Consent API integration, Experience Engine 1.0, and automated .NET package publishing. While honing his Software Engineering skills, he continued assisting in Quality Engineering tasks. His exceptional skills led to his selection as the coordinator for COVID-19 related testing tasks. He has proven to be reliable, demonstrating a high level of dedication to completing tasks excellently.",
            "teamMember" : "Greg Mushaka",
            "role" : "Senior Software Engineer 1"
        },
        {
            "testimonial": "Bhargava jumped into a six month intensive AI certification program this year through the University of Texas. There was a substantial class workload and required learning about data science and foundations of AI. It is apparent that Bhargava has learned a lot through this program and I'm impressed with his dedication to himself on this. Additionally, Bhargava challenged himself to implement an AI driven feature and implemented a solution into Upgrade Assistant that enables prompt engineering to modify PRs using Claude 3.5.",
            "teamMember": "Doug Kilbourn",
            "role": "Director, Enigneering"
        }
        // "Bhargava consistently demonstrates his dedication to delivering high-quality results and ensuring client satisfaction. His involvement in the Upgrade Assistant project, where he tackled POC for AWS Bedrock integration and client testing, reflects his commitment to addressing team and client needs.",
        // "Bhargava played a crucial role in building and setting up an E2E framework for Rocket Mortgage Servicing (RMS) using Playwright. He took the initiative to gather necessary stakeholders, split up the work, and demoed the setup to engineers. This demonstrates his ability to anticipate needs and work hard to ensure an incredible experience.",
        // "Bhargava's development of the centralized test data platform, onestop has been widely recognized by various teams for its efficiency and reliability.His contributions to tools like onestop, WireMock, and Earl have been instrumental in streamlining our testing efforts and improving overall efficiency",
        // "As a software engineer, he contributed to the RMS Consent and the Experience API. He also worked on the initial Documents API decoupling and brought a lot of that knowledge to our team when we worked on the analysis and helped to create and update infrastructure. He has both engineering and quality knowledge and has assisted on both ends wherever he is needed.",
        // "Bhargava stands out with his positive attitude, patience, and profound understanding of Quality Engineering and RMS. He made significant contributions to the Consent API integration, Experience Engine 1.0, and automated .NET package publishing. While honing his Software Engineering skills, he continued assisting in Quality Engineering tasks. His exceptional skills led to his selection as the coordinator for COVID-19 related testing tasks. He has proven to be reliable, demonstrating a high level of dedication to completing tasks excellently."
    ];
}
