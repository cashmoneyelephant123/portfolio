import Header from "./Header";
import ProjectDescription from "./ProjectDescription";
import ProjectIntro from "./ProjectIntro";
import introJoke from '../assets/intro-joke.jpg';
import badJoke from '../assets/bad-joke.jpg';
import goodJoke from '../assets/good-joke.png';
import joke1 from '../assets/joke1.png';
import joke2 from '../assets/joke2.png';
import joke3 from '../assets/joke3.png';


const introData = {
    title: "joke generator",
    application: "all platforms",
    text: "application that generates jokes",
}


const descriptionData = {
    background: `Jokes help us laugh and bring communities together
    through humor. Good jokes are hard to make, but always welcomed.`,
    problem: `Since being funny is a struggle for many people, they
    often ruin the mood with a bad joke or stay quiet and feel isolated
    from the ongoing conversation.
    `,
    motivation: `Thus, we wanted to help users find good jokes
    throughout a variety of categories.
    `,
    results: [joke1, joke2, joke3],
    images: [introJoke, badJoke, goodJoke],
    link: undefined
}

export default function FlutterLab({

}) {
    return (
        <div>
            <Header />
            <ProjectIntro {...introData} id='flutter-lab-explanation-container' />
            <ProjectDescription {...descriptionData} />
        </div>
    )
}