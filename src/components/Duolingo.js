import ProjectIntro from "./ProjectIntro";
import '../styles/duolingo.css';
import ProjectDescription from "./ProjectDescription";

import blueIntro1 from '../assets/blue_intro1.png';
import blueIntro2 from '../assets/blue_intro2.png';
import purpleIntro from '../assets/purple_intro.png';
import featureCards from '../assets/feature_cards.png';
import Header from "./Header";
import { Link } from "react-router-dom";

const introData = {
    title: "feed empty state",
    application: "Android",
    text: "project to improve the feed within the Duolingo Android app"
}


const descriptionData = {
    background: `The feed allows users to congratulate friends on their language learning
    achievements (Kudos), check out blog updates, and read news about the app (DuoNews). Overall, it is a gateway
    to the social features of Duolingo.`,
    problem: `Non English and Spanish UIs don't have DuoNews, and the other features are 
    tucked away in the profile tab, so they do not have tab to access the feed.`,
    motivation: `Thus, we wanted to introduce new cards that would be
    displayed in the feed so that non EN and ES UIs could get a feed tab with useful
    information. These cards aim to encourage users to add friends in order to experience
    Kudos, and highlight relevant features of the app.`,
    results: [
        blueIntro1,
        blueIntro2,
        purpleIntro,
        featureCards
    ],
}

export default function Duolingo({

}) {
    return (
        <div>
            <Header />
            <ProjectIntro {...introData} />
            <ProjectDescription {...descriptionData} />
        </div>
    )
}