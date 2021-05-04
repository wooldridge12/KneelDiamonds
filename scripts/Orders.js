import { getOrders, getMetals, getSizes, getStyles } from "./database.js"
import { multiplyNecklace } from "./JewelryTypes.js"

const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()


const buildOrderListItem = (order) => {
    //finding the price of metal
    const foundMetal = metals.find(
        (metal) => {
            if (metal.id === order.metalId) {
                return true
            }
        }
    )
    //finding the price of size
    const foundSize = sizes.find(
        (size) => {
            if (size.id === order.sizeId) {
                return true
            }
        }
    )
    //finding the price of style
    const foundStyle = styles.find(
        (style) => {
            if (style.id === order.styleId) {
                return true
            }
        }
    )
    //combining prices (+) total cost is = to all prices. 
    const totalCost = (foundMetal.price + foundSize.price + foundStyle.price)
    //returning order.id and totalCost (the .toFixed(2) method is used to fix the look of currency.)
    return `<li>
        Order #${order.id} cost $${totalCost.toFixed(2)}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
   //

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)


    html += listItems.join("")
    html += "</ul>"

    return html
}


// Remember that the function you pass to find() must return true/false
