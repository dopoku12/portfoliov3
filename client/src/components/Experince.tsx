import {Timeline, TimelineItem, TimelineSeparator ,
 TimelineConnector,
 TimelineContent ,
 TimelineDot }from "@mui/lab"
import { Box,Typography } from "@mui/material"
const contentObj={
    experiences: [
      {
        company: "cloudforce",
        title: "Cloud Apprentice",
        dates: "November 2023 – present",
        location: "Oxon Hill, MD",
        responsibilities: [
          "Developed an Application Lifecycle Management (ALM) process for Power Platform environments as well as implemented a CI/CD pipeline for Power Platform solutions using Power Automate, PowerShell, PowerPlatform CLI, Dataverse, and AzureDevOps. This initiative solidified the development, testing, and production process for creating and managing environments in Power Platform and streamlined the development process, significantly improving the speed and reliability of deployments. I documented the entire process, promoting knowledge sharing.",
          "Created a stored procedure using SQL in Azure Data Studio to calculate the cloud services team’s response time within working hours. Developed data visualizations using SQL, KQL, and Grafana, utilizing data from the SQL database and Azure Resource Graph. This provided insights into incoming Azure alerts, our response time throughout the day, and our Service Level Agreement (SLA).",
          "Managed and resolved Azure-related support tickets using the Zoho Help Desk system, ensuring timely and effective responses to client needs."
        ]
      },
      {
        company: "Mathsolutely",
        title: "Software Engineer",
        dates: "April 2023 – November 2023",
        location: "(Remote) Manassas, VA",
        responsibilities: [
          "Developed a web application for an innovative startup in the education sector.",
          "Collaborated with a cross-functional team to design and implement new features and improvements.",
          "Utilized React.js and the Bootstrap framework to create responsive and user-friendly interfaces.",
          "Utilized Node.js, Express.js, MongoDB, and Jest to implement secure data handling practices.",
          "Participated in code reviews and performed testing to ensure high-quality software."
        ]
      },
      {
        company: "Maryland Department of Service and Civic Innovation",
        responsibilities: "Successfully completed the first in the nation Maryland Corps/Service Year Option Program in its inaugural class",
        dates: "",
        location: ""
      },
      {
        company: "Prince George's County Memorial Library Systems",
        title: "",
        dates: "April 2023 – October 2023",
        location: "Mount Rainer, MD",
        responsibilities: [
          "Designed a lesson plan & curriculum to teach the Python programming language to community members who are beginners or intermediate learners.",
          "Assisted patrons in navigating computer systems, internet browsing, email setup, and software usage."
        ]
      }
    ]
  }

  
export default function Experince() {
  return (
    <Box>

<Typography component='h1'>Experience</Typography>
    <Timeline> 
        {
contentObj.experiences.map((i,index)=>(
    <TimelineItem key={index}>
            
         <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>{i.company}</TimelineContent>
         <TimelineContent>{i.title}</TimelineContent>
        </TimelineItem>
    ))
        }

    </Timeline>
    </Box>
  )
}