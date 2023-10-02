import comingSoon from '../../assets/coming-soon.jpeg'
import happiestHour from '../../assets/Happiest-Hour-pic.png'
import tweeter from '../../assets/tweeter.png'
import tsfapps from '../../assets/TSFApps.png'

const cardInfo = [
    {
        title: 'Happiest Hour',
        description: 'Happiest Hour is a website built collaboratively, using React, where I spearheaded frontend development and design. Search for highly rated happy hour experiences by zip code on this clean yet playful UI.',
        image: happiestHour,
        alt: 'Landing page of Happiest Hour',
        deployLink: 'https://happiest-hour-cb7f5c7640b4.herokuapp.com/'
    },
    // {
    //     title: 'TSF Applications',
    //     description: 'Contracted as a frontend developer, I implemented stylistic and responsive changes to an existing WordPress environment. The website closely mirrored the provided PDFs, as requested by the client.',
    //     image: tsfapps,
    //     alt: 'TSF Applications Page',
    //     deployLink: 'https://www.google.com'
    // },
    {
        title: 'Tweeter',
        description: 'A collective effort, Tweeter is a micro-blogging app that allows users to create an account and write Twits, among other actions. It provides users with a seamless experience to share their thoughts and connect with others.',
        image: tweeter,
        alt: 'Tweeter homepage',
        deployLink: 'https://tweeter-usk.herokuapp.com/'
    },
    {
        title: 'Intodoitive',
        description: 'Liza is currently working on a to-do app that is intuitive to use with an aesthetic UI. This project uses a MERN tech stack.',
        image: comingSoon,
        alt: 'coming soon',
        deployLink: 'https://www.google.com'
    }
];


export default cardInfo;