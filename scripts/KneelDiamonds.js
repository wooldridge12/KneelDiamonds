import { Metals } from "./Metals.js"
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./database.js"
import { JewelryTypes } from "./JewelryTypes.js"




document.addEventListener(
    "click",
    (event) => {
        //Make sure to check all forms as this was event.target.name and needed to be event.target .id
        //Implemented a new event listener for the browser-generated click event on the order button. Part 1/3 next on database.js
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
        <div class="flexbox">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
            <section class="choices__types options">
            <h2>Types</h2>
            ${JewelryTypes()}
        </section>
        </article>

        <article>
            <button id="orderButton">Create My Order!</button>
        </article>

        <article class="customOrders">
            <h2 class="customOrderText">My Jewelry Orders</h2>
            ${Orders()}
            </div>
        </article>
    `
}

