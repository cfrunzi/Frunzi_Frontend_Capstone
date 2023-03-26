import React from "react";
import Cards from './Cards';
import grilledFish from '../assets/Grilled fish.jpg'
import pasta from '../assets/pasta.jpg'
import bruschetta from '../assets/Bruschetta.jpg'
import greek_salad from '../assets/greek salad.jpg'

// Displays a list of all of the week's specials
const specialsData = [
    {
        img: grilledFish,
        title: "Grilled Fish",
        price: 22.99,
        description: "Our famous grilled fish with potatoes and our Chicago-styled tomatoes, grilled to perfection.",
    },
    {
        img: pasta,
        title: "Pasta",
        price: 14.99,
        description: "Our Chicago pasta is made with the best marinara red sauce in town, topped off with garnish.",
    },
    {
        img: bruschetta,
        title: "Bruschetta",
        price: 5.99,
        description: "Our Chicago Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
        img: greek_salad,
        title: "Greek Salad",
        price: 13.99,
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
]

function Main(){
    const specialsCards = specialsData.map((item) => {
        return(<Cards key={item.title} image={item.img}
        title={item.title} price={item.price} description={item.description}/>);
    })
    return(
    <main>
        <section className="specials">
            <div className="top-class">
                <h1>This week's specials</h1>
                <button>Online Menu</button>
            </div>
            <div className="menu-cards">{specialsCards}</div>
        </section>
        <br></br>
    </main>);
}

export default Main;