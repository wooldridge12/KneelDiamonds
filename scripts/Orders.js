import { getOrders, getMetals, getSizes, getStyles, getTypes } from "./database.js"

const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()
const types = getTypes()


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
    const foundType = types.find(
        (type) => {
            if (type.id === order.typeId) {
                return true
            }
        }
    )
    //combining prices (+) total cost is = to all prices. 
    let totalCost = (foundMetal.price + foundSize.price + foundStyle.price)
    //if statement to multiply total cost by type (remember the foundType.id the .id)
        if ( foundType.id === 1 ) {
            totalCost
        } else if ( foundType.id === 2 ) {
            totalCost *= 2
        } else if ( foundType.id === 3 ) {
            totalCost *= 4
        }
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
