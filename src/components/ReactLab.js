import Header from "./Header";
import ProjectDescription from "./ProjectDescription";
import ProjectIntro from "./ProjectIntro";


const introData = {
    title: "bakery store",
    application: "web",
    text: "site that sells various bakery items",
}


const descriptionData = {
    background: ``,
    problem: ``,
    motivation: ``,
    results: [],
    images: [],
}

export default function ReactLab({

}) {
    return (
        <div>
            <Header />
            <ProjectIntro {...introData} id='react-lab-explanation-container' />
            <ProjectDescription {...descriptionData} />
        </div>
    )
}