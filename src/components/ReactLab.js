import Header from "./Header";
import ProjectDescription from "./ProjectDescription";
import ProjectIntro from "./ProjectIntro";
import bakery from '../assets/bakery.jpg';
import cake from '../assets/cake.jpg';
import cart from '../assets/cart.png';
import myBakery from '../assets/my-bakery.png';

const introData = {
    title: "bakery store",
    application: "web",
    text: "site that sells various bakery items",
}


const descriptionData = {
    background: `Bakeries are shops that sell pastries and other 
    delectable treats.`,
    problem: `With so many delicious foods to choose from, it's
        a challenge to figure out which options you have at your
        budget.
    `,
    motivation: `Thus, we wanted to build a tool that allows users
        the opportunity to browse through various snacks and compute
        the total cost of their cart.
    `,
    results: [myBakery],
    images: [bakery, cake, cart],
    link: "https://pmonteiroborges.github.io/react-studio/"
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