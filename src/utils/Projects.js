import PartyHearty from '../assets/images/party-hearty.PNG';
import OnlyFriends from '../assets/images/onlyFriends.PNG';
import SixFeetAway from '../assets/images/6FeetGaming.png';
import NeoTech from '../assets/images/neoTech.png';
import ShopShop from '../assets/images/shop-shop.PNG';
import Coding from '../assets/images/coding.jpg';

const projects = [
    {
        name: 'Party Hearty',
        description: 'Party_Hearty is an application that allows users to signup and create events that they can post on their profile page. They can create an event with details , and a pinpoint location of the event on a map.They can charge fees, and invite their guests. Users can create , update and delete events on their page. Guests can rsvp on the web application as well .',
        tools: ['MongodDB', 'Express.js,', 'React', 'Node.js', 'GraphQL', 'Leaflet', 'Geosearch', 'React-Bootstrap', 'Marterial UI', 'Heroku'],
        image: PartyHearty,
        deployed: 'https://stormy-thicket-02132.herokuapp.com/'
    },
    {
        name: 'Only Friends',
        description: 'Social media platform where users can post about their interests, comment on other posts and find other friends online who have similar interests! Users can also learn more about a topic they`re intrigued about, by browsing the different categories Friends post about on the website.',
        tools: ['SQL', 'express.js', 'Node.js', 'Handlebars', 'Multer', 'Heroku'],
        image: OnlyFriends,
        deployed: 'https://only-friendz.herokuapp.com/'
    },
    {
        name: '6 Feet Away Gaming',
        description: 'The 6FeetAway Gaming application allows users to find regional based COVID statistics and find free-to-play games, while on quarantine. The user can select a state to recieve relevant COVID stats and select a genre to cycle through various games. On the bottom users can cycle through a carousel of games available on the free to play games API. Finally, the application provides links to CDC resources regarding quarantine guidelines.',
        tools: ['JavaScript', 'HTML', 'CSS', 'Third-Party APIs'],
        image: SixFeetAway,
        deployed: 'https://ulisesrosas.github.io/6-FeetAway-Gaming/'
    },
    {
        name: 'NeoTech News',
        description: 'NeoTech News Blog is a CMS-style blog site where users can create an account to create posts and comment on posted articles. The site makes it easy for users to stay up-to-date with the latest technological news!',
        tools: ['Express.js', 'Node.js', 'ES6', 'SQL', 'Heroku','JavaScript', 'HTML', 'CSS'],
        image: NeoTech,
        deployed: 'https://neotechblog.herokuapp.com/'
    },
    {
        name: 'Shop-Shop!',
        description: 'Shop-Shop is a mock full MERN stack E-Commerce progressive web application -PWA- using Redux-like techniques to manage a global-state',
        tools: [ 'Context-API', 'MongodDB', 'Express.js', 'React', 'Node.js', 'Apollo', 'GraphQL', 'Stripe', 'Service Workers', 'PWA'],
        image: ShopShop,
        deployed: 'https://shop-till-u-drop.herokuapp.com/'
    },
    {
        name: 'README Generator',
        description: 'README Generator is a personal favorite as a developer. Here developers can use the command line interface to collect user data and generate a professional README.This generator solves the issue of having to re-create the wheel everytime the user needs to create a README file. ',
        tools: ['Node.js', 'JavaScript', 'ES6', 'Inquirer'],
        image: Coding,
        deployed: 'https://github.com/MCORTEZM1/README-Generator'
    },
];

export default projects;