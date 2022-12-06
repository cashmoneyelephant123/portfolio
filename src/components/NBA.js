import Header from "./Header";
import ProjectDescription from "./ProjectDescription";
import ProjectIntro from "./ProjectIntro";


const introData = {
    title: "nba all-star roster creator",
    application: "web",
    text: "project that displays information on 2022 nba all-stars",
}


const descriptionData = {
    background: ``,
    problem: ``,
    motivation: ``,
    results: [],
    images: [],
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