import comingSoon from '../../assets/coming-soon.jpeg'
import happiestHour from '../../assets/Happiest-Hour-pic.png'
import tweeter from '../../assets/tweeter.png'

const cardInfo = [
    {
        picName: 'happiest',
        title: 'Happiest Hour',
        description: 'is a collaborative React app on which I spearheaded frontend development while my colleague tackled backend intricacies. Several of my contributions to this website included devising elegant solutions for accommodating bar names of varying lengths within containers. I also introduced precise animations, synchronizing clock hands to real-time. My partner and I co-developed critical functionalities like populating Yelp API data, ensuring the accuracy and credibility of information.This project provided many challenges both anticipated and unforeseen, refining my communication and time management skills. Ultimately our efforts culminated in a polished and intuitive website, empowering individuals to effortlessly explore and discover top-rated happy hours in any zip code.',
        image: happiestHour,
        alt: 'Landing page of Happiest Hour',
        repoLink: 'https://github.com/ColdWeatherBoyy/happiest-hour',
        deployLink: 'https://happiest-hour-cb7f5c7640b4.herokuapp.com/'
    },
    {
        picName: 'night',
        title: 'Tweeter',
        description: 'is a collective effort in developing a functional micro-blogging app that allows users to create an account and write Twits, among other actions. It provides users with a seamless experience to share their thoughts and connect with others. Our team was able to deliver a successful full stack application as our MVP.',
        image: tweeter,
        alt: 'Tweeter homepage',
        repoLink: 'https://github.com/BobbyCharms/tweeter',
        deployLink: 'https://tweeter-usk.herokuapp.com/'
    },
    {
        picName: 'beach',
        title: 'Intodoitive',
        description: 'is the most intuitive to-do list app on the market. Intuitive to use and thoughtfully structured, Intodoitive is an independent project which exemplifies my passion for interaction design. Built with Node, React, and Express. More to come!',
        image: comingSoon,
        alt: 'coming soon',
        repoLink: 'https://www.google.com',
        deployLink: 'https://www.google.com'
    }
];

export default cardInfo;