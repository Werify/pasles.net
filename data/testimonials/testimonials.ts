interface Message {
    title: string;
    des: string;
  }
  
  interface User {
    name: string;
    job: string;
    profilePic: string;
  }
  
  interface ArrayItem {
    message: Message;
    user: User;
    animationDelay: string;
  }
  
export const firstRow: ArrayItem[]  = [
    {
        message:
        {
            title: "Solid foundation for any project", des: `This is a very complex and beautiful set of elements. Under the
    hood it comes with the best things from 2 different worlds:
    Figma and Tailwind.” `}
        ,
        user:
            { name: "Bonnie Gree", job: "CTO at Open AI", profilePic: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png' }
        ,
        animationDelay: "animation-delay:0.4s;"
    },
    {
        message:
        {
            title: "A must-have for designers", des: `This is a very complex and beautiful set of elements. Under the
        hood it comes with the best things from 2 different worlds:
        Figma and Tailwind.” `}
        ,
        user:
            { name: "Lana Byrd", job: "Software Engineer at Tesla", profilePic: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png' }
        ,
        animationDelay: "animation-delay:0.5s;"
    },

    {
        message:
        {
            title: "Speechless with how easy this was to integrat", des: `I recently got my hands on Flowbite Pro, and holy crap, I'm
                        speechless with how easy this was to integrate within my
                        application. Most templates are a pain, code is scattered, and
                        near impossible to theme.`}
        ,
        user:
            { name: "Jese Leos", job: "CEO at Oracle", profilePic: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png' }
        ,
        animationDelay: "animation-delay:0.3s;"
    },
    {
        message:
        {
            title: "Efficient Collaborating", des: `Flowbite is just awesome. It contains tons of predesigned
                        components and pages starting from login screen to complex
                        dashboard. Perfect choice for your next SaaS application.`}
        ,
        user:
            { name: "Joseph McFall", job: "Junior Designer at Adobe", profilePic: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png' }
        ,
        animationDelay: "animation-delay:0.3s;"
    },
    {
        message:
        {
            title: "Mindblowing workflow and variants", des: `Flowbite provides a robust set of design tokens and components
                        based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars
                        to the whole app screens designed both for desktop and mobile,
                        this UI kit provides a solid foundation for any project`}
        ,
        user:
            { name: "Helene Engels", job: " CFO at Microsoft", profilePic: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png' }
        ,
        animationDelay: "animation-delay:0.2;"
    },
    {
        message:
        {
            title: "Mindblowing workflow and variants", des: `Flowbite provides a robust set of design tokens and components
                        based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars
                        to the whole app screens designed both for desktop and mobile,
                        this UI kit provides a solid foundation for any project`}
        ,
        user:
            { name: "Helene Engels", job: " CFO at Microsoft", profilePic: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png' }
        ,
        animationDelay: "animation-delay:0s;"
    },

]
export const secondRow=[
    {
        message:
        {
            title: "Efficient Collaborating", des: `Flowbite is just awesome. It contains tons of predesigned
            components and pages starting from login screen to complex
            dashboard. Perfect choice for your next SaaS application.`}
        ,
        user:
            { name: "Joseph McFall", job: "Junior Designer at Adobe", profilePic: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png' }
        ,
        animationDelay: "animation-delay:0.5s;"
    },
    {
        message:
        {
            title: "Mindblowing workflow and variants", des: `Flowbite provides a robust set of design tokens and components
            based on the popular Tailwind CSS framework.From the most used UI components like forms and navigation bars
            to the whole app screens designed both for desktop and mobile,
            this UI kit provides a solid foundation for any project`}
        ,
        user:
            { name: "Helene Engels", job: "CFO at Microsoft", profilePic: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png' }
        ,
        animationDelay: "animation-delay:0.4s;"
    },
    {
    message:
    {
        title: "Speechless with how easy this was to integrat", des: `I recently got my hands on Flowbite Pro, and holy crap, I'm
                    speechless with how easy this was to integrate within my
                    application. Most templates are a pain, code is scattered, and
                    near impossible to theme.`}
    ,
    user:
        { name: "Jese Leos", job: "CEO at Oracle", profilePic: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png' }
    ,
    animationDelay: "animation-delay:0.3s;"
},

    {
        message:
        {
            title: "Perfect choice for a SaaS application", des: `Flowbite provides a robust set of design tokens and components
            based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars
            to the whole app screens designed both for desktop and mobile,
            this UI kit provides a solid foundation for any project`}
        ,
        user:
            { name: "Leslie Livingston", job: "Creative Director at Apple", profilePic: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png' }
        ,
        animationDelay: "animation-delay:0.2s;"
    },
    {
        message:
        {
            title: "Efficient Collaborating", des: `Flowbite is just awesome. It contains tons of predesigned
                        components and pages starting from login screen to complex
                        dashboard. Perfect choice for your next SaaS application.`}
        ,
        user:
            { name: "Joseph McFall", job: "Junior Designer at Adobe", profilePic: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png' }
        ,
        animationDelay: "animation-delay:0.5s;"
    },
    {
        message:
        {
            title: " Perfect choice for a SaaS application", des: `Flowbite provides a robust set of design tokens and components
            based on the popular Tailwind CSS framewor.From the most used UI components like forms and navigation bars
            to the whole app screens designed both for desktop and mobile,
            this UI kit provides a solid foundation for any project.`}
        ,
        user:
            { name: "Leslie Livingston", job: "Creative Director at Apple", profilePic: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png' }
        ,
        animationDelay: "animation-delay:0s;"
    },
    {
        message:
        {
            title: "Efficient Collaborating", des: `Flowbite is just awesome. It contains tons of predesigned
                        components and pages starting from login screen to complex
                        dashboard. Perfect choice for your next SaaS application.`}
        ,
        user:
            { name: "Joseph McFall", job: "Junior Designer at Adobe", profilePic: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png' }
        ,
        animationDelay: "animation-delay:0.3s;"
    },

]
 export const thirdRow=[
    {
        message:
        {
            title: "Solid foundation for any project", des: `I recently got my hands on Flowbite Pro, and holy crap, I'm
            speechless with how easy this was to integrate within my
            application. Most templates are a pain, code is scattered, and
            near impossible to theme.`}
        ,
        user:
            { name: "Michael Gough", job: "Front-end engineer at Meta", profilePic: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' }
        ,
        animationDelay: "animation-delay:0.5s;"
    },
    {
        message:
        {
            title: "Mindblowing workflow and variants", des: `Flowbite is just awesome. It contains tons of predesigned
            components and pages starting from login screen to complex
            dashboard. Perfect choice for your next SaaS application.`}
        ,
        user:
            { name: "Neil Sims", job: "Software architect at Amazon", profilePic: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png' }
        ,
        animationDelay: "animation-delay:0.4s;"
    },

    {
        message:
        {
            title: "Speechless with how easy this was to integrate", des: `This is a very complex and beautiful set of elements. Under the
            hood it comes with the best things from 2 different worlds:
            Figma and Tailwind`}
        ,
        user:
            { name: "Robert Brown", job: "Junior developer at SAP", profilePic: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png' }
        ,
        animationDelay: "animation-delay:0.2s;"
    },
    {
        message:
        {
            title: "Efficient Collaborating", des: `Flowbite is just awesome. It contains tons of predesigned
                        components and pages starting from login screen to complex
                        dashboard. Perfect choice for your next SaaS application.`}
        ,
        user:
            { name: "Joseph McFall", job: "Junior Designer at Adobe", profilePic: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png' }
        ,
        animationDelay: "animation-delay:0.3s;"
    },
    {
        message:
        {
            title: " Perfect choice for a SaaS application", des: `Flowbite provides a robust set of design tokens and components
            based on the popular Tailwind CSS framewor.From the most used UI components like forms and navigation bars
            to the whole app screens designed both for desktop and mobile,
            this UI kit provides a solid foundation for any project.`}
        ,
        user:
            { name: "Leslie Livingston", job: "Creative Director at Apple", profilePic: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png' }
        ,
        animationDelay: "animation-delay:0.2s;"
    },
    {
        message:
        {
            title: "Efficient Collaborating", des: `Flowbite is just awesome. It contains tons of predesigned
                        components and pages starting from login screen to complex
                        dashboard. Perfect choice for your next SaaS application.`}
        ,
        user:
            { name: "Joseph McFall", job: "Junior Designer at Adobe", profilePic: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png' }
        ,
        animationDelay: "animation-delay:0.5s;"
    },
    {
        message:
        {
            title: "Mindblowing workflow and variants", des: `Flowbite provides a robust set of design tokens and components
                        based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars
                        to the whole app screens designed both for desktop and mobile,
                        this UI kit provides a solid foundation for any project`}
        ,
        user:
            { name: "Helene Engels", job: " CFO at Microsoft", profilePic: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png' }
        ,
        animationDelay: "animation-delay:0s;"
    },
    {
    message:
    {
        title: "Perfect choice for a SaaS application", des: `Flowbite provides a robust set of design tokens and components
        based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars
        to the whole app screens designed both for desktop and mobile,
        this UI kit provides a solid foundation for any project`}
    ,
    user:
        { name: "Leslie Livingston", job: "Creative Director at Apple", profilePic: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png' }
    ,
    animationDelay: "animation-delay:0.2s;"
},
]