import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { AssetPaths } from "../../../enums/asset-paths.enum";
import { AppConfig } from "../../../enums/app-data";
import { ProjectCardComponent } from "../../components/project-card/project-card.component";
import { AppRoutes } from "../../../enums/routes-data.enum";
import { GlobalStatsService } from "../../services/global-stats/global-stats.service";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
  public assetPaths = AssetPaths;
  public appConfig = AppConfig;
  public myProjects = [
    {
      title: "Upgrade Assistant",
      coverImagePath: AssetPaths.PROJECT_UPGRADE_ASSISTANT,
      liveLink: "https://upgrade-assistant.servicing.foc.zone/home",
      githubLink: "https://git.rockfin.com/servicing-sre/UpgradeAssistant",
      description:
        "🧱 AI-driven platform designed to streamline and simplify application maintenance tasks, enabling teams to focus on business innovation rather than routine maintenance work.",
      features: [
        "Integrated AWS bedrock into the application.",
        "Build an integrated code comparison on the UI, so user can modify/accept the changes after the prompt engineering is applied on code base",
        "Added a chat component in the UI and integrated with our slack support channel.",
      ],
      techStack: ["Angular", "Dotnet core", "AwsBedRock"],
      year: "2024 - Present",
    },
    {
      title: "Servicing Wiremock",
      coverImagePath: AssetPaths.PROJECT_SERVICING_WIREMOCK,
      liveLink: "https://github.com/RocketMortgage/212388-servicing-wiremock",
      githubLink: "https://github.com/RocketMortgage/212388-servicing-wiremock",
      description:
        "🧱 A .NET Core API, using WireMock built in Kubernetes, to easily virtualize dependent services in lower environments, allowing engineers to concentrate more on core engineering tasks and less time on loan conditioning.",
      features: [
        "Architected the complete project infrastructure and developed an initial proof-of-concept.",
        "Developed a feature that allows users to effortlessly proxy and record stubs.",
        "Created an SDK that allows users to seamlessly switch between real and virtual services based on headers, minimizing code changes when the real application interacts with the virtual service for testing.",
        "Incorporated S3 in the project for bulk stub uploads. This facilitates real-time stub display via Wiremock, negating application redeployment for new stubs.",
      ],
      techStack: ["Dotnet core", "Kubernetes", "Istio"],
      year: "2024 - Present",
    },
    {
      title: "Playwright Automation Framework",
      coverImagePath: AssetPaths.PROJECT_SERVICING_WIREMOCK,
      liveLink: "https://git.rockfin.com/myql-servicing/servicing-onestop-api",
      githubLink:
        "https://git.rockfin.com/myql-servicing/servicing-onestop-api",
      description:
        "🧱 Working collaboratively with an engineer, to create a front-end automation framework and set standards. This initiative helps us to reduce manual testing and also help us move features faster with more quality.",
      techStack: ["Dotnet core", "Kubernetes", "Istio"],
      features: [
        "Developed an initial proof of concept (POC) and presented it to the teams to demonstrate the benefits of automation.",
        "Integrated Lighthouse reports into the framework to evaluate page performance when new features are added.",
        "Integrated with ReportPortal to post test results, helping leaders track metrics and make informed decisions based on the results."
      ],
      year: "2024 - Present",
    },
    {
      title: "Earl Test Framework",
      coverImagePath: AssetPaths.PROJECT_SERVICING_WIREMOCK,
      liveLink: "https://git.rockfin.com/Servicing/earl-test-framework",
      githubLink:
        "https://git.rockfin.com/Servicing/earl-test-framework",
      description:
        "🧱 Working collaboratively with an engineer, developed a platform aimed at automating an array of industry-standard testing strategies within a cohesive framework, with eventual advancement towards a complete CI/CD pipeline in view. The project's goal is to leverage contemporary testing methods to expedite the testing process and minimize time spent on end-to-end tests.",
      techStack: ["Dotnet", "Docker", "Wiremock"],
      features: [
        "Integrated local stack to the test framework, so users can easily automate or test new features locally when developing new features.",
        "Integrated Kafka container into the testing framework for effortless Kafka message testing during new feature development.",
        "Integrated with onestop, so users can easily fetch test loans, for the automated test cases."
      ],
      year: "2023 - Present",
    },
    {
      title: "One Stop",
      coverImagePath: AssetPaths.PROJECT_SERVICING_WIREMOCK,
      liveLink: "https://git.rockfin.com/myql-servicing/servicing-onestop-api",
      githubLink:
        "https://git.rockfin.com/myql-servicing/servicing-onestop-api",
      description:
        "🧱 Created one stop application that streamlines the procedure of identifying servicings loans in lower environments, thereby reducing reliance on our technology-focused team members. As a result, our technologists are able to focus their specialist skills on significant engineering tasks. The application has gained widespread adoption not just within our specific domain, but across multiple streams for self-serving in the identification of servicing loans.",
      techStack: ["Dotnet core", "Kubernetes", "Istio"],
      features: [
        "Architected the complete project infrastructure and developed an initial proof-of-concept.",
        "Implemented feature for generating test loan logins at a button's click.",
        "Added a a feature allowing users to select diverse business conditions to efficiently locate the relevant test loans.",
        "Incorporated a bulk upload feature that enables businesses to import numerous loans into the 'OneStop' database simultaneously.",
      ],
      year: "2021 - Present",
    },
    {
      title: "Servicing Documents Api",
      coverImagePath: AssetPaths.PROJECT_SERVICING_WIREMOCK,
      liveLink: "https://git.rockfin.com/myql-servicing/203918-servicing-documents-api",
      githubLink:
        "https://git.rockfin.com/myql-servicing/203918-servicing-documents-api",
      description:
        "🧱 The project is part of a larger initiative to migrate servicing documents into a dedicated microservice from the RMS API, aiming to reduce bottlenecks and performance issues while transitioning to a more advanced microservice architecture.",
      techStack: ["Dotnet core"],
      features: [
        "Designed and developed endpoints in .NET Core to retrieve 1098 documents for a loan",
        "Created multiple stored procedures to retrieve documents for the documents API from an AWS MySQL database",
        "Served as the subject matter expert for the team, ensuring all functionality was migrated and working as expected",
      ],
      year: 2020,
    },
    {
      title: "RMS Consent",
      coverImagePath: AssetPaths.PROJECT_SERVICING_WIREMOCK,
      liveLink: "https://git.rockfin.com/myql-servicing/RMSConsent",
      githubLink:
        "https://git.rockfin.com/myql-servicing/RMSConsent",
      description:
        "🧱 A .NET library designed to retrieve client consent information, enabling the evaluation of which modules to display on the Servicing home page.",
      techStack: ["Dotnet core"],
      features: [
        "Integrated the Rocklib package into the library to log messages to Splunk.",
        "Configured CircleCI for the project, incorporating SonarQube scanning and automating the deployment of the package to NuGet. At that time, most of the processes were not automated, so I developed the entire initial proof-of-concept (POC) for the pipeline in servicing to validate and push the package to NuGet."
      ],
      year: 2020,
    },
    {
      title: "RMS Experience Api",
      coverImagePath: AssetPaths.PROJECT_SERVICING_WIREMOCK,
      liveLink: "https://git.rockfin.com/myql-servicing/RMSConsent",
      githubLink:
        "https://git.rockfin.com/myql-servicing/RMSConsent",
      description:
        "🧱 A .NET Core API designed to assess a client's status, whether in Covid, Default, or Welcome status, to determine the appropriate experience on the RMS Web.",
      techStack: ["Dotnet core"],
      features: [
        "Added functionality to determine if the client is in escrow analysis, allowing the RMS web to derive appropriate navigation for the client.",
        "Integrated SonarQube into the CircleCI pipeline to ensure code quality is maintained."
      ],
      year: 2020,
    },
    {
      title: "Servicing Api",
      coverImagePath: AssetPaths.PROJECT_SERVICING_WIREMOCK,
      liveLink: "https://git.rockfin.com/myql-servicing/servicing-api",
      githubLink:
        "https://git.rockfin.com/myql-servicing/servicing-api",
      description:
        "🧱 A .NET Core API that serves as a centralized data orchestration layer for Rocket Mortgage Servicing.",
      techStack: ["Dotnet core"],
      features: [
        "Corrected the YTD logic to exclude PMI from the calculation.",
        "Integrated the RMS Consent library to conditionally execute or bypass logic based on client consent.",
        "Implemented new functionality in the Tax and Insurance endpoint to retrieve insurance information for a loan number.",
        "Developed a new experience controller to retrieve experience information for a loan number, enabling the Servicing web to determine the appropriate client experience.",
        "Added functionality to identify whether the client is in the Covid CheckIn experience or the Back on Track experience."
      ],
      year: 2020,
    }
  ];

  constructor(private _globalStates: GlobalStatsService) {
    this._globalStates.setCanonicalUrl(AppRoutes.PROJECTS);
  }
}
