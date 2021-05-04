// import, and pull data to make if else statements working for * prices.
import { getTypes, setType} from "./database.js"
import { Orders} from "./Orders.js"


const types = getTypes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
            setType(parseInt(event.target.value))
        }
    }
)

export const JewelryTypes = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const type of types) {
        html += `<li>
            <input type="radio" name="type" value="${type.id}" /> ${type.name}
        </li>`
    }

    html += "</ul>"
    return html
}

const multiply = () => {
    const a = Orders()
}

// function multiply()
// {
//     // Get the input values
//     a = Number(document.getElementById(foundMetal.price + foundSize.price + foundStyle.price).value);
//     b = Number(document.getElementById(2).value);

//     // Do the multiplication
//     c = a*b;

//     // Set the value of the total
//     document.getElementById("total").value=c;
// }