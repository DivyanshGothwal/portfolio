import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

export const skills = [
  {
    text: 'HTML5', percentage: 90,
  },
  {
    text: 'CSS3', percentage: 80,
  },
  {
    text: 'Javascript', percentage: 90,
  },
  {
    text: 'ReactJS', percentage: 95,
  },
  {
    text: 'Java', percentage: 95,
  },
  {
    text: 'SQL', percentage: 90,
  },
];

export const qualifications = [
  {
    text: 'Working Experience',
    Icon: BusinessCenterOutlinedIcon,
    test: [
      {
        from: 'Sept 2021',
        to: 'Present',
        heading: 'Associate',
        subHeading: 'Goldman Sachs',
        about: ['● Working as a full-stack developer for a platform team in GS.',
          '● Wrote Platform(Data Quality product) UI + backend from scratch with the latest tech stack like React, Redux, Java, spring boot, etc.'],
      },
      {
        from: 'Aug 2018',
        to: 'Aug 2021',
        heading: 'Senior Software Engineer',
        subHeading: 'Yodlee Infotech Private Limited',
        about: [`● Decoupled the code from the existing legacy application to achieve near microservices

        architecture, by dividing the monolith into multiple services.`,
        `● Did initial project setup for the team members to work on top of it and followed proper
        design patterns and principles where ever required in the project.`,
        `● Prepared coding guideline document to be followed while working on the project to
        maintain code quality.`,
        '● Was Scrum master of the project and reporting to manager and director also.',
        '● Involved in creating RESTful API’s for My yodlee.',
        `● Involved in designing and developing the permission module for My Yodlee, which is used
        to control the access to a feature.`,
        `● Added a few filters into the project to handle the Exception,validation, query logs and
        others.`,
        `● Used Spring AOP for auditing the changes happening in the application with proper
        transaction management.`,
        '● Used Redis for caching the relevant data to increase the performance.',
        `● Wrote Multiple Scheduler jobs to sync data from different db to My Yodlee specific db, so
        that query performance is improved.`,
        `● Developed different Websocket service so that there is real time communication
        between client and server`,
        '● Involved in creating Gateway to call the different services used in My Yodlee.'],
      },
      {
        from: 'June 2017',
        to: 'July 2018',
        heading: 'Software Engineer',
        subHeading: 'Optym India Private Limited',
        about: ['● Involved in creating RESTful API’s for RouteMAX.',
          `● Integrated SignalR to the backend code of RouteMAX which helps servers to send
        asynchronous notifications to client-side web applications in real-time.`,
          `● Integrated OAuth 2.0 authorization framework in RouteMAX solution which enables
        limited access to an HTTP service.`,
          `● As a team of two we did a smooth migration of RouteMAX Middle Layer code from old
        solution to new solution, in which we are using new frameworks like Ninject(for
        dependency Injection), Xunit(for testing), WebAPI.`,
          '● Wrote ETL to extract data from .csv and load it into RouteMAX DB.',
          `● Worked with the database team to create some new stored procedures and helped in
        debugging the code.`],
      },
    ],
  },
  {
    text: 'Educational Qualifications',
    Icon: SchoolOutlinedIcon,
    test: [
      {
        from: '2017',
        heading: 'Bachelor of Technology',
        subHeading: 'Indian Institute of Technology, Roorkee',
        about: ['Graduated with an 7.476 CGPA'],
      },
      {
        from: '2012',
        heading: 'Intermediate',
        subHeading: 'Subodh Public School(CBSE), Jaipur, Rajasthan',
        about: ['Graduated with 85.8%'],
      },
      {
        from: '2010',
        heading: 'Matriculation',
        subHeading: 'Subodh Public School(CBSE), Jaipur, Rajasthan',
        about: ['Graduated with an 8.40 CGPA'],
      },
    ],
  },
];
