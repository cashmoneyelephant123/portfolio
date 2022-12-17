import Header from "./Header";
import ProjectDescription from "./ProjectDescription";
import ProjectIntro from "./ProjectIntro";
import homePage from '../assets/nba-home-page.png';
import lebron from '../assets/lebron.webp'
import comparison from '../assets/comparison.png'
import roster from '../assets/roster.png'


const introData = {
    title: "nba all-star roster creator",
    application: "web",
    text: "project that displays information on 2022 nba all-stars",
}


const descriptionData = {
    background: `The NBA is the premier league of basketball, 
        and its all-stars are the best players.
    `,
    problem: `Many players are strong at different things and it
        can be difficult to compare between them. Two players can have drastically
        different playing styles and each can still be effective. 
    `,
    motivation: `Thus, we wanted to create a hub where users can analyze
    players, see their strengths and weaknesses, and find out who are the best
    of the best. We also wanted users to be able to create their roster in order
    to build the best team possible.
    `,
    results: [homePage],
    images: [lebron, comparison, roster],
    link: "https://cashmoneyelephant123.github.io/development/",
}

export default function NBA({

}) {
    return (
        <div>
            <Header />
            <ProjectIntro {...introData} id='nba-explanation-container' />
            <ProjectDescription {...descriptionData} />
        </div>
    )
}