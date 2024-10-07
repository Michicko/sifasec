import Iot from "../assets/icons/iot-2.svg?react";
import GapAnalysis from "../assets/icons/gap-analysis.svg?react";
import SecAutomation from "../assets/icons/automation.svg?react";
import InsiderThreat from "../assets/icons/threat-assessment.svg?react";
import SecAwareness from "../assets/icons/security-awareness.svg?react";
import Cloud from "../assets/icons/cloud.svg?react";
import LifeCycle from "../assets/icons/life-cycle.svg?react";
import Handshake from "../assets/icons/handshake.svg?react";
import ThreatInt from "../assets/icons/threat-intel.svg?react";
import FinancialService from "../assets/icons/financial-service.svg?react";
import Healthcare from "../assets/icons/healthcare.svg?react";
import HigherEducation from "../assets/icons/higher-education.svg?react";
import Hospitality from "../assets/icons/hospitality.svg?react";
import Smes from "../assets/icons/sme.svg?react";
import Technology from "../assets/icons/technology.svg?react";
import Utilities from "../assets/icons/utilities.svg?react";
import Solution from "../assets/icons/solutions.svg?react";
import Service from "../assets/icons/service.svg?react";
import Relationship from "../assets/icons/handshake.svg?react";
// import Vision from "../../assets/icons/vision.svg?react";
// import Mission from "../../assets/icons/mission.svg?react";
// import Why from "../../assets/icons/why.svg?react";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "About",
    url: "/about",
  },
  {
    id: 3,
    name: "Services",
    url: "/services",
  },
  {
    id: 4,
    name: "Blog",
    url: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    url: "/contact",
  },
];

export const services = [
  {
    id: 1,
    title: "Internet of Things (IoT)",
    slug: "internet-of-things",
    link: "/services/internet-of-things",
    text: "Accelerate detection and response across all networks.",
    icon: <Iot className="service-icon" />,
    banner: "iot-service.webp",
    lead: "Gain new level of insight into IoT devices to safeguard critical assets, prevent and stop intellectual property theft, malware, ransomware, and other form of cyberattacks.",
    graphics:
      "https://res.cloudinary.com/dc6hetgln/image/upload/v1692907385/sifasec/images/iot-graphics_upxryz.webp",
    overviewHeading: true,
    overview: [
      "IoT devices have swiftly emerged as crucial elements for gaining competitive advantages as organizations modernize their systems. IoT technology has many benefits for consumers, corporations and, in particular, the manufacturing, health care and transportation industries.",
      "As a result of their inclusion to IT settings, businesses are able to produce and utilize superior data sets, improving their ability to manage technology, foster operational efficiencies, boost productivity, lower costs, and do away with downtime.",
      "As more and more companies integrate IoT devices into their infrastructures, concerns around the security of IoT networks become more prevalent.",
      "The more connected devices you have in your ecosystem, the more potential gateways threat actors have to infiltrate your system for their malicious purposes.",
    ],
    approach: {
      text: "Any connected device can be vulnerable to cyberattacks, it is not a matter of if but when. Sifa security take IoT security to the next level, providing protection and improving security posture.",
      mainImage: (
        <img
          src="https://res.cloudinary.com/dc6hetgln/image/upload/v1692910719/sifasec/images/approach_boauyg.svg"
          alt="iot"
          width={"100%"}
        />
      ),
      mobileImage: (
        <img
          src="https://res.cloudinary.com/dc6hetgln/image/upload/v1692910646/sifasec/images/approach-vertical_wp4tso.svg"
          alt="iot"
          width={"100%"}
        />
      ),
    },

    benefits: [
      {
        heading: "Enable regulatory compliance",
        texts: [
          "Industry-specific rules for data privacy and safety are enabled by strong encryption and authenticated commands.",
          "Data privacy is high on the agenda of regulatory authorities, whether they are regional or industry-specific. Failure to adequately secure data end to end can result in large fines and sanctions.",
        ],
        imgLarge: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692910804/sifasec/images/regulations-compliance-large_goflhi.webp",
          size: "1200w",
        },
        imgSmall: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692910831/sifasec/images/regulations-compliance-small_gyppqg.webp",
          size: "300w",
        },
        imgMedium: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692910814/sifasec/images/regulations-compliance-medium_d78gvj.webp",
          size: "529w",
        },
      },
      {
        heading: "Protect today's and tomorrow's business models",
        texts: [
          "Implementing rich and flexible security technology open ways to all sorts of future opportunities and enable more unique business models and prevent costly fraud.",
          "The IoT security when implemented well could be tomorrow's platform for innovative new services. IoT can help businesses dig deeper and introduce new and better ways to do business.",
        ],
        imgLarge: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692910955/sifasec/images/business-model-large_l7s2ca.webp",
          size: "1200w",
        },
        imgSmall: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692910967/sifasec/images/business-model-medium_btcdyc.webp",
          size: "300w",
        },
        imgMedium: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692910976/sifasec/images/business-model-small_ofeg5j.webp",
          size: "529w",
        },
      },
      {
        heading: "Ensure your long-term success",
        texts: [
          "IoT can help businesses become more competitive by improving their products and services, reducing costs, boosting productivity and profitability and providing better customer experiences.",
          " A well-implemented IoT security would bring long-term business sustainability and protection from known and unknown threats.",
        ],
        imgLarge: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911051/sifasec/images/longterm-success_lxttlr.webp",
          size: "1200w",
        },
        imgSmall: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911098/sifasec/images/longterm-success-small_m73x9s.webp",
          size: "300w",
        },
        imgMedium: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911074/sifasec/images/longterm-success-medium_szm72i.webp",
          size: "529w",
        },
      },
      {
        heading: "Gain customers trust",
        texts: [
          "Failure to design, implement and maintain the necessary security in your products can result in undesirable litigation and a bad reputation.",
          "If your products don't adequately protect customer data or end-user devices this can cause long-term harm to you or your company's reputation. Good IoT security can prevent that.",
        ],
        imgLarge: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911246/sifasec/images/trust-large_m33bnb.webp",
          size: "1200w",
        },
        imgSmall: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911273/sifasec/images/trust-small_zvofdx.webp",
          size: "300w",
        },
        imgMedium: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911260/sifasec/images/trust-medium_cdc1to.webp",
          size: "529w",
        },
      },
    ],
    whys: [
      {
        heading: "Expertise & experience",
        text: "The Sifa security Services team has unrivaled skills, expertise and experience solving cybersecurity problems. The team provides unique insights into the tactics, techniques and procedures (TTPs) used by today's threats actors.",
      },
      {
        heading: "Technology & tools",
        text: "The Sifa security Services team leverage the best security tools and embed best practices into your security architecture allowing immediate, real-time visibility into your network, identifying potential compromises and eliminating them.",
      },
      {
        heading: "Methodology & approach",
        text: "Sifa security's approach to solving iot security problems accelerates the timeline compared to traditional approaches. The combination of Sifa security team, technology and processes provides you with an efficient and cost-effective way to identify and contain threats.",
      },
    ],
  },
  {
    id: 2,
    title: "InfoSec Gap Analysis",
    slug: "infosec-gap-analysis",
    link: "/services/infosec-gap-analysis",
    text: "In-depth review of your security to maintain industry requirements.",
    icon: <GapAnalysis className="service-icon" />,
    banner: "infosec-gap-analysis-service.webp",
    lead: "Identify your security risks and take proactive measures to address security gaps and vulnerabilities to meet regulatory requirements and improve security posture.",
    graphics:
      "https://res.cloudinary.com/dc6hetgln/image/upload/v1692907386/sifasec/images/gap-analysis_woeb12.webp",
    overviewHeading: true,
    overview: [
      "In today's digital landscape, it is essential for organizations to ensure that their information systems are secure and free from vulnerabilities.",
      "Cyberattacks happen every second, and a security breach can result in the loss of clients' confidential information which can result in undesirable litigation and a damaged reputation.",
      "In order to address security gaps, it is necessary to accurately identify the areas that require improvement. Thus, it is essential to comprehensively visualize, understand, and prioritize the status of your company's security measures.",
      "InfoSec Gap Analysis is a comprehensive process used to identify security gaps in an organization's information systems. The process involves assessing an organization's security policies, procedures, and controls to identify areas that require improvement.",
      "The main purpose of conducting InfoSec Gap Analysis is to check how far short your system is from industry standards, and identify security risks and vulnerabilities. It also brings to surface the difference between your system's desired level of performance and its existing performance.",
    ],
    approach: {
      text: "A security breach could send your business into bankruptcy. Can your security control withstand cyberattacks that happen every second? A gap analysis from Sifa Security will accurately identify the areas that require improvement in your security control.",
      mainImage: (
        <img
          src="https://res.cloudinary.com/dc6hetgln/image/upload/v1692911426/sifasec/images/infosec-main_rtsvm7.svg"
          alt="infosec gap analysis"
          width={"100%"}
        />
      ),
      mobileImage: (
        <img
          src="https://res.cloudinary.com/dc6hetgln/image/upload/v1692911441/sifasec/images/infosec-vertical_ldpw02.svg"
          alt="infosec gap analysis"
          width={"100%"}
        />
      ),
    },

    benefits: [
      {
        heading: "Enable regulatory compliance and industry standards",
        texts: [
          "Determines how mature your organization is today by comparing it to industry best standards and providing guidance on achieving your desired future state of security operations.",
          "Data privacy is high on the agenda of regulatory authorities, whether they are regional or industry-specific. Failure to adequately secure data end to end can result in large fines and sanctions.",
        ],
        imgLarge: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692910804/sifasec/images/regulations-compliance-large_goflhi.webp",
          size: "1200w",
        },
        imgSmall: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692910831/sifasec/images/regulations-compliance-small_gyppqg.webp",
          size: "300w",
        },
        imgMedium: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692910814/sifasec/images/regulations-compliance-medium_d78gvj.webp",
          size: "529w",
        },
      },
      {
        heading: "Save cost and time",
        texts: [
          "A thorough information security gap analysis can identify what the organization already does well, thus saving time and cost.",
          "Gap analysis can frequently identify capabilities that already exist within an organization, offering the ability to promote these capabilities rather than adopt new ones.",
        ],
        imgLarge: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911520/sifasec/images/save-cost-time-large_o9nf02.webp",
          size: "1200w",
        },
        imgSmall: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911542/sifasec/images/save-cost-time-small_azuhme.webp",
          size: "300w",
        },
        imgMedium: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911532/sifasec/images/save-cost-time-medium_kytt4k.webp",
          size: "529w",
        },
      },
      {
        heading:
          "Reduce organizational security risk and ensure long-term success",
        texts: [
          "Provide a detailed prioritized plan to reduce your organizational security risk with impactful improvements to operations.",
          "A thorough information security gap analysis would bring long-term business sustainability and protection from known and unknown threats.",
        ],
        imgLarge: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911051/sifasec/images/longterm-success_lxttlr.webp",
          size: "1200w",
        },
        imgSmall: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911098/sifasec/images/longterm-success-small_m73x9s.webp",
          size: "300w",
        },
        imgMedium: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911074/sifasec/images/longterm-success-medium_szm72i.webp",
          size: "529w",
        },
      },
      {
        heading: "Gain customers trust",
        texts: [
          "If you conduct a thorough information security gap analysis, you would gain your customers' trust, as they will believe you are providing the best security possible.",
          "In turn, the better you can secure the data entrusted to you, the more your business will thrive.",
        ],
        imgLarge: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911246/sifasec/images/trust-large_m33bnb.webp",
          size: "1200w",
        },
        imgSmall: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911273/sifasec/images/trust-small_zvofdx.webp",
          size: "300w",
        },
        imgMedium: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911260/sifasec/images/trust-medium_cdc1to.webp",
          size: "529w",
        },
      },
    ],
    whys: [
      {
        heading: "Expertise and experience",
        text: "The Sifa security Services team leverages a deep expertise in security operations, incident response and forensic analysis to conduct a thorough information security gap analysis.",
      },
      {
        heading: "Depth of Analysis",
        text: "The Sifa security Services assessment team pays close attention to detail with deep discovery and analysis to identify gaps and compare those gaps to known best practices in industry.",
      },
      {
        heading: "Methodology and approach",
        text: "The approach consists of interactive workshops that promote open dialogue, allowing Sifa security experienced consultants to understand the depths of your organization's strengths and accurately identify the areas that require improvement in your security control.",
      },
    ],
  },
  {
    id: 3,
    title: "Security Automation",
    slug: "security-automation",
    link: "/services/security-automation",
    text: "Automate incident response and speed investigations.",
    icon: <SecAutomation className="service-icon" />,
    banner: "security-automation-service.webp",
    lead: "Supercharge your team with sophisticated detection and prevention capabilities for faster incident response and increase in security agility.",
    graphics:
      "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911618/sifasec/images/security-automation_mcgv2u.webp",
    overviewHeading: true,
    overview: [
      "In today's digital landscape, cyberattacks have become more frequent, sophisticated and costly to resolve. In fact, many attackers leverage automation to carry out multiple attacks simultaneously to increase their chances of success.",
      "As cyber threats become more frequent and sophisticated, many organizations have turned to the concept of zero trust security to strengthen their defenses against these threats.",
      "Zero trust is a security framework requiring all users, whether inside or outside the organization's network, to be authenticated, authorized and continuously validated for security configuration and posture before being granted or keeping access to applications and data.",
      "The granular security provided by a zero trust architecture has significant benefits, but it also creates a significant amount of overhead. Security automation is essential to building a secure, scalable, and sustainable zero trust strategy.",
      "Security automation is the automation of security tasks, including both administrative duties and incident detection and response.",
    ],

    approach: {
      text: "Cyber threats are becoming more frequent and sophisticated, requiring more sophisticated detection and prevention capabilities.",
      mainImage: (
        <img
          src="https://res.cloudinary.com/dc6hetgln/image/upload/v1692911666/sifasec/images/automation-main_r6mxyg.svg"
          alt="automation"
          width={"100%"}
        />
      ),
      mobileImage: (
        <img
          src="https://res.cloudinary.com/dc6hetgln/image/upload/v1692911682/sifasec/images/automation-vertical_ugraau.svg"
          alt="automation"
          width={"100%"}
        />
      ),
    },
    benefits: [
      {
        heading: "Enable regulatory compliance and industry standards",
        texts: [
          "All organizations must perform various audits and ensure compliance against industry standards.",
          "Leveraging automation tools to manage reporting and compliance activity decreases regulatory complexity and risk.",
        ],
        imgLarge: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692910804/sifasec/images/regulations-compliance-large_goflhi.webp",
          size: "1200w",
        },
        imgSmall: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692910831/sifasec/images/regulations-compliance-small_gyppqg.webp",
          size: "300w",
        },
        imgMedium: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692910814/sifasec/images/regulations-compliance-medium_d78gvj.webp",
          size: "529w",
        },
      },
      {
        heading: "Save cost and time",
        texts: [
          "Security frees up your focus and total operating costs by allowing automations to do the heavy lifting.",
          "Security automations save a countless amount of time and money by eliminating some of the most time-consuming manual tasks.",
        ],
        imgLarge: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911520/sifasec/images/save-cost-time-large_o9nf02.webp",
          size: "1200w",
        },
        imgSmall: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911542/sifasec/images/save-cost-time-small_azuhme.webp",
          size: "300w",
        },
        imgMedium: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911532/sifasec/images/save-cost-time-medium_kytt4k.webp",
          size: "529w",
        },
      },
      {
        heading: "Reduce security risk and ensure long-term success",
        texts: [
          "Centralize and automate security management and streamline incident detection and response using Security Information and Event Management (SIEM) to help identify potential security threats before they have a chance to disrupt business operations.",
          "Closing the gap between an organization's existing security and a zero trust security posture through automation would bring long-term business sustainability and protection from known and unknown threats.",
        ],
        imgLarge: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911063/sifasec/images/longterm-success-large-2_ilozl0.webp",
          size: "1200w",
        },
        imgSmall: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911106/sifasec/images/longterm-success-small-2_kpzqc7.webp",
          size: "300w",
        },
        imgMedium: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911084/sifasec/images/longterm-success-medium-2_vtte0v.webp",
          size: "529w",
        },
      },
    ],
    whys: [
      {
        heading: "Expertise & experience",
        text: "The Sifa Security Service team leverages a deep expertise in security operations, enriched data collection, automation and orchestration of complex workflows.",
      },
      {
        heading: "Upskill Staff to Drive Functionality & ROI",
        text: "The Sifa Security team provide change management and an education program to staffs to leverage the functionality and ROI of automation tool.",
      },
      {
        heading: "Methodology & approach",
        text: "The Sifa Security team extends the security automation capabilities of existing security operation tools. Using event-driven automation tools, like Security Information and Event Management (SIEM), Security Orchestration, Automation and Response (SOAR), Extended Detection and Response (XDR) or other security monitoring tools to perform remediation actions.",
      },
    ],
  },
  {
    id: 4,
    title: "Perimeter Security",
    slug: "perimeter-security",
    link: "/services/perimeter-security",
    text: "Understand and respond to potential threats.",
    icon: <InsiderThreat className="service-icon" />,
    banner: "perimeter-security-service.webp",
    lead: "Reduce security complexity with visibility into your business applications, users, and networks.",
    graphics:
      "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911954/sifasec/images/perimeter-security-2_zwzmok.webp",
    overviewHeading: true,
    overview: [
      "As the cyber threat landscape keeps evolving, organizations are requiring more sophisticated detection and prevention capabilities.",
      "The perimeter is an organization's first line of defense and a critical element of any security and surveillance program. Even if a network security is strong, without a solid perimeter security, any company or business will be susceptible to cyber attacks.",
      "Perimeter security is a strategy that entails deploying effective devices, tools, and procedures to secure a network's data and resources at its boundary, limiting access to the public at large.",
      "Perimeter Security technologies provide a range of security services from basic firewall protection through to end-to-end security for your network and business. In essence, perimeter security is a defence system around your network, designed to stop malicious attacks from entering.",
    ],
    approach: {
      text: "To safeguard internal information from untrusted or malicious actors, organizations needs to leverage the concept and evolution of a network perimeter security.",
      mainImage: (
        <img
          src="https://res.cloudinary.com/dc6hetgln/image/upload/v1692911997/sifasec/images/perimeter-main_xwszex.svg"
          alt="perimeter security"
          width={"100%"}
        />
      ),
      mobileImage: (
        <img
          src="https://res.cloudinary.com/dc6hetgln/image/upload/v1692912005/sifasec/images/perimeter-vertical_pksdcm.svg"
          alt="perimeter security"
          width={"100%"}
        />
      ),
    },

    benefits: [
      {
        heading: "Enable regulatory compliance",
        texts: [
          "Since data privacy is high on the agenda of regulatory authorities, organizations can protect the confidentiality, integrity, and availability of personal and sensitive information.",
          "As such, they can comply with regulatory requirements such as the General Data Protection Regulation (GDPR).",
        ],
        imgLarge: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692910804/sifasec/images/regulations-compliance-large_goflhi.webp",
          size: "1200w",
        },
        imgSmall: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692910831/sifasec/images/regulations-compliance-small_gyppqg.webp",
          size: "300w",
        },
        imgMedium: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692910814/sifasec/images/regulations-compliance-medium_d78gvj.webp",
          size: "529w",
        },
      },
      {
        heading: "Avoid Reputation and financial loss and gain users trust ",
        texts: [
          "Organizations that have been affected by data breaches normally face hefty fines from regulators as well as reputation backlash from users.",
          "Perimeter security is an important part of every organization's cybersecurity strategy. It provides the necessary controls to protect against external threats and adhere to regulations. It also helps ensure the confidentiality, integrity, and availability of information assets.",
        ],
        imgLarge: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911246/sifasec/images/trust-large_m33bnb.webp",
          size: "1200w",
        },
        imgSmall: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911273/sifasec/images/trust-small_zvofdx.webp",
          size: "300w",
        },
        imgMedium: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911260/sifasec/images/trust-medium_cdc1to.webp",
          size: "529w",
        },
      },
      {
        heading: "Save cost and time",
        texts: [
          "A well-implemented perimeter security would equip your business or organization with a robust security solution that lowers operational costs and eliminates complex management.",
        ],
        imgLarge: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911520/sifasec/images/save-cost-time-large_o9nf02.webp",
          size: "1200w",
        },
        imgSmall: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911542/sifasec/images/save-cost-time-small_azuhme.webp",
          size: "300w",
        },
        imgMedium: {
          url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911532/sifasec/images/save-cost-time-medium_kytt4k.webp",
          size: "529w",
        },
      },
    ],
    whys: [
      {
        heading: "Expertise and experience",
        text: "With Sifa security behind your perimeter security, you receive expert configuration, worry-free maintenance, and 24x7 support, so you can rest assured that you're secure.",
      },
      {
        heading: "Industry best standard technology",
        text: "The Sifa security team Provide industry-leading performance technology to improve your posture and meet compliance.",
      },
      {
        heading: "Methodology and approach",
        text: "The Sifa security team utilises multiple layers of complementary solutions, all of which work together to deny any potential intruder access to your network.",
      },
    ],
  },
  {
    id: 5,
    title: "Security Awareness Training",
    slug: "security-awareness-training",
    link: "/services/security-awareness-training",
    text: "Avoid mistakes to minimize risk and potential cyber threats.",
    icon: <SecAwareness className="service-icon" />,
    banner: "security-awareness-training-service.webp",
    lead: "Create a cyber-aware workforce and mitigate cyberattacks and breaches in your organization.",
    graphics:
      "https://res.cloudinary.com/dc6hetgln/image/upload/v1692911629/sifasec/images/security-awareness_unk4fi.webp",
    overviewHeading: false,
    overview: [
      "Research suggests that human error is involved in more than 90% of security breaches. Every year, threat actors look for new tactics to outwit victims and bypass defenses. Employees are targeted through a phishing email or tricked into an unintentional download of a virus or malicious softwares.",
    ],
    facts: [
      {
        id: 1,
        fig: 96,
        type: "percent",
        text: "of all cybersecurity breaches take place due to human error",
      },
      {
        id: 2,
        fig: 44,
        type: "percent",
        text: "of all targeted cyberattacks are laid on employees through emails..",
      },
      {
        id: 3,
        fig: 24,
        type: "percent",
        text: "  of data breaches occur due to employee negligence or unawareness.",
      },
      {
        id: 4,
        fig: 41,
        type: "percent",
        text: "of C-suite executives believe that human error is the primary cause of data breach.",
      },
    ],
    internalCa: {
      heading:
        "Interested in organizing Security Awareness Training for your team?",
      text: "Get in touch with the Sifa Security training team today to get started.",
      btnText: "INQUIRE NOW",
    },
    emphasis: {
      texts: [
        "Employees are frequently exposed to sophisticated phishing and ransomware attacks.",
        "Human error is one of the leading causes of cyber security incidents, which can cause financial and reputational damage to your business.",
        "Security awareness training helps organizations build a cyber-aware culture where employees recognize and avoid falling victim to cyberattacks.",
        "Cybercriminals are evolving at a rapid pace but by educating employees regularly you can minimize exposure to fraud, malware infections and phishing attacks.",
      ],
      imgLarge: {
        url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692912144/sifasec/images/why-sec-aware-large_nux6fw.webp",
        size: "1200w",
      },
      imgSmall: {
        url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692912160/sifasec/images/why-sec-aware-small_b6u723.webp",
        size: "300w",
      },
      imgMedium: {
        url: "https://res.cloudinary.com/dc6hetgln/image/upload/v1692912152/sifasec/images/why-sec-aware-medium_s4mmkd.webp",
        size: "529w",
      },
    },
    how: {
      heading: "How we add value to your organization",
      texts: [
        "Sifa Security Awareness and Training services equips your employees with the knowledge they need to detect and prevent cyberattacks.",
        "We address security awareness, data privacy, internet security, password protection and physical security training obligations.",
      ],
      list: [
        {
          title: "Interactive training",
          text: "Our training is designed for optimal learning, using interactive modules and games, staff are fully immersed into the scenario which results in increased engagement and enhanced understanding.",
        },
        {
          title: "Customizable campaigns",
          text: "Our cyber security expert can design training campaigns that best meet your organization's needs.",
        },
        {
          title: "Phishing simulations",
          text: "Test awareness and vigilance across your users. Real-world simulated phishing attacks reinforce proper practices at the point of click",
        },
      ],
    },

    whys: [
      {
        heading: "Expertise & experience",
        text: "The Sifa Security team has extensive adversary emulation and penetration testing experience like phishing simulations, giving you real-world attack scenarios that highlight the weaknesses in your defenses.",
      },
      {
        heading: "Threat intelligence",
        text: "The Sifa Security team uses the most advanced threat intel to understand the tactics, techniques and procedures (TTPs) that threat actors will use to penetrate your environment and disrupt your business operations.",
      },
      {
        heading: "Methodology & approach",
        text: "The Sifa Security team delivers more than just a simple awareness training, we deliver key security concepts and learning reinforcement to run targeted campaigns on timely threats.",
      },
    ],
  },
  {
    id: 6,
    title: "Cloud Security",
    slug: "cloud-security",
    link: "/services/cloud-security",
    text: "Secure cloud and container environment.",
    icon: <Cloud className="service-icon" />,
    banner: "cloud-security-service.webp",
    serviceImg: "cloud-security-img.webp",
    lead: "Secure your cloud systems to provide protection for your network  against internal and external threats, avoid noncompliance and maintain business continuity.",
    graphics:
      "https://res.cloudinary.com/dc6hetgln/image/upload/v1692912236/sifasec/images/cloud-security_nvmndc.webp",
    overviewHeading: false,
    overview: [
      "Managing security in your enterprise infrastructure is challenging enough, but the introduction of cloud technology increases the risk significantly. Often, the teams responsible for business, IT, and security do not have a shared vision for cloud strategy across the entire organization. Additionally, traditional security policies and tools are not sufficient to protect cloud environments.",
    ],
    addon: {
      heading: "Sifa Security Delivers Comprehensive Protection",
      infoGraphics:
        "https://res.cloudinary.com/dc6hetgln/image/upload/v1692912255/sifasec/images/cloud-sec-infographic_osgi28.webp",
      list: [
        {
          title: "Risk management",
          text: "Actionable insights with consistent workflows.",
        },
        {
          title: "Threat management",
          text: "Real-time threat protection with zero-permission security coverage.",
        },
        {
          title: "Data security",
          text: "Detects and protects against malware, sensitive data, data loss, and misconfigurations in cloud storage repositories.",
        },
        {
          title: "Container security",
          text: "Protection against vulnerabilities in container images and registries.",
        },
        {
          title: "Compliance",
          text: "Simplifies compliance including CIS benchmarks, corporate, and regulatory standards.",
        },
      ],
    },
  },
  {
    id: 7,
    title: "Threat intelligence & consulting",
    slug: "threat-intelligence-and-consulting",
    link: "/services/threat-intelligence-and-consulting",
    text: "Discover and remediate external threats.",
    icon: <ThreatInt className="service-icon" />,
    banner: "threat-intel-and-consulting-service.webp",
    serviceImg: "threat-intel-and-consulting-img.webp",
    lead: "Supercharge your security team and enhance their skillset and expertise through hands-on, tailored guidance to expose threats, gain access to industry-leading adversary-focused research, avoid noncompliance and improve security posture.",
    graphics:
      "https://res.cloudinary.com/dc6hetgln/image/upload/v1692912325/sifasec/images/threat-intelligence_n6t7yz.webp",
    overviewHeading: true,
    overview: [
      "In today's connected world, everyone benefits from the work of cyber threat researchers. These researchers investigate new and emerging threats and cyber attack strategies and reveal new vulnerabilities, educate the public on the importance of cybersecurity and strengthen open source tools. Their work makes the internet safer for everyone.",
      "Cyberattacks can be prevented by being aware of the various types of protocols, exploits, tools, and resources used by malicious actors. In addition, knowing where and how to expect attacks ensures you're creating preventative measures to protect your systems.",
    ],
    internalCa: {
      heading: "Are you experiencing a breach on your cloud platform?",
      text: "Sifa Security team can help you get rid of your security threats and vulnerabilities and improve your overall security posture.",
      btnText: "INQUIRE NOW",
    },
    approach: {
      text: "Help security teams be more proactive, enabling them to take effective, data-driven actions to prevent cyberattacks before they occur.",
      mainImage: (
        <img
          src="https://res.cloudinary.com/dc6hetgln/image/upload/v1692907614/sifasec/images/threat-approach-main_qembej.svg"
          alt="threats"
          width={"100%"}
        />
      ),
      mobileImage: (
        <img
          src="https://res.cloudinary.com/dc6hetgln/image/upload/v1692908689/sifasec/images/threat-approach-vertical_nk4e8l.svg"
          alt="threats"
          width={"100%"}
        />
      ),
      smallImage: (
        <img
          src="https://res.cloudinary.com/dc6hetgln/image/upload/v1692907630/sifasec/images/threat-approach-sm_d6kxnp.svg"
          alt="threats"
          width={"100%"}
        />
      ),
    },
  },
];

export const industries = [
  {
    id: 2,
    title: "Financial Services",
    slug: "financial-services",
    link: "/industries/financial-services",
    icon: <FinancialService />,
    banner:
      "https://res.cloudinary.com/dc6hetgln/image/upload/v1692912863/sifasec/images/fs-banner_torbee.webp",
    industryImg: "fs.webp",
    lead: "Financial institutions are prime targets for cybercriminals due to the potential for financial gain.",
    ca: {
      headingMain: "Want to combat cybersecurity",
      headingSub: "threats in your institution?",
      text: "Get in touch with Sifa Security today to get started",
    },
    overview: [
      "The growing number of cyberattacks against financial institutions is a reflection of how this sector has turned to technology to solve many of the problems it faces. While financial institutions know security is an issue, many of them aren't prepared and don't know how to combat the increasingly sophisticated tactics of cybercriminals.",
      "Financial institutions are subject to an ever-increasing number of cybersecurity rules and regulations. With pressure from regulatory agencies and the need to protect brand reputation, financial firms are motivated to provide significant investment and collaboration to improve cybersecurity preparedness, response, and resiliency across the sector. Meeting these compliance obligations can be complex and resource-intensive, requiring robust security measures to ensure adherence and avoid regulatory penalties.",
    ],
    facts: [
      {
        id: 1,
        fig: 50,
        type: "percent",
        text: "of observed phishing attacks were linked to the financial services sector in 2020",
      },
      {
        id: 2,
        fig: 520,
        type: "percent",
        text: "increase in phishing and ransomware attacks targeting banks in 2020",
      },
      {
        id: 3,
        fig: 5.97,
        type: "number",
        text: "million is the average cost of a data breach in the financial sector in 2022",
      },
      {
        id: 4,
        fig: 79,
        type: "percent",
        text: "U.S. financial services companies reported data breaches affecting 1,000 or more consumers in 2022",
      },
    ],
    threatsDescription: {
      heading: "Cybersecurity Challenges in Financial Institutions",
      texts: [
        "The stakes are high in the banking and financial industry since substantial financial sums are at risk and the potential for significant economic upheaval if banks and other financial systems are compromised.",
      ],
      list: [
        {
          id: 1,
          title: "Phishing",
          text: "Phishing, a variant of social engineering, is a method of tricking users into divulging login credentials to gain access to an internal network. The most common form of phishing is email phishing, where an email posing as legitimate communication is sent to victims",
        },
        {
          id: 2,
          title: "SQL Injections",
          text: "is a cyberattack that injects malicious SQL code into an application, allowing the attacker to view or modify a database",
        },
        {
          id: 3,
          title: "Ransomware",
          text: "This type of cybersecurity attack consists of a malicious software that is designed to block access to a device or network until a sum of money is paid to unlock it.",
        },
        {
          id: 4,
          title: "DDoS Attacks",
          text: "DDoS attacks are a popular cyber threat against financial services because their attack surface is diverse, comprising of banking IT infrastructures, customer accounts, payment portals, etc.",
        },
        {
          id: 5,
          title: "Bank Drops",
          text: "To obfuscate their location from authorities, cybercriminals often store stolen funds in fake bank accounts (bank drops) opened with stolen customer credentials.",
        },
      ],
    },

    whys: [
      {
        id: 1,
        heading: "Prevent, Detect, Respond and Mitigate",
        text: "Probe deep into your network using real-time threats intelligence, behavioral analytics, anomaly detection and deep-dive forensic analysis to identify ongoing attacks and latent threats.",
      },
      {
        id: 2,
        heading: "Custom Engagements",
        text: "Enhance your capabilities with custom awareness training and targeted campaigns to deliver key security concepts and improve security posture.",
      },
      {
        id: 3,
        heading: "Cyber Architecture & Integration",
        text: "We bring our expertise and knowledge to design, build and optimize robust cybersecurity solutions and strategies to mitigate threats in financial institutions.",
      },
      {
        id: 4,
        heading: "Penetration Testing",
        text: "Conduct vulnerability assessments and penetration testing across your databases, networks and applications to identify threats and weaknesses attackers may exploit.",
      },
    ],
  },
  {
    id: 3,
    title: "Healthcare",
    slug: "healthcare",
    link: "/industries/healthcare",
    icon: <Healthcare />,
    banner:
      "https://res.cloudinary.com/dc6hetgln/image/upload/v1692912933/sifasec/images/hs-banner_dq5w2i.webp",
    industryImg: "hs.webp",
    lead: "Hospitals and Healthcare organizations are prime targets for cybercriminals because they have access to extremely sensitive and valuable data, including patient health records and payment card data.",
    overview: [
      "As more health organizations adopt cloud technology and internet based applications, the risk for cyber attacks and security breaches has significantly increased, rendering the entire healthcare system incredibly vulnerable.",
      "Healthcare organizations face various challenges when attempting to protect their systems from internal and external cyber attacks and ensure availability of medical services, proper operation of medical systems and equipment, preservation of confidentiality and integrity of patient data, and compliance with industry regulations.",
    ],
    ca: {
      headingMain: "Want to combat cybersecurity",
      headingSub: "threats in your institution?",
      text: "Get in touch with Sifa Security today to get started",
    },
    facts: [
      {
        id: 1,
        fig: 1463,
        type: "number",
        text: "is the average number of cyberattacks per week on Healthcare organizations across the world in 2022.",
      },
      {
        id: 2,
        fig: 337,
        type: "number",
        text: "number of breaches that the healthcare sector suffered in the first half of 2022 which affected 19,992,810 individuals.",
      },
      {
        id: 3,
        fig: 36,
        type: "percent",
        text: "of healthcare facilities reported an increase in medical complications owing to ransomware attacks",
      },
      {
        id: 4,
        fig: 90,
        type: "percent",
        text: "of healthcare organizations reported a loss in revenue after a cyber attack.",
      },
    ],
    threatsDescription: {
      heading: "Cybersecurity Challenges in Healthcare & Public Health Sector",
      texts: [
        "Cybersecurity threats to healthcare organizations and patient safety are real. Health information technology provides critical life-saving functions and consists of connected, networked systems that leverages wireless technologies, which in turn leave such systems more vulnerable to cyberattacks.",
      ],
      list: [
        {
          id: 1,
          title: "Man-in-the-middle (MITM) attacks",
          text: "Cybercriminals snoop on private user information during data transfers or discussions, resulting in significant losses and fines for a confidentiality breach.",
        },
        {
          id: 2,
          title: "Data breach",
          text: "Data breaches are a concern as they can involve patient records and other private information. The healthcare sector has a disproportionately high number of data breaches.",
        },
        {
          id: 3,
          title: "Ransomware",
          text: "In addition to encrypting data and demanding money to decrypt it, cybercriminals block access to the entire clinical system, rendering surgical instruments and life support equipment inoperable.",
        },
        {
          id: 4,
          title: "Phishing",
          text: "Computer systems can become infected with malware through links or attachments in phishing emails, social media posts, or text messages, frequently spreading over the entire network.",
        },
      ],
    },

    whys: [
      {
        id: 1,
        heading: "Enable Data Protection",
        text: "Discover and classify sensitive data that needs protection, and ensure it doesn't get into the wrong hands, whether by accident, through trusted insiders with malicious intentions or via external intruders.",
      },

      {
        id: 2,
        heading: "Penetration Testing",
        text: "Conduct vulnerability assessments and penetration testing across your databases, networks and applications to identify threats and weaknesses attackers may exploit.",
      },
      {
        id: 3,
        heading: "Control Risks and Meet Compliance Demands",
        text: "Assess and respond to the risks brought on by data, cloud, mobility and business partners, which will, in turn, allow you to address compliance requirements, including HIPAA and HITECH.",
      },
    ],
  },
  {
    id: 4,
    title: "Higher Education",
    slug: "higher-education",
    link: "/industries/higher-education",
    icon: <HigherEducation />,

    banner:
      "https://res.cloudinary.com/dc6hetgln/image/upload/v1692912978/sifasec/images/he-banner_ij1wfo.webp",
    industryImg: "he.webp",
    lead: "The education sector is facing several cybersecurity challenges, including data breaches, ransomware attacks, phishing scams, and unauthorized access to sensitive information.",
    ca: {
      headingMain: "Want to combat cybersecurity",
      headingSub: "threats in your institution?",
      text: "Get in touch with Sifa Security today to get started",
    },

    overview: [
      "Institutions of higher learning face a constant deluge of cyberattacks. The majority of the users of university systems are students with limited knowledge or no understanding about cybersecurity.",
      "With more colleges and universities incorporating Software-as-a-Service (SaaS) platforms to support registrars, admissions, and financial aid offices, schools are collecting more electronic student information than ever before. As such, cybercriminals have identified universities as soft targets, with cyberattacks against the university sector on the rise over the past few years.",
    ],
    threatsDescription: {
      heading: "Cybersecurity Challenges in The Education Sector",
      texts: [
        "The education sector is an easy target not only for organized criminals but even for their students too. An extensive number of unprotected endpoints and networks used by organization members and outdated internal systems create suitable conditions for performing a wide range of attacks.",
      ],
      list: [
        {
          id: 1,
          title: "DDOS Attacks",
          text: "Distributed Denial of Service, or DDoS attacks are a common type of attack on educational institutions. In this type of attack, the attacker's objective is to cause widespread disruption to the organization's network, inflicting a negative impact on productivity",
        },
        {
          id: 2,
          title: "Data breach",
          text: "Data breaches are a concern as they can involve student records and other private information. Education venues are often targeted because their systems hold a significant amount of sensitive and confidential data of students, faculty and staff.",
        },
        {
          id: 3,
          title: "Ransomware",
          text: "This type of cyberattack consists of a malicious software that is designed to block access to a device or network until a sum of money is paid to unlock it.",
        },
        {
          id: 4,
          title: "Unpatched, outdated software vulnerabilities",
          text: "When software and hardware are unpatched or outdated, they are much more vulnerable to attackers looking to obtain access to networks and systems.",
        },
      ],
    },

    facts: [
      {
        id: 1,
        fig: 87,
        type: "percent",
        text: "of educational institutions were cyberattacked at least once",
      },
      {
        id: 2,
        fig: 5000,
        type: "number",
        text: "schools in the U.S were affected by ransomware attacks in 2021 only.",
      },
      {
        id: 3,
        fig: 60,
        type: "percent",
        text: "of educational institutions suffer from phishing attacks.",
      },
      {
        id: 4,
        fig: 1605,
        type: "number",
        text: "cyberattacks suffered per educational organization every week.",
      },
    ],
    whys: [
      {
        id: 1,
        heading: "Prevent, Detect, Respond and Mitigate",
        text: "Gain acess to threats analysis report and insights from near real-time threats intelligence, so you can spot anomalous behavior before it harms your organization.",
      },
      {
        id: 2,
        heading: "Extend Your Security Team",
        text: "Gain access to the Sifa security team that has unrivaled skills, expertise and experience successfully working with thousands of customers around the world solving cybersecurity problems.",
      },
      {
        id: 3,
        heading: "Maximize Your Investment",
        text: "Partner with Sifa security to identify how to make best use of your existing security resources and future investments.",
      },
    ],
  },
  {
    id: 5,
    title: "Hospitality",
    link: "/industries/hospitality",
    slug: "hospitality",
    icon: <Hospitality />,

    banner:
      "https://res.cloudinary.com/dc6hetgln/image/upload/v1692913019/sifasec/images/hsp-banner_ibmhvp.webp",
    industryImg: "hsp.webp",
    lead: "The hospitality industry faces higher cybersecurity risk because vast amounts of customers' personal and financial data are processed daily through credit card transactions, online reservations, and rewards programs.",
    overview: [
      "The hospitality industry is one of the most vulnerable industries to cyber attacks. The hospitality businesses deal with large amounts of personal informations, including credit card information and contact details of customers, as well as back office system access, which include payroll and HR information. This data is precious to criminals and is often poorly protected by hospitality businesses.",
      "Cybercriminals continue to capitalize on the wealth of assets that traverses hospitality networks.",
    ],
    threatsDescription: {
      heading: "Cybersecurity Challenges in The Hospitality Industry",
      texts: [
        "The hospitality industry has been a prime target for cyberattacks in recent years. From ransomware to data breaches, hotel chains and other businesses in the hospitality industry have experienced a variety of attacks.",
      ],
      list: [
        {
          id: 1,
          title: "Phishing",
          text: "Computer systems can become infected with malware through links or attachments in emails. In recent years, this threat has become increasingly sophisticated, with the attackers targeting those in authority with aim to take over their email account to send bogus emails to colleagues to authorize transactions, which are ordered from above.",
        },
        {
          id: 2,
          title: "Ransomware",
          text: "This type of cybersecurity attack consists of a malicious software that is designed to block access to a device or network until a sum of money is paid to unlock it. Hotels that have fallen foul to this crime have in the past made  ransom payments to be able to let guests into their rooms and create electronic keys.",
        },
        {
          id: 3,
          title: "Point of sale / payment card attacks",
          text: "Point-of-sale attacks pose the biggest threat to the hotel and hospitality industry as a whole. From card cloning to excess payments, these attacks can lead to losses of customers and the credibility of hospitality establishments.",
        },
        {
          id: 4,
          title: "DarkHotel hacking",
          text: "Cybercriminals use a hotels Wi-Fi to target business guests. They upload malicious code to a hotel server then use forged digital certificates to convince victims that a software download is safe.",
        },
        {
          id: 5,
          title: "Customer data theft",
          text: "Protecting the identity and information of customers is paramount to the success of any business and hotels are no exception. Cybercriminals hack the data from the server of hospitality companies and sell them to your competitors.",
        },
      ],
    },
    facts: [
      {
        id: 1,
        fig: 31,
        type: "percent",
        text: "of all hospitality businesses have experienced some form of security or data breach.",
      },
      {
        id: 2,
        fig: 2.94,
        type: "number",
        text: "million dollars was the average total cost of a data breach in the hospitality industry from 2021 to 2022.",
      },
      {
        id: 3,
        fig: 83,
        type: "percent",
        text: "83% of global organizations suffer more than one data breach.",
      },
      {
        id: 4,
        fig: 423,
        type: "number",
        text: "million U.S. travellers have been victims of a cyberattack through their business with hotels.",
      },
    ],
    ca: {
      headingMain: "Want to combat cybersecurity",
      headingSub: "threats in your institution?",
      text: "Get in touch with Sifa Security today to get started",
    },

    whys: [
      {
        id: 1,
        heading: "Stay ahead of evolving threats",
        text: "Protect your data, networks and services with around-the-clock support and systems monitoring to detect and respond to threats in real-time and prevent the disruption of business operations.",
      },
      {
        id: 2,
        heading: "Managed Security Testing",
        text: "Vulnerability assessments and penetration testing to identify threats and weaknesses attackers may exploit to compromise your business.",
      },
      {
        id: 3,
        heading: "Managed Security Service",
        text: "Maximize the impact of your security and compliance programs with comprehensive network security to strengthen your overall defense against cyber threats.",
      },
    ],
  },
  {
    id: 7,
    title: "SMEs",
    link: "/industries/smes",
    slug: "smes",
    icon: <Smes />,

    banner:
      "https://res.cloudinary.com/dc6hetgln/image/upload/v1692913053/sifasec/images/sme_xdpefh.webp",
    industryImg: "sme.webp",
    lead: "As small and medium-sized enterprises (SMEs) increasingly move to cloud services, the risks of security breaches has significantly increased. Small and medium-sized enterprises (SMEs) are the new big target for cyber attacks. SMEs see themselves confronted with a large variety of cyber threats.",
    overview: [
      "Due to increase in internet usage by organizations of all sizes to drive efficiency there have been rise in cyberattacks, which has significantly impacted business operations. It's important for business leaders to redefine how they think about security.",
      "The often limited cybersecurity tools many SMEs use to protect their operations mean they are the weakest link, making them an easy target for cyber criminals.",
      "Attacks can be devastating, resulting in anything from destroying vital systems and leaking confidential customer information to demanding significant ransom payments.",
    ],
    ca: {
      headingMain: "Want to combat cybersecurity",
      headingSub: "threats in your institution?",
      text: "Get in touch with Sifa Security today to get started",
    },
    threatsDescription: {
      heading: "Cybersecurity Challenges in The SMEs Industry",
      texts: [
        "For cybercriminals, SMEs are seen as easier targets as they believe less is being done to protect data. This data might be information about clients, customer details, bank details or it might be a way into one of your customers' systems where you are linked through e-commerce, by email or in some other way.",
      ],
      list: [
        {
          id: 1,
          title: "DDOS Attacks",
          text: "A distributed denial of service (DDoS) attack is a malicious attempt to make an online service unavailable to users. It sends multiple requests to the attacked web resource, with the intention of overflowing the website's capacity, disrupting or temporarily suspending the server's services.",
        },
        {
          id: 2,
          title: "Data breach",
          text: "Data interception and theft of information stored on computers, servers or electronic devices, with the intention of compromising privacy and obtaining confidential information. The information stolen can be of various kinds, such as credit card or bank account numbers, license numbers or medical records.",
        },
        {
          id: 3,
          title: "Low awareness",
          text: "When a company's employees are aware of cybersecurity, it means that they understand what a threat is, where it comes from and the impact it can have on the company.",
        },
        {
          id: 4,
          title: "Phishing",
          text: "Phishing attack via malicious email, which aims to gain access to the victim's email account through a malware program that is downloaded via an attachment to send bogus emails to colleagues to authorize transactions.",
        },
      ],
    },

    facts: [
      {
        id: 1,
        fig: 60,
        type: "percent",
        text: "of all cyber attacks or breaches in 2016 were aimed at SMEs.",
      },
      {
        id: 2,
        fig: 68,
        type: "percent",
        text: "of SMEs have no systematic approach for ensuring Cybersecurity.",
      },
      {
        id: 3,
        fig: 60,
        type: "percent",
        text: "of SMEs who were victims of cyber attacks did not recover and shut down within 6 months.",
      },
      {
        id: 4,
        fig: 31,
        type: "percent",
        text: "of businesses estimate they were attacked at least once a week in the UK according to UK government's Cybersecurity Breaches Survey 2022.",
      },
    ],
    whys: [
      {
        id: 1,
        heading: "Affordable yet Effective Solutions",
        text: "Robust and cost-effective cybersecurity solutions that are designed to fit within the budgets of SMEs, without compromising on the effectiveness of the cybersecurity measures. We understand that SMEs may have limited resources.",
      },
      {
        id: 2,
        heading: "Scalability & Adaptability",
        text: "Scalable and adaptive solutions to accommodate growth and changing requirements, ensuring strong and resilient security posture.",
      },
      {
        id: 3,
        heading: "Comprehensive Protection",
        text: "Multi-layered security measures tailored to the specific needs of SMEs, covering their networks, endpoints, data, applications, and other critical assets.",
      },
      {
        id: 4,
        heading: "Penetration Testing",
        text: "Conduct scanning and penetration testing across your databases, networks and applications to reveal vulnerabilities.",
      },
      {
        id: 5,
        heading: "Managed Detection & Response",
        text: "Monitoring and response services that help SMEs detect and respond to cybersecurity incidents in real-time, minimizing the impact of potential breaches and mitigate threats.",
      },
      {
        id: 6,
        heading: "Compliance & Regulations",
        text: "Understand relevant cybersecurity regulations, industry standards, and best practices. Meet compliance requirements, protect sensitive data, and avoid potential legal and financial consequences.",
      },
      {
        id: 7,
        heading: "Education & Awareness",
        text: "Educate employees on cybersecurity best practices, and foster a security-conscious culture leading to proactivity in safeguarding digital assets.",
      },
    ],
  },
  {
    id: 8,
    title: "Technology",
    link: "/industries/technology",
    slug: "technology",
    icon: <Technology />,

    banner:
      "https://res.cloudinary.com/dc6hetgln/image/upload/v1692913086/sifasec/images/tch-banner_aqhcd7.webp",
    industryImg: "tch.webp",
    lead: "High-tech industries have become a popular target for cyber criminals because of the rich rewards a data breach can yield. With the increase in use of cloud-based business transformation technologies, organizations operating in tech sectors will face a diverse and evolving threat landscape, making cybersecurity more important than ever.",
    overview: [
      "Technology companies are at a far greater risk of falling victim to a data breach, suffering damage to their brands, and incurring the costs associated with disruption and downtime, than organizations in any other sector.",
      "Cybersecurity has become a critical concern for technology companies worldwide. With the increasing sophistication of cyber threats, businesses must take proactive measures to ensure the security and privacy of their sensitive information.",
    ],
    ca: {
      headingMain: "Want to combat cybersecurity",
      headingSub: "threats in your institution?",
      text: "Get in touch with Sifa Security today to get started",
    },
    threatsDescription: {
      heading: "Cybersecurity Challenges in The Technology Industry",
      texts: [
        "High-Tech organizations have very valuable information to be stolen and are also early adopters of new technologies that are still maturing and are therefore vulnerable to attacks and exploits. High-tech products are a key infrastructure component for all kinds of organizations. Technology is a key enabler, but it can also be a key source of vulnerability.",
      ],
      list: [
        {
          id: 1,
          title: "Malware Attacks",
          text: "Malware is malicious software designed to access networks and perform unauthorized actions such as theft, encryption, or destruction of information. Malware can infiltrate a system through multiple entry points, such as email attachments, third-party software, malicious websites, and pop-ups.",
        },
        {
          id: 2,
          title: "Ransomware",
          text: "Ransomware is a software that is designed to block access to a device or network until a sum of money is paid to unlock it. Tech companies are targeted by cybercriminals infiltrating companies' networks and encrypting their data, demanding ransom payments in exchange for decryption keys",
        },
        {
          id: 3,
          title: "Insider Threats",
          text: "When a company's employees are not aware of cybersecurity they may intentionally or unintentionally compromise sensitive data or systems, leading to data breaches or other cybersecurity incidents",
        },
        {
          id: 4,
          title: "Third-Party Exposure ",
          text: "Many companies rely on third-party services. As a result, third party companies get access to private information and data. Cybercriminals use this factor to bypass security measures and systems by targeting the less secure networks of secondary targets.",
        },
        {
          id: 5,
          title: "DDoS Attack ",
          text: "During a DDoS attack, the attacker deliberately floods a target's network with phony data to halt the target's service for genuine users. Attackers can interrupt service by sending excessive requests to websites",
        },
      ],
    },

    facts: [
      {
        id: 1,
        fig: 45,
        type: "percent",
        text: "or more companies have experienced a security breach caused by a download of malicious mobile applications",
      },
      {
        id: 2,
        fig: 61,
        type: "percent",
        text: "increase in phishing attacks in 2022 according to the '2022 State of Phishing' from SlashNext.",
      },
      {
        id: 3,
        fig: 277,
        type: "number",
        text: "is the average number of days it takes for security teams to identify and contain a data breach.",
      },
      {
        id: 4,
        fig: 51,
        type: "percent",
        text: "the maximum attack bandwidth for DDoS attacks in the first half of 2022.",
      },
    ],
    whys: [
      {
        id: 1,
        heading: "Stay ahead of evolving threats",
        text: "Determine the source, cause, and extent of a security breach quickly, and better prepare for the inevitable incident.",
      },
      {
        id: 2,
        heading: "Education & Awareness",
        text: "Educate employees on cybersecurity best practices, and foster a security-conscious culture leading to proactivity in safeguarding digital assets.",
      },
      {
        id: 3,
        heading: "Managed Security Service",
        text: "Maximize the impact of your security and compliance programs with comprehensive network security to strengthen your overall defense against cyber threats.",
      },
      {
        id: 4,
        heading: "Penetration Testing",
        text: "Conduct scanning and penetration testing across your databases, networks and applications to reveal vulnerabilities.",
      },
    ],
  },

  {
    id: 9,
    title: "Utilities",
    link: "/industries/utilities",
    slug: "utilities",
    icon: <Utilities />,

    banner:
      "https://res.cloudinary.com/dc6hetgln/image/upload/v1692913114/sifasec/images/uti-banner_ektpkf.webp",
    industryImg: "uti.webp",
    lead: "The Utilities and Energy organizations are part of the critical infrastructure of any nation, which makes them a high profile target for cyberterrorists and hackers alike. Increasingly, nation-state-backed threat actors are looking to inflict societal damage.",
    overview: [
      "Cyberattacks on the energy industry have been rapidly rising since 2017, and 2022 set an all-time high for the number of attacks that took place in a single year.",
      "A recent study shows that the utilities and energy sector are among the top three most targeted sectors for cyberattacks in the United States. In addition, Europe, Australia, and Japan have reported an increase in threats against critical infrastructure. The threat is global.",
    ],
    ca: {
      headingMain: "Want to combat cybersecurity",
      headingSub: "threats in your institution?",
      text: "Get in touch with Sifa Security today to get started",
    },
    threatsDescription: {
      heading: "Cybersecurity Challenges in The Energy & Utility Industry",
      texts: [
        "The threat landscape for utilities has expanded to include more threats from more actors. Nation-state actors and other sophisticated players have demonstrated greater willingness to target infrastructure providers as part of their broader campaigns. Utilities and energy are frequently a target of cyber attacks because of their high public profile and the potentially damaging effects of a data breach or service disruption.",
      ],
      list: [
        {
          id: 1,
          title: "Ransomware",
          text: "Ransomware is a software that is designed to block access to a device or network until a sum of money is paid to unlock it. Utilities and energy companies are targeted by cybercriminals infiltrating companies' networks and encrypting their data, demanding ransom payments in exchange for decryption keys.",
        },
        {
          id: 2,
          title: "Incomplete integration of systems",
          text: "The energy sector is a complex and diverse industry, with a wide range of systems and technologies in use. As a result, there are often gaps in security that can be exploited by threat actors.",
        },
        {
          id: 3,
          title: "Supply chain attacks",
          text: "Many companies rely on third-party services. As a result, third party companies get access to private information and data. Cybercriminals gain access to an organization's network through a third-party vendor or supplier and use this factor to bypass security measures and systems by targeting the less secure networks of secondary targets.",
        },
        {
          id: 4,
          title: "Phishing",
          text: "Mobile devices are increasingly being used by employees in the energy sector to access sensitive data and systems. This makes them a valuable target for threat actors who use phishing attacks to trick employees into revealing sensitive information or installing malware.",
        },
      ],
    },

    facts: [
      {
        id: 1,
        fig: 18.2,
        type: "number",
        text: "million dollars was incurred as damages when a ransomware attack disabled Baltimore city computers for weeks in 2019.",
      },
      {
        id: 2,
        fig: 10.7,
        type: "percent",
        text: "of observed cyberattacks were targeted at the energy industry in 2022.",
      },
      {
        id: 3,
        fig: 277,
        type: "number",
        text: "is the average number of days it takes for security teams to identify and contain a data breach.",
      },
      {
        id: 4,
        fig: 2021,
        type: "number",
        text: "ransomware was the most common type of attack against energy organizations with 25% of attacks. Oil and gas companies are particularly affected by this phenomenon.",
      },
    ],
    whys: [
      {
        id: 1,
        heading: "Penetration Testing",
        text: "Conduct scanning and penetration testing across your databases, networks and applications to reveal vulnerabilities.",
      },
      {
        id: 2,
        heading: "Managed Detection & Response",
        text: "Monitoring and response services that help Uitilities and energy oranizations detect and respond to cybersecurity incidents in real-time, minimizing the impact of potential breaches and mitigate threats.",
      },
      {
        id: 3,
        heading: "Compliance & Regulations",
        text: "Understand relevant cybersecurity regulations, industry standards, and best practices. Meet compliance requirements, protect sensitive data, and avoid potential legal and financial consequences.",
      },
      {
        id: 4,
        heading: "Education & Awareness",
        text: "Educate employees on cybersecurity best practices, and foster a security-conscious culture leading to proactivity in safeguarding digital assets.",
      },
    ],
  },
];

// export const attributes = [
//   {
//     icon: <Mission />,
//     title: "Our Mission",
//     text: "To provide state-of-the-art business aligned cybersecurity consulting and managed services across diverse industries, ensuring sustained growth and success. And to deliver exceptional security services that not only protect but also enable organizations to leverage the full potential of digital technologies.",
//   },
//   {
//     icon: <Vision />,
//     title: "Our Vision",
//     text: "Our vision is to be at the forefront of the cybersecurity industry, providing innovative and cutting-edge solutions to safeguard businesses from potential threats.",
//   },
//   {
//     icon: <Why />,
//     title: "Why Us",
//     text: "We're committed to providing you with the best possible protection against cyber threats. We are dedicated to working closely with you to understand your specific needs and develop customized solutions that meet those needs.",
//   },
// ];

export const experiences = [
  {
    id: 1,
    title: "The cloud security experts",
    icon: <Cloud className="service-icon" />,
    text: "Securing the cloud and every aspects of your environments with services and best practices honed through work with top cloud service providers.",
  },
  {
    id: 2,
    title: "Success across the cyber lifecycle",
    icon: <LifeCycle className="service-icon" />,
    text: "We keep you on the offense by taking a holistic and ongoing approach to rick mitigation.",
  },
  {
    id: 3,
    title: "Security that builds relationship",
    icon: <Handshake className="service-icon" />,
    text: "We go the extra mile - providing communication, support and valued services you need to confidently take on tomorrow's challengs.",
  },
];

export const trusts = [
    {
    icon: <Service />,
    title: "Comprehensive Solutions",
    text: "Industry-specific cyber risk management and compliance services.",
  },
  {
    icon: <Solution/>,
    title: "Personalized Service",
    text: "Comprehensive security tailored to your industry's unique needs.",
  },
  {
    icon: <Relationship />,
    title: "Long Lasting Relationships",
    text: "We go the extra mile providing support and valued services.",
  },
]